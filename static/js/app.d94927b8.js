(function(e){function t(t){for(var o,s,a=t[0],u=t[1],d=t[2],c=0,h=[];c<a.length;c++)s=a[c],r[s]&&h.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{src:n("cf05"),alt:""}}),o("div",{staticStyle:{display:"flex","justify-content":"center"}},[o("div",{staticStyle:{width:"500px"}},[o("sort-table",{attrs:{items:e.items,len:e.items.length,header:e.header,"sorted-index":e.sortedIndex,"transition-time":.5,"header-mouseover-color":"#008814"}})],1)])])},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sorted-table"},[n("div",{directives:[{name:"mouseover",rawName:"v-mouseover",value:e.onHeaderMouseOver,expression:"onHeaderMouseOver"},{name:"mouseleave",rawName:"v-mouseleave",value:e.onHeaderMouseLeave,expression:"onHeaderMouseLeave"}],staticClass:"header",style:e.headerStyle},e._l(e.header,function(t,o,r){return n("div",{key:o,staticClass:"header-item",style:r<Object.keys(e.header).length-1?{"border-right":"1px #555 solid"}:{}},[n("div",{staticClass:"header-content"},[e._v("\n                "+e._s(t)+"\n                "),Object.keys(e.sortedIndex).includes(o)?n("div",{staticClass:"header-sort",on:{click:function(t){return e.onSortClick(r)}}},[e._v("\n                    ↑↓\n                ")]):n("div",{staticStyle:{display:"inline-block",width:"16px"}})])])}),0),n("div",{staticClass:"items"},e._l(e.myItem,function(t,o){return n("div",{key:o,class:{"odd-row":e.oddRow[o],"even-row":e.evenRow[o],"last-row":e.lastRow[o],"not-last-row":e.notLastRow[o],"row-default":!0},style:{height:e.rowHeight+"px",transition:e.customTransition,position:"relative",top:e.top[o]+"px"}},e._l(t,function(t,o,r){return n("div",{key:o,class:r<Object.keys(e.header).length-1?"not-last-column":"",style:{flex:1,display:"flex","align-items":"center","justify-content":"center",height:"100%","word-wrap":"break-word",overflow:"hidden"}},[e._v("\n                "+e._s(t)+"\n            ")])}),0)}),0)])},a=[],u=(n("55dd"),n("ac6a"),n("456d"),n("c5f6"),n("2ef0")),d=n.n(u),l={props:{"header-mouseover-color":{type:String,default:""},len:{type:Number,required:!0},items:{type:Array,required:!0},header:{type:Object,required:!0},sortedIndex:{type:Object,required:!0},rowHeight:{type:Number,default:50},transitionTime:{type:Number,default:.3}},name:"SortTable",data:function(){return{top:[],oddRow:[],evenRow:[],lastRow:[],notLastRow:[],tran:"",customTransition:"",myItem:null,canSort:!0,headerStyle:{}}},directives:{mouseover:{bind:function(e,t){function n(){t.expression&&t.value()}e.addEventListener("mouseover",n),e.__vueHandleMouseOver__=n},unbind:function(e){e.hasOwnProperty("__vueHandleMouseOver__")&&(e.removeEventListener("mouseover",e.__vueHandleMouseOver__),delete e.__vueHandleMouseOver__)}},mouseleave:{bind:function(e,t){function n(){t.expression&&t.value()}e.addEventListener("mouseleave",n),e.__vueHandleMouseLeave=n},unbind:function(e){e.hasOwnProperty("__vueHandleMouseLeave")&&(e.removeEventListener("mouseleave",e.__vueHandleMouseLeave),delete e.__vueHandleMouseLeave)}}},created:function(){this.tran="all ".concat(this.transitionTime,"s"),this.customTransition=this.tran,this.myItem=this.items,this.top=this.genArr(this.len,0),this.oddRow=this.initOddRow(this.len),this.evenRow=this.initEvenRow(this.len),this.lastRow=this.initLastRow(this.len),this.notLastRow=this.initNotLastRow(this.len),this.headerStyle={height:this.rowHeight+"px",transition:"".concat(this.transitionTime,"s")}},methods:{onHeaderMouseOver:function(){this.$set(this.headerStyle,"background-color",this.headerMouseoverColor)},onHeaderMouseLeave:function(){this.headerStyle.hasOwnProperty("background-color")&&this.$delete(this.headerStyle,"background-color")},genArr:function(e,t){for(var n=Array(e),o=0;o<e;o++)n[o]=t;return n},initOddRow:function(e){for(var t=[],n=0;n<e;n++)n%2===0?t.push(!1):t.push(!0);return t},initEvenRow:function(e){for(var t=[],n=0;n<e;n++)n%2!==0?t.push(!1):t.push(!0);return t},initLastRow:function(e){for(var t=[],n=0;n<e;n++)n!==e-1?t.push(!1):t.push(!0);return t},initNotLastRow:function(e){for(var t=[],n=0;n<e;n++)n===e-1?t.push(!1):t.push(!0);return t},uuid:function(){for(var e=[],t="0123456789abcdef",n=0;n<36;n++)e[n]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},onSortClick:function(e){var t=this;if(this.$loading.show("Please wait"),this.canSort){this.canSort=!1;var n=Object.keys(this.header)[e];this.sortedIndex[n]=!this.sortedIndex[n];var o=d.a.cloneDeep(this.myItem),r=[];o.forEach(function(e){var n=t.uuid();r.push(n),e["uuidkey"]=n}),o.sort(function(e,o){return(e[n]-o[n])*(t.sortedIndex[n]?1:-1)});for(var i=[],s=0;s<r.length;s++)for(var a=0;a<o.length;a++)if(o[a]["uuidkey"]===r[s]){i.push(a);break}for(var u=0;u<i.length;u++)this.$set(this.top,u,-this.rowHeight*(u-i[u])),i[u]%2===0?(this.$set(this.evenRow,u,!0),this.$set(this.oddRow,u,!1)):(this.$set(this.evenRow,u,!1),this.$set(this.oddRow,u,!0)),i[u]===i.length-1?(this.$set(this.notLastRow,u,!1),this.$set(this.lastRow,u,!0)):(this.$set(this.lastRow,u,!1),this.$set(this.notLastRow,u,!0));window.setTimeout(function(){t.customTransition="",t.top=t.genArr(t.len,0),t.evenRow=t.initEvenRow(t.len),t.oddRow=t.initOddRow(t.len),t.notLastRow=t.initNotLastRow(t.len),t.lastRow=t.initLastRow(t.len);for(var e=0;e<o.length;e++)delete o[e]["uuidkey"];t.myItem=o,window.setTimeout(function(){t.customTransition=t.tran,t.canSort=!0,t.$loading.hide()},50)},1e3*this.transitionTime)}}}},c=l,h=(n("8207"),n("2877")),v=Object(h["a"])(c,s,a,!1,null,"1c90728c",null),f=v.exports,p={name:"App",components:{"sort-table":f},data:function(){return{items:[{name:"张三",age:23,time:40,score:95},{name:"李四",age:21,time:34,score:90},{name:"王五",age:45,time:15,score:92},{name:"赵六",age:32,time:49,score:94}],header:{name:"姓名",age:"年龄",time:"学习时长",score:"成绩"},sortedIndex:{age:!0,time:!0,score:!0}}}},m=p,w=(n("034f"),Object(h["a"])(m,r,i,!1,null,null,null)),y=w.exports,b=n("d5f1"),g=n.n(b);o["a"].config.productionTip=!1,o["a"].use(g.a),new o["a"]({render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,n){},8207:function(e,t,n){"use strict";var o=n("90ff"),r=n.n(o);r.a},"90ff":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d94927b8.js.map