/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n="(prefers-reduced-motion: reduce)",e={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function i(t){t.length=0}function o(t,n,e){return Array.prototype.slice.call(t,n,e)}function r(t){return t.bind.apply(t,[null].concat(o(arguments,1)))}var u=setTimeout,c=function(){};function s(t){return requestAnimationFrame(t)}function a(t,n){return typeof n===t}function l(t){return!h(t)&&a("object",t)}var d=Array.isArray,f=r(a,"function"),v=r(a,"string"),p=r(a,"undefined");function h(t){return null===t}function m(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function g(t){return d(t)?t:[t]}function y(t,n){g(t).forEach(n)}function b(t,n){return t.indexOf(n)>-1}function w(t,n){return t.push.apply(t,g(n)),t}function E(t,n,e){t&&y(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function S(t,n){E(t,v(n)?n.split(" "):n,!0)}function x(t,n){y(n,t.appendChild.bind(t))}function k(t,n){y(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function L(t,n){return m(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function C(t,n){var e=t?o(t.children):[];return n?e.filter((function(t){return L(t,n)})):e}function P(t,n){return n?C(t,n)[0]:t.firstElementChild}var A=Object.keys;function _(t,n,e){return t&&(e?A(t).reverse():A(t)).forEach((function(e){"__proto__"!==e&&n(t[e],e)})),t}function q(t){return o(arguments,1).forEach((function(n){_(n,(function(e,i){t[i]=n[i]}))})),t}function D(t){return o(arguments,1).forEach((function(n){_(n,(function(n,e){d(n)?t[e]=n.slice():l(n)?t[e]=D({},l(t[e])?t[e]:{},n):t[e]=n}))})),t}function M(t,n){y(n||A(t),(function(n){delete t[n]}))}function z(t,n){y(t,(function(t){y(n,(function(n){t&&t.removeAttribute(n)}))}))}function N(t,n,e){l(n)?_(n,(function(n,e){N(t,e,n)})):y(t,(function(t){h(e)||""===e?z(t,n):t.setAttribute(n,String(e))}))}function O(t,n,e){var i=document.createElement(t);return n&&(v(n)?S(i,n):N(i,n)),e&&x(e,i),i}function T(t,n,e){if(p(e))return getComputedStyle(t)[n];h(e)||(t.style[n]=""+e)}function I(t,n){T(t,"display",n)}function j(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function F(t,n){return t.getAttribute(n)}function R(t,n){return t&&t.classList.contains(n)}function B(t){return t.getBoundingClientRect()}function W(t){y(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function X(t){return P((new DOMParser).parseFromString(t,"text/html").body)}function G(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function H(t,n){return t&&t.querySelector(n)}function Y(t,n){return n?o(t.querySelectorAll(n)):[]}function U(t,n){E(t,n,!1)}function J(t){return t.timeStamp}function K(t){return v(t)?t:t?t+"px":""}var V="splide",Q="data-"+V;function $(t,n){if(!t)throw new Error("["+V+"] "+(n||""))}var Z=Math.min,tt=Math.max,nt=Math.floor,et=Math.ceil,it=Math.abs;function ot(t,n,e){return it(t-n)<e}function rt(t,n,e,i){var o=Z(n,e),r=tt(n,e);return i?o<t&&t<r:o<=t&&t<=r}function ut(t,n,e){var i=Z(n,e),o=tt(n,e);return Z(tt(i,t),o)}function ct(t){return+(t>0)-+(t<0)}function st(t,n){return y(n,(function(n){t=t.replace("%s",""+n)})),t}function at(t){return t<10?"0"+t:""+t}var lt={};function dt(){var t=[];function n(t,n,e){y(t,(function(t){t&&y(n,(function(n){n.split(" ").forEach((function(n){var i=n.split(".");e(t,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){n(e,i,(function(n,e,i){var u="addEventListener"in n,c=u?n.removeEventListener.bind(n,e,o,r):n.removeListener.bind(n,o);u?n.addEventListener(e,o,r):n.addListener(o),t.push([n,e,i,o,c])}))},unbind:function(e,i,o){n(e,i,(function(n,e,i){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||o&&t[3]!==o)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var i,o=!0;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:o,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,o,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),i(t)}}}var ft="mounted",vt="ready",pt="move",ht="moved",mt="click",gt="refresh",yt="updated",bt="resize",wt="resized",Et="scroll",St="scrolled",xt="destroy",kt="navigation:mounted",Lt="autoplay:play",Ct="autoplay:pause",Pt="lazyload:loaded",At="ei";function _t(t){var n=t?t.event.bus:document.createDocumentFragment(),e=dt();return t&&t.event.on(xt,e.destroy),q(e,{bus:n,on:function(t,i){e.bind(n,g(t).join(" "),(function(t){i.apply(i,d(t.detail)?t.detail:[])}))},off:r(e.unbind,n),emit:function(t){e.dispatch(n,t,o(arguments,1))}})}function qt(t,n,e,i){var o,r,u=Date.now,c=0,a=!0,l=0;function d(){if(!a){if(c=t?Z((u()-o)/t,1):1,e&&e(c),c>=1&&(n(),o=u(),i&&++l>=i))return f();r=s(d)}}function f(){a=!0}function v(){r&&cancelAnimationFrame(r),c=0,r=0,a=!0}return{start:function(n){n||v(),o=u()-(n?c*t:0),a=!1,r=s(d)},rewind:function(){o=u(),c=0,e&&e(c)},pause:f,cancel:v,set:function(n){t=n},isPaused:function(){return a}}}var Dt="Arrow",Mt=Dt+"Left",zt=Dt+"Right",Nt=Dt+"Up",Ot=Dt+"Down",Tt="ttb",It={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Nt,zt],ArrowRight:[Ot,Mt]};var jt="role",Ft="tabindex",Rt="aria-",Bt=Rt+"controls",Wt=Rt+"current",Xt=Rt+"selected",Gt=Rt+"label",Ht=Rt+"labelledby",Yt=Rt+"hidden",Ut=Rt+"orientation",Jt=Rt+"roledescription",Kt=Rt+"live",Vt=Rt+"busy",Qt=Rt+"atomic",$t=[jt,Ft,"disabled",Bt,Wt,Gt,Ht,Yt,Ut,Jt],Zt=V+"__",tn="is-",nn=V,en=Zt+"track",on=Zt+"list",rn=Zt+"slide",un=rn+"--clone",cn=rn+"__container",sn=Zt+"arrows",an=Zt+"arrow",ln=an+"--prev",dn=an+"--next",fn=Zt+"pagination",vn=fn+"__page",pn=Zt+"progress__bar",hn=Zt+"toggle",mn=Zt+"sr",gn=tn+"initialized",yn=tn+"active",bn=tn+"prev",wn=tn+"next",En=tn+"visible",Sn=tn+"loading",xn=tn+"focus-in",kn=tn+"overflow",Ln=[yn,En,bn,wn,Sn,xn,kn],Cn={slide:rn,clone:un,arrows:sn,arrow:an,prev:ln,next:dn,pagination:fn,page:vn,spinner:Zt+"spinner"},Pn="touchstart mousedown",An="touchmove mousemove",_n="touchend touchcancel mouseup click",qn="slide",Dn="loop",Mn="fade";var zn=Q+"-interval",Nn={passive:!1,capture:!0},On={Spacebar:" ",Right:zt,Left:Mt,Up:Nt,Down:Ot};function Tn(t){return t=v(t)?t:t.key,On[t]||t}var In="keydown",jn=Q+"-lazy",Fn=jn+"-srcset",Rn="["+jn+"], ["+Fn+"]",Bn=[" ","Enter"],Wn=Object.freeze({__proto__:null,Media:function(t,e,i){var o=t.state,r=i.breakpoints||{},u=i.reducedMotion||{},c=dt(),s=[];function a(t){t&&c.destroy()}function l(t,n){var e=matchMedia(n);c.bind(e,"change",d),s.push([t,e])}function d(){var n=o.is(7),e=i.direction,r=s.reduce((function(t,n){return D(t,n[1].matches?n[0]:{})}),{});M(i),f(r),i.destroy?t.destroy("completely"===i.destroy):n?(a(!0),t.mount()):e!==i.direction&&t.refresh()}function f(n,e,r){D(i,n),e&&D(Object.getPrototypeOf(i),n),!r&&o.is(1)||t.emit(yt,i)}return{setup:function(){var t="min"===i.mediaQuery;A(r).sort((function(n,e){return t?+n-+e:+e-+n})).forEach((function(n){l(r[n],"("+(t?"min":"max")+"-width:"+n+"px)")})),l(u,n),d()},destroy:a,reduce:function(t){matchMedia(n).matches&&(t?D(i,u):M(i,A(u)))},set:f}},Direction:function(t,n,e){return{resolve:function(t,n,i){var o="rtl"!==(i=i||e.direction)||n?i===Tt?0:-1:1;return It[t]&&It[t][o]||t.replace(/width|left|right/i,(function(t,n){var e=It[t.toLowerCase()][o]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,n,e){var o,r,u,c=_t(t),s=c.on,a=c.bind,l=t.root,d=e.i18n,v={},p=[],h=[],m=[];function g(){var t,n,i;o=x("."+en),r=P(o,"."+on),$(o&&r,"A track/list element is missing."),w(p,C(r,"."+rn+":not(."+un+")")),_({arrows:sn,pagination:fn,prev:ln,next:dn,bar:pn,toggle:hn},(function(t,n){v[n]=x("."+t)})),q(v,{root:l,track:o,list:r,slides:p}),n=l.id||""+(t=V)+at(lt[t]=(lt[t]||0)+1),i=e.role,l.id=n,o.id=o.id||n+"-track",r.id=r.id||n+"-list",!F(l,jt)&&"SECTION"!==l.tagName&&i&&N(l,jt,i),N(l,Jt,d.carousel),N(r,jt,"presentation"),b()}function y(t){var n=$t.concat("style");i(p),U(l,h),U(o,m),z([o,r],n),z(l,t?n:["style",Jt])}function b(){U(l,h),U(o,m),h=k(nn),m=k(en),S(l,h),S(o,m),N(l,Gt,e.label),N(l,Ht,e.labelledby)}function x(t){var n=H(l,t);return n&&function(t,n){if(f(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!L(e,n);)e=e.parentElement;return e}(n,"."+nn)===l?n:void 0}function k(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===nn&&yn]}return q(v,{setup:g,mount:function(){s(gt,y),s(gt,g),s(yt,b),a(document,Pn+" keydown",(function(t){u="keydown"===t.type}),{capture:!0}),a(l,"focusin",(function(){E(l,xn,!!u)}))},destroy:y})},Slides:function(t,n,e){var o=_t(t),u=o.on,c=o.emit,s=o.bind,a=n.Elements,l=a.slides,d=a.list,p=[];function h(){l.forEach((function(t,n){C(t,n,-1)}))}function w(){_((function(t){t.destroy()})),i(p)}function C(n,e,i){var o=function(t,n,e,i){var o,u=_t(t),c=u.on,s=u.emit,a=u.bind,l=t.Components,d=t.root,f=t.options,v=f.isNavigation,p=f.updateOnMove,h=f.i18n,m=f.pagination,g=f.slideFocus,y=l.Direction.resolve,b=F(i,"style"),w=F(i,Gt),S=e>-1,x=P(i,"."+cn);function k(){var o=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");N(i,Gt,st(h.slideX,(S?e:n)+1)),N(i,Bt,o),N(i,jt,g?"button":""),g&&z(i,Jt)}function L(){o||C()}function C(){if(!o){var e=t.index;(r=A())!==R(i,yn)&&(E(i,yn,r),N(i,Wt,v&&r||""),s(r?"active":"inactive",_)),function(){var n=function(){if(t.is(Mn))return A();var n=B(l.Elements.track),e=B(i),o=y("left",!0),r=y("right",!0);return nt(n[o])<=et(e[o])&&nt(e[r])<=et(n[r])}(),e=!n&&(!A()||S);if(t.state.is([4,5])||N(i,Yt,e||""),N(Y(i,f.focusableNodes||""),Ft,e?-1:""),g&&N(i,Ft,e?-1:0),n!==R(i,En)&&(E(i,En,n),s(n?"visible":"hidden",_)),!n&&document.activeElement===i){var o=l.Slides.getAt(t.index);o&&j(o.slide)}}(),E(i,bn,n===e-1),E(i,wn,n===e+1)}var r}function A(){var i=t.index;return i===n||f.cloneStatus&&i===e}var _={index:n,slideIndex:e,slide:i,container:x,isClone:S,mount:function(){S||(i.id=d.id+"-slide"+at(n+1),N(i,jt,m?"tabpanel":"group"),N(i,Jt,h.slide),N(i,Gt,w||st(h.slideLabel,[n+1,t.length]))),a(i,"click",r(s,mt,_)),a(i,"keydown",r(s,"sk",_)),c([ht,"sh",St],C),c(kt,k),p&&c(pt,L)},destroy:function(){o=!0,u.destroy(),U(i,Ln),z(i,$t),N(i,"style",b),N(i,Gt,w||"")},update:C,style:function(t,n,e){T(e&&x||i,t,n)},isWithin:function(e,i){var o=it(e-n);return S||!f.rewind&&!t.is(Dn)||(o=Z(o,t.length-o)),o<=i}};return _}(t,e,i,n);o.mount(),p.push(o),p.sort((function(t,n){return t.index-n.index}))}function A(t){return t?q((function(t){return!t.isClone})):p}function _(t,n){A(n).forEach(t)}function q(t){return p.filter(f(t)?t:function(n){return v(t)?L(n.slide,t):b(g(t),n.index)})}return{mount:function(){h(),u(gt,w),u(gt,h)},destroy:w,update:function(){_((function(t){t.update()}))},register:C,get:A,getIn:function(t){var i=n.Controller,o=i.toIndex(t),r=i.hasFocus()?1:e.perPage;return q((function(t){return rt(t.index,o,o+r-1)}))},getAt:function(t){return q(t)[0]},add:function(t,n){y(t,(function(t){if(v(t)&&(t=X(t)),m(t)){var i=l[n];i?k(t,i):x(d,t),S(t,e.classes.slide),o=t,u=r(c,bt),a=Y(o,"img"),(f=a.length)?a.forEach((function(t){s(t,"load error",(function(){--f||u()}))})):u()}var o,u,a,f})),c(gt)},remove:function(t){W(q(t).map((function(t){return t.slide}))),c(gt)},forEach:_,filter:q,style:function(t,n,e){_((function(i){i.style(t,n,e)}))},getLength:function(t){return t?l.length:p.length},isEnough:function(){return p.length>e.perPage}}},Layout:function(t,n,e){var i,o,u,c=_t(t),s=c.on,a=c.bind,d=c.emit,f=n.Slides,v=n.Direction.resolve,p=n.Elements,h=p.root,m=p.track,g=p.list,y=f.getAt,b=f.style;function w(){i=e.direction===Tt,T(h,"maxWidth",K(e.width)),T(m,v("paddingLeft"),x(!1)),T(m,v("paddingRight"),x(!0)),S(!0)}function S(t){var n,r=B(h);(t||o.width!==r.width||o.height!==r.height)&&(T(m,"height",(n="",i&&($(n=k(),"height or heightRatio is missing."),n="calc("+n+" - "+x(!1)+" - "+x(!0)+")"),n)),b(v("marginRight"),K(e.gap)),b("width",e.autoWidth?null:K(e.fixedWidth)||(i?"":L())),b("height",K(e.fixedHeight)||(i?e.autoHeight?null:L():k()),!0),o=r,d(wt),u!==(u=D())&&(E(h,kn,u),d("overflow",u)))}function x(t){var n=e.padding,i=v(t?"right":"left");return n&&K(n[i]||(l(n)?0:n))||"0px"}function k(){return K(e.height||B(g).width*e.heightRatio)}function L(){var t=K(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function C(){return B(g)[v("width")]}function P(t,n){var e=y(t||0);return e?B(e.slide)[v("width")]+(n?0:q()):0}function A(t,n){var e=y(t);if(e){var i=B(e.slide)[v("right")],o=B(g)[v("left")];return it(i-o)+(n?0:q())}return 0}function _(n){return A(t.length-1)-A(0)+P(0,n)}function q(){var t=y(0);return t&&parseFloat(T(t.slide,v("marginRight")))||0}function D(){return t.is(Mn)||_(!0)>C()}return{mount:function(){var t,n;w(),a(window,"resize load",(t=r(d,bt),n=qt(0,t,null,1),function(){n.isPaused()&&n.start()})),s([yt,gt],w),s(bt,S)},resize:S,listSize:C,slideSize:P,sliderSize:_,totalSize:A,getPadding:function(t){return parseFloat(T(m,v("padding"+(t?"Right":"Left"))))||0},isOverflow:D}},Clones:function(t,n,e){var o,r=_t(t),u=r.on,c=n.Elements,s=n.Slides,a=n.Direction.resolve,l=[];function d(){u(gt,f),u([yt,bt],h),(o=m())&&(function(n){var i=s.get().slice(),o=i.length;if(o){for(;i.length<n;)w(i,i);w(i.slice(-n),i.slice(0,n)).forEach((function(r,u){var a=u<n,d=function(n,i){var o=n.cloneNode(!0);return S(o,e.classes.clone),o.id=t.root.id+"-clone"+at(i+1),o}(r.slide,u);a?k(d,i[0].slide):x(c.list,d),w(l,d),s.register(d,u-n+(a?0:o),r.index)}))}}(o),n.Layout.resize(!0))}function f(){v(),d()}function v(){W(l),i(l),r.destroy()}function h(){var t=m();o!==t&&(o<t||!t)&&r.emit(gt)}function m(){var i=e.clones;if(t.is(Dn)){if(p(i)){var o=e[a("fixedWidth")]&&n.Layout.slideSize(0);i=o&&et(B(c.track)[a("width")]/o)||e[a("autoWidth")]&&t.length||2*e.perPage}}else i=0;return i}return{mount:d,destroy:v}},Move:function(t,n,e){var i,o=_t(t),r=o.on,u=o.emit,c=t.state.set,s=n.Layout,a=s.slideSize,l=s.getPadding,d=s.totalSize,f=s.listSize,v=s.sliderSize,h=n.Direction,m=h.resolve,g=h.orient,y=n.Elements,b=y.list,w=y.track;function E(){n.Controller.isBusy()||(n.Scroll.cancel(),S(t.index),n.Slides.update())}function S(t){x(P(t,!0))}function x(e,i){if(!t.is(Mn)){var o=i?e:function(e){if(t.is(Dn)){var i=C(e),o=i>n.Controller.getEnd();(i<0||o)&&(e=k(e,o))}return e}(e);T(b,"transform","translate"+m("X")+"("+o+"px)"),e!==o&&u("sh")}}function k(t,n){var e=t-_(n),i=v();return t-g(i*(et(it(e)/i)||1))*(n?1:-1)}function L(){x(A(),!0),i.cancel()}function C(t){for(var e=n.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var u=e[r].index,c=it(P(u,!0)-t);if(!(c<=o))break;o=c,i=u}return i}function P(n,i){var o=g(d(n-1)-function(t){var n=e.focus;return"center"===n?(f()-a(t,!0))/2:+n*a(t)||0}(n));return i?function(n){return e.trimSpace&&t.is(qn)&&(n=ut(n,0,g(v(!0)-f()))),n}(o):o}function A(){var t=m("left");return B(b)[t]-B(w)[t]+g(l(!1))}function _(t){return P(t?n.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=n.Transition,r([ft,wt,yt,gt],E)},move:function(t,n,e,o){var r,s;t!==n&&(r=t>e,s=g(k(A(),r)),r?s>=0:s<=b[m("scrollWidth")]-B(w)[m("width")])&&(L(),x(k(A(),t>e),!0)),c(4),u(pt,n,e,t),i.start(n,(function(){c(3),u(ht,n,e,t),o&&o()}))},jump:S,translate:x,shift:k,cancel:L,toIndex:C,toPosition:P,getPosition:A,getLimit:_,exceededLimit:function(t,n){n=p(n)?A():n;var e=!0!==t&&g(n)<g(_(!1)),i=!1!==t&&g(n)>g(_(!0));return e||i},reposition:E}},Controller:function(t,n,e){var i,o,u,c,s=_t(t),a=s.on,l=s.emit,d=n.Move,f=d.getPosition,h=d.getLimit,m=d.toPosition,g=n.Slides,y=g.isEnough,b=g.getLength,w=e.omitEnd,E=t.is(Dn),S=t.is(qn),x=r(_,!1),k=r(_,!0),L=e.start||0,C=L;function P(){o=b(!0),u=e.perMove,c=e.perPage,i=M();var t=ut(L,0,w?i:o-1);t!==L&&(L=t,d.reposition())}function A(){i!==M()&&l(At)}function _(t,n){var e=u||(T()?1:c),o=q(L+e*(t?-1:1),L,!(u||T()));return-1===o&&S&&!ot(f(),h(!t),1)?t?0:i:n?o:D(o)}function q(n,r,s){if(y()||T()){var a=function(n){if(S&&"move"===e.trimSpace&&n!==L)for(var i=f();i===m(n,!0)&&rt(n,0,t.length-1,!e.rewind);)n<L?--n:++n;return n}(n);a!==n&&(r=n,n=a,s=!1),n<0||n>i?n=u||!rt(0,n,r,!0)&&!rt(i,r,n,!0)?E?s?n<0?-(o%c||c):o:n:e.rewind?n<0?i:0:-1:z(N(n)):s&&n!==r&&(n=z(N(r)+(n<r?-1:1)))}else n=-1;return n}function D(t){return E?(t+o)%o||0:t}function M(){for(var t=o-(T()||E&&u?1:c);w&&t-- >0;)if(m(o-1,!0)!==m(t,!0)){t++;break}return ut(t,0,o-1)}function z(t){return ut(T()?t:c*t,0,i)}function N(t){return T()?Z(t,i):nt((t>=i?o-1:t)/c)}function O(t){t!==L&&(C=L,L=t)}function T(){return!p(e.focus)||e.isNavigation}function I(){return t.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){P(),a([yt,gt,At],P),a(wt,A)},go:function(t,n,e){if(!I()){var o=function(t){var n=L;if(v(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],o=e[1],r=e[2];"+"===o||"-"===o?n=q(L+ +(""+o+(+r||1)),L):">"===o?n=r?z(+r):x(!0):"<"===o&&(n=k(!0))}else n=E?t:ut(t,0,i);return n}(t),r=D(o);r>-1&&(n||r!==L)&&(O(r),d.move(o,r,C,e))}},scroll:function(t,e,o,r){n.Scroll.scroll(t,e,o,(function(){var t=D(d.toIndex(f()));O(w?Z(t,i):t),r&&r()}))},getNext:x,getPrev:k,getAdjacent:_,getEnd:M,setIndex:O,getIndex:function(t){return t?C:L},toIndex:z,toPage:N,toDest:function(t){var n=d.toIndex(t);return S?ut(n,0,i):n},hasFocus:T,isBusy:I}},Arrows:function(t,n,e){var i,o,u=_t(t),c=u.on,s=u.bind,a=u.emit,l=e.classes,d=e.i18n,f=n.Elements,v=n.Controller,p=f.arrows,h=f.track,m=p,g=f.prev,y=f.next,b={};function w(){var t;!(t=e.arrows)||g&&y||(m=p||O("div",l.arrows),g=P(!0),y=P(!1),i=!0,x(m,[g,y]),!p&&k(m,h)),g&&y&&(q(b,{prev:g,next:y}),I(m,t?"":"none"),S(m,o=sn+"--"+e.direction),t&&(c([ft,ht,gt,St,At],A),s(y,"click",r(C,">")),s(g,"click",r(C,"<")),A(),N([g,y],Bt,h.id),a("arrows:mounted",g,y))),c(yt,E)}function E(){L(),w()}function L(){u.destroy(),U(m,o),i?(W(p?[g,y]:m),g=y=null):z([g,y],$t)}function C(t){v.go(t,!0)}function P(t){return X('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function A(){if(g&&y){var n=t.index,e=v.getPrev(),i=v.getNext(),o=e>-1&&n<e?d.last:d.prev,r=i>-1&&n>i?d.first:d.next;g.disabled=e<0,y.disabled=i<0,N(g,Gt,o),N(y,Gt,r),a("arrows:updated",g,y,e,i)}}return{arrows:b,mount:w,destroy:L,update:A}},Autoplay:function(t,n,e){var i,o,r=_t(t),u=r.on,c=r.bind,s=r.emit,a=qt(e.interval,t.go.bind(t,">"),(function(t){var n=d.bar;n&&T(n,"width",100*t+"%"),s("autoplay:playing",t)})),l=a.isPaused,d=n.Elements,f=n.Elements,v=f.root,p=f.toggle,h=e.autoplay,m="pause"===h;function g(){l()&&n.Slides.isEnough()&&(a.start(!e.resetProgress),o=i=m=!1,w(),s(Lt))}function y(t){void 0===t&&(t=!0),m=!!t,w(),l()||(a.pause(),s(Ct))}function b(){m||(i||o?y(!1):g())}function w(){p&&(E(p,yn,!m),N(p,Gt,e.i18n[m?"play":"pause"]))}function S(t){var i=n.Slides.getAt(t);a.set(i&&+F(i.slide,zn)||e.interval)}return{mount:function(){h&&(e.pauseOnHover&&c(v,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()})),e.pauseOnFocus&&c(v,"focusin focusout",(function(t){o="focusin"===t.type,b()})),p&&c(p,"click",(function(){m?g():y(!0)})),u([pt,Et,gt],a.rewind),u(pt,S),p&&N(p,Bt,d.track.id),m||g(),w())},destroy:a.cancel,play:g,pause:y,isPaused:l}},Cover:function(t,n,e){var i=_t(t).on;function o(t){n.Slides.forEach((function(n){var e=P(n.container||n.slide,"img");e&&e.src&&u(t,e,n)}))}function u(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),I(n,t?"none":"")}return{mount:function(){e.cover&&(i(Pt,r(u,!0)),i([ft,yt,gt],r(o,!0)))},destroy:r(o,!1)}},Scroll:function(t,n,e){var i,o,u=_t(t),c=u.on,s=u.emit,a=t.state.set,l=n.Move,d=l.getPosition,f=l.getLimit,v=l.exceededLimit,p=l.translate,h=t.is(qn),m=1;function g(t,e,u,c,f){var p=d();if(w(),u&&(!h||!v())){var g=n.Layout.sliderSize(),E=ct(t)*g*nt(it(t)/g)||0;t=l.toPosition(n.Controller.toDest(t%g))+E}var S=ot(p,t,1);m=1,e=S?0:e||tt(it(t-p)/1.5,800),o=c,i=qt(e,y,r(b,p,t,f),1),a(5),s(Et),i.start()}function y(){a(3),o&&o(),s(St)}function b(t,n,i,r){var u,c,s=d(),a=(t+(n-t)*(u=r,(c=e.easingFunc)?c(u):1-Math.pow(1-u,4))-s)*m;p(s+a),h&&!i&&v()&&(m*=.6,it(a)<10&&g(f(v(!0)),600,!1,o,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){c(pt,w),c([yt,gt],E)},destroy:w,scroll:g,cancel:E}},Drag:function(t,n,e){var i,o,r,u,s,a,d,f,v=_t(t),p=v.on,h=v.emit,m=v.bind,g=v.unbind,y=t.state,b=n.Move,w=n.Scroll,E=n.Controller,S=n.Elements.track,x=n.Media.reduce,k=n.Direction,C=k.resolve,P=k.orient,A=b.getPosition,_=b.exceededLimit,q=!1;function D(){var t=e.drag;W(!t),u="free"===t}function M(t){if(a=!1,!d){var n=B(t);i=t.target,o=e.noDrag,L(i,"."+vn+", ."+an)||o&&L(i,o)||!n&&t.button||(E.isBusy()?G(t,!0):(f=n?S:window,s=y.is([4,5]),r=null,m(f,An,z,Nn),m(f,_n,N,Nn),b.cancel(),w.cancel(),T(t)))}var i,o}function z(n){if(y.is(6)||(y.set(6),h("drag")),n.cancelable)if(s){b.translate(i+I(n)/(q&&t.is(qn)?5:1));var o=j(n)>200,r=q!==(q=_());(o||r)&&T(n),a=!0,h("dragging"),G(n)}else(function(t){return it(I(t))>it(I(t,!0))})(n)&&(s=function(t){var n=e.dragMinThreshold,i=l(n),o=i&&n.mouse||0,r=(i?n.touch:+n)||10;return it(I(t))>(B(t)?r:o)}(n),G(n))}function N(i){y.is(6)&&(y.set(3),h("dragged")),s&&(function(i){var o=function(n){if(t.is(Dn)||!q){var e=j(n);if(e&&e<200)return I(n)/e}return 0}(i),r=function(t){return A()+ct(t)*Z(it(t)*(e.flickPower||600),u?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(o),c=e.rewind&&e.rewindByDrag;x(!1),u?E.scroll(r,0,e.snap):t.is(Mn)?E.go(P(ct(o))<0?c?"<":"-":c?">":"+"):t.is(qn)&&q&&c?E.go(_(!0)?">":"<"):E.go(E.toDest(r),!0),x(!0)}(i),G(i)),g(f,An,z),g(f,_n,N),s=!1}function O(t){!d&&a&&G(t,!0)}function T(t){r=o,o=t,i=A()}function I(t,n){return R(t,n)-R(F(t),n)}function j(t){return J(t)-J(F(t))}function F(t){return o===t&&r||o}function R(t,n){return(B(t)?t.changedTouches[0]:t)["page"+C(n?"Y":"X")]}function B(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function W(t){d=t}return{mount:function(){m(S,An,c,Nn),m(S,_n,c,Nn),m(S,Pn,M,Nn),m(S,"click",O,{capture:!0}),m(S,"dragstart",G),p([ft,yt],D)},disable:W,isDragging:function(){return s}}},Keyboard:function(t,n,e){var i,o,r=_t(t),c=r.on,s=r.bind,a=r.unbind,l=t.root,d=n.Direction.resolve;function f(){var t=e.keyboard;t&&(i="global"===t?window:l,s(i,In,h))}function v(){a(i,In)}function p(){var t=o;o=!0,u((function(){o=t}))}function h(n){if(!o){var e=Tn(n);e===d(Mt)?t.go("<"):e===d(zt)&&t.go(">")}}return{mount:function(){f(),c(yt,v),c(yt,f),c(pt,p)},destroy:v,disable:function(t){o=t}}},LazyLoad:function(t,n,e){var o=_t(t),u=o.on,c=o.off,s=o.bind,a=o.emit,l="sequential"===e.lazyLoad,d=[ht,St],f=[];function v(){i(f),n.Slides.forEach((function(t){Y(t.slide,Rn).forEach((function(n){var i=F(n,jn),o=F(n,Fn);if(i!==n.src||o!==n.srcset){var r=e.classes.spinner,u=n.parentElement,c=P(u,"."+r)||O("span",r,u);f.push([n,t,c]),n.src||I(n,"none")}}))})),l?g():(c(d),u(d,p),p())}function p(){(f=f.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,i)||h(n)}))).length||c(d)}function h(t){var n=t[0];S(t[1].slide,Sn),s(n,"load error",r(m,t)),N(n,"src",F(n,jn)),N(n,"srcset",F(n,Fn)),z(n,jn),z(n,Fn)}function m(t,n){var e=t[0],i=t[1];U(i.slide,Sn),"error"!==n.type&&(W(t[2]),I(e,""),a(Pt,e,i),a(bt)),l&&g()}function g(){f.length&&h(f.shift())}return{mount:function(){e.lazyLoad&&(v(),u(gt,v))},destroy:r(i,f),check:p}},Pagination:function(t,n,e){var u,c,s=_t(t),a=s.on,l=s.emit,d=s.bind,f=n.Slides,v=n.Elements,p=n.Controller,h=p.hasFocus,m=p.getIndex,g=p.go,y=n.Direction.resolve,b=v.pagination,w=[];function E(){u&&(W(b?o(u.children):u),U(u,c),i(w),u=null),s.destroy()}function x(t){g(">"+t,!0)}function k(t,n){var e=w.length,i=Tn(n),o=L(),r=-1;i===y(zt,!1,o)?r=++t%e:i===y(Mt,!1,o)?r=(--t+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var u=w[r];u&&(j(u.button),g(">"+r),G(n,!0))}function L(){return e.paginationDirection||e.direction}function C(t){return w[p.toPage(t)]}function P(){var t=C(m(!0)),n=C(m());if(t){var e=t.button;U(e,yn),z(e,Xt),N(e,Ft,-1)}if(n){var i=n.button;S(i,yn),N(i,Xt,!0),N(i,Ft,"")}l("pagination:updated",{list:u,items:w},t,n)}return{items:w,mount:function n(){E(),a([yt,gt,At],n);var i=e.pagination;b&&I(b,i?"":"none"),i&&(a([pt,Et,St],P),function(){var n=t.length,i=e.classes,o=e.i18n,s=e.perPage,a=h()?p.getEnd()+1:et(n/s);S(u=b||O("ul",i.pagination,v.track.parentElement),c=fn+"--"+L()),N(u,jt,"tablist"),N(u,Gt,o.select),N(u,Ut,L()===Tt?"vertical":"");for(var l=0;l<a;l++){var m=O("li",null,u),g=O("button",{class:i.page,type:"button"},m),y=f.getIn(l).map((function(t){return t.slide.id})),E=!h()&&s>1?o.pageX:o.slideX;d(g,"click",r(x,l)),e.paginationKeyboard&&d(g,"keydown",r(k,l)),N(m,jt,"presentation"),N(g,jt,"tab"),N(g,Bt,y.join(" ")),N(g,Gt,st(E,l+1)),N(g,Ft,-1),w.push({li:m,button:g,page:l})}}(),P(),l("pagination:mounted",{list:u,items:w},C(t.index)))},destroy:E,getAt:C,update:P}},Sync:function(t,n,e){var o=e.isNavigation,u=e.slideFocus,c=[];function s(){var n,e;t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),o&&((e=(n=_t(t)).on)(mt,f),e("sk",v),e([ft,yt],d),c.push(n),n.emit(kt,t.splides))}function a(){c.forEach((function(t){t.destroy()})),i(c)}function l(t,n){var e=_t(t);e.on(pt,(function(t,e,i){n.go(n.is(Dn)?i:t)})),c.push(e)}function d(){N(n.Elements.list,Ut,e.direction===Tt?"vertical":"")}function f(n){t.go(n.index)}function v(t,n){b(Bn,Tn(n))&&(f(t),G(n))}return{setup:r(n.Media.set,{slideFocus:p(u)?o:u},!0),mount:s,destroy:a,remount:function(){a(),s()}}},Wheel:function(t,n,e){var i=_t(t).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,u=r<0,c=J(i),s=e.wheelMinThreshold||0,a=e.wheelSleep||0;it(r)>s&&c-o>a&&(t.go(u?"<":">"),o=c),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(u)&&G(i)}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",r,Nn)}}},Live:function(t,n,e){var i=_t(t).on,o=n.Elements.track,u=e.live&&!e.isNavigation,c=O("span",mn),s=qt(90,r(a,!1));function a(t){N(o,Vt,t),t?(x(o,c),s.start()):(W(c),s.cancel())}function l(t){u&&N(o,Kt,t?"off":"polite")}return{mount:function(){u&&(l(!n.Autoplay.isPaused()),N(o,Qt,!0),c.textContent="…",i(Lt,r(l,!0)),i(Ct,r(l,!1)),i([ht,St],r(a,!0)))},disable:l,destroy:function(){z(o,[Kt,Qt,Vt]),W(c)}}}}),Xn={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Cn,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Gn(t,n,e){var i=n.Slides;function o(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){_t(t).on([ft,gt],o)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),u(n)},cancel:c}}function Hn(t,n,e){var i,o=n.Move,u=n.Controller,c=n.Scroll,s=n.Elements.list,a=r(T,s,"transition");function l(){a(""),c.cancel()}return{mount:function(){_t(t).bind(s,"transitionend",(function(t){t.target===s&&i&&(l(),i())}))},start:function(n,r){var s=o.toPosition(n,!0),l=o.getPosition(),d=function(n){var i=e.rewindSpeed;if(t.is(qn)&&i){var o=u.getIndex(!0),r=u.getEnd();if(0===o&&n>=r||o>=r&&0===n)return i}return e.speed}(n);it(s-l)>=1&&d>=1?e.useScroll?c.scroll(s,d,!1,r):(a("transform "+d+"ms "+e.easing),o.translate(s,!0),i=r):(o.jump(n),r())},cancel:l}}var Yn=function(){function n(t,e){var i;this.event=_t(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return b(g(t),i)}}),this.splides=[],this._o={},this._E={};var o=v(t)?H(document,t):t;$(o,o+" is invalid."),this.root=o,e=D({label:F(o,Gt)||"",labelledby:F(o,Ht)||""},Xn,n.defaults,e||{});try{D(e,JSON.parse(F(o,Q)))}catch(t){$(!1,"Invalid JSON")}this._o=Object.create(D({},e))}var e,r,u=n.prototype;return u.mount=function(t,n){var e=this,i=this.state,o=this.Components;return $(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=n||this._T||(this.is(Mn)?Gn:Hn),this._E=t||this._E,_(q({},Wn,this._E,{Transition:this._T}),(function(t,n){var i=t(e,o,e._o);o[n]=i,i.setup&&i.setup()})),_(o,(function(t){t.mount&&t.mount()})),this.emit(ft),S(this.root,gn),i.set(3),this.emit(vt),this},u.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},u.go=function(t){return this._C.Controller.go(t),this},u.on=function(t,n){return this.event.on(t,n),this},u.off=function(t){return this.event.off(t),this},u.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(o(arguments,1))),this},u.add=function(t,n){return this._C.Slides.add(t,n),this},u.remove=function(t){return this._C.Slides.remove(t),this},u.is=function(t){return this._o.type===t},u.refresh=function(){return this.emit(gt),this},u.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(1)?_t(this).on(vt,this.destroy.bind(this,t)):(_(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(xt),n.destroy(),t&&i(this.splides),e.set(7)),this},e=n,(r=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&t(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();Yn.defaults={},Yn.STATES=e;(()=>{const t=document.querySelector(".top-slider").querySelectorAll(".item");let n=0;setInterval((()=>{t[n].style.display="none",t[n].querySelector(".table").classList.remove("active"),n++,n>=t.length&&(n=0),t[n].style.display="block",t[n].querySelector(".table").classList.add("active")}),3e3)})(),(()=>{const t=document.querySelector(".arrow-left"),n=document.querySelector(".arrow-right"),e=new Yn(".services-splide",{type:"loop",pagination:!1,arrows:!1,autoplay:!0,perMove:1,interval:2e3,perPage:3,breakpoints:{768:{perPage:2},640:{perPage:1}}}).mount();t.addEventListener("click",(()=>{e.go("-1")})),n.addEventListener("click",(()=>{e.go("+1")}))})(),(()=>{const t=document.querySelector(".accordeon"),n=t.querySelectorAll(".element");t.addEventListener("click",(t=>{n.forEach((n=>{t.target==n.querySelector(".title")?(n.className="element active",n.querySelector(".element-content").style.display="block"):(n.className="element",n.querySelector(".element-content").style.display="none")}))}))})(),(()=>{const t=document.querySelector(".up"),n=document.getElementById("services");t.style.display="none",window.addEventListener("scroll",(e=>{const i=document.documentElement.scrollTop-n.getBoundingClientRect().top;t.style.display=i>0?"block":"none"}));const e=()=>{window.pageYOffset>0&&(window.scrollBy(0,-10),setTimeout(e,0))};t.addEventListener("click",(()=>{e()}))})(),(()=>{const t=document.querySelector('[name="fio"]');t.addEventListener("input",(n=>{(n.target.value=n.target.value.replace(/[^\-а-яА-ЯёЁ\s]+$/g,""))&&t.classList.add("success")}));const n=document.querySelector('[name="tel"]');n.setAttribute("required",!0),n.addEventListener("input",(t=>{(t.target.value=t.target.value.replace(/[^0-9\(\)\+]/g,""))&&n.classList.add("success")}))})(),(()=>{const t=document.querySelector('[name="form-callback"]'),n=document.createElement("div"),e="Ошибка...",i=document.querySelector(".modal-callback"),o=document.querySelector(".modal-overlay");try{if(!t)throw new Error("Пожаaaлуйста, верните форму на место");t.addEventListener("submit",(r=>{r.preventDefault(),(()=>{const r=new FormData(t),u={},c=t.querySelectorAll(".form-control");n.textContent="Загрузка...",t.append(n),n.setAttribute("id","sendStatus"),r.forEach(((t,n)=>{u[n]=t})),(t=>{let n=!0;return t.forEach((t=>{t.classList.contains("success")||(n=!1)})),n})(c)?(async r=>{await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((()=>{t.querySelectorAll(".form-control").forEach((t=>{t.value=""})),setTimeout((()=>{i.style.display="none",o.style.display="none"}),5e3)})).catch((t=>{n.textContent=e}))})(u).then((t=>{n.textContent="Спасибо! Наш менеджер с Вами свяжется"})).catch((t=>{n.textContent=e})):alert("Данные не валидны!!!")})()}))}catch(t){console.log(t.message)}})(),(()=>{const t=document.querySelector(".modal-callback"),n=t.querySelector(".modal-close"),e=document.querySelector(".modal-overlay"),i=document.querySelector(".mobile-menu"),o=()=>{const t=document.getElementById("sendStatus");t&&(t.textContent="")},r=()=>{t.style.display="none",e.style.display="none",o()};document.addEventListener("click",(n=>{n.target.closest(".fancyboxModal")&&(t.style.display="block",e.style.display="block",o(),i.classList.remove("open"))})),e.addEventListener("click",(()=>{r()})),n.addEventListener("click",(()=>{r()}))})(),(()=>{const t=document.querySelectorAll('a[href*="#"]'),n=document.querySelector(".mobile-menu");t.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("open");const i=t.getAttribute("href");document.querySelector(""+i).scrollIntoView({behavior:"smooth",block:"start"})}))}))})(),(()=>{const t=document.querySelector(".mob-menu-btn"),n=document.querySelector(".mobile-menu");t.addEventListener("click",(()=>{n.classList.add("open")}))})()})();