webpackJsonp([34],{GQKf:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.table-expand[data-v-61675549] {\n  font-size: 0;\n  border-bottom: #d0d0d0 1px solid;\n}\n.table-expand label[data-v-61675549] {\n  width: 90px;\n  color: #99a9bf;\n}\n.table-expand .el-form-item[data-v-61675549] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 50%;\n}\n",""])},VCRI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("cAgV"),n=a("0xDb"),s=a("vLgD");var l={name:"customerTable",directives:{waves:i.a},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,size:10,between:"",time:"",keyword:"",status:""},statusOptions:[{label:"正常完成",key:"finished"},{label:"送回撤销",key:"back,backing,backed"},{label:"已超时",key:"timeout"},{label:"故障异常",key:"blocked"},{label:"顾客取消",key:"canceled,deleted"},{label:"司机拒绝",key:"rejected"},{label:"正在配送",key:"got,arrived,send"}],timePickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.setTime(t.getTime()+864e5),a.setHours(0,0,0,0),t.setHours(0,0,0,0),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.setTime(t.getTime()+864e5),a.setHours(0,0,0,0),t.setHours(0,0,0,0),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.setTime(t.getTime()+864e5),a.setHours(0,0,0,0),t.setHours(0,0,0,0),e.$emit("pick",[a,t])}}]},downloadLoading:!1}},filters:{statusFilter:function(e){return{finished:"success",blocked:"danger",backing:"warn",rejected:"danger",timeout:"danger",backed:"success"}[e]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,function(e){if(e.time){var t=Object(n.c)(e.time[0],"{y}-{m}-{d} {h}:{i}:{s}"),a=Object(n.c)(e.time[1],"{y}-{m}-{d} {h}:{i}:{s}");e.between=t+","+a}else e.between="";return Object(s.a)({url:"/managers/customers",method:"get",params:e})}(this.listQuery).then(function(t){e.list=t.data.data.list,e.total=t.data.data.total,e.listLoading=!1})},tableRowClassName:function(e){var t=e.row;e.rowIndex;return{finished:"success-row",blocked:"danger-row",rejected:"warning-row"}[t.status]},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"createTime"===e?Object(n.c)(t[e]):t[e]})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container list-container"},[a("div",{staticClass:"filter-container"},[a("el-date-picker",{staticClass:"filter-item",attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00"],"picker-options":e.timePickerOptions},model:{value:e.listQuery.time,callback:function(t){e.$set(e.listQuery,"time",t)},expression:"listQuery.time"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"350px"},attrs:{placeholder:"名称/电话"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.keyword,callback:function(t){e.$set(e.listQuery,"keyword",t)},expression:"listQuery.keyword"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticClass:"list-table",staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"加载中...",fit:"","highlight-current-row":"",stripe:""}},[a("el-table-column",{attrs:{align:"center",label:"序号",prop:"id",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"名称",prop:"name"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"性别",prop:"sex"},scopedSlots:e._u([{key:"default",fn:function(t){return["f"===t.row.sex?a("span",[e._v("女")]):"m"===t.row.sex?a("span",[e._v("男")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"电话",prop:"phone"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createTime))])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(e){a("yyGj")},"data-v-61675549",null);t.default=o.exports},yyGj:function(e,t,a){var i=a("GQKf");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("7f060a5c",i,!0)}});