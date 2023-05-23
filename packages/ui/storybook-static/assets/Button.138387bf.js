import{r as P}from"./index.59aa917f.js";import{S as Rt}from"./Spinner.1d54eade.js";import{_ as At}from"./objectWithoutPropertiesLoose.b60bc317.js";import{_ as Z}from"./extends.842bf898.js";import{r as Tt}from"./index.ecef2a71.js";import{s as Ee,C as lt}from"./Storybook.b497f08e.js";import{l as ct,b as ee,a as _e,c as Je}from"./index.81122112.js";import{a as Pe,j as Y,F as kt}from"./jsx-runtime.2eaea906.js";var Ge=function(t){return t.reduce(function(r,n){var o=n[0],i=n[1];return r[o]=i,r},{})},Ke=typeof window<"u"&&window.document&&window.document.createElement?P.exports.useLayoutEffect:P.exports.useEffect,j="top",F="bottom",N="right",D="left",ke="auto",me=[j,F,N,D],oe="start",de="end",Lt="clippingParents",ut="viewport",ce="popper",Bt="reference",Qe=me.reduce(function(e,t){return e.concat([t+"-"+oe,t+"-"+de])},[]),ft=[].concat(me,[ke]).reduce(function(e,t){return e.concat([t,t+"-"+oe,t+"-"+de])},[]),jt="beforeRead",Dt="read",Mt="afterRead",Ft="beforeMain",Nt="main",Ht="afterMain",It="beforeWrite",Wt="write",zt="afterWrite",Vt=[jt,Dt,Mt,Ft,Nt,Ht,It,Wt,zt];function z(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ie(e){var t=H(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=H(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Le(e){if(typeof ShadowRoot>"u")return!1;var t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Xt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},i=t.elements[r];!M(i)||!z(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function qt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],i=t.attributes[n]||{},a=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=a.reduce(function(l,p){return l[p]="",l},{});!M(o)||!z(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(l){o.removeAttribute(l)}))})}}const Ut={name:"applyStyles",enabled:!0,phase:"write",fn:Xt,effect:qt,requires:["computeStyles"]};function W(e){return e.split("-")[0]}var te=Math.max,$e=Math.min,ae=Math.round;function se(e,t){t===void 0&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;if(M(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(n=ae(r.width)/a||1),i>0&&(o=ae(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function Be(e){var t=se(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function dt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Le(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function q(e){return H(e).getComputedStyle(e)}function Yt(e){return["table","td","th"].indexOf(z(e))>=0}function _(e){return((ie(e)?e.ownerDocument:e.document)||window.document).documentElement}function Se(e){return z(e)==="html"?e:e.assignedSlot||e.parentNode||(Le(e)?e.host:null)||_(e)}function Ze(e){return!M(e)||q(e).position==="fixed"?null:e.offsetParent}function _t(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&M(e)){var n=q(e);if(n.position==="fixed")return null}var o=Se(e);for(Le(o)&&(o=o.host);M(o)&&["html","body"].indexOf(z(o))<0;){var i=q(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function ge(e){for(var t=H(e),r=Ze(e);r&&Yt(r)&&q(r).position==="static";)r=Ze(r);return r&&(z(r)==="html"||z(r)==="body"&&q(r).position==="static")?t:r||_t(e)||t}function je(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ue(e,t,r){return te(e,$e(t,r))}function Jt(e,t,r){var n=ue(e,t,r);return n>r?r:n}function vt(){return{top:0,right:0,bottom:0,left:0}}function mt(e){return Object.assign({},vt(),e)}function gt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Gt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,mt(typeof t!="number"?t:gt(t,me))};function Kt(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=W(r.placement),l=je(s),p=[D,N].indexOf(s)>=0,c=p?"height":"width";if(!(!i||!a)){var f=Gt(o.padding,r),d=Be(i),u=l==="y"?j:D,h=l==="y"?F:N,m=r.rects.reference[c]+r.rects.reference[l]-a[l]-r.rects.popper[c],v=a[l]-r.rects.reference[l],E=ge(i),C=E?l==="y"?E.clientHeight||0:E.clientWidth||0:0,R=m/2-v/2,g=f[u],$=C-d[c]-f[h],y=C/2-d[c]/2+R,x=ue(g,y,$),w=l;r.modifiersData[n]=(t={},t[w]=x,t.centerOffset=x-y,t)}}function Qt(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!dt(t.elements.popper,o)||(t.elements.arrow=o))}const Zt={name:"arrow",enabled:!0,phase:"main",fn:Kt,effect:Qt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function pe(e){return e.split("-")[1]}var er={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tr(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:ae(t*o)/o||0,y:ae(r*o)/o||0}}function et(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,p=e.adaptive,c=e.roundOffsets,f=e.isFixed,d=a.x,u=d===void 0?0:d,h=a.y,m=h===void 0?0:h,v=typeof c=="function"?c({x:u,y:m}):{x:u,y:m};u=v.x,m=v.y;var E=a.hasOwnProperty("x"),C=a.hasOwnProperty("y"),R=D,g=j,$=window;if(p){var y=ge(r),x="clientHeight",w="clientWidth";if(y===H(r)&&(y=_(r),q(y).position!=="static"&&s==="absolute"&&(x="scrollHeight",w="scrollWidth")),y=y,o===j||(o===D||o===N)&&i===de){g=F;var O=f&&y===$&&$.visualViewport?$.visualViewport.height:y[x];m-=O-n.height,m*=l?1:-1}if(o===D||(o===j||o===F)&&i===de){R=N;var S=f&&y===$&&$.visualViewport?$.visualViewport.width:y[w];u-=S-n.width,u*=l?1:-1}}var A=Object.assign({position:s},p&&er),B=c===!0?tr({x:u,y:m}):{x:u,y:m};if(u=B.x,m=B.y,l){var L;return Object.assign({},A,(L={},L[g]=C?"0":"",L[R]=E?"0":"",L.transform=($.devicePixelRatio||1)<=1?"translate("+u+"px, "+m+"px)":"translate3d("+u+"px, "+m+"px, 0)",L))}return Object.assign({},A,(t={},t[g]=C?m+"px":"",t[R]=E?u+"px":"",t.transform="",t))}function rr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,a=i===void 0?!0:i,s=r.roundOffsets,l=s===void 0?!0:s,p={placement:W(t.placement),variation:pe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,et(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,et(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const nr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:rr,data:{}};var be={passive:!0};function or(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,a=n.resize,s=a===void 0?!0:a,l=H(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach(function(c){c.addEventListener("scroll",r.update,be)}),s&&l.addEventListener("resize",r.update,be),function(){i&&p.forEach(function(c){c.removeEventListener("scroll",r.update,be)}),s&&l.removeEventListener("resize",r.update,be)}}const ir={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:or,data:{}};var ar={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,function(t){return ar[t]})}var sr={start:"end",end:"start"};function tt(e){return e.replace(/start|end/g,function(t){return sr[t]})}function De(e){var t=H(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Me(e){return se(_(e)).left+De(e).scrollLeft}function pr(e){var t=H(e),r=_(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+Me(e),y:s}}function lr(e){var t,r=_(e),n=De(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=te(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=te(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+Me(e),l=-n.scrollTop;return q(o||r).direction==="rtl"&&(s+=te(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}function Fe(e){var t=q(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function ht(e){return["html","body","#document"].indexOf(z(e))>=0?e.ownerDocument.body:M(e)&&Fe(e)?e:ht(Se(e))}function fe(e,t){var r;t===void 0&&(t=[]);var n=ht(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=H(n),a=o?[i].concat(i.visualViewport||[],Fe(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(fe(Se(a)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function cr(e){var t=se(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function rt(e,t){return t===ut?Te(pr(e)):ie(t)?cr(t):Te(lr(_(e)))}function ur(e){var t=fe(Se(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,n=r&&M(e)?ge(e):e;return ie(n)?t.filter(function(o){return ie(o)&&dt(o,n)&&z(o)!=="body"}):[]}function fr(e,t,r){var n=t==="clippingParents"?ur(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce(function(s,l){var p=rt(e,l);return s.top=te(p.top,s.top),s.right=$e(p.right,s.right),s.bottom=$e(p.bottom,s.bottom),s.left=te(p.left,s.left),s},rt(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function yt(e){var t=e.reference,r=e.element,n=e.placement,o=n?W(n):null,i=n?pe(n):null,a=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,l;switch(o){case j:l={x:a,y:t.y-r.height};break;case F:l={x:a,y:t.y+t.height};break;case N:l={x:t.x+t.width,y:s};break;case D:l={x:t.x-r.width,y:s};break;default:l={x:t.x,y:t.y}}var p=o?je(o):null;if(p!=null){var c=p==="y"?"height":"width";switch(i){case oe:l[p]=l[p]-(t[c]/2-r[c]/2);break;case de:l[p]=l[p]+(t[c]/2-r[c]/2);break}}return l}function ve(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.boundary,a=i===void 0?Lt:i,s=r.rootBoundary,l=s===void 0?ut:s,p=r.elementContext,c=p===void 0?ce:p,f=r.altBoundary,d=f===void 0?!1:f,u=r.padding,h=u===void 0?0:u,m=mt(typeof h!="number"?h:gt(h,me)),v=c===ce?Bt:ce,E=e.rects.popper,C=e.elements[d?v:c],R=fr(ie(C)?C:C.contextElement||_(e.elements.popper),a,l),g=se(e.elements.reference),$=yt({reference:g,element:E,strategy:"absolute",placement:o}),y=Te(Object.assign({},E,$)),x=c===ce?y:g,w={top:R.top-x.top+m.top,bottom:x.bottom-R.bottom+m.bottom,left:R.left-x.left+m.left,right:x.right-R.right+m.right},O=e.modifiersData.offset;if(c===ce&&O){var S=O[o];Object.keys(w).forEach(function(A){var B=[N,F].indexOf(A)>=0?1:-1,L=[j,F].indexOf(A)>=0?"y":"x";w[A]+=S[L]*B})}return w}function dr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,p=l===void 0?ft:l,c=pe(n),f=c?s?Qe:Qe.filter(function(h){return pe(h)===c}):me,d=f.filter(function(h){return p.indexOf(h)>=0});d.length===0&&(d=f);var u=d.reduce(function(h,m){return h[m]=ve(e,{placement:m,boundary:o,rootBoundary:i,padding:a})[W(m)],h},{});return Object.keys(u).sort(function(h,m){return u[h]-u[m]})}function vr(e){if(W(e)===ke)return[];var t=we(e);return[tt(e),t,tt(t)]}function mr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,a=r.altAxis,s=a===void 0?!0:a,l=r.fallbackPlacements,p=r.padding,c=r.boundary,f=r.rootBoundary,d=r.altBoundary,u=r.flipVariations,h=u===void 0?!0:u,m=r.allowedAutoPlacements,v=t.options.placement,E=W(v),C=E===v,R=l||(C||!h?[we(v)]:vr(v)),g=[v].concat(R).reduce(function(ne,U){return ne.concat(W(U)===ke?dr(t,{placement:U,boundary:c,rootBoundary:f,padding:p,flipVariations:h,allowedAutoPlacements:m}):U)},[]),$=t.rects.reference,y=t.rects.popper,x=new Map,w=!0,O=g[0],S=0;S<g.length;S++){var A=g[S],B=W(A),L=pe(A)===oe,J=[j,F].indexOf(B)>=0,T=J?"width":"height",b=ve(t,{placement:A,boundary:c,rootBoundary:f,altBoundary:d,padding:p}),k=J?L?N:D:L?F:j;$[T]>y[T]&&(k=we(k));var V=we(k),I=[];if(i&&I.push(b[B]<=0),s&&I.push(b[k]<=0,b[V]<=0),I.every(function(ne){return ne})){O=A,w=!1;break}x.set(A,I)}if(w)for(var G=h?3:1,re=function(U){var le=g.find(function(ye){var K=x.get(ye);if(K)return K.slice(0,U).every(function(Ce){return Ce})});if(le)return O=le,"break"},X=G;X>0;X--){var he=re(X);if(he==="break")break}t.placement!==O&&(t.modifiersData[n]._skip=!0,t.placement=O,t.reset=!0)}}const gr={name:"flip",enabled:!0,phase:"main",fn:mr,requiresIfExists:["offset"],data:{_skip:!1}};function nt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ot(e){return[j,N,F,D].some(function(t){return e[t]>=0})}function hr(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ve(t,{elementContext:"reference"}),s=ve(t,{altBoundary:!0}),l=nt(a,n),p=nt(s,o,i),c=ot(l),f=ot(p);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f})}const yr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hr};function xr(e,t,r){var n=W(e),o=[D,j].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[D,N].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}function br(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,a=ft.reduce(function(c,f){return c[f]=xr(f,t.rects,i),c},{}),s=a[t.placement],l=s.x,p=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=a}const wr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:br};function Or(e){var t=e.state,r=e.name;t.modifiersData[r]=yt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Er={name:"popperOffsets",enabled:!0,phase:"read",fn:Or,data:{}};function Pr(e){return e==="x"?"y":"x"}function $r(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,a=r.altAxis,s=a===void 0?!1:a,l=r.boundary,p=r.rootBoundary,c=r.altBoundary,f=r.padding,d=r.tether,u=d===void 0?!0:d,h=r.tetherOffset,m=h===void 0?0:h,v=ve(t,{boundary:l,rootBoundary:p,padding:f,altBoundary:c}),E=W(t.placement),C=pe(t.placement),R=!C,g=je(E),$=Pr(g),y=t.modifiersData.popperOffsets,x=t.rects.reference,w=t.rects.popper,O=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,S=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(!!y){if(i){var L,J=g==="y"?j:D,T=g==="y"?F:N,b=g==="y"?"height":"width",k=y[g],V=k+v[J],I=k-v[T],G=u?-w[b]/2:0,re=C===oe?x[b]:w[b],X=C===oe?-w[b]:-x[b],he=t.elements.arrow,ne=u&&he?Be(he):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:vt(),le=U[J],ye=U[T],K=ue(0,x[b],ne[b]),Ce=R?x[b]/2-G-K-le-S.mainAxis:re-K-le-S.mainAxis,Ot=R?-x[b]/2+G+K+ye+S.mainAxis:X+K+ye+S.mainAxis,Re=t.elements.arrow&&ge(t.elements.arrow),Et=Re?g==="y"?Re.clientTop||0:Re.clientLeft||0:0,He=(L=A==null?void 0:A[g])!=null?L:0,Pt=k+Ce-He-Et,$t=k+Ot-He,Ie=ue(u?$e(V,Pt):V,k,u?te(I,$t):I);y[g]=Ie,B[g]=Ie-k}if(s){var We,St=g==="x"?j:D,Ct=g==="x"?F:N,Q=y[$],xe=$==="y"?"height":"width",ze=Q+v[St],Ve=Q-v[Ct],Ae=[j,D].indexOf(E)!==-1,Xe=(We=A==null?void 0:A[$])!=null?We:0,qe=Ae?ze:Q-x[xe]-w[xe]-Xe+S.altAxis,Ue=Ae?Q+x[xe]+w[xe]-Xe-S.altAxis:Ve,Ye=u&&Ae?Jt(qe,Q,Ue):ue(u?qe:ze,Q,u?Ue:Ve);y[$]=Ye,B[$]=Ye-Q}t.modifiersData[n]=B}}const Sr={name:"preventOverflow",enabled:!0,phase:"main",fn:$r,requiresIfExists:["offset"]};function Cr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Rr(e){return e===H(e)||!M(e)?De(e):Cr(e)}function Ar(e){var t=e.getBoundingClientRect(),r=ae(t.width)/e.offsetWidth||1,n=ae(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Tr(e,t,r){r===void 0&&(r=!1);var n=M(t),o=M(t)&&Ar(t),i=_(t),a=se(e,o),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!r)&&((z(t)!=="body"||Fe(i))&&(s=Rr(t)),M(t)?(l=se(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=Me(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function kr(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!r.has(s)){var l=t.get(s);l&&o(l)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function Lr(e){var t=kr(e);return Vt.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Br(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function jr(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var it={placement:"bottom",modifiers:[],strategy:"absolute"};function at(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Dr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?it:o;return function(s,l,p){p===void 0&&(p=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},it,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},f=[],d=!1,u={state:c,setOptions:function(E){var C=typeof E=="function"?E(c.options):E;m(),c.options=Object.assign({},i,c.options,C),c.scrollParents={reference:ie(s)?fe(s):s.contextElement?fe(s.contextElement):[],popper:fe(l)};var R=Lr(jr([].concat(n,c.options.modifiers)));return c.orderedModifiers=R.filter(function(g){return g.enabled}),h(),u.update()},forceUpdate:function(){if(!d){var E=c.elements,C=E.reference,R=E.popper;if(!!at(C,R)){c.rects={reference:Tr(C,ge(R),c.options.strategy==="fixed"),popper:Be(R)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(S){return c.modifiersData[S.name]=Object.assign({},S.data)});for(var g=0;g<c.orderedModifiers.length;g++){if(c.reset===!0){c.reset=!1,g=-1;continue}var $=c.orderedModifiers[g],y=$.fn,x=$.options,w=x===void 0?{}:x,O=$.name;typeof y=="function"&&(c=y({state:c,options:w,name:O,instance:u})||c)}}}},update:Br(function(){return new Promise(function(v){u.forceUpdate(),v(c)})}),destroy:function(){m(),d=!0}};if(!at(s,l))return u;u.setOptions(p).then(function(v){!d&&p.onFirstUpdate&&p.onFirstUpdate(v)});function h(){c.orderedModifiers.forEach(function(v){var E=v.name,C=v.options,R=C===void 0?{}:C,g=v.effect;if(typeof g=="function"){var $=g({state:c,name:E,instance:u,options:R}),y=function(){};f.push($||y)}})}function m(){f.forEach(function(v){return v()}),f=[]}return u}}var Mr=[ir,Er,nr,Ut,wr,gr,Sr,Zt,yr],Fr=Dr({defaultModifiers:Mr}),Nr=typeof Element<"u",Hr=typeof Map=="function",Ir=typeof Set=="function",Wr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Oe(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!Oe(e[n],t[n]))return!1;return!0}var i;if(Hr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!Oe(n.value[1],t.get(n.value[0])))return!1;return!0}if(Ir&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Wr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(Nr&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((o[n]==="_owner"||o[n]==="__v"||o[n]==="__o")&&e.$$typeof)&&!Oe(e[o[n]],t[o[n]]))return!1;return!0}return e!==e&&t!==t}var zr=function(t,r){try{return Oe(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}},Vr=[],Xr=function(t,r,n){n===void 0&&(n={});var o=P.exports.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Vr},a=P.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],l=a[1],p=P.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(u){var h=u.state,m=Object.keys(h.elements);Tt.exports.flushSync(function(){l({styles:Ge(m.map(function(v){return[v,h.styles[v]||{}]})),attributes:Ge(m.map(function(v){return[v,h.attributes[v]]}))})})},requires:["computeStyles"]}},[]),c=P.exports.useMemo(function(){var d={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[p,{name:"applyStyles",enabled:!1}])};return zr(o.current,d)?o.current||d:(o.current=d,d)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,p]),f=P.exports.useRef();return Ke(function(){f.current&&f.current.setOptions(c)},[c]),Ke(function(){if(!(t==null||r==null)){var d=n.createPopper||Fr,u=d(t,r,c);return f.current=u,function(){u.destroy(),f.current=null}}},[t,r,n.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}};function xt(e){var t=P.exports.useRef(e);return t.current=e,P.exports.useCallback(function(){return t.current},[])}var qr=function(){};function Ur(e){var t=e.initial,r=e.value,n=e.onChange,o=n===void 0?qr:n;if(t===void 0&&r===void 0)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var i=P.exports.useState(t),a=i[0],s=i[1],l=xt(a),p=P.exports.useCallback(function(f){var d=l(),u=typeof f=="function"?f(d):f;typeof u.persist=="function"&&u.persist(),s(u),typeof o=="function"&&o(u)},[l,o]),c=r!==void 0;return[c?r:a,c?o:p]}function bt(e,t){return e===void 0&&(e=0),t===void 0&&(t=0),function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e,x:0,y:0,toJSON:function(){return null}}}}var Yr=["styles","attributes"],st={getBoundingClientRect:bt()},pt={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function _r(e,t){var r,n,o;e===void 0&&(e={}),t===void 0&&(t={});var i=Object.keys(pt).reduce(function(T,b){var k;return Z({},T,(k={},k[b]=T[b]!==void 0?T[b]:pt[b],k))},e),a=P.exports.useMemo(function(){return[{name:"offset",options:{offset:i.offset}}]},Array.isArray(i.offset)?i.offset:[]),s=Z({},t,{placement:t.placement||i.placement,modifiers:t.modifiers||a}),l=P.exports.useState(null),p=l[0],c=l[1],f=P.exports.useState(null),d=f[0],u=f[1],h=Ur({initial:i.defaultVisible,value:i.visible,onChange:i.onVisibleChange}),m=h[0],v=h[1],E=P.exports.useRef();P.exports.useEffect(function(){return function(){return clearTimeout(E.current)}},[]);var C=Xr(i.followCursor?st:p,d,s),R=C.styles,g=C.attributes,$=At(C,Yr),y=$.update,x=xt({visible:m,triggerRef:p,tooltipRef:d,finalConfig:i}),w=P.exports.useCallback(function(T){return Array.isArray(i.trigger)?i.trigger.includes(T):i.trigger===T},Array.isArray(i.trigger)?i.trigger:[i.trigger]),O=P.exports.useCallback(function(){clearTimeout(E.current),E.current=window.setTimeout(function(){return v(!1)},i.delayHide)},[i.delayHide,v]),S=P.exports.useCallback(function(){clearTimeout(E.current),E.current=window.setTimeout(function(){return v(!0)},i.delayShow)},[i.delayShow,v]),A=P.exports.useCallback(function(){x().visible?O():S()},[x,O,S]);P.exports.useEffect(function(){if(!!x().finalConfig.closeOnOutsideClick){var T=function(k){var V,I=x(),G=I.tooltipRef,re=I.triggerRef,X=(k.composedPath==null||(V=k.composedPath())==null?void 0:V[0])||k.target;X instanceof Node&&G!=null&&re!=null&&!G.contains(X)&&!re.contains(X)&&O()};return document.addEventListener("mousedown",T),function(){return document.removeEventListener("mousedown",T)}}},[x,O]),P.exports.useEffect(function(){if(!(p==null||!w("click")))return p.addEventListener("click",A),function(){return p.removeEventListener("click",A)}},[p,w,A]),P.exports.useEffect(function(){if(!(p==null||!w("double-click")))return p.addEventListener("dblclick",A),function(){return p.removeEventListener("dblclick",A)}},[p,w,A]),P.exports.useEffect(function(){if(!(p==null||!w("right-click"))){var T=function(k){k.preventDefault(),A()};return p.addEventListener("contextmenu",T),function(){return p.removeEventListener("contextmenu",T)}}},[p,w,A]),P.exports.useEffect(function(){if(!(p==null||!w("focus")))return p.addEventListener("focus",S),p.addEventListener("blur",O),function(){p.removeEventListener("focus",S),p.removeEventListener("blur",O)}},[p,w,S,O]),P.exports.useEffect(function(){if(!(p==null||!w("hover")))return p.addEventListener("mouseenter",S),p.addEventListener("mouseleave",O),function(){p.removeEventListener("mouseenter",S),p.removeEventListener("mouseleave",O)}},[p,w,S,O]),P.exports.useEffect(function(){if(!(d==null||!w("hover")||!x().finalConfig.interactive))return d.addEventListener("mouseenter",S),d.addEventListener("mouseleave",O),function(){d.removeEventListener("mouseenter",S),d.removeEventListener("mouseleave",O)}},[d,w,S,O,x]);var B=$==null||(r=$.state)==null||(n=r.modifiersData)==null||(o=n.hide)==null?void 0:o.isReferenceHidden;P.exports.useEffect(function(){i.closeOnTriggerHidden&&B&&O()},[i.closeOnTriggerHidden,O,B]),P.exports.useEffect(function(){if(!i.followCursor||p==null)return;function T(b){var k=b.clientX,V=b.clientY;st.getBoundingClientRect=bt(k,V),y==null||y()}return p.addEventListener("mousemove",T),function(){return p.removeEventListener("mousemove",T)}},[i.followCursor,p,y]),P.exports.useEffect(function(){if(!(d==null||y==null||i.mutationObserverOptions==null)){var T=new MutationObserver(y);return T.observe(d,i.mutationObserverOptions),function(){return T.disconnect()}}},[i.mutationObserverOptions,d,y]);var L=function(b){return b===void 0&&(b={}),Z({},b,{style:Z({},b.style,R.popper)},g.popper,{"data-popper-interactive":i.interactive})},J=function(b){return b===void 0&&(b={}),Z({},b,g.arrow,{style:Z({},b.style,R.arrow),"data-popper-arrow":!0})};return Z({getArrowProps:J,getTooltipProps:L,setTooltipRef:u,setTriggerRef:c,tooltipRef:d,triggerRef:p,visible:m},$)}const Jr=Ee(Ee.div``).attrs(({customStyled:e})=>({style:e}))`
  .tooltip-container {
    --tooltipBorder: ${({theme:e})=>e.palette.background.main};
    --tooltipBackground: ${({theme:e})=>e.palette.background.main};
    --tooltipColor: ${({theme:e})=>e.palette.textPrimary.main};

    font-family: ${({theme:e})=>e.typography.paragraph.fontFamily};
    font-size: ${({theme:e})=>e.typography.p3.fontSize}px;
    line-height: ${({theme:e})=>e.typography.p3.lineHeight}px;

    padding: 4px 8px;
    border-radius: 4px;
  }
  ${({customModifiers:e})=>ct.applyStyleModifiers({...e})};
`;const Ne=e=>{const{children:t,text:r,placement:n}=e,{getArrowProps:o,getTooltipProps:i,setTooltipRef:a,setTriggerRef:s,visible:l}=_r({placement:n});return r?Pe(Jr,{...e,children:[Y("div",{ref:s,children:t}),l&&Pe("div",{ref:a,...i({className:"tooltip-container"}),children:[Y("div",{...o({className:"tooltip-arrow"})}),r]})]}):Y(kt,{children:t})};Ne.defaultProps={placement:"bottom"};Ne.__docgenInfo={description:`Props Description @function Tooltip @typedef props:TooltipProps
@param text - tooltip text **{ string }**
@param placement - tooltip placement, defaults to bottom **{ 'top' | 'bottom' }**
@param customStyled -  client side style prop {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ string[] | string }**
@returns {JSX} JSX`,methods:[],displayName:"Tooltip",props:{placement:{defaultValue:{value:"'bottom'",computed:!1},required:!1}}};const Gr={primary:({theme:e})=>`
  --comp-background-color: ${e.palette.primary.main};
  --comp-border-color: ${e.palette.primary.main};

  &:hover {
    --comp-background-color: ${e.palette.primary.light||_e(.1,e.palette.primary.main)};
    --comp-border-color: ${e.palette.primary.light||_e(.1,e.palette.primary.main)};
  }

  &:active,
  &:focus {
    --comp-background-color: ${e.palette.primary.dark||Je(.1,e.palette.primary.main)};
    --comp-border-color: ${e.palette.primary.dark||Je(.1,e.palette.primary.main)};
  }
`,secondary:({theme:e})=>`
    --comp-background-color: ${lt.transparent};
    --comp-border-color: ${ee(.5,e.palette.textPrimary.main)};

    &:hover {
      --comp-background-color: ${ee(.9,e.palette.textPrimary.main)};
      --comp-border-color: ${e.palette.textPrimary.main};
    }

    &:active,
    &:focus {
      --comp-background-color: ${ee(.85,e.palette.textPrimary.main)};
      --comp-border-color: ${e.palette.textPrimary.main};
    }
`,stretched:()=>`
    width: 100%;
    text-align: center;
    justify-content: center;
    aign-items: center;
  `,shadowed:()=>`
		box-shadow: -32px 24px 56px rgba(0, 0, 0, 0.2);
	`,uppercased:()=>`
		align-self: center;
		text-transform: uppercase;
	`,iconOnly:()=>`
	  .text,
	  .child {
		  display: none
	  }
	  .icon {
		  padding: 0;
		  color: var(--comp-text-color);
    }
  `,fontEffects:()=>`
		&:hover {
			box-shadow: 0 5px 5px rgba(17, 16, 62, 0.15);
			span,
			svg {
				letter-spacing: 5px;
				font-weight: 900;
				transition: color 280ms ease-out, font-weight 1000ms ease-out;
				transition: letter-spacing 1000ms ease-in-out;
				font-stretch: ultra-expanded;
			}
		}
		&:not(:hover) {
			span,
			svg {
				font-weight: 500;
				letter-spacing: initial;
				transition: color 280ms ease-out, font-weight 1000ms ease-out;
				transition: letter-spacing 1000ms ease-in-out;
				font-stretch: ultra-expanded;
			}
		}
	`,top8:()=>`
    margin-top: 8px;
`,top24:()=>`
    margin-top: 24px;
`,v24:()=>`
    margin-top: 24px;
    margin-bottom: 24px;
  `},Kr=Ee(Ee.button``).attrs(({customStyled:e})=>({style:e}))`
  --comp-border-radius: 2px;
  --comp-text-color: ${({theme:e})=>e.palette.textPrimary.main};

  ${({size:e,icon:t,text:r})=>e==="large"?`
				--comp-font-size: 24px;
				--comp-line-height: 36px;
				--comp-padding: 20px ${t&&r?"48px":"20px"};
				`:e==="normal"?`
        --comp-font-size: 18px;
        --comp-line-height: 24px;
        --comp-padding: 12px ${t&&r?"24px":"12px"};
			`:e==="small"?`
				--comp-font-size: 14px;
				--comp-line-height: 22px;
				--comp-padding: 6px ${t&&r?"12px":"6px"};
			`:`
        --comp-font-size: 12px;
        --comp-line-height: 18px;
        --comp-padding: 4px ${t&&r?"8px":"4px"};
			`};

  cursor: pointer;
  outline: none;
  border: none;

  position: relative;
  display: flex;
  align-items: center;
  padding: var(--comp-padding);

  -webkit-font-smoothing: subpixel-antialiased;
  font-smooth: subpixel-antialiased;
  box-sizing: border-box;
  transition: all ease-in 0.1s;

  font-family: ${({theme:e})=>e.typography.heading.fontFamily};
  font-size: var(--comp-font-size);
  line-height: var(--comp-line-height);
  letter-spacing: 0.02em;
  font-weight: inherit;

  color: var(--comp-text-color);
  background: var(--comp-background-color);

  border: 1px solid var(--comp-border-color);
  border-radius: var(--comp-border-radius);

  &[disabled] {
    pointer-events: none;
    --comp-background-color: ${lt.transparent};
    --comp-text-color: ${({theme:e})=>ee(.5,e.palette.textPrimary.main)};
    --comp-border-color: ${({theme:e})=>ee(.85,e.palette.textPrimary.main)};

    &:hover,
    &:active,
    &:focus {
      --comp-text-color: ${({theme:e})=>ee(.5,e.palette.textPrimary.main)};
      --comp-border-color: ${({theme:e})=>ee(.85,e.palette.textPrimary.main)};
    }
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: ${({rightIcon:e})=>e?"row-reverse":"row"};
    align-items: center;
  }
  .icon {
    padding-right: ${({text:e,rightIcon:t})=>e&&!t?"10px":0};
    padding-left: ${({text:e,rightIcon:t})=>e&&t?"10px":0};
    width: 1.2em;
    height: 1.2em;
    min-width: 24px;
    min-height: 24px;
    color: var(--comp-text-color);
  }
  .child {
    display: flex;
    align-items: center;
    width: auto;
  }
  ${({customModifiers:e})=>ct.applyStyleModifiers({...Gr,...e})};
`,wt=e=>{const{type:t="button",children:r,disabled:n,loading:o,icon:i,rightIcon:a,text:s,size:l,onClick:p,tooltipText:c,toolTipPlacement:f,modifiers:d=["primary"]}=e,u=i,h=P.exports.useCallback(E=>!n&&!o&&(p==null?void 0:p(E)),[n,o,p]),v={modifiers:d,type:t,icon:i,rightIcon:a?!0:void 0,text:s,size:l,disabled:n?!0:void 0,...t==="button"?{onClick:h}:{}};return Y(Ne,{text:c,placement:f,children:Pe(Kr,{...v,children:[Pe("span",{className:"container",children:[o&&Y(Rt,{type:"oval",visible:o,width:"1em",height:"1em",strokeWidth:8,strokeWidthSecondary:4,presets:"primaryText",modifiers:[String(s&&!a&&"spacedRight10"),String(s&&a&&"spacedLeft10")]}),u&&!o&&Y(u,{className:"icon"}),s&&Y("span",{className:"text",children:s})]}),o?null:Y("span",{className:"child",children:r})]})})};wt.defaultProps={type:"button",size:"normal"};wt.__docgenInfo={description:`Props Description @function Button @typedef props:ButtonProps
@param icon - icon passed as JSX {@linkcode JSX.Element }
@param rightIcon - icon emplacement on right of text **{ boolean }**
@param type - forwarded button's type **{'button|submit|reset' }**
@param loading - loading state **{boolean }**
@param onClick - event handler forwarded **{ (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | any) => void }**
@param text  - button text **{ string }**
@param size - preset for size **{'small' | 'normal' | 'large' }**
@param tooltipText - tooltip text  **{string }**
@param toolTipPlacement - preset tooltip placement **{ 'top' | 'bottom'}**
@param customStyled -  client side style prop {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ 'primary','secondary','stretched','shadowed','uppercased','iconOnly','fontEffects','top8','top24','v24' }**
@returns {JSX} JSX`,methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'button'",computed:!1},required:!1},size:{defaultValue:{value:"'normal'",computed:!1},required:!1}}};export{wt as B,Ne as T};
//# sourceMappingURL=Button.138387bf.js.map
