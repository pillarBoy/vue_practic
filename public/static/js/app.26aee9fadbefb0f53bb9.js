webpackJsonp([6,8],[,,function(t,e,n){n(15);var a=n(0)(n(8),n(20),null,null);t.exports=a.exports},function(t,e,n){"use strict";var a=n(1),i=n.n(a),o=i.a.filter("to-upper-case",function(t){return t?(t=t.toString(),t.toUpperCase()):""});e.a=o},function(t,e,n){"use strict";var a=n(16),i=n.n(a),o=n(2),r=n.n(o),c=n(17),u=n.n(c);e.a=[{path:"/",components:{default:i.a,nav:r.a},children:[{path:"/home",name:"home",meta:{auth:!1},component:u.a,children:[{path:"all",component:function(t){return n.e(4).then(function(){var e=[n(26)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"good",component:function(t){return n.e(2).then(function(){var e=[n(28)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"share",component:function(t){return n.e(1).then(function(){var e=[n(30)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"ask",component:function(t){return n.e(3).then(function(){var e=[n(27)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"job",component:function(t){return n.e(0).then(function(){var e=[n(29)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/topic/:vid",name:"name",meta:{auth:!1},component:function(t){return n.e(5).then(function(){var e=[n(31)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),i=(n.n(a),n(11)),o=(n.n(i),n(2)),r=n.n(o);e.default={data:function(){return{}},methods:{},components:{NavPage:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(12);n.n(a);e.default={data:function(){return{msg:"nav page"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(13);n.n(a);e.default={data:function(){return{threme:"Home",busy:!1,tabDirection:1,tabs:[{title:"全部",active:!0,tab:"all"},{title:"精华",active:!1,tab:"good"},{title:"分享",active:!1,tab:"share"},{title:"招聘",active:!1,tab:"job"},{title:"问答",active:!1,tab:"ask"}],datas:[]}},mounted:function(){this.tabAddClass(this.$route.query.tab)},methods:{changeTab:function(t,e){var n=t.tab;this.tabAddClass(t.tab,e),this.$router.push({path:"/home/"+n+"/?tab="+n})},topicDetail:function(t){this.$router.push({path:"/topic/"+t.id})},tabAddClass:function(t,e){var n=this;this.tabs.map(function(a,i){a.active&&(i-e<0?n.tabDirection=-1:n.tabDirection=1),a.active=!1,a.tab===t&&(n.tabs[i].active=!0)})},beforeInFn:function(t){this.tabDirection<0?t.className="right-to-left-in":t.className="left-to-right-in"},beforeOutFn:function(t){this.tabDirection<0?t.className="right-to-left-Out":t.className="left-to-right-out"}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(14);var a=n(0)(n(7),n(18),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(9),n(19),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"zoom",mode:"out-in"}},[n("router-view")],1),t._v(" "),n("NavPage")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-page"}},[n("header",t._l(t.tabs,function(e,a){return n("div",{key:e.tab,class:e.active?"active":"",attrs:{"data-tab":e.tab},on:{click:function(n){t.changeTab(e,a)}}},[t._v(t._s(e.title))])})),t._v(" "),n("div",{staticClass:"scroll-contain"},[n("transition",{attrs:{mode:"out-in"},on:{"before-enter":t.beforeInFn,"before-leave":t.beforeOutFn}},[n("router-view")],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-nav"}},[n("div",{staticClass:"active"},[t._v("home")]),t._v(" "),n("div",[t._v("msg")]),t._v(" "),n("div",[t._v("publishi")]),t._v(" "),n("div",[t._v("UC")])])}]}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i,o,r=n(1),c=n.n(r),u=n(6),s=n.n(u),l=n(5),d=n.n(l),f=n(4),p=n(3),h=document.documentElement,v=document.createElement("style"),m=document.querySelector('meta[name="viewport"]');a=window.devicePixelRatio||1,o=1/a,i=h.clientWidth*a/10,m.setAttribute("content","initial-scale="+o+", maximum-scale="+o+", minimum-scale="+o+", user-scalable=no"),h.setAttribute("data-dpr",a),h.firstElementChild.appendChild(v),v.innerHTML="html{font-size:"+i+"px!important}",window.rem2px=function(t){return parseFloat(t)*i},window.px2rem=function(t){return t=parseFloat(t),t/i},window.dpr=a,window.rem=i,c.a.use(s.a),c.a.use(d.a);var b=new s.a({routes:f.a});new c.a({router:b,filters:p.a,template:"<router-view><router-view>"}).$mount("#root")}],[23]);