webpackJsonp([31],{"2mGh":function(e,t,n){var a=n("Bpj5");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("e6c14136",a,!0)},Bpj5:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.radio-label {\r\n  font-size: 14px;\r\n  color: #606266;\r\n  line-height: 40px;\r\n  padding: 0 12px 0 30px;\n}\r\n",""])},oz0I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("viA7"),l=n("0xDb"),i={name:"exportExcel",data:function(){return{list:null,listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.c)().then(function(t){e.list=t.data.items,e.listLoading=!1})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e(2),n.e(61)]).then(n.bind(null,"zWO4")).then(function(t){var n=e.list,a=e.formatJson(["id","title","author","pageviews","display_time"],n);t.export_json_to_excel({header:["Id","Title","Author","Readings","Date"],data:a,filename:e.filename,autoWidth:e.autoWidth}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(l.c)(t[e]):t[e]})})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[e._v("Filename: ")]),e._v(" "),n("el-input",{staticStyle:{width:"340px"},attrs:{placeholder:e.$t("excel.placeholder"),"prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),e._v(" "),n("label",{staticClass:"radio-label"},[e._v("Cell Auto Width: ")]),e._v(" "),n("el-radio-group",{model:{value:e.autoWidth,callback:function(t){e.autoWidth=t},expression:"autoWidth"}},[n("el-radio",{attrs:{label:!0,border:""}},[e._v("True")]),e._v(" "),n("el-radio",{attrs:{label:!1,border:""}},[e._v("False")])],1),e._v(" "),n("el-button",{staticStyle:{margin:"0 0 20px 20px"},attrs:{type:"primary",icon:"document",loading:e.downloadLoading},on:{click:e.handleDownload}},[e._v(e._s(e.$t("excel.export"))+" excel")]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.author))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.pageviews)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",[e._v(e._s(e._f("parseTime")(t.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},staticRenderFns:[]};var r=n("VU/8")(i,o,!1,function(e){n("2mGh")},null,null);t.default=r.exports}});