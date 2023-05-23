import{l as R,c as w,a as z}from"./index.81122112.js";import{s as I}from"./Storybook.b497f08e.js";import{t as k,h as Y,v as A,x as H,y as G,z as F,A as K,B as W,C as E,D as J,e as V,E as X,G as Z,H as B,J as Q,K as D,L as ee,M as re}from"./iframe.1b5ca124.js";import{j as te}from"./jsx-runtime.2eaea906.js";var M={},_={};Object.defineProperty(_,"__esModule",{value:!0});_.DEFAULT_MODIFIERS_KEY=void 0;var ne="_";_.DEFAULT_MODIFIERS_KEY=ne;var p={};Object.defineProperty(p,"__esModule",{value:!0});p.default=se;var ie=ae(k);function ae(e){return e&&e.__esModule?e:{default:e}}function se(e){return(0,ie.default)(e)&&!Array.isArray(e)}var g={},h={};Object.defineProperty(h,"__esModule",{value:!0});h.default=oe;function oe(e){return(Array.isArray(e)?e:[e]).filter(function(r){return typeof r=="string"&&!!r})}Object.defineProperty(g,"__esModule",{value:!0});g.default=ce;var le=b(Y),ue=b(k),fe=b(h);function b(e){return e&&e.__esModule?e:{default:e}}function de(e){return(0,ue.default)(e)&&!!e.styles}function ce(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,n=(0,fe.default)(e).reduce(function(a,s){var o=r[s];if((0,le.default)(o)){var l=o(t),i=de(l)?l.styles:l;return Array.isArray(i)?a.concat(i.join("")):a.concat(i)}return a},[]);return n.join(" ")}Object.defineProperty(M,"__esModule",{value:!0});M.default=ye;var pe=_,ve=T(p),_e=T(g);function T(e){return e&&e.__esModule?e:{default:e}}function ye(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"responsiveModifiers";return function(t){var n=t[r];return(0,ve.default)(n)?(0,_e.default)(n[t.size||pe.DEFAULT_MODIFIERS_KEY],e,t):null}}var x={};Object.defineProperty(x,"__esModule",{value:!0});x.default=me;var ge=_,he=C(p),S=C(g);function C(e){return e&&e.__esModule?e:{default:e}}function me(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"modifiers";return function(t){var n=t[r];return(0,he.default)(n)?(0,S.default)(n[t.size||ge.DEFAULT_MODIFIERS_KEY],e,t):(0,S.default)(n,e,t)}}var y={};function Me(e,r,t,n){for(var a=e.length,s=t+(n?1:-1);n?s--:++s<a;)if(r(e[s],s,e))return s;return-1}var be=Me;function xe(e){return e!==e}var $e=xe;function we(e,r,t){for(var n=t-1,a=e.length;++n<a;)if(e[n]===r)return n;return-1}var Ie=we,Se=be,Oe=$e,Pe=Ie;function Re(e,r,t){return r===r?Pe(e,r,t):Se(e,Oe,t)}var ke=Re,Ae=ke;function Fe(e,r){var t=e==null?0:e.length;return!!t&&Ae(e,r,0)>-1}var L=Fe;function Ee(e,r,t){for(var n=-1,a=e==null?0:e.length;++n<a;)if(t(r,e[n]))return!0;return!1}var j=Ee,De=A,Te=L,Ce=j,Le=H,je=G,qe=F,Ue=200;function Ne(e,r,t,n){var a=-1,s=Te,o=!0,l=e.length,i=[],d=r.length;if(!l)return i;t&&(r=Le(r,je(t))),n?(s=Ce,o=!1):r.length>=Ue&&(s=qe,o=!1,r=new De(r));e:for(;++a<l;){var u=e[a],f=t==null?u:t(u);if(u=n||u!==0?u:0,o&&f===f){for(var v=d;v--;)if(r[v]===f)continue e;i.push(u)}else s(r,f,n)||i.push(u)}return i}var ze=Ne,Ye=E,He=K,Ge=W;function Ke(e,r){return Ge(He(e,r,Ye),e+"")}var We=Ke,Je=J,Ve=V;function Xe(e){return Ve(e)&&Je(e)}var Ze=Xe,Be=ze,Qe=X,er=We,O=Ze,rr=er(function(e,r){return O(e)?Be(e,Qe(r,1,O,!0)):[]}),tr=rr,nr=E;function ir(e){return typeof e=="function"?e:nr}var ar=ir,sr=Z,or=ar,lr=B;function ur(e,r){return e==null?e:sr(e,or(r),lr)}var fr=ur;function dr(){}var cr=dr,m=Q,pr=cr,vr=D,_r=1/0,yr=m&&1/vr(new m([,-0]))[1]==_r?function(e){return new m(e)}:pr,gr=yr,hr=A,mr=L,Mr=j,br=F,xr=gr,$r=D,wr=200;function Ir(e,r,t){var n=-1,a=mr,s=e.length,o=!0,l=[],i=l;if(t)o=!1,a=Mr;else if(s>=wr){var d=r?null:xr(e);if(d)return $r(d);o=!1,a=br,i=new hr}else i=r?[]:l;e:for(;++n<s;){var u=e[n],f=r?r(u):u;if(u=t||u!==0?u:0,o&&f===f){for(var v=i.length;v--;)if(i[v]===f)continue e;r&&i.push(f),l.push(u)}else a(i,f,t)||(i!==l&&i.push(f),l.push(u))}return l}var Sr=Ir,Or=Sr;function Pr(e){return e&&e.length?Or(e):[]}var Rr=Pr;Object.defineProperty(y,"__esModule",{value:!0});y.validateResponsiveModifiers=N;y.default=Lr;var kr=c(tr),Ar=c(ee),Fr=c(fr),Er=c(re),P=c(Rr),Dr=c(h),Tr=c(p);function c(e){return e&&e.__esModule?e:{default:e}}function q(e,r,t,n){var a=t.length>1?"modifiers":"modifier",s=t.join(", "),o=n&&n.length>1?"keys":"key";return new Error("Invalid ".concat(a," ").concat(s," used in prop '").concat(e,"'").concat(n?" (size ".concat(o," ").concat(n.join(", "),")"):""," and supplied to ").concat(r,". Validation failed."))}function U(e,r){return(0,kr.default)((0,Dr.default)(e),(0,Er.default)(r))}function Cr(e,r,t,n){var a=U(t,n);return a.length>0?q(e,r,a):null}function N(e,r,t,n){var a=[],s=[];(0,Fr.default)(t,function(i,d){var u=U(i,n);u.length>0&&(a.push(u),s.push(d))});var o=(0,P.default)((0,Ar.default)(a)),l=(0,P.default)(s);return o.length>0?q(e,r,o,l):null}function Lr(e){var r=function(n,a,s){var o=n[a];return(0,Tr.default)(o)?N(a,s,o,e):Cr(a,s,o,e)};return r}var $={};Object.defineProperty($,"__esModule",{value:!0});$.default=Nr;var jr=Ur(p),qr=y;function Ur(e){return e&&e.__esModule?e:{default:e}}function Nr(e){var r=function(n,a,s){var o=n[a];return(0,jr.default)(o)?(0,qr.validateResponsiveModifiers)(a,s,o,e):null};return r}var zr={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var r={applyResponsiveStyleModifiers:!0,applyStyleModifiers:!0,styleModifierPropTypes:!0,responsiveStyleModifierPropTypes:!0};Object.defineProperty(e,"applyResponsiveStyleModifiers",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"applyStyleModifiers",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"styleModifierPropTypes",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"responsiveStyleModifierPropTypes",{enumerable:!0,get:function(){return s.default}});var t=l(M),n=l(x),a=l(y),s=l($),o=zr;Object.keys(o).forEach(function(i){i==="default"||i==="__esModule"||Object.prototype.hasOwnProperty.call(r,i)||Object.defineProperty(e,i,{enumerable:!0,get:function(){return o[i]}})});function l(i){return i&&i.__esModule?i:{default:i}}})(R);const Yr="/assets/holo.ebaacdbd.png",Hr={authPageForm:({theme:e})=>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 40px 96px;
    max-width: 552px;
    max-height: calc( 476px + 40px);  //hertical for max 3 btns under delimiter
    box-shadow: -32px 24px 56px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    background: ${e.palette.background.main};
	  color: ${e.palette.textPrimary.main};

	  white-space: pre-wrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    text-overflow: ellipsis;
  `,holoContainer:({theme:e})=>`
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    position: relative;
    width: 120px;
    height: 120px;
    color: ${e.palette.highlighted.main};
    background-image: url(${Yr});
    background-repeat: no-repeat;
    background-size: cover;
  `,row:()=>`
		display: flex;
    flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		margin: 0;
  `,column:()=>`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
  `,centeredContent:()=>`
		justify-content: center;
		align-items: center;
		text-align: center;
 `,spacedEvenly:()=>`
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 100%;
		text-align: center;
  `,inlineGap8:()=>`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 8px;
  `,maxH45vh:()=>`
		flex-direction: column;
		align-items: stretch;

		max-height: 45vh;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0 20px 0 0;
		margin-bottom: 24px;
		width: clamp(100px, calc(100% - 20px), 800px);
  `,v20:()=>`
 	  padding: 20px 0;
  `,h20:()=>`
    padding: 0 20px;
  `,hmax380:()=>"max-width: 380px;",fullWidth:()=>`
    width: 100%;
    flex: 1;
  `,fullHeight:()=>`
    height: 100vh;
    flex: 1;
`},Gr=I(I.div``).attrs(({customStyled:e})=>({style:{...e}}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &::-webkit-scrollbar {
    background-color: ${({theme:e})=>e.palette.background.main};
    width: 8px;
  }
  &::-webkit-scrollbar-corner {
    background-color: ${({theme:e})=>w(.3,e.palette.unfocused.main)};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>w(.1,e.palette.unfocused.main)};
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #0f0f0f;
    background-color: ${({theme:e})=>z(.1,e.palette.background.main)};
  }

  ${({customModifiers:e})=>R.applyStyleModifiers({...Hr,...e})};
`,Kr=e=>{const{children:r}=e;return te(Gr,{...e,children:r})};Kr.__docgenInfo={description:`Description @function Container @typedef props:ContainerProps
@param customStyled - client side style prop {@linkcode CSSObject }
@param customModifiers - client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset defined **['authPageForm','row','column','centeredContent','spacedEvenly','inlineGap8','maxH45vh','round20','top8','v20','h20','fullWidth']**
@returns {JSX} JSX`,methods:[],displayName:"Container"};export{Kr as C};
//# sourceMappingURL=Container.f6c04d3e.js.map
