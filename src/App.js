import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MarkersMap } from './MarkersMap';
import './App.css';

import { SourceCell, SourcePanel, HelpText } from './iphon'
const API_URL = window.location.protocol + '//indexphonemica.herokuapp.com/api/';

function encode(thing) {
  return encodeURIComponent(thing.toString().replace(/\\/g,'\\\\').replace(/&/g,'\\+').replace(/=/g,'\\e'));
}
function decode(thing) {
  return decodeURIComponent(thing.replace(/\\\\/g,'\\').replace(/\\\+/g,'&').replace(/\\e/g,'='));
}

// URL handling functions from Psmith
function getHash() { // could cache this but eh
  var hash = window.location.hash;
  if (hash === '') return null;
  hash = hash.slice(1, window.location.hash.length); // discard initial #
  hash = hash.split('&');
  var res = {};
  for (let el of hash) {
    let tmp = el.split('=');
    if (tmp.length < 2) continue;
    res[decode(tmp[0])] = decode(tmp[1]);
  }
  return res;
}
function setHash(k, v) {
  var hash = getHash();
  if (hash === null) hash = {};
  hash[k] = v;
  writeHash(hash);
}
function writeHash(hash) {
  var res = Object.keys(hash).map(k => `${encode(k)}=${encode(hash[k])}`);
  window.location.hash = res.join('&');
}

