"use strict";(self.webpackChunkdoly_icons=self.webpackChunkdoly_icons||[]).push([[57],{42425:function(gt,Fe,D){D.d(Fe,{Z:function(){return le}});var be=D(98037),he=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,H=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,P="".concat(he," ").concat(H).split(/[\s\n]+/),T="aria-",$e="data-";function Ze(ae,ee){return ae.indexOf(ee)===0}function le(ae){var ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,K;ee===!1?K={aria:!0,data:!0,attr:!0}:ee===!0?K={aria:!0}:K=(0,be.Z)({},ee);var t={};return Object.keys(ae).forEach(function(q){(K.aria&&(q==="role"||Ze(q,T))||K.data&&Ze(q,$e)||K.attr&&P.includes(q))&&(t[q]=ae[q])}),t}},21864:function(gt,Fe,D){D.d(Fe,{Z:function(){return Yt}});var be=D(2053),he=D(24744),H=D(98037),P=D(57904),T=D(99459),$e=D(58006),Ze=D(82187),le=D.n(Ze),ae=D(5930),ee=D(52190),K=D(78237),t=D(75271),q=D(30967),Ue=t.forwardRef(function(e,u){var n=e.height,a=e.offsetY,v=e.offsetX,d=e.children,c=e.prefixCls,o=e.onInnerResize,M=e.innerProps,h=e.rtl,R=e.extra,i={},S={display:"flex",flexDirection:"column"};return a!==void 0&&(i={height:n,position:"relative",overflow:"hidden"},S=(0,H.Z)((0,H.Z)({},S),{},(0,P.Z)((0,P.Z)((0,P.Z)((0,P.Z)((0,P.Z)({transform:"translateY(".concat(a,"px)")},h?"marginRight":"marginLeft",-v),"position","absolute"),"left",0),"right",0),"top",0))),t.createElement("div",{style:i},t.createElement(ae.Z,{onResize:function(m){var f=m.offsetHeight;f&&o&&o()}},t.createElement("div",(0,be.Z)({style:S,className:le()((0,P.Z)({},"".concat(c,"-holder-inner"),c)),ref:u},M),d,R)))});Ue.displayName="Filler";var St=Ue;function Rt(e){var u=e.children,n=e.setRef,a=t.useCallback(function(v){n(v)},[]);return t.cloneElement(u,{ref:a})}function pt(e,u,n,a,v,d,c,o){var M=o.getKey;return e.slice(u,n+1).map(function(h,R){var i=u+R,S=c(h,i,{style:{width:a},offsetX:v}),s=M(h);return t.createElement(Rt,{key:s,setRef:function(f){return d(h,f)}},S)})}function ar(e,u,n,a){var v=n-e,d=u-n,c=Math.min(v,d)*2;if(a<=c){var o=Math.floor(a/2);return a%2?n+o+1:n-o}return v>d?n-(a-d):n+(a-v)}function Mt(e,u,n){var a=e.length,v=u.length,d,c;if(a===0&&v===0)return null;a<v?(d=e,c=u):(d=u,c=e);var o={__EMPTY_ITEM__:!0};function M(m){return m!==void 0?n(m):o}for(var h=null,R=Math.abs(a-v)!==1,i=0;i<c.length;i+=1){var S=M(d[i]),s=M(c[i]);if(S!==s){h=i,R=R||S!==M(c[i+1]);break}}return h===null?null:{index:h,multiple:R}}function yt(e,u,n){var a=t.useState(e),v=(0,T.Z)(a,2),d=v[0],c=v[1],o=t.useState(null),M=(0,T.Z)(o,2),h=M[0],R=M[1];return t.useEffect(function(){var i=Mt(d||[],e||[],u);(i==null?void 0:i.index)!==void 0&&(n==null||n(i.index),R(e[i.index])),c(e)},[e]),[h]}var G=D(40197),Et=(typeof navigator=="undefined"?"undefined":(0,he.Z)(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),Ge=Et,Je=function(e,u,n,a){var v=(0,t.useRef)(!1),d=(0,t.useRef)(null);function c(){clearTimeout(d.current),v.current=!0,d.current=setTimeout(function(){v.current=!1},50)}var o=(0,t.useRef)({top:e,bottom:u,left:n,right:a});return o.current.top=e,o.current.bottom=u,o.current.left=n,o.current.right=a,function(M,h){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=M?h<0&&o.current.left||h>0&&o.current.right:h<0&&o.current.top||h>0&&o.current.bottom;return R&&i?(clearTimeout(d.current),v.current=!1):(!i||v.current)&&c(),!v.current&&i}};function bt(e,u,n,a,v,d,c){var o=(0,t.useRef)(0),M=(0,t.useRef)(null),h=(0,t.useRef)(null),R=(0,t.useRef)(!1),i=Je(u,n,a,v);function S(g,E){if(G.Z.cancel(M.current),!i(!1,E)){var Z=g;if(!Z._virtualHandled)Z._virtualHandled=!0;else return;o.current+=E,h.current=E,Ge||Z.preventDefault(),M.current=(0,G.Z)(function(){var k=R.current?10:1;c(o.current*k,!1),o.current=0})}}function s(g,E){c(E,!0),Ge||g.preventDefault()}var m=(0,t.useRef)(null),f=(0,t.useRef)(null);function y(g){if(e){G.Z.cancel(f.current),f.current=(0,G.Z)(function(){m.current=null},2);var E=g.deltaX,Z=g.deltaY,k=g.shiftKey,N=E,x=Z;(m.current==="sx"||!m.current&&k&&Z&&!E)&&(N=Z,x=0,m.current="sx");var X=Math.abs(N),O=Math.abs(x);m.current===null&&(m.current=d&&X>O?"x":"y"),m.current==="y"?S(g,x):s(g,N)}}function b(g){e&&(R.current=g.detail===h.current)}return[y,b]}function Zt(e,u,n,a){var v=t.useMemo(function(){return[new Map,[]]},[e,n.id,a]),d=(0,T.Z)(v,2),c=d[0],o=d[1],M=function(R){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R,S=c.get(R),s=c.get(i);if(S===void 0||s===void 0)for(var m=e.length,f=o.length;f<m;f+=1){var y,b=e[f],g=u(b);c.set(g,f);var E=(y=n.get(g))!==null&&y!==void 0?y:a;if(o[f]=(o[f-1]||0)+E,g===R&&(S=f),g===i&&(s=f),S!==void 0&&s!==void 0)break}return{top:o[S-1]||0,bottom:o[s]}};return M}var xt=D(93387),Ct=D(73779),Lt=D(71374),wt=function(){function e(){(0,Ct.Z)(this,e),(0,P.Z)(this,"maps",void 0),(0,P.Z)(this,"id",0),(0,P.Z)(this,"diffKeys",new Set),this.maps=Object.create(null)}return(0,Lt.Z)(e,[{key:"set",value:function(n,a){this.maps[n]=a,this.id+=1,this.diffKeys.add(n)}},{key:"get",value:function(n){return this.maps[n]}},{key:"resetRecord",value:function(){this.diffKeys.clear()}},{key:"getRecord",value:function(){return this.diffKeys}}]),e}(),Dt=wt;function Qe(e){var u=parseFloat(e);return isNaN(u)?0:u}function Tt(e,u,n){var a=t.useState(0),v=(0,T.Z)(a,2),d=v[0],c=v[1],o=(0,t.useRef)(new Map),M=(0,t.useRef)(new Dt),h=(0,t.useRef)(0);function R(){h.current+=1}function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;R();var m=function(){var b=!1;o.current.forEach(function(g,E){if(g&&g.offsetParent){var Z=(0,xt.ZP)(g),k=Z.offsetHeight,N=getComputedStyle(Z),x=N.marginTop,X=N.marginBottom,O=Qe(x),U=Qe(X),Y=k+O+U;M.current.get(E)!==Y&&(M.current.set(E,Y),b=!0)}}),b&&c(function(g){return g+1})};if(s)m();else{h.current+=1;var f=h.current;Promise.resolve().then(function(){f===h.current&&m()})}}function S(s,m){var f=e(s),y=o.current.get(f);m?(o.current.set(f,m),i()):o.current.delete(f),!y!=!m&&(m?u==null||u(s):n==null||n(s))}return(0,t.useEffect)(function(){return R},[]),[S,i,M.current,d]}var qe=14/15;function Pt(e,u,n){var a=(0,t.useRef)(!1),v=(0,t.useRef)(0),d=(0,t.useRef)(0),c=(0,t.useRef)(null),o=(0,t.useRef)(null),M,h=function(s){if(a.current){var m=Math.ceil(s.touches[0].pageX),f=Math.ceil(s.touches[0].pageY),y=v.current-m,b=d.current-f,g=Math.abs(y)>Math.abs(b);g?v.current=m:d.current=f;var E=n(g,g?y:b,!1,s);E&&s.preventDefault(),clearInterval(o.current),E&&(o.current=setInterval(function(){g?y*=qe:b*=qe;var Z=Math.floor(g?y:b);(!n(g,Z,!0)||Math.abs(Z)<=.1)&&clearInterval(o.current)},16))}},R=function(){a.current=!1,M()},i=function(s){M(),s.touches.length===1&&!a.current&&(a.current=!0,v.current=Math.ceil(s.touches[0].pageX),d.current=Math.ceil(s.touches[0].pageY),c.current=s.target,c.current.addEventListener("touchmove",h,{passive:!1}),c.current.addEventListener("touchend",R,{passive:!0}))};M=function(){c.current&&(c.current.removeEventListener("touchmove",h),c.current.removeEventListener("touchend",R))},(0,K.Z)(function(){return e&&u.current.addEventListener("touchstart",i,{passive:!0}),function(){var S;(S=u.current)===null||S===void 0||S.removeEventListener("touchstart",i),M(),clearInterval(o.current)}},[e])}function _e(e){return Math.floor(Math.pow(e,.5))}function Be(e,u){var n="touches"in e?e.touches[0]:e;return n[u?"pageX":"pageY"]-window[u?"scrollX":"scrollY"]}function zt(e,u,n){t.useEffect(function(){var a=u.current;if(e&&a){var v=!1,d,c,o=function(){G.Z.cancel(d)},M=function S(){o(),d=(0,G.Z)(function(){n(c),S()})},h=function(s){var m=s;m._virtualHandled||(m._virtualHandled=!0,v=!0)},R=function(){v=!1,o()},i=function(s){if(v){var m=Be(s,!1),f=a.getBoundingClientRect(),y=f.top,b=f.bottom;if(m<=y){var g=y-m;c=-_e(g),M()}else if(m>=b){var E=m-b;c=_e(E),M()}else o()}};return a.addEventListener("mousedown",h),a.ownerDocument.addEventListener("mouseup",R),a.ownerDocument.addEventListener("mousemove",i),function(){a.removeEventListener("mousedown",h),a.ownerDocument.removeEventListener("mouseup",R),a.ownerDocument.removeEventListener("mousemove",i),o()}}},[e])}var Ht=10;function Ot(e,u,n,a,v,d,c,o){var M=t.useRef(),h=t.useState(null),R=(0,T.Z)(h,2),i=R[0],S=R[1];return(0,K.Z)(function(){if(i&&i.times<Ht){if(!e.current){S(function(F){return(0,H.Z)({},F)});return}d();var s=i.targetAlign,m=i.originAlign,f=i.index,y=i.offset,b=e.current.clientHeight,g=!1,E=s,Z=null;if(b){for(var k=s||m,N=0,x=0,X=0,O=Math.min(u.length-1,f),U=0;U<=O;U+=1){var Y=v(u[U]);x=N;var oe=n.get(Y);X=x+(oe===void 0?a:oe),N=X}for(var ie=k==="top"?y:b-y,I=O;I>=0;I-=1){var se=v(u[I]),B=n.get(se);if(B===void 0){g=!0;break}if(ie-=B,ie<=0)break}switch(k){case"top":Z=x-y;break;case"bottom":Z=X-b+y;break;default:{var te=e.current.scrollTop,V=te+b;x<te?E="top":X>V&&(E="bottom")}}Z!==null&&c(Z),Z!==i.lastTop&&(g=!0)}g&&S((0,H.Z)((0,H.Z)({},i),{},{times:i.times+1,targetAlign:E,lastTop:Z}))}},[i,e.current]),function(s){if(s==null){o();return}if(G.Z.cancel(M.current),typeof s=="number")c(s);else if(s&&(0,he.Z)(s)==="object"){var m,f=s.align;"index"in s?m=s.index:m=u.findIndex(function(g){return v(g)===s.key});var y=s.offset,b=y===void 0?0:y;S({times:0,index:m,offset:b,originAlign:f})}}}var It=t.forwardRef(function(e,u){var n=e.prefixCls,a=e.rtl,v=e.scrollOffset,d=e.scrollRange,c=e.onStartMove,o=e.onStopMove,M=e.onScroll,h=e.horizontal,R=e.spinSize,i=e.containerSize,S=e.style,s=e.thumbStyle,m=t.useState(!1),f=(0,T.Z)(m,2),y=f[0],b=f[1],g=t.useState(null),E=(0,T.Z)(g,2),Z=E[0],k=E[1],N=t.useState(null),x=(0,T.Z)(N,2),X=x[0],O=x[1],U=!a,Y=t.useRef(),oe=t.useRef(),ie=t.useState(!1),I=(0,T.Z)(ie,2),se=I[0],B=I[1],te=t.useRef(),V=function(){clearTimeout(te.current),B(!0),te.current=setTimeout(function(){B(!1)},3e3)},F=d-i||0,me=i-R||0,w=t.useMemo(function(){if(v===0||F===0)return 0;var W=v/F;return W*me},[v,F,me]),re=function(C){C.stopPropagation(),C.preventDefault()},ce=t.useRef({top:w,dragging:y,pageY:Z,startTop:X});ce.current={top:w,dragging:y,pageY:Z,startTop:X};var fe=function(C){b(!0),k(Be(C,h)),O(ce.current.top),c(),C.stopPropagation(),C.preventDefault()};t.useEffect(function(){var W=function(ve){ve.preventDefault()},C=Y.current,j=oe.current;return C.addEventListener("touchstart",W,{passive:!1}),j.addEventListener("touchstart",fe,{passive:!1}),function(){C.removeEventListener("touchstart",W),j.removeEventListener("touchstart",fe)}},[]);var xe=t.useRef();xe.current=F;var ge=t.useRef();ge.current=me,t.useEffect(function(){if(y){var W,C=function(ve){var Se=ce.current,Le=Se.dragging,we=Se.pageY,De=Se.startTop;G.Z.cancel(W);var Te=Y.current.getBoundingClientRect(),ne=i/(h?Te.width:Te.height);if(Le){var Re=(Be(ve,h)-we)*ne,pe=De;!U&&h?pe-=Re:pe+=Re;var Pe=xe.current,ze=ge.current,We=ze?pe/ze:0,Q=Math.ceil(We*Pe);Q=Math.max(Q,0),Q=Math.min(Q,Pe),W=(0,G.Z)(function(){M(Q,h)})}},j=function(){b(!1),o()};return window.addEventListener("mousemove",C,{passive:!0}),window.addEventListener("touchmove",C,{passive:!0}),window.addEventListener("mouseup",j,{passive:!0}),window.addEventListener("touchend",j,{passive:!0}),function(){window.removeEventListener("mousemove",C),window.removeEventListener("touchmove",C),window.removeEventListener("mouseup",j),window.removeEventListener("touchend",j),G.Z.cancel(W)}}},[y]),t.useEffect(function(){return V(),function(){clearTimeout(te.current)}},[v]),t.useImperativeHandle(u,function(){return{delayHidden:V}});var $="".concat(n,"-scrollbar"),A={position:"absolute",visibility:se?null:"hidden"},J={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return h?(A.height=8,A.left=0,A.right=0,A.bottom=0,J.height="100%",J.width=R,U?J.left=w:J.right=w):(A.width=8,A.top=0,A.bottom=0,U?A.right=0:A.left=0,J.width="100%",J.height=R,J.top=w),t.createElement("div",{ref:Y,className:le()($,(0,P.Z)((0,P.Z)((0,P.Z)({},"".concat($,"-horizontal"),h),"".concat($,"-vertical"),!h),"".concat($,"-visible"),se)),style:(0,H.Z)((0,H.Z)({},A),S),onMouseDown:re,onMouseMove:V},t.createElement("div",{ref:oe,className:le()("".concat($,"-thumb"),(0,P.Z)({},"".concat($,"-thumb-moving"),y)),style:(0,H.Z)((0,H.Z)({},J),s),onMouseDown:fe}))}),et=It,Nt=20;function tt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e/u*e;return isNaN(n)&&(n=0),n=Math.max(n,Nt),Math.floor(n)}var Ft=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],$t=[],Bt={overflowY:"auto",overflowAnchor:"none"};function Wt(e,u){var n=e.prefixCls,a=n===void 0?"rc-virtual-list":n,v=e.className,d=e.height,c=e.itemHeight,o=e.fullHeight,M=o===void 0?!0:o,h=e.style,R=e.data,i=e.children,S=e.itemKey,s=e.virtual,m=e.direction,f=e.scrollWidth,y=e.component,b=y===void 0?"div":y,g=e.onScroll,E=e.onVirtualScroll,Z=e.onVisibleChange,k=e.innerProps,N=e.extraRender,x=e.styles,X=(0,$e.Z)(e,Ft),O=t.useCallback(function(l){return typeof S=="function"?S(l):l==null?void 0:l[S]},[S]),U=Tt(O,null,null),Y=(0,T.Z)(U,4),oe=Y[0],ie=Y[1],I=Y[2],se=Y[3],B=!!(s!==!1&&d&&c),te=t.useMemo(function(){return Object.values(I.maps).reduce(function(l,r){return l+r},0)},[I.id,I.maps]),V=B&&R&&(Math.max(c*R.length,te)>d||!!f),F=m==="rtl",me=le()(a,(0,P.Z)({},"".concat(a,"-rtl"),F),v),w=R||$t,re=(0,t.useRef)(),ce=(0,t.useRef)(),fe=(0,t.useRef)(),xe=(0,t.useState)(0),ge=(0,T.Z)(xe,2),$=ge[0],A=ge[1],J=(0,t.useState)(0),W=(0,T.Z)(J,2),C=W[0],j=W[1],Ce=(0,t.useState)(!1),ve=(0,T.Z)(Ce,2),Se=ve[0],Le=ve[1],we=function(){Le(!0)},De=function(){Le(!1)},Te={getKey:O};function ne(l){A(function(r){var p;typeof l=="function"?p=l(r):p=l;var L=Ut(p);return re.current.scrollTop=L,L})}var Re=(0,t.useRef)({start:0,end:w.length}),pe=(0,t.useRef)(),Pe=yt(w,O),ze=(0,T.Z)(Pe,1),We=ze[0];pe.current=We;var Q=t.useMemo(function(){if(!B)return{scrollHeight:void 0,start:0,end:w.length-1,offset:void 0};if(!V){var l;return{scrollHeight:((l=ce.current)===null||l===void 0?void 0:l.offsetHeight)||0,start:0,end:w.length-1,offset:void 0}}for(var r=0,p,L,z,Ne=w.length,Ee=0;Ee<Ne;Ee+=1){var rr=w[Ee],nr=O(rr),mt=I.get(nr),je=r+(mt===void 0?c:mt);je>=$&&p===void 0&&(p=Ee,L=r),je>$+d&&z===void 0&&(z=Ee),r=je}return p===void 0&&(p=0,L=0,z=Math.ceil(d/c)),z===void 0&&(z=w.length-1),z=Math.min(z+1,w.length-1),{scrollHeight:r,start:p,end:z,offset:L}},[V,B,$,w,se,d]),ue=Q.scrollHeight,de=Q.start,Me=Q.end,nt=Q.offset;Re.current.start=de,Re.current.end=Me,t.useLayoutEffect(function(){var l=I.getRecord();if(l.size===1){var r=Array.from(l)[0],p=O(w[de]);if(p===r){var L=I.get(r),z=L-c;ne(function(Ne){return Ne+z})}}I.resetRecord()},[ue]);var Kt=t.useState({width:0,height:d}),at=(0,T.Z)(Kt,2),_=at[0],kt=at[1],Vt=function(r){kt({width:r.offsetWidth,height:r.offsetHeight})},ot=(0,t.useRef)(),it=(0,t.useRef)(),At=t.useMemo(function(){return tt(_.width,f)},[_.width,f]),jt=t.useMemo(function(){return tt(_.height,ue)},[_.height,ue]),Xe=ue-d,Ye=(0,t.useRef)(Xe);Ye.current=Xe;function Ut(l){var r=l;return Number.isNaN(Ye.current)||(r=Math.min(r,Ye.current)),r=Math.max(r,0),r}var He=$<=0,Oe=$>=Xe,ut=C<=0,lt=C>=f,Gt=Je(He,Oe,ut,lt),Ke=function(){return{x:F?-C:C,y:$}},ke=(0,t.useRef)(Ke()),Ie=(0,ee.zX)(function(l){if(E){var r=(0,H.Z)((0,H.Z)({},Ke()),l);(ke.current.x!==r.x||ke.current.y!==r.y)&&(E(r),ke.current=r)}});function st(l,r){var p=l;r?((0,q.flushSync)(function(){j(p)}),Ie()):ne(p)}function Jt(l){var r=l.currentTarget.scrollTop;r!==$&&ne(r),g==null||g(l),Ie()}var Ve=function(r){var p=r,L=f?f-_.width:0;return p=Math.max(p,0),p=Math.min(p,L),p},Qt=(0,ee.zX)(function(l,r){r?((0,q.flushSync)(function(){j(function(p){var L=p+(F?-l:l);return Ve(L)})}),Ie()):ne(function(p){var L=p+l;return L})}),qt=bt(B,He,Oe,ut,lt,!!f,Qt),ct=(0,T.Z)(qt,2),Ae=ct[0],ft=ct[1];Pt(B,re,function(l,r,p,L){var z=L;return Gt(l,r,p)?!1:!z||!z._virtualHandled?(z&&(z._virtualHandled=!0),Ae({preventDefault:function(){},deltaX:l?r:0,deltaY:l?0:r}),!0):!1}),zt(V,re,function(l){ne(function(r){return r+l})}),(0,K.Z)(function(){function l(p){var L=He&&p.detail<0,z=Oe&&p.detail>0;B&&!L&&!z&&p.preventDefault()}var r=re.current;return r.addEventListener("wheel",Ae,{passive:!1}),r.addEventListener("DOMMouseScroll",ft,{passive:!0}),r.addEventListener("MozMousePixelScroll",l,{passive:!1}),function(){r.removeEventListener("wheel",Ae),r.removeEventListener("DOMMouseScroll",ft),r.removeEventListener("MozMousePixelScroll",l)}},[B,He,Oe]),(0,K.Z)(function(){if(f){var l=Ve(C);j(l),Ie({x:l})}},[_.width,f]);var vt=function(){var r,p;(r=ot.current)===null||r===void 0||r.delayHidden(),(p=it.current)===null||p===void 0||p.delayHidden()},dt=Ot(re,w,I,c,O,function(){return ie(!0)},ne,vt);t.useImperativeHandle(u,function(){return{nativeElement:fe.current,getScrollInfo:Ke,scrollTo:function(r){function p(L){return L&&(0,he.Z)(L)==="object"&&("left"in L||"top"in L)}p(r)?(r.left!==void 0&&j(Ve(r.left)),dt(r.top)):dt(r)}}}),(0,K.Z)(function(){if(Z){var l=w.slice(de,Me+1);Z(l,w)}},[de,Me,w]);var _t=Zt(w,O,I,c),er=N==null?void 0:N({start:de,end:Me,virtual:V,offsetX:C,offsetY:nt,rtl:F,getSize:_t}),tr=pt(w,de,Me,f,C,oe,i,Te),ye=null;d&&(ye=(0,H.Z)((0,P.Z)({},M?"height":"maxHeight",d),Bt),B&&(ye.overflowY="hidden",f&&(ye.overflowX="hidden"),Se&&(ye.pointerEvents="none")));var ht={};return F&&(ht.dir="rtl"),t.createElement("div",(0,be.Z)({ref:fe,style:(0,H.Z)((0,H.Z)({},h),{},{position:"relative"}),className:me},ht,X),t.createElement(ae.Z,{onResize:Vt},t.createElement(b,{className:"".concat(a,"-holder"),style:ye,ref:re,onScroll:Jt,onMouseEnter:vt},t.createElement(St,{prefixCls:a,height:ue,offsetX:C,offsetY:nt,scrollWidth:f,onInnerResize:ie,ref:ce,innerProps:k,rtl:F,extra:er},tr))),V&&ue>d&&t.createElement(et,{ref:ot,prefixCls:a,scrollOffset:$,scrollRange:ue,rtl:F,onScroll:st,onStartMove:we,onStopMove:De,spinSize:jt,containerSize:_.height,style:x==null?void 0:x.verticalScrollBar,thumbStyle:x==null?void 0:x.verticalScrollBarThumb}),V&&f>_.width&&t.createElement(et,{ref:it,prefixCls:a,scrollOffset:C,scrollRange:f,rtl:F,onScroll:st,onStartMove:we,onStopMove:De,spinSize:At,containerSize:_.width,horizontal:!0,style:x==null?void 0:x.horizontalScrollBar,thumbStyle:x==null?void 0:x.horizontalScrollBarThumb}))}var rt=t.forwardRef(Wt);rt.displayName="List";var Xt=rt,Yt=Xt}}]);