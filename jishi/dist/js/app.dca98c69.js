(function(t){function e(e){for(var n,a,l=e[0],c=e[1],s=e[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,l=1;l<r.length;l++){var c=r[l];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0d99":function(t,e,r){"use strict";var n=r("3e87"),i=r.n(n);i.a},1:function(t,e){},"3e87":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("b5cf"),r("9743"),r("b8aa"),r("5493"),r("fa55");var n=r("0261"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("keep-alive",[r("router-view")],1)],1)},o=[],a=(r("5c0b"),r("5511")),l={},c=Object(a["a"])(l,i,o,!1,null,null,null),s=c.exports,u=r("c478"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("mt-header",{staticStyle:{"border-bottom":"solid 1px #ccc",background:"#fff",color:"#000000","line-height":"2.5rem","font-size":"1rem"},attrs:{fixed:"",title:"庆丰包子铺（窦店）"}}),r("HelloWorld"),r("div",[t._m(0),r("div",{staticStyle:{height:"100%","margin-top":"4rem"}},[r("div",{staticStyle:{overflow:"hidden"}},[r("div",{staticStyle:{float:"left",width:"20%"}},t._l(t.arr,(function(e){return r("div",{key:e.title,staticStyle:{background:"#CCCCCC"}},[r("li",{staticStyle:{color:"#000",background:"#fff","line-height":"3rem",height:"100%"},on:{click:function(r){return t.fn(e.title)}}},[t._v(t._s(e.title))])])})),0),t._l(t.arr,(function(e){return r("div",{key:e.title,staticStyle:{width:"70%",padding:"0 5%",float:"left"}},[t.inx==e.title?r("div",t._l(e.arr,(function(e,n){return r("div",{key:n,staticStyle:{"margin-bottom":"2rem"}},[r("div",{staticStyle:{overflow:"hidden",height:"5rem"}},[r("div",{staticStyle:{float:"left",width:"20%"}},[r("img",{staticStyle:{width:"100%",height:"5rem",display:"block"},attrs:{src:e.src,alt:""}})]),r("div",{staticStyle:{float:"left","text-align":"left",width:"75%","margin-left":"5%",overflow:"hidden"}},[r("p",{staticStyle:{"margin-bottom":"1.5rem"}},[t._v(t._s(e.title))]),r("p",{staticStyle:{color:"red",float:"left"}},[t._v("￥"+t._s(e.jg))]),r("jia",{model:{value:e.num,callback:function(r){t.$set(e,"num",r)},expression:"a.num"}})],1)])])})),0):t._e()])}))],2)])]),r("span",{staticStyle:{float:"left","padding-left":"8rem","font-weight":"bold"}},[t._v("￥"+t._s(t.totalPrice))]),r("div",{staticStyle:{"padding-right":"10px",float:"right"}},[r("span",{staticStyle:{"text-align":"center"}}),r("router-link",{staticStyle:{color:"#000","font-weight":"bold","text-decoration":"none",float:"right"},attrs:{to:"/aaa"}},[t._v(" 去结算 ")])],1)],1)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"flex"}},[r("div",{staticStyle:{flex:"1"}},[t._v("点餐")]),r("div",{staticStyle:{flex:"1"}},[t._v("评价")]),r("div",{staticStyle:{flex:"1"}},[t._v("商家")])])}],p=(r("66af"),r("4861"),r("b84e"),r("c5c0"),r("59db"),r("9d37")),m=r("08c1"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"})},g=[],b={name:"HelloWorld"},v=b,y=(r("0d99"),Object(a["a"])(v,h,g,!1,null,"7d62a84e",null)),j=y.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{float:"right"}},[r("button",{staticStyle:{"font-size":"20px",padding:"5px 10px","border-radius":"50%",border:"1px solid blue"},on:{click:t.btn1}},[t._v("-")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticStyle:{width:"10px",height:"40px",border:"none",margin:"0 10px"},attrs:{type:"text"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}}),r("button",{staticStyle:{"font-size":"20px",padding:"5px 10px","border-radius":"50%",border:"1px solid blue"},on:{click:t.btn2}},[t._v("+")])])},x=[],_={props:["value"],methods:{btn1:function(){this.num--,this.num<=0&&(this.num=0)},btn2:function(){this.num++}},computed:{num:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},S=_,w=Object(a["a"])(S,O,x,!1,null,null,null),P=w.exports;function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){Object(p["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C={name:"home",components:{HelloWorld:j,jia:P},watch:{arr:{handler:function(t){var e=this;this.are=[],t.forEach((function(t){t.arr.forEach((function(t){t.num&&e.are.push(t)}))})),this.$store.commit("addOrder",this.are)},deep:!0}},data:function(){return{arr:[{title:"水饺",arr:[{title:"猪肉白菜水饺",ice:"月售18份  好评率100%",jg:"16",num:"0",src:"http://img0.imgtn.bdimg.com/it/u=2214737762,1191799546&fm=26&gp=0.jpg"},{title:"鱿鱼三鲜水饺",ice:"月售18份  好评率100%",jg:"20",num:"0",src:"http://img2.imgtn.bdimg.com/it/u=3259202578,4102460894&fm=26&gp=0.jpg"},{title:"虾仁三鲜水饺",ice:"月售19份  好评率100%",jg:"25",num:"0",src:"http://img5.imgtn.bdimg.com/it/u=2807971413,224550932&fm=26&gp=0.jpg"},{title:"南瓜皮菌菇三鲜猪肉水饺",ice:"月售19份  好评率100%",jg:"24",js:"香菇、猪肉、鸡蛋、木耳、饺子皮",num:"0",src:"http://img3.imgtn.bdimg.com/it/u=3300176256,1391802277&fm=26&gp=0.jpg"},{title:"绿豆粥",ice:"月售19份  好评率100%",jg:"3",js:"香菇、猪肉、鸡蛋、木耳、饺子皮",num:"0",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2404226120,1494663267&fm=26&gp=0.jpg"}]}],are:[],inx:"水饺",num:""}},methods:{fn:function(t){this.inx=t}},computed:F({},Object(m["c"])(["orderList"]),{},Object(m["b"])(["totalPrice"]))},E=C,$=(r("cccb"),Object(a["a"])(E,f,d,!1,null,null,null)),z=$.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticStyle:{width:"100%",overflow:"hidden"}},[r("mt-header",{staticStyle:{background:"#FFFFFF",color:"#000","font-size":"1rem","line-height":"100px","margin-top":"1rem"}},[r("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[r("mt-button",{attrs:{icon:"back"}})],1)],1),r("div",{staticStyle:{"min-height":"19.75rem",padding:"0.7rem"}},[r("div",{staticStyle:{background:"#FFFFFF",height:"100%",padding:"0.5rem"}},[r("p",{staticStyle:{"border-bottom":"solid 1px #CCCCCC","text-align":"left","font-size":"1rem","padding-bottom":"0.5rem"}},[t._v("庆丰包子铺（窦店）")]),t._l(t.$store.state.orderList,(function(e,n){return r("p",{key:n,staticStyle:{"line-height":"3.25rem","font-size":"1rem","border-bottom":"solid 1px red",display:"flex"}},[r("span",{staticStyle:{flex:"1","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.title))]),r("span",{staticStyle:{flex:"1","text-align":"center"}},[t._v("X"+t._s(e.num))]),r("span",{staticStyle:{flex:"1",float:"right"}},[t._v("￥"+t._s(e.num*e.jg))])])})),r("p",{staticStyle:{overflow:"hidden","text-align":"right","margin-top":"0.75rem","font-size":"1.25rem"}},[r("span",[t._v("小计")]),r("span",[t._v("￥"+t._s(t.totalPrice))])])],2)]),r("div",{staticStyle:{position:"relative","min-height":"60px",bottom:"0",overflow:"hidden"}},[r("p",{staticStyle:{color:"#000","line-height":"60px","text-align":"left","font-size":"2rem",float:"left","font-weight":"bold"}},[t._v(" ￥"+t._s(t.totalPrice+t.num)+" ")]),r("p",{staticStyle:{float:"right","line-height":"60px",padding:"0 2rem",background:"blue",color:"#FFFFFF"}},[t._v(" 去支付 ")])])],1)])},L=[];function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(Object(r),!0).forEach((function(e){Object(p["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T={name:"no1",data:function(){return{arr:[],price:"",num:0,name:"",are:[]}},mounted:function(){for(var t=0;t<this.$store.state.orderList.length;t++)this.num+=this.$store.state.orderList[t].num},computed:M({},Object(m["b"])(["totalPrice"]))},W=T,J=Object(a["a"])(W,D,L,!1,null,null,null),U=J.exports;n["default"].use(u["a"]);var X=[{path:"/",name:"home",component:z},{path:"/aaa",name:"no1",component:U}],G=new u["a"]({mode:"hash",base:"/",routes:X}),K=G,N=r("660a"),Q=r.n(N),Y=(r("4f89"),r("5a4b"));n["default"].use(m["a"]),n["default"].use(Q.a),n["default"].use(Y["a"]),n["default"].config.productionTip=!1;var q=new m["a"].Store({state:{orderList:[]},getters:{totalPrice:function(t){var e=0;return t.orderList.forEach((function(t){e+=t.jg*(t.num||1)})),e}},mutations:{addOrder:function(t,e){t.orderList=e}},actions:{actionChangeUsername:function(){var t=this;setTimeout((function(){t.commit("changeUsername")}),1e3)}}});new n["default"]({router:K,store:q,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("bb5d"),i=r.n(n);i.a},"9f0f":function(t,e,r){},bb5d:function(t,e,r){},cccb:function(t,e,r){"use strict";var n=r("9f0f"),i=r.n(n);i.a}});
//# sourceMappingURL=app.dca98c69.js.map