(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b209454"],{"212a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kt-portlet",class:t.portletClass},[t.hasTitleSlot||t.title?n("div",{staticClass:"kt-portlet__head",class:t.headClass},[n("div",{staticClass:"kt-portlet__head-label"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():n("h3",{staticClass:"kt-portlet__head-title"},[t._v(" "+t._s(t.title)+" ")])],2),n("div",{staticClass:"kt-portlet__head-toolbar"},[t._t("toolbar")],2)]):t._e(),n("div",{staticClass:"kt-portlet__body",class:{bodyClass:t.bodyClass,"kt-portlet__body--fit":t.bodyFit,"kt-portlet__body--fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?n("div",{staticClass:"kt-portlet__foot kt-portlet__body--fit"},[t._t("foot")],2):t._e()])},s=[],a={name:"KTPortlet",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean},components:{},methods:{},computed:{portletClass:function(){var t={"kt-portlet--height-fluid":this.fluidHeight,"kt-portlet--height-fluid-half":this.fluidHalfHeight,"kt-portlet--head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"kt-portlet--head-".concat(this.headSize)}}},i=a,r=n("2877"),p=Object(r["a"])(i,o,s,!1,null,null,null);e["a"]=p.exports},"5cf3":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("KTPortlet",{attrs:{title:t.title},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[n("h3",{staticClass:"kt-portlet__head-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[n("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-clean btn-sm btn-icon btn-icon-md",class:{active:t.isOpen},attrs:{type:"button",title:"Show codes"},on:{click:function(e){return t.toggle()}}},[n("i",{staticClass:"la la-code"})])]},proxy:!0},{key:"body",fn:function(){return[n("transition",{attrs:{name:"fade"}},[t.isOpen?n("div",{staticClass:"kt-portlet__code",class:{"kt-portlet__code--show":t.isOpen}},[n("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-clean btn-sm btn-icon btn-icon-md float-right",attrs:{href:"#",title:"Copy codes"},on:{click:function(e){return t.copyCode(e)}}},[n("i",{staticClass:"la la-copy"})]),t.hasGeneralCode?n("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():n("ul",{staticClass:"nav nav-tabs nav-tabs-line",attrs:{role:"tablist"}},[t.hasHtmlCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v("HTML")])]):t._e(),t.hasJsCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v("SCSS")])]):t._e()]),t.hasGeneralCode||t.hasSingleCodeType?t._e():n("div",[n("b-tabs",{staticClass:"kt-hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("b-tab",{attrs:{active:""}},[n("highlight-code",{attrs:{lang:"html"}},[t._t("html")],2)],1),n("b-tab",[n("highlight-code",{attrs:{lang:"js"}},[t._t("js")],2)],1),n("b-tab",[n("highlight-code",{attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?n("div",[t.hasHtmlCode?n("highlight-code",{attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?n("highlight-code",{attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?n("highlight-code",{attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},s=[],a=(n("4160"),n("212a")),i=n("f1cd"),r=n.n(i),p={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTPortlet:a["a"]},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),n=e.querySelectorAll('[data-toggle="tab"]'),o=0;o<n.length;o++)n[o].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))},toggle:function(){this.isOpen=!this.isOpen},copyCode:function(t){var e=t.target.closest(".kt-portlet__code"),n=e.querySelectorAll(".kt-portlet__code .tab-pane.active")[0];n="undefined"!==typeof n?n.textContent:e.textContent,r()(n)}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(n){t.$slots.hasOwnProperty(n)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},l=p,u=(n("afce"),n("2877")),c=Object(u["a"])(l,o,s,!1,null,"e705e41c",null);e["a"]=c.exports},7352:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{staticClass:"alert alert-elevate",attrs:{show:"",variant:"light"}},[n("div",{staticClass:"alert-icon"},[n("i",{staticClass:"flaticon-warning kt-font-brand"})]),n("div",{staticClass:"alert-text"},[n("b",[t._v("Input Groups")]),t._v(" Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs. "),n("a",{staticClass:"kt-link kt-link--brand kt-font-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form-textarea",target:"_blank"}},[t._v(" See documentation. ")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("KTCodePreview",{attrs:{title:"Input Groups"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("div",[n("b-input-group",{attrs:{size:"lg",prepend:"$",append:".00"}},[n("b-form-input")],1),n("b-input-group",{staticClass:"mt-3",scopedSlots:t._u([{key:"append",fn:function(){return[n("b-input-group-text",[n("strong",{staticClass:"text-danger"},[t._v("!")])])]},proxy:!0}])},[n("b-form-input")],1),n("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Username"}},[n("b-form-input"),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-success"}},[t._v("Button")]),n("b-button",{attrs:{variant:"info"}},[t._v("Button")])],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Using prepend and append props"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Values will be internally wrapped by a "),n("code",[t._v("<b-input-group-text>")]),t._v(" to display correctly. ")]),n("div",[n("b-input-group",{attrs:{prepend:"$",append:".00"}},[n("b-form-input")],1),n("b-input-group",{staticClass:"mt-3",attrs:{prepend:"0",append:"100"}},[n("b-form-input",{attrs:{type:"range",min:"0",max:"100"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])})],1),n("div",{staticClass:"col-md-6"},[n("KTCodePreview",{attrs:{title:"Using named slots"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" if you want better control over addons, you can use "),n("code",[t._v("prepend")]),t._v(" and "),n("code",[t._v("append")]),t._v(" slots instead. ")]),n("div",[n("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",[t._v("Username")])]},proxy:!0},{key:"append",fn:function(){return[n("b-dropdown",{attrs:{text:"Dropdown",variant:"success"}},[n("b-dropdown-item",[t._v("Action A")]),n("b-dropdown-item",[t._v("Action B")])],1)]},proxy:!0}])},[n("b-form-input")],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Using sub-components"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Use the "),n("code",[t._v("<b-input-group-prepend>")]),t._v(" or "),n("code",[t._v("<b-input-group-append>")]),t._v(" to add arbitrary addons wherever you like, and use these components to group buttons in your input group. Single buttons must always be wrapped in these components for proper styling. ")]),n("div",[n("b-input-group",[n("b-input-group-prepend",[n("b-button",{attrs:{variant:"outline-info"}},[t._v("Button")])],1),n("b-form-input",{attrs:{type:"number",min:"0.00"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-secondary"}},[t._v("Button")]),n("b-button",{attrs:{variant:"outline-secondary"}},[t._v("Button")])],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Custom radio, checkbox, and switch addons"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Using "),n("code",[t._v("<b-form-checkbox>")]),t._v(" and "),n("code",[t._v("<b-form-radio>")]),t._v(" components as addons, using Bootstrap "),n("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/reference/utility-classes",target:"_blank"}},[t._v("utility classes")]),t._v(" for additional styling to get them to "),n("code",[t._v('"fit"')]),t._v(" in the addon: ")]),n("div",[n("b-input-group",{staticClass:"mb-2"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-form-checkbox",{staticClass:"mr-n2"},[n("span",{staticClass:"sr-only"},[t._v(" Checkbox for following text input ")])])],1),n("b-form-input",{attrs:{"aria-label":"Text input with checkbox"}})],1),n("b-input-group",{staticClass:"mb-2"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-form-radio",{staticClass:"mr-n2"},[n("span",{staticClass:"sr-only"},[t._v("Radio for following text input")])])],1),n("b-form-input",{attrs:{"aria-label":"Text input with radio input"}})],1),n("b-input-group",[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-form-checkbox",{staticClass:"mr-n2",attrs:{switch:""}},[n("span",{staticClass:"sr-only"},[t._v("Switch for following text input")])])],1),n("b-form-input",{attrs:{"aria-label":"Text input with switch"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code5.html)+" ")]},proxy:!0}])})],1)])],1)},s=[],a=n("5cf3"),i=n("bf23"),r={data:function(){return{code1:{html:'<div>\n  \x3c!-- Using props --\x3e\n  <b-input-group size="lg" prepend="$" append=".00">\n    <b-form-input></b-form-input>\n  </b-input-group>\n\n  \x3c!-- Using slots --\x3e\n  <b-input-group class="mt-3">\n    <template v-slot:append>\n      <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>\n    </template>\n    <b-form-input></b-form-input>\n  </b-input-group>\n\n  \x3c!-- Using components --\x3e\n  <b-input-group prepend="Username" class="mt-3">\n    <b-form-input></b-form-input>\n    <b-input-group-append>\n      <b-button variant="outline-success">Button</b-button>\n      <b-button variant="info">Button</b-button>\n    </b-input-group-append>\n  </b-input-group>\n</div>'},code2:{html:'<div>\n  <b-input-group prepend="$" append=".00">\n    <b-form-input></b-form-input>\n  </b-input-group>\n\n  <b-input-group prepend="0" append="100" class="mt-3">\n    <b-form-input type="range" min="0" max="100"></b-form-input>\n  </b-input-group>\n</div>'},code3:{html:'<div>\n  <b-input-group>\n    <template v-slot:prepend>\n      <b-input-group-text >Username</b-input-group-text>\n    </template>\n    <b-form-input></b-form-input>\n\n    <template v-slot:append>\n      <b-dropdown text="Dropdown" variant="success">\n        <b-dropdown-item>Action A</b-dropdown-item>\n        <b-dropdown-item>Action B</b-dropdown-item>\n      </b-dropdown>\n    </template>\n  </b-input-group>\n</div>'},code4:{html:'<div>\n  <b-input-group>\n    <b-input-group-prepend>\n      <b-button variant="outline-info">Button</b-button>\n    </b-input-group-prepend>\n\n    <b-form-input type="number" min="0.00"></b-form-input>\n\n    <b-input-group-append>\n      <b-button variant="outline-secondary">Button</b-button>\n      <b-button variant="outline-secondary">Button</b-button>\n    </b-input-group-append>\n  </b-input-group>\n</div>'},code5:{html:'<div>\n  <b-input-group class="mb-2">\n    <b-input-group-prepend is-text>\n      <b-form-checkbox class="mr-n2">\n        <span class="sr-only">Checkbox for following text input</span>\n      </b-form-checkbox>\n    </b-input-group-prepend>\n    <b-form-input aria-label="Text input with checkbox"></b-form-input>\n  </b-input-group>\n\n  <b-input-group class="mb-2">\n    <b-input-group-prepend is-text>\n      <b-form-radio class="mr-n2">\n        <span class="sr-only">Radio for following text input</span>\n      </b-form-radio>\n    </b-input-group-prepend>\n    <b-form-input aria-label="Text input with radio input"></b-form-input>\n  </b-input-group>\n\n  <b-input-group>\n    <b-input-group-prepend is-text>\n      <b-form-checkbox switch class="mr-n2">\n        <span class="sr-only">Switch for following text input</span>\n      </b-form-checkbox>\n    </b-input-group-prepend>\n    <b-form-input aria-label="Text input with switch"></b-form-input>\n  </b-input-group>\n</div>'}}},components:{KTCodePreview:a["a"]},mounted:function(){this.$store.dispatch(i["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Input Groups"}])}},p=r,l=n("2877"),u=Object(l["a"])(p,o,s,!1,null,null,null);e["default"]=u.exports},a96e:function(t,e,n){},afce:function(t,e,n){"use strict";var o=n("a96e"),s=n.n(o);s.a},f1cd:function(t,e){function n(t){if(navigator.clipboard)return navigator.clipboard.writeText(t).catch((function(t){throw void 0!==t?t:new DOMException("The request is not allowed","NotAllowedError")}));var e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre",document.body.appendChild(e);var n=window.getSelection(),o=window.document.createRange();n.removeAllRanges(),o.selectNode(e),n.addRange(o);var s=!1;try{s=window.document.execCommand("copy")}catch(a){console.log("error",a)}return n.removeAllRanges(),window.document.body.removeChild(e),s?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))}t.exports=n}}]);
//# sourceMappingURL=chunk-0b209454.51a1b0c3.js.map