(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d51a464"],{"212a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kt-portlet",class:t.portletClass},[t.hasTitleSlot||t.title?n("div",{staticClass:"kt-portlet__head",class:t.headClass},[n("div",{staticClass:"kt-portlet__head-label"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():n("h3",{staticClass:"kt-portlet__head-title"},[t._v(" "+t._s(t.title)+" ")])],2),n("div",{staticClass:"kt-portlet__head-toolbar"},[t._t("toolbar")],2)]):t._e(),n("div",{staticClass:"kt-portlet__body",class:{bodyClass:t.bodyClass,"kt-portlet__body--fit":t.bodyFit,"kt-portlet__body--fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?n("div",{staticClass:"kt-portlet__foot kt-portlet__body--fit"},[t._t("foot")],2):t._e()])},s=[],o={name:"KTPortlet",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean},components:{},methods:{},computed:{portletClass:function(){var t={"kt-portlet--height-fluid":this.fluidHeight,"kt-portlet--height-fluid-half":this.fluidHalfHeight,"kt-portlet--head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"kt-portlet--head-".concat(this.headSize)}}},i=o,r=n("2877"),l=Object(r["a"])(i,a,s,!1,null,null,null);e["a"]=l.exports},"5cf3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("KTPortlet",{attrs:{title:t.title},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[n("h3",{staticClass:"kt-portlet__head-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[n("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-clean btn-sm btn-icon btn-icon-md",class:{active:t.isOpen},attrs:{type:"button",title:"Show codes"},on:{click:function(e){return t.toggle()}}},[n("i",{staticClass:"la la-code"})])]},proxy:!0},{key:"body",fn:function(){return[n("transition",{attrs:{name:"fade"}},[t.isOpen?n("div",{staticClass:"kt-portlet__code",class:{"kt-portlet__code--show":t.isOpen}},[n("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-clean btn-sm btn-icon btn-icon-md float-right",attrs:{href:"#",title:"Copy codes"},on:{click:function(e){return t.copyCode(e)}}},[n("i",{staticClass:"la la-copy"})]),t.hasGeneralCode?n("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():n("ul",{staticClass:"nav nav-tabs nav-tabs-line",attrs:{role:"tablist"}},[t.hasHtmlCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v("HTML")])]):t._e(),t.hasJsCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v("SCSS")])]):t._e()]),t.hasGeneralCode||t.hasSingleCodeType?t._e():n("div",[n("b-tabs",{staticClass:"kt-hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("b-tab",{attrs:{active:""}},[n("highlight-code",{attrs:{lang:"html"}},[t._t("html")],2)],1),n("b-tab",[n("highlight-code",{attrs:{lang:"js"}},[t._t("js")],2)],1),n("b-tab",[n("highlight-code",{attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?n("div",[t.hasHtmlCode?n("highlight-code",{attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?n("highlight-code",{attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?n("highlight-code",{attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},s=[],o=(n("4160"),n("212a")),i=n("f1cd"),r=n.n(i),l={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTPortlet:o["a"]},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),n=e.querySelectorAll('[data-toggle="tab"]'),a=0;a<n.length;a++)n[a].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))},toggle:function(){this.isOpen=!this.isOpen},copyCode:function(t){var e=t.target.closest(".kt-portlet__code"),n=e.querySelectorAll(".kt-portlet__code .tab-pane.active")[0];n="undefined"!==typeof n?n.textContent:e.textContent,r()(n)}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(n){t.$slots.hasOwnProperty(n)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},c=l,p=(n("afce"),n("2877")),u=Object(p["a"])(c,a,s,!1,null,"e705e41c",null);e["a"]=u.exports},a96e:function(t,e,n){},ae30:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{staticClass:"alert alert-elevate",attrs:{show:"",variant:"light"}},[n("div",{staticClass:"alert-icon"},[n("i",{staticClass:"flaticon-warning kt-font-brand"})]),n("div",{staticClass:"alert-text"},[n("b",[t._v("Pagination Navigation")]),t._v(" Quick first, previous, next, last, and page buttons for navigation based pagination, supporting regular links or router links. "),n("a",{staticClass:"kt-link kt-link--brand kt-font-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/pagination-nav",target:"_blank"}},[t._v(" See documentation. ")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("KTCodePreview",{attrs:{title:"Pagination Navigation"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[n("code",[t._v("b-pagination-nav")]),t._v(" will try and auto-detect which page link is active page button based on the current page's URL (via either "),n("code",[t._v("$route")]),t._v(" detection or, if no "),n("code",[t._v("$router")]),t._v(" detected, the browser location URL). ")]),n("div",{staticClass:"overflow-auto"},[n("b-pagination-nav",{attrs:{"link-gen":t.code1.linkGen,"number-of-pages":10,"use-router":""}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code1.js)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Page number generation"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" By default, "),n("code",[t._v("<b-pagination-nav>")]),t._v(" renders page numbers (1-N) in the page link buttons. You can override this behaviour by supplying a function reference to the "),n("code",[t._v("page-gen")]),t._v(" property. The function reference should accept a single argument which is a page number (1-N). The "),n("code",[t._v("page-gen")]),t._v(" function should return a string. ")]),n("div",{staticClass:"overflow-auto"},[n("b-pagination-nav",{attrs:{"link-gen":t.linkGen,"page-gen":t.pageGen,"number-of-pages":t.code2.links.length}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code2.js)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Providing an array of pages"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Rather than using "),n("code",[t._v("number-of-pages")]),t._v(" to auto generate page links, you can pass an array of links via the pages prop. When the "),n("code",[t._v("pages")]),t._v(" prop has an array of length 1 or greater, it will be used to generate the page links. ")]),n("b-pagination-nav",{attrs:{pages:t.code3.pages1,"use-router":""}}),n("b-pagination-nav",{attrs:{pages:t.code3.pages2,"use-router":""}}),n("b-pagination-nav",{attrs:{pages:t.code3.pages3,"use-router":""}})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code3.js)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Button content"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[n("code",[t._v("<b-pagination-nav>")]),t._v(" supports several props/slots that allow you to customize the appearance. All "),n("code",[t._v("*-text")]),t._v(" props are text-only and strip out HTML but you can use their equally named slot counterparts for that. ")]),n("div",{staticClass:"overflow-auto"},[n("b-pagination-nav",{attrs:{"number-of-pages":"10","base-url":"#","first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"}}),n("b-pagination-nav",{staticClass:"mt-4",attrs:{"number-of-pages":"10","base-url":"#","first-text":"⏮","prev-text":"⏪","next-text":"⏩","last-text":"⏭"}}),n("b-pagination-nav",{staticClass:"mt-4",attrs:{"number-of-pages":"10","base-url":"#"},scopedSlots:t._u([{key:"first-text",fn:function(){return[n("span",{staticClass:"text-success"},[t._v("First")])]},proxy:!0},{key:"prev-text",fn:function(){return[n("span",{staticClass:"text-danger"},[t._v("Prev")])]},proxy:!0},{key:"next-text",fn:function(){return[n("span",{staticClass:"text-warning"},[t._v("Next")])]},proxy:!0},{key:"last-text",fn:function(){return[n("span",{staticClass:"text-info"},[t._v("Last")])]},proxy:!0},{key:"ellipsis-text",fn:function(){return[n("b-spinner",{attrs:{small:"",type:"grow"}}),n("b-spinner",{attrs:{small:"",type:"grow"}}),n("b-spinner",{attrs:{small:"",type:"grow"}})]},proxy:!0},{key:"page",fn:function(e){var a=e.page,s=e.active;return[n(s?"b":"i",[t._v(t._s(a))])]}}])})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])})],1)])],1)},s=[],o=(n("fb6a"),n("5cf3")),i=n("bf23"),r={data:function(){return{code1:{html:'<div class="overflow-auto">\n    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>\n  </div>',js:"export default {\n    methods: {\n      linkGen(pageNum) {\n        return pageNum === 1 ? '?' : `?page=${pageNum}`\n      }\n    }\n  }",linkGen:function(t){return 1===t?"?":"?page=".concat(t)}},code2:{html:'<div class="overflow-auto">\n    <b-pagination-nav\n      :link-gen="linkGen"\n      :page-gen="pageGen"\n      :number-of-pages="links.length"\n    ></b-pagination-nav>\n  </div>',js:"export default {\n    data() {\n      return {\n        links: ['#foo', '#bar', '#baz', '#faz']\n      }\n    },\n    methods: {\n      linkGen(pageNum) {\n        return this.links[pageNum - 1]\n      },\n      pageGen(pageNum) {\n        return this.links[pageNum - 1].slice(1)\n      }\n    }\n  }",links:["#foo","#bar","#baz","#faz"]},code3:{html:'<b-pagination-nav :pages="pages1" use-router></b-pagination-nav>\n  <b-pagination-nav :pages="pages2" use-router></b-pagination-nav>\n  <b-pagination-nav :pages="pages3" use-router></b-pagination-nav>',js:"export default {\n  data() {\n    return {\n      // Simple array of strings\n      pages1: ['?page=1', '?page=2', '?page=3'],\n      // Array of objects with string links\n      pages2: [\n        { link: '?page=1', text: 'One' },\n        { link: '?page=2', text: 'Two' },\n        { link: '?page=3', text: 'Three' }\n      ],\n      // Array of objects with router `to` locations\n      pages3: [\n        { link: { query: { page: 1 } }, text: 'Page 1' },\n        { link: { query: { page: 2 } }, text: 'Page 2' },\n        { link: { query: { page: 3 } }, text: 'Page 3' }\n      ]\n    }\n  }\n}",pages1:["?page=1","?page=2","?page=3"],pages2:[{link:"?page=1",text:"One"},{link:"?page=2",text:"Two"},{link:"?page=3",text:"Three"}],pages3:[{link:{query:{page:1}},text:"Page 1"},{link:{query:{page:2}},text:"Page 2"},{link:{query:{page:3}},text:"Page 3"}]},code4:{html:'<div class="overflow-auto">\n    \x3c!-- Use text in props --\x3e\n    <b-pagination-nav\n      number-of-pages="10"\n      base-url="#"\n      first-text="First"\n      prev-text="Prev"\n      next-text="Next"\n      last-text="Last"\n    ></b-pagination-nav>\n\n    \x3c!-- Use emojis in props --\x3e\n    <b-pagination-nav\n      number-of-pages="10"\n      base-url="#"\n      first-text="⏮"\n      prev-text="⏪"\n      next-text="⏩"\n      last-text="⏭"\n      class="mt-4"\n    ></b-pagination-nav>\n\n    \x3c!-- Use HTML and sub-components in slots --\x3e\n    <b-pagination-nav\n      number-of-pages="10"\n      base-url="#"\n      class="mt-4"\n    >\n      <template v-slot:first-text><span class="text-success">First</span></template>\n      <template v-slot:prev-text><span class="text-danger">Prev</span></template>\n      <template v-slot:next-text><span class="text-warning">Next</span></template>\n      <template v-slot:last-text><span class="text-info">Last</span></template>\n      <template v-slot:ellipsis-text>\n        <b-spinner small type="grow"></b-spinner>\n        <b-spinner small type="grow"></b-spinner>\n        <b-spinner small type="grow"></b-spinner>\n      </template>\n      <template v-slot:page="{ page, active }">\n        <b v-if="active">{{ page }}</b>\n        <i v-else>{{ page }}</i>\n      </template>\n    </b-pagination-nav>\n  </div>',js:""},code5:{html:"",js:""}}},components:{KTCodePreview:o["a"]},methods:{linkGen:function(t){return this.code2.links[t-1]},pageGen:function(t){return this.code2.links[t-1].slice(1)}},mounted:function(){this.$store.dispatch(i["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Pagination",route:"pagination"},{title:"Pagination Nav"}])}},l=r,c=n("2877"),p=Object(c["a"])(l,a,s,!1,null,null,null);e["default"]=p.exports},afce:function(t,e,n){"use strict";var a=n("a96e"),s=n.n(a);s.a},f1cd:function(t,e){function n(t){if(navigator.clipboard)return navigator.clipboard.writeText(t).catch((function(t){throw void 0!==t?t:new DOMException("The request is not allowed","NotAllowedError")}));var e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre",document.body.appendChild(e);var n=window.getSelection(),a=window.document.createRange();n.removeAllRanges(),a.selectNode(e),n.addRange(a);var s=!1;try{s=window.document.execCommand("copy")}catch(o){console.log("error",o)}return n.removeAllRanges(),window.document.body.removeChild(e),s?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))}t.exports=n}}]);
//# sourceMappingURL=chunk-2d51a464.19ae700e.js.map