(self.webpackChunkdoly_icons=self.webpackChunkdoly_icons||[]).push([[75],{22767:function(j){"use strict";var _=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;function l(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}function A(){try{if(!Object.assign)return!1;var g=new String("abc");if(g[5]="de",Object.getOwnPropertyNames(g)[0]==="5")return!1;for(var S={},m=0;m<10;m++)S["_"+String.fromCharCode(m)]=m;var O=Object.getOwnPropertyNames(S).map(function(b){return S[b]});if(O.join("")!=="0123456789")return!1;var T={};return"abcdefghijklmnopqrst".split("").forEach(function(b){T[b]=b}),Object.keys(Object.assign({},T)).join("")==="abcdefghijklmnopqrst"}catch(b){return!1}}j.exports=A()?Object.assign:function(g,S){for(var m,O=l(g),T,b=1;b<arguments.length;b++){m=Object(arguments[b]);for(var E in m)d.call(m,E)&&(O[E]=m[E]);if(_){T=_(m);for(var a=0;a<T.length;a++)C.call(m,T[a])&&(O[T[a]]=m[T[a]])}}return O}},42748:function(j,_,d){"use strict";d.r(_),d.d(_,{Helmet:function(){return ee}});var C=d(40507),l=d.n(C),A=d(10952),g=d.n(A),S=d(15154),m=d.n(S),O=d(75271),T=d(22767),b=d.n(T),E={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},a={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},W=Object.keys(a).map(function(o){return a[o]}),h={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},w={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},K=Object.keys(M).reduce(function(o,e){return o[M[e]]=e,o},{}),F=[a.NOSCRIPT,a.SCRIPT,a.STYLE],R="data-react-helmet",N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},G=function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")},U=function(){function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}}(),I=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(o[t]=r[t])}return o},te=function(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):o.__proto__=e)},re=function(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r},pe=function(o,e){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:o},$=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ne=function(e){var r=Y(e,a.TITLE),t=Y(e,w.TITLE_TEMPLATE);if(t&&r)return t.replace(/%s/g,function(){return Array.isArray(r)?r.join(""):r});var n=Y(e,w.DEFAULT_TITLE);return r||n||void 0},oe=function(e){return Y(e,w.ON_CHANGE_CLIENT_STATE)||function(){}},Q=function(e,r){return r.filter(function(t){return typeof t[e]!="undefined"}).map(function(t){return t[e]}).reduce(function(t,n){return I({},t,n)},{})},Te=function(e,r){return r.filter(function(t){return typeof t[a.BASE]!="undefined"}).map(function(t){return t[a.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var u=Object.keys(n),p=0;p<u.length;p++){var c=u[p],i=c.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},X=function(e,r,t){var n={};return t.filter(function(u){return Array.isArray(u[e])?!0:(typeof u[e]!="undefined"&&ue("Helmet: "+e+' should be of type "Array". Instead found type "'+N(u[e])+'"'),!1)}).map(function(u){return u[e]}).reverse().reduce(function(u,p){var c={};p.filter(function(y){for(var P=void 0,k=Object.keys(y),D=0;D<k.length;D++){var x=k[D],H=x.toLowerCase();r.indexOf(H)!==-1&&!(P===h.REL&&y[P].toLowerCase()==="canonical")&&!(H===h.REL&&y[H].toLowerCase()==="stylesheet")&&(P=H),r.indexOf(x)!==-1&&(x===h.INNER_HTML||x===h.CSS_TEXT||x===h.ITEM_PROP)&&(P=x)}if(!P||!y[P])return!1;var Z=y[P].toLowerCase();return n[P]||(n[P]={}),c[P]||(c[P]={}),n[P][Z]?!1:(c[P][Z]=!0,!0)}).reverse().forEach(function(y){return u.push(y)});for(var i=Object.keys(c),s=0;s<i.length;s++){var f=i[s],v=b()({},n[f],c[f]);n[f]=v}return u},[]).reverse()},Y=function(e,r){for(var t=e.length-1;t>=0;t--){var n=e[t];if(n.hasOwnProperty(r))return n[r]}return null},ae=function(e){return{baseTag:Te([h.HREF,h.TARGET],e),bodyAttributes:Q(E.BODY,e),defer:Y(e,w.DEFER),encode:Y(e,w.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Q(E.HTML,e),linkTags:X(a.LINK,[h.REL,h.HREF],e),metaTags:X(a.META,[h.NAME,h.CHARSET,h.HTTPEQUIV,h.PROPERTY,h.ITEM_PROP],e),noscriptTags:X(a.NOSCRIPT,[h.INNER_HTML],e),onChangeClientState:oe(e),scriptTags:X(a.SCRIPT,[h.SRC,h.INNER_HTML],e),styleTags:X(a.STYLE,[h.CSS_TEXT],e),title:ne(e),titleAttributes:Q(E.TITLE,e)}},z=function(){var o=Date.now();return function(e){var r=Date.now();r-o>16?(o=r,e(r)):setTimeout(function(){z(e)},0)}}(),ie=function(e){return clearTimeout(e)},ve=typeof window!="undefined"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||z:d.g.requestAnimationFrame||z,me=typeof window!="undefined"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ie:d.g.cancelAnimationFrame||ie,ue=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},V=null,ge=function(e){V&&me(V),e.defer?V=ve(function(){J(e,function(){V=null})}):(J(e),V=null)},J=function(e,r){var t=e.baseTag,n=e.bodyAttributes,u=e.htmlAttributes,p=e.linkTags,c=e.metaTags,i=e.noscriptTags,s=e.onChangeClientState,f=e.scriptTags,v=e.styleTags,y=e.title,P=e.titleAttributes;q(a.BODY,n),q(a.HTML,u),Ee(y,P);var k={baseTag:B(a.BASE,t),linkTags:B(a.LINK,p),metaTags:B(a.META,c),noscriptTags:B(a.NOSCRIPT,i),scriptTags:B(a.SCRIPT,f),styleTags:B(a.STYLE,v)},D={},x={};Object.keys(k).forEach(function(H){var Z=k[H],Pe=Z.newTags,_e=Z.oldTags;Pe.length&&(D[H]=Pe),_e.length&&(x[H]=k[H].oldTags)}),r&&r(),s(e,D,x)},ce=function(e){return Array.isArray(e)?e.join(""):e},Ee=function(e,r){typeof e!="undefined"&&document.title!==e&&(document.title=ce(e)),q(a.TITLE,r)},q=function(e,r){var t=document.getElementsByTagName(e)[0];if(t){for(var n=t.getAttribute(R),u=n?n.split(","):[],p=[].concat(u),c=Object.keys(r),i=0;i<c.length;i++){var s=c[i],f=r[s]||"";t.getAttribute(s)!==f&&t.setAttribute(s,f),u.indexOf(s)===-1&&u.push(s);var v=p.indexOf(s);v!==-1&&p.splice(v,1)}for(var y=p.length-1;y>=0;y--)t.removeAttribute(p[y]);u.length===p.length?t.removeAttribute(R):t.getAttribute(R)!==c.join(",")&&t.setAttribute(R,c.join(","))}},B=function(e,r){var t=document.head||document.querySelector(a.HEAD),n=t.querySelectorAll(e+"["+R+"]"),u=Array.prototype.slice.call(n),p=[],c=void 0;return r&&r.length&&r.forEach(function(i){var s=document.createElement(e);for(var f in i)if(i.hasOwnProperty(f))if(f===h.INNER_HTML)s.innerHTML=i.innerHTML;else if(f===h.CSS_TEXT)s.styleSheet?s.styleSheet.cssText=i.cssText:s.appendChild(document.createTextNode(i.cssText));else{var v=typeof i[f]=="undefined"?"":i[f];s.setAttribute(f,v)}s.setAttribute(R,"true"),u.some(function(y,P){return c=P,s.isEqualNode(y)})?u.splice(c,1):p.push(s)}),u.forEach(function(i){return i.parentNode.removeChild(i)}),p.forEach(function(i){return t.appendChild(i)}),{oldTags:u,newTags:p}},se=function(e){return Object.keys(e).reduce(function(r,t){var n=typeof e[t]!="undefined"?t+'="'+e[t]+'"':""+t;return r?r+" "+n:n},"")},he=function(e,r,t,n){var u=se(t),p=ce(r);return u?"<"+e+" "+R+'="true" '+u+">"+$(p,n)+"</"+e+">":"<"+e+" "+R+'="true">'+$(p,n)+"</"+e+">"},be=function(e,r,t){return r.reduce(function(n,u){var p=Object.keys(u).filter(function(s){return!(s===h.INNER_HTML||s===h.CSS_TEXT)}).reduce(function(s,f){var v=typeof u[f]=="undefined"?f:f+'="'+$(u[f],t)+'"';return s?s+" "+v:v},""),c=u.innerHTML||u.cssText||"",i=F.indexOf(e)===-1;return n+"<"+e+" "+R+'="true" '+p+(i?"/>":">"+c+"</"+e+">")},"")},le=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[M[n]||n]=e[n],t},r)},ye=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[K[n]||n]=e[n],t},r)},Ae=function(e,r,t){var n,u=(n={key:r},n[R]=!0,n),p=le(t,u);return[O.createElement(a.TITLE,p,r)]},Oe=function(e,r){return r.map(function(t,n){var u,p=(u={key:n},u[R]=!0,u);return Object.keys(t).forEach(function(c){var i=M[c]||c;if(i===h.INNER_HTML||i===h.CSS_TEXT){var s=t.innerHTML||t.cssText;p.dangerouslySetInnerHTML={__html:s}}else p[i]=t[c]}),O.createElement(e,p)})},L=function(e,r,t){switch(e){case a.TITLE:return{toComponent:function(){return Ae(e,r.title,r.titleAttributes,t)},toString:function(){return he(e,r.title,r.titleAttributes,t)}};case E.BODY:case E.HTML:return{toComponent:function(){return le(r)},toString:function(){return se(r)}};default:return{toComponent:function(){return Oe(e,r)},toString:function(){return be(e,r,t)}}}},fe=function(e){var r=e.baseTag,t=e.bodyAttributes,n=e.encode,u=e.htmlAttributes,p=e.linkTags,c=e.metaTags,i=e.noscriptTags,s=e.scriptTags,f=e.styleTags,v=e.title,y=v===void 0?"":v,P=e.titleAttributes;return{base:L(a.BASE,r,n),bodyAttributes:L(E.BODY,t,n),htmlAttributes:L(E.HTML,u,n),link:L(a.LINK,p,n),meta:L(a.META,c,n),noscript:L(a.NOSCRIPT,i,n),script:L(a.SCRIPT,s,n),style:L(a.STYLE,f,n),title:L(a.TITLE,{title:y,titleAttributes:P},n)}},de=function(e){var r,t;return t=r=function(n){te(u,n);function u(){return G(this,u),pe(this,n.apply(this,arguments))}return u.prototype.shouldComponentUpdate=function(c){return!m()(this.props,c)},u.prototype.mapNestedChildrenToProps=function(c,i){if(!i)return null;switch(c.type){case a.SCRIPT:case a.NOSCRIPT:return{innerHTML:i};case a.STYLE:return{cssText:i}}throw new Error("<"+c.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},u.prototype.flattenArrayTypeChildren=function(c){var i,s=c.child,f=c.arrayTypeChildren,v=c.newChildProps,y=c.nestedChildren;return I({},f,(i={},i[s.type]=[].concat(f[s.type]||[],[I({},v,this.mapNestedChildrenToProps(s,y))]),i))},u.prototype.mapObjectTypeChildren=function(c){var i,s,f=c.child,v=c.newProps,y=c.newChildProps,P=c.nestedChildren;switch(f.type){case a.TITLE:return I({},v,(i={},i[f.type]=P,i.titleAttributes=I({},y),i));case a.BODY:return I({},v,{bodyAttributes:I({},y)});case a.HTML:return I({},v,{htmlAttributes:I({},y)})}return I({},v,(s={},s[f.type]=I({},y),s))},u.prototype.mapArrayTypeChildrenToProps=function(c,i){var s=I({},i);return Object.keys(c).forEach(function(f){var v;s=I({},s,(v={},v[f]=c[f],v))}),s},u.prototype.warnOnInvalidChildren=function(c,i){return!0},u.prototype.mapChildrenToProps=function(c,i){var s=this,f={};return O.Children.forEach(c,function(v){if(!(!v||!v.props)){var y=v.props,P=y.children,k=re(y,["children"]),D=ye(k);switch(s.warnOnInvalidChildren(v,P),v.type){case a.LINK:case a.META:case a.NOSCRIPT:case a.SCRIPT:case a.STYLE:f=s.flattenArrayTypeChildren({child:v,arrayTypeChildren:f,newChildProps:D,nestedChildren:P});break;default:i=s.mapObjectTypeChildren({child:v,newProps:i,newChildProps:D,nestedChildren:P});break}}}),i=this.mapArrayTypeChildrenToProps(f,i),i},u.prototype.render=function(){var c=this.props,i=c.children,s=re(c,["children"]),f=I({},s);return i&&(f=this.mapChildrenToProps(i,f)),O.createElement(e,f)},U(u,null,[{key:"canUseDOM",set:function(c){e.canUseDOM=c}}]),u}(O.Component),r.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},r.defaultProps={defer:!0,encodeSpecialCharacters:!0},r.peek=e.peek,r.rewind=function(){var n=e.rewind();return n||(n=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),n},t},Se=function(){return null},Ce=g()(ae,ge,fe)(Se),ee=de(Ce);ee.renderStatic=ee.rewind,_.default=ee},10952:function(j,_,d){"use strict";function C(T){return T&&typeof T=="object"&&"default"in T?T.default:T}var l=d(75271),A=C(l);function g(T,b,E){return b in T?Object.defineProperty(T,b,{value:E,enumerable:!0,configurable:!0,writable:!0}):T[b]=E,T}function S(T,b){T.prototype=Object.create(b.prototype),T.prototype.constructor=T,T.__proto__=b}var m=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function O(T,b,E){if(typeof T!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof b!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof E!="undefined"&&typeof E!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function a(W){return W.displayName||W.name||"Component"}return function(h){if(typeof h!="function")throw new Error("Expected WrappedComponent to be a React component.");var M=[],w;function K(){w=T(M.map(function(R){return R.props})),F.canUseDOM?b(w):E&&(w=E(w))}var F=function(R){S(N,R);function N(){return R.apply(this,arguments)||this}N.peek=function(){return w},N.rewind=function(){if(N.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var I=w;return w=void 0,M=[],I};var G=N.prototype;return G.UNSAFE_componentWillMount=function(){M.push(this),K()},G.componentDidUpdate=function(){K()},G.componentWillUnmount=function(){var I=M.indexOf(this);M.splice(I,1),K()},G.render=function(){return A.createElement(h,this.props)},N}(l.PureComponent);return g(F,"displayName","SideEffect("+a(h)+")"),g(F,"canUseDOM",m),F}}j.exports=O},53068:function(j,_,d){"use strict";d.d(_,{Z:function(){return l}});var C=d(41564);function l(A){return C.wt.call(A)}},86909:function(j,_,d){"use strict";d.d(_,{R5:function(){return O},jU:function(){return S}});var C=d(45436),l=d(53068),A=d(41564),g="1.16.0",S=typeof window!==A.Rr&&(0,C.Z)(window)&&typeof document!==A.Rr&&(0,C.Z)(document)&&window.document===document,m=(0,l.Z)(function(){return arguments}())===A.mn,O="Expected a function";function T(a){if(a!==null){try{return functionProtoToString.call(a)}catch(W){}try{return a+""}catch(W){}}return""}var b=function(){return!1},E=function(){return!0}},41564:function(j,_,d){"use strict";d.d(_,{$s:function(){return T},DQ:function(){return B},Rr:function(){return l},VY:function(){return ne},VZ:function(){return O},WL:function(){return ue},_E:function(){return oe},aj:function(){return M},bS:function(){return F},hp:function(){return b},mn:function(){return J},oI:function(){return $},oV:function(){return ae},uP:function(){return C},v1:function(){return te},wt:function(){return S}});var C=void 0,l="undefined",A="object",g=Object.prototype,S=g.toString,m=g.hasOwnProperty,O=g.propertyIsEnumerable,T=Object.getOwnPropertySymbols,b=Object.getPrototypeOf,E=Object.keys,a=Function.prototype,W=a.toString,h=typeof Symbol!==l,M=h?Symbol.prototype:C,w=Array.prototype,K=w.slice,F=Math.min,R=Math.max,N=Math.random,G=Math.floor,U=Math.ceil,I=Math.abs,te=Number.isFinite,re=Number.isInteger,pe=Number.isSafeInteger,$=typeof globalThis===A&&globalThis,ne=typeof d.g===A&&d.g,oe=typeof self===A&&self,Q=Number.MAX_SAFE_INTEGER||9007199254740991,Te=Number.MIN_SAFE_INTEGER||-9007199254740991,X=4294967295,Y="[object BigInt]",ae="[object Number]",z="[object Boolean]",ie="[object String]",ve="[object Date]",me="[object RegExp]",ue="[object Symbol]",V="[object Error]",ge="[object ArrayBuffer]",J="[object Arguments]",ce="[object Array]",Ee=["Function","AsyncFunction","GeneratorFunction","Proxy"].map(function(de){return"[object "+de+"]"}),q="[object WeakSet]",B="[object Blob]",se="[object File]",he="[object DOMException]",be="[object Object]",le="[object DataView]",ye="[object Map]",Ae="[object Promise]",Oe="[object Set]",L="[object WeakMap]",fe="[object Window]"},45436:function(j,_,d){"use strict";d.d(_,{Z:function(){return C}});function C(l){return l!==null&&typeof l=="object"}},74673:function(j,_,d){"use strict";d.d(_,{Z:function(){return C}});function C(l,A){var g=A||{},S=g.container,m=S===void 0?document.head||document.getElementsByTagName("head")[0]||document.body:S,O=g.insertAt,T=O===void 0?"top":O,b=g.onBefore,E=document.createElement("style");E.styleSheet?E.styleSheet.cssText=l:E.appendChild(document.createTextNode(l)),typeof b=="function"&&b(E);var a=T==="top";return a&&m.prepend?m.prepend(E):a&&m.firstChild?m.insertBefore(E,m.firstChild):m.appendChild(E),E}},67825:function(j,_,d){var C=d(64382);function l(A,g){if(A==null)return{};var S=C(A,g),m,O;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(A);for(O=0;O<T.length;O++)m=T[O],!(g.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(A,m)&&(S[m]=A[m])}return S}j.exports=l,j.exports.__esModule=!0,j.exports.default=j.exports},64382:function(j){function _(d,C){if(d==null)return{};var l={},A=Object.keys(d),g,S;for(S=0;S<A.length;S++)g=A[S],!(C.indexOf(g)>=0)&&(l[g]=d[g]);return l}j.exports=_,j.exports.__esModule=!0,j.exports.default=j.exports}}]);