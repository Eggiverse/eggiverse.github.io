webpackJsonp([0],{"4zwc":function(t,e){},AkMv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h1",[this._v("Test doc")]),this._v(" "),e("h2",[this._v("Test h2")]),this._v(" "),e("blockquote",[e("p",[this._v("some code here\n#include "),e("iostream")],1)])])},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);e.default=i.exports},L4Ms:function(t,e,n){t.exports=n("lDS+")},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"navin"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Eggiverse")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/app/ColourMatrix"}},[t._v("ColourMatrix")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/app/CountingDevice"}},[t._v("CountingDevice")])],1)])])]),t._v(" "),n("router-view")],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",[this._v("\n    Eggiverse Studio\n    ")])])}]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("4zwc")},null,null).exports,a=n("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Eggiverse",mynum:1}},methods:{addone:function(t){this.mynum+=1}}},o,!1,function(t){n("QxcA")},"data-v-e6a0073c",null).exports,l=n("eJs4"),u={name:"MyTest",data:function(){return{mylist:[1,2,3,5,8]}},components:{testmd:n.n(l).a}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.mylist,function(e){return n("li",{key:e},[t._v("\n      "+t._s(e)+"\n    ")])}),0),t._v(" "),n("div",[n("testmd")],1)])},staticRenderFns:[]},m=n("VU/8")(u,p,!1,null,null,null).exports,v=n("L4Ms"),h={name:"MyApp",data:function(){return{mylist:[1,2,3,5,8],cmon:!1}},components:{cmprc:n.n(v).a},beforeRouteUpdate:function(t,e,n){"ColourMatrix"!==t.params.appname&&"CountingDevice"!==t.params.appname?n("/404"):(this.cmon="ColourMatrix"===t.params.appname,n())},beforeRouteEnter:function(t,e,n){"ColourMatrix"!==t.params.appname&&"CountingDevice"!==t.params.appname?n("/404"):n(function(e){e.cmon="ColourMatrix"===t.params.appname})}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(" "+this._s(this.$route.params.appname)+" ")]),this._v(" "),this.cmon?e("cmprc"):this._e()],1)},staticRenderFns:[]};var _=n("VU/8")(h,d,!1,function(t){n("z+E+")},"data-v-2f0352b7",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(" 404 ")]),this._v(" "),e("p",[this._v("Sorry, Page not found")])])}]};var y=n("VU/8")(null,f,!1,function(t){n("RsLa")},"data-v-4e8757e5",null).exports;r.a.use(a.a);var x=new a.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/mytest",name:"mytest",component:m},{path:"/app/:appname",name:"myapp",component:_},{path:"/404",name:"404",component:y},{path:"*",redirect:"/404"}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:x,components:{App:s},template:"<App/>"})},QxcA:function(t,e){},RsLa:function(t,e){},eJs4:function(t,e,n){t.exports=n("AkMv")},"lDS+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h1",[this._v("Privacy Policy of Colour Matrix")]),this._v(" "),e("p",[this._v("Eggiverse studio promises not to collect or use any private information.\nSome anonymous data like app installation might be collected by Microsoft Store\nbut we are sure the data contains absolutely no privacy.")])])}]},i=n("VU/8")(null,r,!1,null,null,null);e.default=i.exports},"z+E+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e5a30891b956f0a938ca.js.map