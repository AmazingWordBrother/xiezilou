webpackJsonp([6,10],{73:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{settings:[{name:"首页",icon:"all",href:"/home"},{name:"预约",icon:"phone",href:"/order"},{name:"",icon:"add",href:"/new"},{name:"信息",icon:"comments",href:"/info"},{name:"我",icon:"account",href:"/me"}]}}}},74:function(e,t,r){t=e.exports=r(20)(),t.push([e.id,"footer[data-v-66bd996f]{position:fixed;bottom:0;z-index:1;background-color:#fff}footer a[data-v-66bd996f]{float:left;width:4rem;height:2.7rem;overflow:hidden;border-top:1px solid #e5e5e5;text-align:center;font-size:.64rem;color:#bbb}footer a .icon[data-v-66bd996f]{display:block;margin:.32rem auto .16rem}footer a.router-link-active .icon[data-v-66bd996f],footer a.router-link-active span[data-v-66bd996f]{color:#ff6932}footer a div[data-v-66bd996f]{margin-top:.2875rem;display:inline-block;width:2.375rem;height:2.0625rem;background-color:#ff6932;border-radius:.1875rem}footer a div .icon[data-v-66bd996f]{width:1.4125rem;height:1.4125rem;color:#fff}",""])},75:function(e,t,r){var o=r(74);"string"==typeof o&&(o=[[e.id,o,""]]);r(21)(o,{});o.locals&&(e.exports=o.locals)},76:function(e,t,r){var o,n;r(75),o=r(73);var a=r(77);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-66bd996f",e.exports=o},77:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",e._l(e.settings,function(t,o){return r("router-link",{attrs:{to:t.href}},[2!==o?r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-"+t.icon}})]):e._e(),e._v(" "),2!==o?r("span",[e._v(e._s(t.name))]):r("div",[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-"+t.icon}})])])])}))},staticRenderFns:[]}},99:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(138),a=o(n),i=r(76),f=o(i);t.default={components:{MyHeader:a.default},beforeCreate:function(){this.$parent.footer=f.default}}},101:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{settings:[]}},created:function(){this.settings=this.$router.options.routes[3].children}}},116:function(e,t,r){t=e.exports=r(20)(),t.push([e.id,"header[data-v-df0f1402]{display:-ms-flexbox;display:flex;padding:.375rem 3.125rem;background-color:#fff;border-bottom:1px solid #ddd}header a[data-v-df0f1402]{-ms-flex:1;flex:1;margin-right:-1px;height:1.5625rem;border:1px solid #ff6932;text-align:center;font-size:.75rem;line-height:1.5625rem}header a[data-v-df0f1402]:first-of-type{border-top-left-radius:4px;border-bottom-left-radius:4px}header a[data-v-df0f1402]:last-of-type{border-top-right-radius:4px;border-bottom-right-radius:4px}header a.router-link-active[data-v-df0f1402]{background-color:#ff6932;color:#fff}header a[data-v-df0f1402]:not(.router-link-active){color:#ff6932}",""])},126:function(e,t,r){var o=r(116);"string"==typeof o&&(o=[[e.id,o,""]]);r(21)(o,{});o.locals&&(e.exports=o.locals)},134:function(e,t,r){var o,n;o=r(99);var a=r(144);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=o},138:function(e,t,r){var o,n;r(126),o=r(101);var a=r(158);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-df0f1402",e.exports=o},144:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"withFooter"},[r("my-header"),e._v(" "),r("router-view")],1)},staticRenderFns:[]}},158:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",e._l(e.settings,function(t){return r("router-link",{attrs:{to:t.path},domProps:{textContent:e._s(t.meta.name)}})}))},staticRenderFns:[]}}});