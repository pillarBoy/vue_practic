webpackJsonp([2,0],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(30),o=a(i),s=n(102),r=a(s),u=n(90),l=a(u),c=n(91),f=a(c),d=n(34),v=a(d),m=n(32),_=a(m),p=n(92),h=a(p);console.log("production"),o.default.use(r.default),o.default.use(f.default);var b=new r.default({routes:_.default});o.default.component("CircleMenu",l.default),new o.default({el:"#app",store:v.default,router:b,render:function(t){return t(h.default)}})},,,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ADD_ITEM="ADD_ITEM",e.ADD_COUNT="ADD_COUNT"},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(95),o=a(i),s=n(94),r=a(s),u=n(96),l=a(u),c=[{path:"/home",component:o.default},{path:"/about",component:r.default},{path:"/list",component:l.default}];e.default=c},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),o=a(i);e.default={addItem:function(t,e){var n=t.commit;console.log(e),n(o.ADD_ITEM,e.payload)}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(30),o=a(i),s=n(31),r=a(s),u=n(35),l=a(u),c=n(33),f=a(c);o.default.use(r.default),e.default=new r.default.Store({state:{items:[],count:0},actions:f.default,mutations:l.default})},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(44),r=i(s),u=n(46),l=i(u),c=n(10),f=a(c);e.default=(o={},(0,r.default)(o,f.ADD_ITEM,function(t,e){t.items=[].concat((0,l.default)(t.items),(0,l.default)(e))}),(0,r.default)(o,f.ADD_COUNT,function(t){t.count++}),o)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(78);var i=n(93),o=a(i);e.default={components:{NavTab:o.default},methods:{},data:function(){return{addClass:""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{routes:[{path:"/home",component:"home"},{path:"/about",component:"about"},{path:"/list",component:"TodoList"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{NODE_ENV:0,sm:"about page",isActive:!0,bannerEle:null,animateTime:"",completeTime:"",images:[n(84),n(85),n(86),n(87),n(88),n(89)],parsTime:""}},mounted:function(){this.bannerEle=window.document.getElementById("banner")},methods:{autoplay:function(t){this.animateTime&&clearInterval(this.animateTime),this.completeTime&&clearInterval(this.completeTime),this.playAnimation()},playAnimation:function(){var t=this;this.animateTime=setInterval(function(){var e=t.bannerEle.firstChild,n=window.getComputedStyle(e),a=parseInt(n.left);if(0===a){var i=t.images.length;t.moveImage(1,i);var o=300;a-=o*(i-1)}a+=1,e.style.left=a+"px"},10)},moveContianer:function(t){},stopplay:function(){var t=this;this.completeTime=setInterval(function(){var e=t.bannerEle.firstChild,n=window.getComputedStyle(e),a=parseInt(n.left);Math.abs(a)%300===0&&(clearTimeout(t.parsTime),clearInterval(t.animateTime),clearInterval(t.completeTime))},10)},takeOne:function(t){if("LI"===t.target.nodeName){var e=t.target.innerHTML;this.moveImage(e)}},moveImage:function(t,e){var n=this.images.splice(t,e);this.images=n.concat(this.images)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0;e.default={data:function(){return{msg:"home page",data:[],busy:!1}},methods:{loadMore:function(){var t=this;this.busy=!0,setTimeout(function(){for(var e=0,a=3;e<a;e++)t.data.push({name:n++});t.busy=!1,console.log(t.data)},100)}}}},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(45),s=i(o),r=n(31),u=n(10),l=a(u);e.default={computed:{count:function(){return this.$store.state.count},items:function(){return this.$store.state.items}},methods:(0,s.default)({},(0,r.mapActions)({makeAction:"addItem"}),{addVal:function(t){var e=this.valueI.trim();13!==t.keyCode&&"BUTTON"!==t.target.nodeName||e&&(this.makeAction({type:"addItem",payload:[e]}),this.valueI="")},addCount:function(){this.isActive=!this.isActive,this.$store.commit(l.ADD_COUNT)}}),data:function(){return{valueI:"",isActive:!1}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"static/img/img01.5c21f79.png"},function(t,e,n){t.exports=n.p+"static/img/img02.8d44fc1.png"},function(t,e,n){t.exports=n.p+"static/img/img03.37cd834.png"},function(t,e,n){t.exports=n.p+"static/img/img04.ecc99c9.png"},function(t,e,n){t.exports=n.p+"static/img/img05.67cb17c.png"},function(t,e,n){t.exports=n.p+"static/img/img06.69913b6.png"},,,function(t,e,n){var a,i;n(82),a=n(36);var o=n(100);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(81),a=n(37);var o=n(99);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(80),a=n(38);var o=n(98);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(79),a=n(39);var o=n(97);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(83),a=n(40);var o=n(101);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outer"},[t._v("\n  homePage\n  "+t._s(t.msg)+"\n  "),n("router-link",{attrs:{to:"about"}},[t._v("about")]),t._v(" "),n("div",{staticClass:"none-height"},[n("div",{staticClass:"test"},[n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},t._l(t.data,function(e){return n("div",{},[t._v("\n          "+t._s(e.name)+"\n        ")])}))])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._v("\n  about Page\n  "),t._m(0),t._v(" "),n("circle-menu",{staticClass:"test-circle",attrs:{type:"middle-around",number:4,animate:"animated swing",mask:"black",btn:"",circle:""}},[n("a",{staticClass:"fa fa-twitter fa-lg",slot:"item_1"},[t._v("1")]),t._v(" "),n("a",{staticClass:"fa fa-weixin fa-lg",slot:"item_2"},[t._v("2")]),t._v(" "),n("a",{staticClass:"fa fa-weibo fa-lg",slot:"item_3"},[t._v("3")]),t._v(" "),n("a",{staticClass:"fa fa-github fa-lg",slot:"item_4"},[t._v("4")])]),t._v(" "),n("circle-menu",{attrs:{type:"middle-around",number:4,animate:"animated swing",mask:"black",btn:"",circle:""}},[n("a",{staticClass:"fa fa-twitter fa-lg",slot:"item_1"},[t._v("1")]),t._v(" "),n("a",{staticClass:"fa fa-weixin fa-lg",slot:"item_2"},[t._v("2")]),t._v(" "),n("a",{staticClass:"fa fa-weibo fa-lg",slot:"item_3"},[t._v("3")]),t._v(" "),n("a",{staticClass:"fa fa-github fa-lg",slot:"item_4"},[t._v("4")])]),t._v(" "),n("h1",[t._v("轮播")]),t._v(" "),n("div",{attrs:{id:"banner"},on:{mouseover:t.autoplay,mouseout:t.stopplay}},[n("div",{staticClass:"container"},t._l(t.images,function(t){return n("img",{attrs:{src:t,alt:""}})})),t._v(" "),n("ul",{on:{click:t.takeOne}},[n("li",[t._v("1")]),t._v(" "),n("li",[t._v("2")]),t._v(" "),n("li",[t._v("3")]),t._v(" "),n("li",[t._v("4")]),t._v(" "),n("li",[t._v("5")])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.NODE_ENV,expression:"NODE_ENV"}]},[t._v("\n    asdfa\n  ")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"clearfix"},[n("li",{staticClass:"lf"},[t._v("12a")]),t._v(" "),n("li",{staticClass:"lf"},[t._v("12b")]),t._v(" "),n("li",{staticClass:"lf"},[t._v("12c")]),t._v(" "),n("li",{staticClass:"lf"},[t._v("12d")]),t._v(" "),n("li",{staticClass:"lf"},[t._v("12e")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"left-tab-contain"}},[n("ul",t._l(t.routes,function(e){return n("li",[n("router-link",{attrs:{"active-class":"active",to:e.path}},[t._v(t._s(e.component))])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"inlineBlock nav-tab"},[n("NavTab")],1),t._v(" "),n("div",{staticClass:"inlineBlock main-view"},[n("transition",{attrs:{name:"zoom",mode:"out-in"}},[n("router-view")],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"todo-list"}},[n("div",[n("h1",{class:{"animated swing":t.isActive}},[t._v("run")]),t._v(" "),n("transition",{attrs:{name:"test"}},[t.isActive?n("h1",[t._v("transition test")]):t._e()]),t._v(" "),n("p",[t._v(t._s(t.count))]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.addCount}},[t._v("add_count")])],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"data-source"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueI,expression:"valueI"}],attrs:{type:"text",placeholder:"input the value you need to add-to the list"},domProps:{value:t._s(t.valueI)},on:{keydown:t.addVal,input:function(e){e.target.composing||(t.valueI=e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.addVal}},[t._v("ADD")])]),t._v(" "),n("hr"),t._v(" "),n("ul",{staticClass:"show-list"},t._l(t.items,function(e){return n("li",[n("label",[t._m(0,!0),t._v(t._s(e))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("input",{attrs:{type:"checkbox",name:"",value:""}})])}]}}]);
//# sourceMappingURL=app.ca29a18101deffceb030.js.map