class App extends Component {
  constructor(props) {
    super(props);

    // If the hash points to a detail panel, we need to hide the help panel,
    // to avoid flashing the help text as the detail query loads.
    // We do this by displaying hidden fourth TabPanel that contains nothing.
    var tabIndex = 0;
    const hash = getHash();
    if (hash && hash.hasOwnProperty('detail') && hash.detail) {
      tabIndex = 4;
    }

    this.state = {
      value: '', 
      searchResults: [], 
      shouldHaveSearchResults: false, // don't display 'no results' on load
      searchLoading: false, // display a loading dialog while a search is loading
      searchError: false,
      detailResults: false,
      detailError: false,
      tabIndex: tabIndex
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.detail = this.detail.bind(this);
  }

  // Pull linked searches out of the URL and send the network request.
  componentDidMount() {
    const hash = getHash();
    try {
      if (hash.search) {
        this.search(hash.search);
      }
      if (hash.detail) {
        this.detail(hash.detail);
      }
    } catch (e) {
      window.location.hash = '';
      return;
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    setHash('search', this.state.value);

    this.search(this.state.value);
  }

  fetchJSON(queryURL) {
    return fetch(queryURL, {
      method: "GET"
    }).then(
      res => res.json()
    ).then(res => {
      if (res.hasOwnProperty('error')) {
        throw new Error(res.error);
      } else {
        return res;
      }
    });
  }

  search(str) {
    const queryURL = API_URL + 'query/' + encode(str);
    this.setState({searching: true});
    this.fetchJSON(queryURL, {
      method: "GET"
    }).then(
      res => this.setState({
        searchResults: res, 
        shouldHaveSearchResults: true,
        searchError: false,
        searching: false
      })
    ).catch(
      err => this.setState({
        searchResults: [],
        shouldHaveSearchResults: false,
        searchError: err,
        searching: false
      })
    );
  }

  detail(id) {
    const queryURL = API_URL + 'language/' + id;
    setHash('detail', id);

    fetch(queryURL, {
      method: "GET"
    }).then(
      res => res.json()
    ).then(res => { // add the ID so we can use that to make keys
      res.id = id;
      return res
    }).then(
      res => this.setState({detailResults: res, detailError: false, tabIndex: 1})
    ).catch(
      err => this.setState({detailResults: false, detailError: err, tabIndex: 1})
    );
  }

  render () {
    const doculectRowToPopupText = function (row) {
      return `${row.language_name} (${row.inventory_id})`;
    }
    const processMapData = function (searchResults) {
      var languages = {};
      searchResults.forEach(function (row) {
        if (languages[row.glottocode] === undefined) {
          languages[row.glottocode] = {
            'position':  [row.latitude || 0, row.longitude || 0]
          , 'popupText': doculectRowToPopupText(row)
          }
        } else {
          languages[row.glottocode].popupText += (', ' + doculectRowToPopupText(row));
        }
      });
      return Object.values(languages);
    }

    return (
      <main className="container">
        <div className="row">
          <section id="search" className="col-sm">
            <form onSubmit={this.handleSearch}>
              <div id="input-wrapper">
                <input id="in" type="text" value={this.state.value} onChange={this.handleChange} />
              </div>
              <input id="submit" type="submit" value="Search" />
              { this.state.searching ? <SearchingIcon/> : '' }
            </form>
            
            <div id="res">
              <ErrorDialog err={this.state.searchError}/>
              {this.state.shouldHaveSearchResults ? <SearchResults value={this.state.searchResults} detailFn={this.detail}/> : ''}
            </div>
          </section>

          <section id="tabnav" className="col-sm">
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
              <TabList>
                <Tab>Help</Tab>
                <Tab disabled={!this.state.detailResults}>Detail</Tab>
                <Tab disabled={!this.state.searchResults}>Map</Tab>
              </TabList>
              <TabPanel>
                <HelpText/>
              </TabPanel>
              <TabPanel>
                {
                  this.state.detailError ? <ErrorDialog err={this.state.detailError}/> 
                    : <DetailPanel language={this.state.detailResults} /> 
                }
              </TabPanel>
              <TabPanel>
                <MarkersMap data={processMapData(this.state.searchResults)} />
              </TabPanel>
            </Tabs>
          </section>
        </div>
      </main>
    );
  }
}

function SearchingIcon () {
  return (
    <span>Loading...</span>
  )
}

// ----------------
// -- Components --
// ----------------

function ErrorDialog(props) {
  if (!props.err) return (<div></div>);
  var errTxt = props.err.toString();

  // make sure there's only one Error: before the text
  if (!/[A-Za-z]*Error: /.test(errTxt)) errTxt = 'Error: ' + errTxt;
  if (/Error: Error:/.test(errTxt)) errTxt = errTxt.slice(7);
  return (
    <div className='error'>
      {errTxt}
    </div>
  );
}

function SearchResults(props) {
  if (props.value == false) return (<div>No results</div>);
  return (
    <table>
      <tbody>
        {props.value.map(language => <SearchResult key={language.inventory_id} language={language} detailFn={props.detailFn} />)}
      </tbody>
    </table>
  );
}

function SearchResult(props) {
  return (
    <tr>
      <td>
        <button className='link-button' onClick={() => props.detailFn(props.language.inventory_id)}>
          {props.language.language_name}
        </button>
      </td>
      <td>
        <SourceCell language={props.language} /> 
      </td>
      <td>
        {props.language.phonemes ? props.language.phonemes.join(' ') : ''}
      </td>
    </tr>
  );
}

function DetailPanel(props) {
  const language = props.language;
  return (
  <div className='sticky-wrapper-wrapper'>
    <div className='sticky-wrapper'>
      <div className='sticky-panel'>
        <div>
          <SourcePanel doculect={ language } />
        </div>
        <PhonemeMatrix name='Consonants' inv={ language.consonants } inv_id={ language.id } />
        <PhonemeMatrix name='Clicks' inv={ language.clicks } inv_id={ language.id } />
        <PhonemeMatrix name='Vowels' inv={ language.vowels } inv_id={ language.id } />
        <PhonemeMatrix name='Diphthongs' inv= { language.diphthongs } inv_id={ language.id } />
        <PhonemeArray name='Syllabic consonants' inv={ language.syllabic_consonants } inv_id={ language.id } />
        <PhonemeArray name='Tones' inv={ language.tones } inv_id={ language.id } />
      </div>
    </div>
  </div>);
}

function PhonemeMatrix(props) {
  const size = props.inv.size;
  if (size === 0) return (<div></div>);
  const contents = props.inv.contents;

  // TODO this is pretty hairy - there must be a better way!
  return (<div>
    <h4 className='language-segments'>{ props.name } ({ size })</h4>
    <table className='inventory'><tbody>
      {contents.map((y, i) => 
        <tr key={`${props.inv_id}-${i}`}>
          {y.map((x, j) => 
            <td key={`${props.inv_id}-${i}-${j}}`}>
              { x.join(' ') }
            </td>)}
        </tr>)}
    </tbody></table>
  </div>)
}

function PhonemeArray(props) {
  const size = props.inv.size;
  if (size === 0) return (<div></div>);
  const contents = props.inv.contents;

  return (<div>
    <h4 className='language-segments'>{ props.name } ({ size })</h4>
    <span>{ contents.join(' ') }</span>
  </div>)
}

export default App;
