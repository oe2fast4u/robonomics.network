(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5q55":function(t,e,r){"use strict";function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],a=!0,s=!1,o=void 0;try{for(var i,n=t[Symbol.iterator]();!(a=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.enable=e.disable=void 0;var o,i,n,c,l,u,d,_,f,g=[].slice;o=0,c={},n=!1;e.disable=function(){return n=!0};e.enable=function(){var t,e,r;for(t in n=!1,r=[],c)e=c[t],r.push(f(e));return r},_=function(t,e){var r,a,s;if(!((null!=e&&null!=(s=e.value)?s.disabled:void 0)||i.defaults.disabled||n))return a={observer:l(t,e)},r="i"+o++,t.setAttribute("data-in-viewport",r),c[r]=a;t.classList.add.apply(t.classList,["in-viewport"])},l=function(t,e){var r,o,n,c=e.value,l=void 0===c?{}:c,u=e.modifiers;return n=l.root||i.defaults.root,n=function(){switch(s(n)){case"function":return n();case"string":return document.querySelector(n);case"object":return n}}(),r="string"==typeof l?l:l.margin||i.defaults.margin,(o=new IntersectionObserver((function(e){var r;return r=a(g.call(e,-1),1)[0],f({el:t,entry:r,modifiers:u})}),{root:n,rootMargin:r,threshold:[0,1]})).observe(t),o},f=function(t){var e,r,a,s=t.el,o=t.entry,i=t.modifiers;if(a=o.boundingClientRect,r=o.rootBounds,e=o.isIntersecting,r||(r={top:0,bottom:window.innerHeight}),s.classList.toggle("in-viewport",e),s.classList.toggle("above-viewport",a.top<r.top),s.classList.toggle("below-viewport",a.bottom>r.bottom+1),i.once&&e)return d(s)},u=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},d=function(t){var e,r,a;if(e=t.getAttribute("data-in-viewport"),r=c[e])return null!=(a=r.observer)&&a.disconnect(),delete c[e]};var m=i={defaults:{root:void 0,margin:"0px 0px -1px 0px",disabled:!1},inserted:function(t,e){return _(t,e)},componentUpdated:function(t,e){if(!u(e.value,e.oldValue))return d(t),_(t,e)},unbind:function(t){return d(t)}};e.default=m},"9N2j":function(t,e,r){"use strict";r("pOEY");var a=r("KHd+"),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"menu oldy",attrs:{itemscope:"",itemtype:"http://www.schema.org/SiteNavigationElement"}},[r("div",[r("g-link",{attrs:{to:"/community",itemprop:"url"}},[r("span",{attrs:{itemprop:"name"}},[t._v("Enter the Robonomics")])]),r("p",[t._v("All you need to know is here: white paper, roadmap, token, assets, chat and other social links.")])],1),r("div",[r("g-link",{attrs:{to:"https://github.com/airalab/robonomics/releases",target:"_blank",itemprop:"url"}},[r("span",{attrs:{itemprop:"name"}},[t._v("Github Releases")])]),r("p",[t._v("Build technical && economic transactions in Polkadot/Ethereum blockchain with robots using opensource Robonomics framework.")])],1),r("div",[r("g-link",{attrs:{to:"https://wiki.robonomics.network",target:"_blank",itemprop:"url"}},[r("span",{attrs:{itemprop:"name"}},[t._v("WIKI for devs")])]),r("p",[t._v("Robonomics network quick start: installation and setting up guides, examples, glossary.")])],1),r("div",[r("g-link",{attrs:{to:"https://dapp.robonomics.network",target:"_blank",itemprop:"url"}},[r("span",{attrs:{itemprop:"name"}},[t._v("DApp tools")])]),r("p",[t._v("Decentralized application with variety of Robonomics tools: swapping tokens, telemetry, working services, parachain etc.")])],1)])}),[],!1,null,null,null);e.a=s.exports},"BWX/":function(t,e,r){"use strict";r("v8ht")},EUja:function(t,e,r){"use strict";var a=r("ppGB"),s=r("HYAF");t.exports="".repeat||function(t){var e=String(s(this)),r="",o=a(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},QIpd:function(t,e,r){var a=r("xrYK");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"as+z":function(t,e,r){},iyQ6:function(t,e,r){"use strict";r.r(e);r("toAj");var a=r("Kw5r"),s=r("5q55"),o=r.n(s),i=r("9N2j"),n=r("9qaU");a.a.directive("in-viewport",o.a);var c={components:{Navigation:i.a,MetaInfo:n.default},mounted:function(){this.scale(),window.addEventListener("load",this.scale),window.addEventListener("resize",this.scale)},beforeDestroy:function(){window.removeEventListener("load",this.scale),window.removeEventListener("resize",this.scale)},methods:{scale:function(){this.scaleRatio(".roboHands__move.left",".roboHands__left"),this.scaleRatio(".roboHands__move.right",".roboHands__right")},scaleRatio:function(t,e){var r=.9*(document.querySelector(t).offsetWidth/document.querySelector(e).offsetWidth).toFixed(2);document.querySelector(e).style.transform="scale("+r+")"}}},l=(r("BWX/"),r("KHd+")),u=a.a.config.optionMergeStrategies.computed,d={metadata:{siteName:"Robonomics Network",siteDescription:"Secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control."}},_=function(t){var e=t.options;e.__staticData?e.__staticData.data=d:(e.__staticData=a.a.observable({data:d}),e.computed=u({$static:function(){return e.__staticData.data}},e.computed))},f=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("MetaInfo",{attrs:{pageTitle:"Home",pageDescription:this.$static.metadata.siteDescription}}),e("div",{staticClass:"homepage"},[e("div",{staticClass:"layout__title"},[e("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{itemprop:"name"},domProps:{innerHTML:this._s(this.$static.metadata.siteName)}})]),e("section",{staticClass:"homepage__description"},[e("div",{staticClass:"layout__content"},[e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{itemprop:"description"},domProps:{innerHTML:this._s(this.$static.metadata.siteDescription)}}),e("Navigation")],1),e("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport.once",modifiers:{once:!0}}],staticClass:"roboHands"},[e("div",{staticClass:"roboHands__move left"},[e("div",{staticClass:"roboHands__left"},[e("g-image",{staticClass:"roboHands__left__1",attrs:{src:r("q721")}}),e("g-image",{staticClass:"roboHands__left__2",attrs:{src:r("zf7x")}}),e("g-image",{staticClass:"roboHands__left__3",attrs:{src:r("TNFr")}}),e("g-image",{staticClass:"roboHands__left__4",attrs:{src:r("kxUY")}}),e("g-image",{staticClass:"roboHands__left__5",attrs:{src:r("6txv")}}),e("g-image",{staticClass:"roboHands__left__6",attrs:{src:r("eQ4B")}}),e("g-image",{staticClass:"roboHands__left__7",attrs:{src:r("0fEB")}}),e("g-image",{staticClass:"roboHands__left__8",attrs:{src:r("lL92")}}),e("g-image",{staticClass:"roboHands__left__9",attrs:{src:r("CoD9")}}),e("g-image",{staticClass:"roboHands__left__10",attrs:{src:r("Ehed")}}),e("g-image",{staticClass:"roboHands__left__11",attrs:{src:r("EtMq")}})],1)]),e("div",{staticClass:"roboHands__move right"},[e("div",{staticClass:"roboHands__right"},[e("g-image",{staticClass:"roboHands__right__1",attrs:{src:r("LPIO")}}),e("g-image",{staticClass:"roboHands__right__2",attrs:{src:r("GYpJ")}}),e("g-image",{staticClass:"roboHands__right__3",attrs:{src:r("ksDP")}}),e("g-image",{staticClass:"roboHands__right__4",attrs:{src:r("P8y9")}}),e("g-image",{staticClass:"roboHands__right__5",attrs:{src:r("CopK")}}),e("g-image",{staticClass:"roboHands__right__6",attrs:{src:r("s0l/")}}),e("g-image",{staticClass:"roboHands__right__7",attrs:{src:r("iRCU")}}),e("g-image",{staticClass:"roboHands__right__8",attrs:{src:r("0nWH")}}),e("g-image",{staticClass:"roboHands__right__9",attrs:{src:r("4D0A")}}),e("g-image",{staticClass:"roboHands__right__10",attrs:{src:r("CYdh")}}),e("g-image",{staticClass:"roboHands__right__11",attrs:{src:r("7G98")}}),e("g-image",{staticClass:"roboHands__right__12",attrs:{src:r("tI3r")}}),e("g-image",{staticClass:"roboHands__right__13",attrs:{src:r("la6G")}}),e("g-image",{staticClass:"roboHands__right__14",attrs:{src:r("zL5t")}}),e("g-image",{staticClass:"roboHands__right__15",attrs:{src:r("3j3o")}})],1)])])])])],1)}),[],!1,null,null,null);"function"==typeof _&&_(f);e.default=f.exports},pOEY:function(t,e,r){"use strict";r("as+z")},toAj:function(t,e,r){"use strict";var a=r("I+eb"),s=r("ppGB"),o=r("QIpd"),i=r("EUja"),n=r("0Dky"),c=1..toFixed,l=Math.floor,u=function(t,e,r){return 0===e?r:e%2==1?u(t,e-1,r*t):u(t*t,e/2,r)};a({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){c.call({})}))},{toFixed:function(t){var e,r,a,n,c=o(this),d=s(t),_=[0,0,0,0,0,0],f="",g="0",m=function(t,e){for(var r=-1,a=e;++r<6;)a+=t*_[r],_[r]=a%1e7,a=l(a/1e7)},p=function(t){for(var e=6,r=0;--e>=0;)r+=_[e],_[e]=l(r/t),r=r%t*1e7},v=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==_[t]){var r=String(_[t]);e=""===e?r:e+i.call("0",7-r.length)+r}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*u(2,69,1))-69)<0?c*u(2,-e,1):c/u(2,e,1),r*=4503599627370496,(e=52-e)>0){for(m(0,r),a=d;a>=7;)m(1e7,0),a-=7;for(m(u(10,a,1),0),a=e-1;a>=23;)p(1<<23),a-=23;p(1<<a),m(1,1),p(2),g=v()}else m(0,r),m(1<<-e,0),g=v()+i.call("0",d);return g=d>0?f+((n=g.length)<=d?"0."+i.call("0",d-n)+g:g.slice(0,n-d)+"."+g.slice(n-d)):f+g}})},v8ht:function(t,e,r){}}]);