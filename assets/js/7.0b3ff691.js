(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,r,t){},149:function(e,r,t){"use strict";var a=t(147);t.n(a).a},156:function(e,r,t){"use strict";t.r(r);var a={data:function(){return{rules:[{type:"text",id:"first-name",label:"First Name"},{type:"text",id:"last-name",label:"Last Name"},{type:"radio",id:"plan-type",label:"Plan Type",choices:[{label:"Standard",value:"standard"},{label:"Premium",value:"premium"}]}],query:{logicalOperator:"All",children:[{type:"query-builder-rule",query:{rule:"plan-type",selectedOperand:"Plan Type",value:"premium"}},{type:"query-builder-group",query:{logicalOperator:"Any",children:[{type:"query-builder-rule",query:{rule:"first-name",selectedOperator:"equals",selectedOperand:"First Name",value:"John"}},{type:"query-builder-rule",query:{rule:"first-name",selectedOperator:"equals",selectedOperand:"First Name",value:"Sally"}}]}}]}}}},u=(t(149),t(0)),s=Object(u.a)(a,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[e._m(0),t("p",[e._v("Vue Query Builder is a user interface that makes it easy for your users to create queries of any kind. It's useful if you need a tool for generating reports, filtering data, and more.")]),t("p",[e._v('Each instance of Vue Query Builder consists of groups and rules. Groups can contain rules and other groups. Each group has a match type of either "match all" (AND) or "match any" (OR). The component outputs JSON which you can pass to your server to parse.')]),e._m(1),t("br"),t("vue-query-builder",{attrs:{rules:e.rules},model:{value:e.query,callback:function(r){e.query=r},expression:"query"}})],1)},[function(){var e=this.$createElement,r=this._self._c||e;return r("h1",{attrs:{id:"vue-query-builder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-query-builder","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue Query Builder")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"basic-demo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Demo")])}],!1,null,null,null);r.default=s.exports}}]);