(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);a(13);var l=a(0),n=a.n(l),r=a(6),c=a.n(r),o=(a(19),a(7)),i=a(8),s=a(11),u=a(9),m=a(10),d=a(1),E=a(3);a(22);function h(e){return n.a.createElement("div",{id:"help"},n.a.createElement("h3",null,"About"),n.a.createElement("p",null,"This is an unofficial search frontend for PHOIBLE."),n.a.createElement("h3",null,"Searching"),n.a.createElement("p",null,"A search query is minimally composed of a ",n.a.createElement("em",null,"search term"),". There are two types of search term."),n.a.createElement("p",null,"A ",n.a.createElement("em",null,"phoneme term"),' consists of a phoneme enclosed in forward slashes, optionally preceded by "no". This will find all doculects that have (or don\'t have, if there\'s a preceding "no") the given phoneme.'),n.a.createElement("p",null,"For example, ",n.a.createElement("code",null,"/t\u032a\u0299/")," will return all doculects that contain the phoneme represented in PHOIBLE by the text string ",n.a.createElement("code",null,"t\u032a\u0299"),", and ",n.a.createElement("code",null,"no /m/")," will return all doculects that do not contain the phoneme represented in PHOIBLE by the text string ",n.a.createElement("code",null,"/m/"),"."),n.a.createElement("p",null,"A ",n.a.createElement("em",null,"feature term")," consists of a number (optionally preceded by a ",n.a.createElement("code",null,"<")," or ",n.a.createElement("code",null,">")," sign), a space, and a string of pluses and minuses followed (with no intervening space) by the name of the feature to search. For example, ",n.a.createElement("code",null,"2 +coronal")," will return all doculects with exactly two [+coronal] segments, and ",n.a.createElement("code",null,">30 +syllabic")," will return all doculects with more than thirty vowels."),n.a.createElement("p",null,"For the numeric component of the feature term, ",n.a.createElement("code",null,"no")," can be used to mean ",n.a.createElement("code",null,"0"),", and ",n.a.createElement("code",null,"any")," can be used to mean ",n.a.createElement("code",null,"+0"),"."),n.a.createElement("p",null,"To search for multiple feature values on the same phoneme, separate the feature components with a semicolon. For example, ",n.a.createElement("code",null,"any +syllabic;+consonantal")," will return a list of doculects with syllabic consonants."),n.a.createElement("p",null,"Search terms may be joined by the logical operators ",n.a.createElement("code",null,"and")," and ",n.a.createElement("code",null,"or"),". These are postfix."),n.a.createElement("h3",null,"Examples"),n.a.createElement("p",{className:"example-text"},"Find doculects with only two coronal consonants:"),n.a.createElement("code",{className:"example"},"2 +coronal",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0HAWAIIAN",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0PIRAHA",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0ROTOKAS",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Piraha\u0303"),n.a.createElement("p",{className:"example-text"},"Find doculects with two or fewer vowels:"),n.a.createElement("code",{className:"example"},"<3 +syllabic",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0zulgo",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Cuvok",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Buwal"),n.a.createElement("p",{className:"example-text"},"Find doculects with two or fewer vowels or the phoneme /\u02b0d/:"),n.a.createElement("code",{className:"example"},"<3 +syllabic /\u02b0d/ or",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0zulgo",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Cuvok",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Buwal",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Gu\u0308nu\u0308n Yajich",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Hoti"),n.a.createElement("p",{className:"example-text"},"Find doculects with no rounded segments:"),n.a.createElement("code",{className:"example"},"no +round",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Oneida",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0NIMBORAN",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Gu'de"),n.a.createElement("p",{className:"example-text"},"Find doculects with /\u02b0d/ and no /m/:"),n.a.createElement("code",{className:"example"},"/\u02b0d/ no /m/ and",n.a.createElement("br",null),"\xa0\xa0\xa0\xa0Hoti"),n.a.createElement("h3",null,"List of features"),n.a.createElement("p",null,"These are taken directly from PHOIBLE's featural decomposition, except the names of the features have been converted from camelCase to snake_case and 'raisedLarynxEjective' and 'loweredLarynxImplosive' have been renamed to ",n.a.createElement("code",null,"ejective")," and ",n.a.createElement("code",null,"implosive"),"."),n.a.createElement("code",null,n.a.createElement("ul",null,n.a.createElement("li",null,"tone"),n.a.createElement("li",null,"stress"),n.a.createElement("li",null,"syllabic"),n.a.createElement("li",null,"short"),n.a.createElement("li",null,"long"),n.a.createElement("li",null,"consonantal"),n.a.createElement("li",null,"sonorant"),n.a.createElement("li",null,"continuant"),n.a.createElement("li",null,"delayed_release"),n.a.createElement("li",null,"approximant"),n.a.createElement("li",null,"tap"),n.a.createElement("li",null,"trill"),n.a.createElement("li",null,"nasal"),n.a.createElement("li",null,"lateral"),n.a.createElement("li",null,"labial"),n.a.createElement("li",null,"round"),n.a.createElement("li",null,"labiodental"),n.a.createElement("li",null,"coronal"),n.a.createElement("li",null,"anterior"),n.a.createElement("li",null,"distributed"),n.a.createElement("li",null,"strident"),n.a.createElement("li",null,"dorsal"),n.a.createElement("li",null,"high"),n.a.createElement("li",null,"low"),n.a.createElement("li",null,"front"),n.a.createElement("li",null,"back"),n.a.createElement("li",null,"tense"),n.a.createElement("li",null,"retracted_tongue_root"),n.a.createElement("li",null,"advanced_tongue_root"),n.a.createElement("li",null,"periodic_glottal_source"),n.a.createElement("li",null,"epilaryngeal_source"),n.a.createElement("li",null,"spread_glottis"),n.a.createElement("li",null,"constricted_glottis"),n.a.createElement("li",null,"fortis"),n.a.createElement("li",null,"ejective"),n.a.createElement("li",null,"implosive"),n.a.createElement("li",null,"click"))))}a(23);var p="http://pshrimp.herokuapp.com/";function v(e){if(!e.err)return n.a.createElement("div",null);var t=e.err.toString();return/[A-Za-z]*Error: /.test(t)||(t="Error: "+t),/Error: Error:/.test(t)&&(t=t.slice(7)),n.a.createElement("div",{className:"error"},t)}function f(e){return 0==e.value?n.a.createElement("div",null,"No results"):n.a.createElement("table",null,n.a.createElement("tbody",null,e.value.map(function(t){return n.a.createElement(g,{key:t.id,language:t,detailFn:e.detailFn})})))}function g(e){return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("button",{className:"link-button",onClick:function(){return e.detailFn(e.language.id)}},e.language.language_name)),n.a.createElement("td",null,n.a.createElement("a",{href:"http://phoible.org/inventories/view/"+e.language.id},e.language.source.toUpperCase())),n.a.createElement("td",null,e.language.phonemes?e.language.phonemes.join(" "):""))}function b(e){var t=e.language;return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h3",null,t.language_name," (",t.source.toUpperCase(),")"),n.a.createElement("a",{href:"https://phoible.org/inventories/view/"+t.id},"View on phoible.org"),n.a.createElement("div",null,"Glottocode: ",n.a.createElement("a",{href:"https://glottolog.org/resource/languoid/id/"+e.language.glottocode},e.language.glottocode))),n.a.createElement(w,{name:"Consonants",inv:t.consonants,inv_id:t.id}),n.a.createElement(w,{name:"Clicks",inv:t.clicks,inv_id:t.id}),n.a.createElement(w,{name:"Vowels",inv:t.vowels,inv_id:t.id}),n.a.createElement(w,{name:"Diphthongs",inv:t.diphthongs,inv_id:t.id}),n.a.createElement(y,{name:"Syllabic consonants",inv:t.syllabic_consonants,inv_id:t.id}),n.a.createElement(y,{name:"Tones",inv:t.tones,inv_id:t.id}))}function w(e){var t=e.inv.size;if(0===t)return n.a.createElement("div",null);var a=e.inv.contents;return n.a.createElement("div",null,n.a.createElement("h4",{className:"language-segments"},e.name," (",t,")"),n.a.createElement("table",{className:"inventory"},n.a.createElement("tbody",null,a.map(function(t,a){return n.a.createElement("tr",{key:"".concat(e.inv_id,"-").concat(a)},t.map(function(t,l){return n.a.createElement("td",{key:"".concat(e.inv_id,"-").concat(a,"-").concat(l,"}")},t.join(" "))}))}))))}function y(e){var t=e.inv.size;if(0===t)return n.a.createElement("div",null);var a=e.inv.contents;return n.a.createElement("div",null,n.a.createElement("h4",{className:"language-segments"},e.name," (",t,")"),n.a.createElement("span",null,a.join(" ")))}var x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:"",searchResults:[],shouldHaveSearchResults:!1,searchError:!1,detailResults:!1,detailError:!1,tabIndex:0},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSearch=a.handleSearch.bind(Object(d.a)(Object(d.a)(a))),a.detail=a.detail.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSearch",value:function(e){e.preventDefault(),this.search(this.state.value)}},{key:"fetchJSON",value:function(e){return fetch(e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){if(e.hasOwnProperty("error"))throw new Error(e.error);return e})}},{key:"search",value:function(e){var t=this,a=p+"query/"+encodeURIComponent(e.replace(/\\/g,"\\\\").replace(/&/g,"\\+").replace(/=/g,"\\e"));this.fetchJSON(a,{method:"GET"}).then(function(e){return t.setState({searchResults:e,shouldHaveSearchResults:!0,searchError:!1})}).catch(function(e){return t.setState({searchResults:[],shouldHaveSearchResults:!1,searchError:e})})}},{key:"detail",value:function(e){var t=this;fetch(p+"language/"+e,{method:"GET"}).then(function(e){return e.json()}).then(function(t){return t.id=e,t}).then(function(e){return t.setState({detailResults:e,detailError:!1,tabIndex:1})}).catch(function(e){return t.setState({detailResults:!1,detailError:e,tabIndex:1})})}},{key:"render",value:function(){var e=this;return n.a.createElement("main",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("section",{id:"search",className:"col-sm"},n.a.createElement("form",{onSubmit:this.handleSearch},n.a.createElement("div",{id:"input-wrapper"},n.a.createElement("input",{id:"in",type:"text",value:this.state.value,onChange:this.handleChange})),n.a.createElement("input",{id:"submit",type:"submit",value:"Search"})),n.a.createElement("div",{id:"res"},n.a.createElement(v,{err:this.state.searchError}),this.state.shouldHaveSearchResults?n.a.createElement(f,{value:this.state.searchResults,detailFn:this.detail}):"")),n.a.createElement("section",{id:"tabnav",className:"col-sm"},n.a.createElement(E.d,{selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})}},n.a.createElement(E.b,null,n.a.createElement(E.a,null,"Help"),n.a.createElement(E.a,{disabled:!this.state.detailResults},"Detail")),n.a.createElement(E.c,null,n.a.createElement(h,null)),n.a.createElement(E.c,null,this.state.detailError?n.a.createElement(v,{err:this.state.detailError}):n.a.createElement(b,{language:this.state.detailResults}))))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.cc8f6d2a.chunk.js.map