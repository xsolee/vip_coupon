(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae8b0d0"],{"212a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"kt-portlet",class:t.portletClass},[t.hasTitleSlot||t.title?s("div",{staticClass:"kt-portlet__head",class:t.headClass},[s("div",{staticClass:"kt-portlet__head-label"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():s("h3",{staticClass:"kt-portlet__head-title"},[t._v(" "+t._s(t.title)+" ")])],2),s("div",{staticClass:"kt-portlet__head-toolbar"},[t._t("toolbar")],2)]):t._e(),s("div",{staticClass:"kt-portlet__body",class:{bodyClass:t.bodyClass,"kt-portlet__body--fit":t.bodyFit,"kt-portlet__body--fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?s("div",{staticClass:"kt-portlet__foot kt-portlet__body--fit"},[t._t("foot")],2):t._e()])},a=[],l={name:"KTPortlet",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean},components:{},methods:{},computed:{portletClass:function(){var t={"kt-portlet--height-fluid":this.fluidHeight,"kt-portlet--height-fluid-half":this.fluidHalfHeight,"kt-portlet--head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"kt-portlet--head-".concat(this.headSize)}}},n=l,o=s("2877"),r=Object(o["a"])(n,i,a,!1,null,null,null);e["a"]=r.exports},"5cf3":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("KTPortlet",{attrs:{title:t.title},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[s("h3",{staticClass:"kt-portlet__head-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-clean btn-sm btn-icon btn-icon-md",class:{active:t.isOpen},attrs:{type:"button",title:"Show codes"},on:{click:function(e){return t.toggle()}}},[s("i",{staticClass:"la la-code"})])]},proxy:!0},{key:"body",fn:function(){return[s("transition",{attrs:{name:"fade"}},[t.isOpen?s("div",{staticClass:"kt-portlet__code",class:{"kt-portlet__code--show":t.isOpen}},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-clean btn-sm btn-icon btn-icon-md float-right",attrs:{href:"#",title:"Copy codes"},on:{click:function(e){return t.copyCode(e)}}},[s("i",{staticClass:"la la-copy"})]),t.hasGeneralCode?s("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():s("ul",{staticClass:"nav nav-tabs nav-tabs-line",attrs:{role:"tablist"}},[t.hasHtmlCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v("HTML")])]):t._e(),t.hasJsCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v("SCSS")])]):t._e()]),t.hasGeneralCode||t.hasSingleCodeType?t._e():s("div",[s("b-tabs",{staticClass:"kt-hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{attrs:{active:""}},[s("highlight-code",{attrs:{lang:"html"}},[t._t("html")],2)],1),s("b-tab",[s("highlight-code",{attrs:{lang:"js"}},[t._t("js")],2)],1),s("b-tab",[s("highlight-code",{attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?s("div",[t.hasHtmlCode?s("highlight-code",{attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?s("highlight-code",{attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?s("highlight-code",{attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},a=[],l=(s("4160"),s("212a")),n=s("f1cd"),o=s.n(n),r={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTPortlet:l["a"]},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),s=e.querySelectorAll('[data-toggle="tab"]'),i=0;i<s.length;i++)s[i].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))},toggle:function(){this.isOpen=!this.isOpen},copyCode:function(t){var e=t.target.closest(".kt-portlet__code"),s=e.querySelectorAll(".kt-portlet__code .tab-pane.active")[0];s="undefined"!==typeof s?s.textContent:e.textContent,o()(s)}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(s){t.$slots.hasOwnProperty(s)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},c=r,d=(s("afce"),s("2877")),u=Object(d["a"])(c,i,a,!1,null,"e705e41c",null);e["a"]=u.exports},a96e:function(t,e,s){},afce:function(t,e,s){"use strict";var i=s("a96e"),a=s.n(i);a.a},f1cd:function(t,e){function s(t){if(navigator.clipboard)return navigator.clipboard.writeText(t).catch((function(t){throw void 0!==t?t:new DOMException("The request is not allowed","NotAllowedError")}));var e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre",document.body.appendChild(e);var s=window.getSelection(),i=window.document.createRange();s.removeAllRanges(),i.selectNode(e),s.addRange(i);var a=!1;try{a=window.document.execCommand("copy")}catch(l){console.log("error",l)}return s.removeAllRanges(),window.document.body.removeChild(e),a?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))}t.exports=s},ff87:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-alert",{staticClass:"alert alert-elevate",attrs:{show:"",variant:"light"}},[s("div",{staticClass:"alert-icon"},[s("i",{staticClass:"flaticon-warning kt-font-brand"})]),s("div",{staticClass:"alert-text"},[s("b",[t._v("Carousel")]),t._v(" The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators. "),s("a",{staticClass:"kt-link kt-link--brand kt-font-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/carousel",target:"_blank"}},[t._v(" See documentation. ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("KTCodePreview",{attrs:{title:"Carousel"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("div",[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[s("h1",[t._v("Hello world!")])]),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),s("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[s("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),s("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[s("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1),s("p",{staticClass:"mt-4"},[t._v(" Slide #: "+t._s(t.slide)),s("br"),t._v(" Sliding: "+t._s(t.sliding)+" ")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html1)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.js1)+" ")]},proxy:!0}])})],1)])],1)},a=[],l=s("5cf3"),n=s("bf23"),o={data:function(){return{slide:0,sliding:null,html1:'<div>\n    <b-carousel\n      id="carousel-1"\n      v-model="slide"\n      :interval="4000"\n      controls\n      indicators\n      background="#ababab"\n      img-width="1024"\n      img-height="480"\n      style="text-shadow: 1px 1px 2px #333;"\n      @sliding-start="onSlideStart"\n      @sliding-end="onSlideEnd"\n    >\n      \x3c!-- Text slides with image --\x3e\n      <b-carousel-slide\n        caption="First slide"\n        text="Nulla vitae elit libero, a pharetra augue mollis interdum."\n        img-src="https://picsum.photos/1024/480/?image=52"\n      ></b-carousel-slide>\n\n      \x3c!-- Slides with custom text --\x3e\n      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">\n        <h1>Hello world!</h1>\n      </b-carousel-slide>\n\n      \x3c!-- Slides with image only --\x3e\n      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>\n\n      \x3c!-- Slides with img slot --\x3e\n      \x3c!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment --\x3e\n      <b-carousel-slide>\n        <template v-slot:img>\n          <img\n            class="d-block img-fluid w-100"\n            width="1024"\n            height="480"\n            src="https://picsum.photos/1024/480/?image=55"\n            alt="image slot"\n          >\n        </template>\n      </b-carousel-slide>\n\n      \x3c!-- Slide with blank fluid image to maintain slide aspect ratio --\x3e\n      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\n        </p>\n      </b-carousel-slide>\n    </b-carousel>\n\n    <p class="mt-4">\n      Slide #: {{ slide }}<br>\n      Sliding: {{ sliding }}\n    </p>\n  </div>',js1:"\n  export default {\n    data() {\n      return {\n        slide: 0,\n        sliding: null\n      }\n    },\n    methods: {\n      onSlideStart(slide) {\n        this.sliding = true\n      },\n      onSlideEnd(slide) {\n        this.sliding = false\n      }\n    }\n  }"}},components:{KTCodePreview:l["a"]},mounted:function(){this.$store.dispatch(n["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Carousel"}])},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},r=o,c=s("2877"),d=Object(c["a"])(r,i,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6ae8b0d0.6914501b.js.map