(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6091d0bf"],{"212a":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kt-portlet",class:t.portletClass},[t.hasTitleSlot||t.title?a("div",{staticClass:"kt-portlet__head",class:t.headClass},[a("div",{staticClass:"kt-portlet__head-label"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():a("h3",{staticClass:"kt-portlet__head-title"},[t._v(" "+t._s(t.title)+" ")])],2),a("div",{staticClass:"kt-portlet__head-toolbar"},[t._t("toolbar")],2)]):t._e(),a("div",{staticClass:"kt-portlet__body",class:{bodyClass:t.bodyClass,"kt-portlet__body--fit":t.bodyFit,"kt-portlet__body--fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?a("div",{staticClass:"kt-portlet__foot kt-portlet__body--fit"},[t._t("foot")],2):t._e()])},s=[],n={name:"KTPortlet",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean},components:{},methods:{},computed:{portletClass:function(){var t={"kt-portlet--height-fluid":this.fluidHeight,"kt-portlet--height-fluid-half":this.fluidHalfHeight,"kt-portlet--head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"kt-portlet--head-".concat(this.headSize)}}},r=n,i=a("2877"),l=Object(i["a"])(r,o,s,!1,null,null,null);e["a"]=l.exports},"5cf3":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KTPortlet",{attrs:{title:t.title},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[a("h3",{staticClass:"kt-portlet__head-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-clean btn-sm btn-icon btn-icon-md",class:{active:t.isOpen},attrs:{type:"button",title:"Show codes"},on:{click:function(e){return t.toggle()}}},[a("i",{staticClass:"la la-code"})])]},proxy:!0},{key:"body",fn:function(){return[a("transition",{attrs:{name:"fade"}},[t.isOpen?a("div",{staticClass:"kt-portlet__code",class:{"kt-portlet__code--show":t.isOpen}},[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-clean btn-sm btn-icon btn-icon-md float-right",attrs:{href:"#",title:"Copy codes"},on:{click:function(e){return t.copyCode(e)}}},[a("i",{staticClass:"la la-copy"})]),t.hasGeneralCode?a("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():a("ul",{staticClass:"nav nav-tabs nav-tabs-line",attrs:{role:"tablist"}},[t.hasHtmlCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v("HTML")])]):t._e(),t.hasJsCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v("SCSS")])]):t._e()]),t.hasGeneralCode||t.hasSingleCodeType?t._e():a("div",[a("b-tabs",{staticClass:"kt-hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("b-tab",{attrs:{active:""}},[a("highlight-code",{attrs:{lang:"html"}},[t._t("html")],2)],1),a("b-tab",[a("highlight-code",{attrs:{lang:"js"}},[t._t("js")],2)],1),a("b-tab",[a("highlight-code",{attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?a("div",[t.hasHtmlCode?a("highlight-code",{attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?a("highlight-code",{attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?a("highlight-code",{attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},s=[],n=(a("4160"),a("212a")),r=a("f1cd"),i=a.n(r),l={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTPortlet:n["a"]},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),a=e.querySelectorAll('[data-toggle="tab"]'),o=0;o<a.length;o++)a[o].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))},toggle:function(){this.isOpen=!this.isOpen},copyCode:function(t){var e=t.target.closest(".kt-portlet__code"),a=e.querySelectorAll(".kt-portlet__code .tab-pane.active")[0];a="undefined"!==typeof a?a.textContent:e.textContent,i()(a)}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(a){t.$slots.hasOwnProperty(a)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},c=l,d=(a("afce"),a("2877")),h=Object(d["a"])(c,o,s,!1,null,"e705e41c",null);e["a"]=h.exports},"9c39":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{staticClass:"alert alert-elevate",attrs:{show:"",variant:"light"}},[a("div",{staticClass:"alert-icon"},[a("i",{staticClass:"flaticon-warning kt-font-brand"})]),a("div",{staticClass:"alert-text"},[a("b",[t._v("Breadcrumb")]),t._v(" Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through ::before and content. "),a("a",{staticClass:"kt-link kt-link--brand kt-font-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/breadcrumb",target:"_blank"}},[t._v(" See documentation. ")])])]),a("KTCodePreview",{attrs:{title:"Breadcrumb"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("b-breadcrumb",{attrs:{items:t.code1.items}})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code1.js)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Manually placed items"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" You may also manually place individual "),a("code"),t._v(" child components in the default slot of the "),a("code",[t._v("<b-breadcrumb-item>")]),t._v(" component, as an alternative to using the "),a("code",[t._v("<b-breadcrumb>")]),t._v(" prop, for greater control over the content of each item:codeitems ")]),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{href:"#home"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),t._v(" Home ")],1),a("b-breadcrumb-item",{attrs:{href:"#foo"}},[t._v("Foo")]),a("b-breadcrumb-item",{attrs:{href:"#bar"}},[t._v("Bar")]),a("b-breadcrumb-item",{attrs:{active:""}},[t._v("Baz")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])})],1)},s=[],n=a("5cf3"),r=a("bf23"),i={data:function(){return{code1:{html:'<b-breadcrumb :items="items"></b-breadcrumb>',js:"export default {\n    data() {\n      return {\n        items: [\n          {\n            text: 'Admin',\n            href: '#'\n          },\n          {\n            text: 'Manage',\n            href: '#'\n          },\n          {\n            text: 'Library',\n            active: true\n          }\n        ]\n      }\n    }\n  }",items:[{text:"Admin",href:"#"},{text:"Manage",href:"#"},{text:"Library",active:!0}]},code2:{html:'<b-breadcrumb>\n  <b-breadcrumb-item href="#home">\n    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>\n    Home\n  </b-breadcrumb-item>\n  <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>\n  <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>\n  <b-breadcrumb-item active>Baz</b-breadcrumb-item>\n</b-breadcrumb>'}}},components:{KTCodePreview:n["a"]},mounted:function(){this.$store.dispatch(r["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Breadcrumb"}])}},l=i,c=a("2877"),d=Object(c["a"])(l,o,s,!1,null,null,null);e["default"]=d.exports},a96e:function(t,e,a){},afce:function(t,e,a){"use strict";var o=a("a96e"),s=a.n(o);s.a},f1cd:function(t,e){function a(t){if(navigator.clipboard)return navigator.clipboard.writeText(t).catch((function(t){throw void 0!==t?t:new DOMException("The request is not allowed","NotAllowedError")}));var e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre",document.body.appendChild(e);var a=window.getSelection(),o=window.document.createRange();a.removeAllRanges(),o.selectNode(e),a.addRange(o);var s=!1;try{s=window.document.execCommand("copy")}catch(n){console.log("error",n)}return a.removeAllRanges(),window.document.body.removeChild(e),s?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))}t.exports=a}}]);
//# sourceMappingURL=chunk-6091d0bf.656e46e2.js.map