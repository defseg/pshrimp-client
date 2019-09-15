(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(29),a(17)),i=a(11),s=a(21),u=a(18),m=a(20),d=a(1),h=a(7);a(32);function E(e){return l.a.createElement("div",{id:"help"},l.a.createElement("h3",null,"About"),l.a.createElement("p",null,"This is an unofficial search frontend for PHOIBLE."),l.a.createElement("h3",null,"Searching"),l.a.createElement("p",null,"A search query is minimally composed of a ",l.a.createElement("em",null,"search term"),". There are two types of search term."),l.a.createElement("p",null,"A ",l.a.createElement("em",null,"phoneme term"),' consists of a phoneme enclosed in forward slashes, optionally preceded by "no". This will find all doculects that have (or don\'t have, if there\'s a preceding "no") the given phoneme.'),l.a.createElement("p",null,"For example, ",l.a.createElement("code",null,"/t\u032a\u0299/")," will return all doculects that contain the phoneme represented in PHOIBLE by the text string ",l.a.createElement("code",null,"t\u032a\u0299"),", and ",l.a.createElement("code",null,"no /m/")," will return all doculects that do not contain the phoneme represented in PHOIBLE by the text string ",l.a.createElement("code",null,"/m/"),"."),l.a.createElement("p",null,"A ",l.a.createElement("em",null,"feature term")," consists of a number (optionally preceded by a ",l.a.createElement("code",null,"<")," or ",l.a.createElement("code",null,">")," sign), a space, and a string of pluses and minuses followed (with no intervening space) by the name of the feature to search. For example, ",l.a.createElement("code",null,"2 +coronal")," will return all doculects with exactly two [+coronal] segments, and ",l.a.createElement("code",null,">30 +syllabic")," will return all doculects with more than thirty vowels."),l.a.createElement("p",null,"For the numeric component of the feature term, ",l.a.createElement("code",null,"no")," can be used to mean ",l.a.createElement("code",null,"0"),", and ",l.a.createElement("code",null,"any")," can be used to mean ",l.a.createElement("code",null,"+0"),"."),l.a.createElement("p",null,"To search for multiple feature values on the same phoneme, separate the feature components with a semicolon. For example, ",l.a.createElement("code",null,"any +syllabic;+consonantal")," will return a list of doculects with syllabic consonants."),l.a.createElement("p",null,"Search terms may be joined by the logical operators ",l.a.createElement("code",null,"and")," and ",l.a.createElement("code",null,"or"),". These are postfix."),l.a.createElement("h3",null,"Examples"),l.a.createElement("p",{className:"example-text"},"Find doculects with only two coronal consonants:"),l.a.createElement("code",{className:"example"},"2 +coronal",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0HAWAIIAN",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0PIRAHA",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0ROTOKAS",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Piraha\u0303"),l.a.createElement("p",{className:"example-text"},"Find doculects with two or fewer vowels:"),l.a.createElement("code",{className:"example"},"<3 +syllabic",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0zulgo",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Cuvok",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Buwal"),l.a.createElement("p",{className:"example-text"},"Find doculects with two or fewer vowels or the phoneme /\u02b0d/:"),l.a.createElement("code",{className:"example"},"<3 +syllabic /\u02b0d/ or",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0zulgo",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Cuvok",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Buwal",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Gu\u0308nu\u0308n Yajich",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Hoti"),l.a.createElement("p",{className:"example-text"},"Find doculects with no rounded segments:"),l.a.createElement("code",{className:"example"},"no +round",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Oneida",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0NIMBORAN",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Gu'de"),l.a.createElement("p",{className:"example-text"},"Find doculects with /\u02b0d/ and no /m/:"),l.a.createElement("code",{className:"example"},"/\u02b0d/ no /m/ and",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0Hoti"),l.a.createElement("h3",null,"List of features"),l.a.createElement("p",null,"These are taken directly from PHOIBLE's featural decomposition, except the names of the features have been converted from camelCase to snake_case and 'raisedLarynxEjective' and 'loweredLarynxImplosive' have been renamed to ",l.a.createElement("code",null,"ejective")," and ",l.a.createElement("code",null,"implosive"),"."),l.a.createElement("code",null,l.a.createElement("ul",null,l.a.createElement("li",null,"tone"),l.a.createElement("li",null,"stress"),l.a.createElement("li",null,"syllabic"),l.a.createElement("li",null,"short"),l.a.createElement("li",null,"long"),l.a.createElement("li",null,"consonantal"),l.a.createElement("li",null,"sonorant"),l.a.createElement("li",null,"continuant"),l.a.createElement("li",null,"delayed_release"),l.a.createElement("li",null,"approximant"),l.a.createElement("li",null,"tap"),l.a.createElement("li",null,"trill"),l.a.createElement("li",null,"nasal"),l.a.createElement("li",null,"lateral"),l.a.createElement("li",null,"labial"),l.a.createElement("li",null,"round"),l.a.createElement("li",null,"labiodental"),l.a.createElement("li",null,"coronal"),l.a.createElement("li",null,"anterior"),l.a.createElement("li",null,"distributed"),l.a.createElement("li",null,"strident"),l.a.createElement("li",null,"dorsal"),l.a.createElement("li",null,"high"),l.a.createElement("li",null,"low"),l.a.createElement("li",null,"front"),l.a.createElement("li",null,"back"),l.a.createElement("li",null,"tense"),l.a.createElement("li",null,"retracted_tongue_root"),l.a.createElement("li",null,"advanced_tongue_root"),l.a.createElement("li",null,"periodic_glottal_source"),l.a.createElement("li",null,"epilaryngeal_source"),l.a.createElement("li",null,"spread_glottis"),l.a.createElement("li",null,"constricted_glottis"),l.a.createElement("li",null,"fortis"),l.a.createElement("li",null,"ejective"),l.a.createElement("li",null,"implosive"),l.a.createElement("li",null,"click"))))}a(33);var p=a(42),v=a(45),f=a(43),g=a(44),b=a(4),w=a.n(b);function y(e){var t=e.popupText,a=e.position;return t?l.a.createElement(p.a,{position:a},l.a.createElement(v.a,null,t)):l.a.createElement(p.a,{position:a})}function x(e){var t=e.data.map(function(e){return l.a.createElement(y,{position:e.position,popupText:e.popupText,key:e.position+e.popupText})});return l.a.createElement(f.a,{center:[0,0],zoom:1},l.a.createElement(g.a,{attribution:"Thunderforest",url:"https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=7ee1e377fdd34773b610a69bd8e96e6f"}),t)}delete w.a.Icon.Default.prototype._getIconUrl,w.a.Icon.Default.mergeOptions({iconRetinaUrl:a(34),iconUrl:a(35),shadowUrl:a(36)});a(39);function k(e){return l.a.createElement("a",{href:"http://phoible.org/inventories/view"+e.language.inventory_id},e.language.source.toUpperCase())}function N(e){var t=e.doculect;return l.a.createElement("div",null,l.a.createElement("h3",null," ",t.language_name," (",t.source.toUpperCase(),") "),l.a.createElement("a",{href:"https://phoible.org/inventories/view/"+t.id},"View on phoible.org"),l.a.createElement("div",null,"Glottocode: ",l.a.createElement("a",{href:"https://glottolog.org/resource/languoid/id/"+t.glottocode},t.glottocode)),l.a.createElement("div",null,"Family: ",t.family||"Isolate"," ",t.genus?"("+t.genus+")":""))}var _=window.location.protocol+"//pshrimp.herokuapp.com/";function S(e){return encodeURIComponent(e.toString().replace(/\\/g,"\\\\").replace(/&/g,"\\+").replace(/=/g,"\\e"))}function O(e){return decodeURIComponent(e.replace(/\\\\/g,"\\").replace(/\\\+/g,"&").replace(/\\e/g,"="))}function j(){var e=window.location.hash;if(""===e)return null;e=(e=e.slice(1,window.location.hash.length)).split("&");var t={},a=!0,n=!1,l=void 0;try{for(var r,c=e[Symbol.iterator]();!(a=(r=c.next()).done);a=!0){var o=r.value.split("=");o.length<2||(t[O(o[0])]=O(o[1]))}}catch(i){n=!0,l=i}finally{try{a||null==c.return||c.return()}finally{if(n)throw l}}return t}function I(e,t){var a=j();null===a&&(a={}),a[e]=t,function(e){var t=Object.keys(e).map(function(t){return"".concat(S(t),"=").concat(S(e[t]))});window.location.hash=t.join("&")}(a)}function R(){return l.a.createElement("span",null,"Loading...")}function T(e){if(!e.err)return l.a.createElement("div",null);var t=e.err.toString();return/[A-Za-z]*Error: /.test(t)||(t="Error: "+t),/Error: Error:/.test(t)&&(t=t.slice(7)),l.a.createElement("div",{className:"error"},t)}function C(e){return 0==e.value?l.a.createElement("div",null,"No results"):l.a.createElement("table",null,l.a.createElement("tbody",null,e.value.map(function(t){return l.a.createElement(F,{key:t.inventory_id,language:t,detailFn:e.detailFn})})))}function F(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:"link-button",onClick:function(){return e.detailFn(e.language.inventory_id)}},e.language.language_name)),l.a.createElement("td",null,l.a.createElement(k,{language:e.language})),l.a.createElement("td",null,e.language.phonemes?e.language.phonemes.join(" "):""))}function H(e){var t=e.language;return l.a.createElement("div",{className:"sticky-wrapper-wrapper"},l.a.createElement("div",{className:"sticky-wrapper"},l.a.createElement("div",{className:"sticky-panel"},l.a.createElement("div",null,l.a.createElement(N,{doculect:t})),l.a.createElement(A,{name:"Consonants",inv:t.consonants,inv_id:t.id}),l.a.createElement(A,{name:"Clicks",inv:t.clicks,inv_id:t.id}),l.a.createElement(A,{name:"Vowels",inv:t.vowels,inv_id:t.id}),l.a.createElement(A,{name:"Diphthongs",inv:t.diphthongs,inv_id:t.id}),l.a.createElement(B,{name:"Syllabic consonants",inv:t.syllabic_consonants,inv_id:t.id}),l.a.createElement(B,{name:"Tones",inv:t.tones,inv_id:t.id}))))}function A(e){var t=e.inv.size;if(0===t)return l.a.createElement("div",null);var a=e.inv.contents;return l.a.createElement("div",null,l.a.createElement("h4",{className:"language-segments"},e.name," (",t,")"),l.a.createElement("table",{className:"inventory"},l.a.createElement("tbody",null,a.map(function(t,a){return l.a.createElement("tr",{key:"".concat(e.inv_id,"-").concat(a)},t.map(function(t,n){return l.a.createElement("td",{key:"".concat(e.inv_id,"-").concat(a,"-").concat(n,"}")},t.join(" "))}))}))))}function B(e){var t=e.inv.size;if(0===t)return l.a.createElement("div",null);var a=e.inv.contents;return l.a.createElement("div",null,l.a.createElement("h4",{className:"language-segments"},e.name," (",t,")"),l.a.createElement("span",null,a.join(" ")))}var L=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=0,l=j();return l&&l.hasOwnProperty("detail")&&l.detail&&(n=4),a.state={value:"",searchResults:[],shouldHaveSearchResults:!1,searchLoading:!1,searchError:!1,detailResults:!1,detailError:!1,tabIndex:n},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSearch=a.handleSearch.bind(Object(d.a)(Object(d.a)(a))),a.detail=a.detail.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=j();try{e.search&&this.search(e.search),e.detail&&this.detail(e.detail)}catch(t){return void(window.location.hash="")}}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSearch",value:function(e){e.preventDefault(),I("search",this.state.value),this.search(this.state.value)}},{key:"fetchJSON",value:function(e){return fetch(e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){if(e.hasOwnProperty("error"))throw new Error(e.error);return e})}},{key:"search",value:function(e){var t=this,a=_+"query/"+S(e);this.setState({searching:!0}),this.fetchJSON(a,{method:"GET"}).then(function(e){return t.setState({searchResults:e,shouldHaveSearchResults:!0,searchError:!1,searching:!1})}).catch(function(e){return t.setState({searchResults:[],shouldHaveSearchResults:!1,searchError:e,searching:!1})})}},{key:"detail",value:function(e){var t=this,a=_+"language/"+e;I("detail",e),fetch(a,{method:"GET"}).then(function(e){return e.json()}).then(function(t){return t.id=e,t}).then(function(e){return t.setState({detailResults:e,detailError:!1,tabIndex:1})}).catch(function(e){return t.setState({detailResults:!1,detailError:e,tabIndex:1})})}},{key:"render",value:function(){var e=this,t=function(e){return"".concat(e.language_name," (").concat(e.inventory_id,")")};return l.a.createElement("main",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("section",{id:"search",className:"col-sm"},l.a.createElement("form",{onSubmit:this.handleSearch},l.a.createElement("div",{id:"input-wrapper"},l.a.createElement("input",{id:"in",type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("input",{id:"submit",type:"submit",value:"Search"}),this.state.searching?l.a.createElement(R,null):""),l.a.createElement("div",{id:"res"},l.a.createElement(T,{err:this.state.searchError}),this.state.shouldHaveSearchResults?l.a.createElement(C,{value:this.state.searchResults,detailFn:this.detail}):"")),l.a.createElement("section",{id:"tabnav",className:"col-sm"},l.a.createElement(h.d,{selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})}},l.a.createElement(h.b,null,l.a.createElement(h.a,null,"Help"),l.a.createElement(h.a,{disabled:!this.state.detailResults},"Detail"),l.a.createElement(h.a,{disabled:!this.state.searchResults},"Map")),l.a.createElement(h.c,null,l.a.createElement(E,null)),l.a.createElement(h.c,null,this.state.detailError?l.a.createElement(T,{err:this.state.detailError}):l.a.createElement(H,{language:this.state.detailResults})),l.a.createElement(h.c,null,l.a.createElement(x,{data:function(e){var a={};return e.forEach(function(e){void 0===a[e.glottocode]?a[e.glottocode]={position:[e.latitude||0,e.longitude||0],popupText:t(e)}:a[e.glottocode].popupText+=", "+t(e)}),Object.values(a)}(this.state.searchResults)}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.56557f53.chunk.js.map