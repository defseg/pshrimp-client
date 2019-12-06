(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(29),a(17)),i=a(11),s=a(21),u=a(18),m=a(20),d=a(1),h=a(7),E=(a(32),a(33),a(42)),p=a(45),v=a(43),g=a(44),f=a(4),y=a.n(f);function w(e){var t=e.popupText,a=e.position;return t?l.a.createElement(E.a,{position:a},l.a.createElement(p.a,null,t)):l.a.createElement(E.a,{position:a})}function b(e){var t=e.data.map(function(e){return l.a.createElement(w,{position:e.position,popupText:e.popupText,key:e.position+e.popupText})});return l.a.createElement(v.a,{center:[0,0],zoom:1},l.a.createElement(g.a,{attribution:"Thunderforest",url:"https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=7ee1e377fdd34773b610a69bd8e96e6f"}),t)}delete y.a.Icon.Default.prototype._getIconUrl,y.a.Icon.Default.mergeOptions({iconRetinaUrl:a(34),iconUrl:a(35),shadowUrl:a(36)});a(39);function x(e){return l.a.createElement("a",{href:"http://phoible.org/inventories/view"+e.language.inventory_id},e.language.source.toUpperCase())}function k(e){var t=e.doculect;return l.a.createElement("div",null,l.a.createElement("h3",null," ",t.language_name," (",t.source.toUpperCase(),") "),l.a.createElement("a",{href:"https://phoible.org/inventories/view/"+t.id},"View on phoible.org"),l.a.createElement("div",null,"Glottocode: ",l.a.createElement("a",{href:"https://glottolog.org/resource/languoid/id/"+t.glottocode},t.glottocode)),l.a.createElement("div",null,"Family: ",t.family||"Isolate"," ",t.genus?"("+t.genus+")":""))}function _(e){return l.a.createElement("div",{id:"help"},l.a.createElement("h3",null,"About"),l.a.createElement("p",null,"This is an unofficial search tool for ",l.a.createElement("a",{href:"https://phoible.org/"},"PHOIBLE"),"."),l.a.createElement("h3",null,"Searching"),l.a.createElement("p",null,"A search query is minimally composed of a ",l.a.createElement("em",null,"search term"),". There are two types of search term."),l.a.createElement("p",null,"A ",l.a.createElement("em",null,"phoneme term"),' consists of a phoneme enclosed in forward slashes, optionally preceded by "no". This will find all doculects that have (or don\'t have, if there\'s a preceding "no") the given phoneme.'),l.a.createElement("p",null,"For example, ",l.a.createElement("code",null,"/t\u032a\u0299/")," will return all doculects that contain the phoneme represented in PHOIBLE by the text string ",l.a.createElement("code",null,"t\u032a\u0299"),", and ",l.a.createElement("code",null,"no /m/")," will return all doculects that do not contain the phoneme represented in PHOIBLE by the text string ",l.a.createElement("code",null,"/m/"),"."),l.a.createElement("p",null,"A ",l.a.createElement("em",null,"feature term")," consists of a number (optionally preceded by a ",l.a.createElement("code",null,"<")," or ",l.a.createElement("code",null,">")," sign), a space, and a string of pluses and minuses followed (with no intervening space) by the name of the feature to search. For example, ",l.a.createElement("code",null,"2 +coronal")," will return all doculects with exactly two [+coronal] segments, and ",l.a.createElement("code",null,">30 +syllabic")," will return all doculects with more than thirty vowels."),l.a.createElement("p",null,"For the numeric component of the feature term, ",l.a.createElement("code",null,"no")," can be used to mean ",l.a.createElement("code",null,"0"),", and ",l.a.createElement("code",null,"any")," can be used to mean ",l.a.createElement("code",null,"+0"),"."),l.a.createElement("p",null,"To search for multiple feature values on the same phoneme, separate the feature components with a semicolon. For example, ",l.a.createElement("code",null,"any +syllabic;+consonantal")," will return a list of doculects with syllabic consonants."),l.a.createElement("p",null,"To ignore phonemes marked as marginal, use ",l.a.createElement("code",null,"-m")," immediately following the search term in question. For example, ",l.a.createElement("code",null,"no /p/ -m /p/ and")," will return all and only the doculects in which /p/ is marked as marginal."),l.a.createElement("p",null,"Search terms may be joined by the logical operators ",l.a.createElement("code",null,"and")," and ",l.a.createElement("code",null,"or"),". These are postfix."),l.a.createElement("p",null,"To limit the search to languages with specific properties, use ",l.a.createElement("code",null,"field:value"),". To limit the search to languages without specific properties, use ",l.a.createElement("code",null,"!field:value"),". Values are case-insensitive. For example, ",l.a.createElement("code",null,"country:australia")," will return all doculects of languages that PHOIBLE lists as spoken in Australia. Spaces in the value must be replaced with underscores, as in ",l.a.createElement("code",null,"country:united_states"),". See below for a full list of properties."),l.a.createElement("h3",null,"Examples"),l.a.createElement("p",{className:"example-text"},"Find doculects with only two coronals:"),l.a.createElement("code",{className:"example"},"2 +coronal"),l.a.createElement("p",{className:"example-text"},"Find doculects with three or fewer vowels:"),l.a.createElement("code",{className:"example"},"<4 +syllabic"),l.a.createElement("p",{className:"example-text"},"Find doculects with three or fewer vowels or the phoneme /d/:"),l.a.createElement("code",{className:"example"},"<4 +syllabic /d/ or"),l.a.createElement("p",{className:"example-text"},"Find doculects with no rounded segments:"),l.a.createElement("code",{className:"example"},"no +round"),l.a.createElement("p",{className:"example-text"},"Find doculects with /d/ and no /m/:"),l.a.createElement("code",{className:"example"},"/d/ no /m/ and"),l.a.createElement("h3",null,"List of features"),l.a.createElement("p",null,"The names of PHOIBLE's features have been cconverted from camelCase to snake_case, and 'raisedLarynxEjective' and 'loweredLarynxImplosive' have been renamed to ",l.a.createElement("code",null,"ejective")," and ",l.a.createElement("code",null,"implosive"),"."),l.a.createElement("code",null,l.a.createElement("ul",null,l.a.createElement("li",null,"tone"),l.a.createElement("li",null,"stress"),l.a.createElement("li",null,"syllabic"),l.a.createElement("li",null,"short"),l.a.createElement("li",null,"long"),l.a.createElement("li",null,"consonantal"),l.a.createElement("li",null,"sonorant"),l.a.createElement("li",null,"continuant"),l.a.createElement("li",null,"delayed_release"),l.a.createElement("li",null,"approximant"),l.a.createElement("li",null,"tap"),l.a.createElement("li",null,"trill"),l.a.createElement("li",null,"nasal"),l.a.createElement("li",null,"lateral"),l.a.createElement("li",null,"labial"),l.a.createElement("li",null,"round"),l.a.createElement("li",null,"labiodental"),l.a.createElement("li",null,"coronal"),l.a.createElement("li",null,"anterior"),l.a.createElement("li",null,"distributed"),l.a.createElement("li",null,"strident"),l.a.createElement("li",null,"dorsal"),l.a.createElement("li",null,"high"),l.a.createElement("li",null,"low"),l.a.createElement("li",null,"front"),l.a.createElement("li",null,"back"),l.a.createElement("li",null,"tense"),l.a.createElement("li",null,"retracted_tongue_root"),l.a.createElement("li",null,"advanced_tongue_root"),l.a.createElement("li",null,"periodic_glottal_source"),l.a.createElement("li",null,"epilaryngeal_source"),l.a.createElement("li",null,"spread_glottis"),l.a.createElement("li",null,"constricted_glottis"),l.a.createElement("li",null,"fortis"),l.a.createElement("li",null,"ejective"),l.a.createElement("li",null,"implosive"),l.a.createElement("li",null,"click"))),l.a.createElement("h3",null,"List of properties"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"id")),l.a.createElement("li",null,l.a.createElement("code",null,"source")),l.a.createElement("li",null,l.a.createElement("code",null,"glottocode")),l.a.createElement("li",null,l.a.createElement("code",null,"iso6393")),l.a.createElement("li",null,l.a.createElement("code",null,"language_name")),l.a.createElement("li",null,l.a.createElement("code",null,"family")),l.a.createElement("li",null,l.a.createElement("code",null,"genus")),l.a.createElement("li",null,l.a.createElement("code",null,"country_id")),l.a.createElement("li",null,l.a.createElement("code",null,"country"))))}var S=window.location.protocol+"//pshrimp.herokuapp.com/";function N(e){return encodeURIComponent(e.toString().replace(/\\/g,"\\\\").replace(/&/g,"\\+").replace(/=/g,"\\e"))}function O(e){return decodeURIComponent(e.replace(/\\\\/g,"\\").replace(/\\\+/g,"&").replace(/\\e/g,"="))}function j(){var e=window.location.hash;if(""===e)return null;e=(e=e.slice(1,window.location.hash.length)).split("&");var t={},a=!0,n=!1,l=void 0;try{for(var r,c=e[Symbol.iterator]();!(a=(r=c.next()).done);a=!0){var o=r.value.split("=");o.length<2||(t[O(o[0])]=O(o[1]))}}catch(i){n=!0,l=i}finally{try{a||null==c.return||c.return()}finally{if(n)throw l}}return t}function I(e,t){var a=j();null===a&&(a={}),a[e]=t,function(e){var t=Object.keys(e).map(function(t){return"".concat(N(t),"=").concat(N(e[t]))});window.location.hash=t.join("&")}(a)}function R(){return l.a.createElement("span",null,"Loading...")}function T(e){if(!e.err)return l.a.createElement("div",null);var t=e.err.toString();return/[A-Za-z]*Error: /.test(t)||(t="Error: "+t),/Error: (E|e)rror:/.test(t)&&(t="E"+t.slice(8)),l.a.createElement("div",{className:"error"},t)}function F(e){return!1===e.value?l.a.createElement("div",null,"No results"):l.a.createElement("table",null,l.a.createElement("tbody",null,e.value.map(function(t){return l.a.createElement(C,{key:t.inventory_id,language:t,detailFn:e.detailFn})})))}function C(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:"link-button",onClick:function(){return e.detailFn(e.language.inventory_id)}},e.language.language_name)),l.a.createElement("td",{className:"source-cell"},l.a.createElement(x,{language:e.language})),l.a.createElement("td",null,e.language.phonemes?l.a.createElement(B,{segments:e.language.phonemes}):""))}function L(e){var t=e.language;return l.a.createElement("div",{className:"sticky-wrapper-wrapper"},l.a.createElement("div",{className:"sticky-wrapper"},l.a.createElement("div",{className:"sticky-panel"},l.a.createElement("div",null,l.a.createElement(k,{doculect:t})),l.a.createElement(H,{name:"Consonants",inv:t.consonants,inv_id:t.id}),l.a.createElement(H,{name:"Clicks",inv:t.clicks,inv_id:t.id}),l.a.createElement(H,{name:"Vowels",inv:t.vowels,inv_id:t.id}),l.a.createElement(H,{name:"Diphthongs",inv:t.diphthongs,inv_id:t.id}),l.a.createElement(U,{name:"Syllabic consonants",inv:t.syllabic_consonants,inv_id:t.id}),l.a.createElement(U,{name:"Tones",inv:t.tones,inv_id:t.id}),l.a.createElement("div",null,t.notes?l.a.createElement("h4",null,"Notes"):"",(t.notes||"").split("\n").map(function(e){return l.a.createElement("p",{key:e},e)})))))}function H(e){var t=e.inv.size;if(0===t)return l.a.createElement("div",null);var a=e.inv.contents;return l.a.createElement("div",null,l.a.createElement("h4",{className:"language-segments"},e.name," (",t,")"),l.a.createElement("table",{className:"inventory"},l.a.createElement("tbody",null,a.map(function(t,a){return l.a.createElement("tr",{key:"".concat(e.inv_id,"-").concat(a)},t.map(function(t,n){return l.a.createElement("td",{key:"".concat(e.inv_id,"-").concat(a,"-").concat(n,"}")},l.a.createElement(B,{segments:t}))}))}))))}function U(e){var t=e.inv.size;if(0===t)return l.a.createElement("div",null);var a=e.inv.contents;return l.a.createElement("div",null,l.a.createElement("h4",{className:"language-segments"},e.name," (",t,")"),l.a.createElement("span",null,l.a.createElement(B,{segments:a})))}function B(e){return e.segments.map(function(e){return function(e){var t="",a="";e.marginal&&(t+="(",a+=")");e.loan&&(t+="{",a+="}");return l.a.createElement("span",{className:"segment",key:e.segment},t,e.segment,a)}(e)})}var P=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=0,l=j();return l&&l.hasOwnProperty("detail")&&l.detail&&(n=4),a.state={value:"",searchResults:[],shouldHaveSearchResults:!1,searchLoading:!1,searchError:!1,detailResults:!1,detailError:!1,tabIndex:n},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSearch=a.handleSearch.bind(Object(d.a)(Object(d.a)(a))),a.detail=a.detail.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=j();try{e.search&&this.search(e.search),e.detail&&this.detail(e.detail)}catch(t){return void(window.location.hash="")}}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSearch",value:function(e){e.preventDefault(),I("search",this.state.value),this.search(this.state.value)}},{key:"fetchJSON",value:function(e){return fetch(e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){if(e.hasOwnProperty("error"))throw new Error(e.error);return e})}},{key:"search",value:function(e){var t=this,a=S+"query/"+N(e);this.setState({searching:!0}),this.fetchJSON(a,{method:"GET"}).then(function(e){return t.setState({searchResults:e,shouldHaveSearchResults:!0,searchError:!1,searching:!1})}).catch(function(e){return t.setState({searchResults:[],shouldHaveSearchResults:!1,searchError:e,searching:!1})})}},{key:"detail",value:function(e){var t=this,a=S+"language/"+e;I("detail",e),fetch(a,{method:"GET"}).then(function(e){return e.json()}).then(function(t){return t.id=e,t}).then(function(e){e.error?t.setState({detailResults:!1,detailError:e.error,tabIndex:1}):t.setState({detailResults:e,detailError:!1,tabIndex:1})}).catch(function(e){return t.setState({detailResults:!1,detailError:e,tabIndex:1})})}},{key:"render",value:function(){var e=this,t=function(e){return"".concat(e.language_name," (").concat(e.inventory_id,")")};return l.a.createElement("main",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("section",{id:"search",className:"col-sm"},l.a.createElement("form",{onSubmit:this.handleSearch},l.a.createElement("div",{id:"input-wrapper"},l.a.createElement("input",{id:"in",type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("input",{id:"submit",type:"submit",value:"Search"}),this.state.searching?l.a.createElement(R,null):""),l.a.createElement("div",{id:"res"},l.a.createElement(T,{err:this.state.searchError}),this.state.shouldHaveSearchResults?l.a.createElement(F,{value:this.state.searchResults,detailFn:this.detail}):"")),l.a.createElement("section",{id:"tabnav",className:"col-sm"},l.a.createElement(h.d,{selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})}},l.a.createElement(h.b,null,l.a.createElement(h.a,null,"Help"),l.a.createElement(h.a,{disabled:!this.state.detailResults},"Detail"),l.a.createElement(h.a,{disabled:!this.state.searchResults},"Map")),l.a.createElement(h.c,null,l.a.createElement(_,null)),l.a.createElement(h.c,null,this.state.detailError?l.a.createElement(T,{err:this.state.detailError}):this.state.detailResults?l.a.createElement(L,{language:this.state.detailResults}):""),l.a.createElement(h.c,null,l.a.createElement(b,{data:function(e){var a={};return e.forEach(function(e){void 0===a[e.glottocode]?a[e.glottocode]={position:[e.latitude||0,e.longitude||0],popupText:t(e)}:a[e.glottocode].popupText+=", "+t(e)}),Object.values(a)}(this.state.searchResults)}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.15587b4e.chunk.js.map