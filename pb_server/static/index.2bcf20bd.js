import{_ as a}from"./preload-helper.101896b7.js";import{h as C,ap as i,ar as p,aq as A,K as P,a as f,o as V,a4 as O,j as d,k as F,u as r,v as h,A as L,D as v}from"./vue.2fa98121.js";import{u as M}from"./routesList.d06143f7.js";import{u as j}from"./themeConfig.d1e9143e.js";import{e as _}from"./mitt.7f99bbc0.js";import{_ as w}from"./_plugin-vue_export-helper.c27b6911.js";const H={class:"layout-navbars-breadcrumb-index"},N=C({name:"layoutBreadcrumbIndex"}),U=C({...N,setup(q){const y=i(()=>a(()=>import("./breadcrumb.bd67601d.js"),["static/breadcrumb.bd67601d.js","static/vue.2fa98121.js","static/storage.542a95ff.js","static/other.76164931.js","static/preload-helper.101896b7.js","static/index.8901bb4c.js","static/index.61bdf2ac.js","static/_commonjsHelpers.48992372.js","static/index.a9b756de.js","static/keepAliveNames.b0407c3b.js","static/routesList.d06143f7.js","static/themeConfig.d1e9143e.js","static/userInfo.79f4e961.js","static/loading.feb74a4a.js","static/loading.70fbfd85.css","static/tagsViewRoutes.9553160b.js","static/index.d83bf2e6.js","static/index.8b89e2e0.css","static/toolsValidate.e1c6b468.js","static/_plugin-vue_export-helper.c27b6911.js","static/breadcrumb.ed089f48.css"])),R=i(()=>a(()=>import("./user.e444b2c3.js"),["static/user.e444b2c3.js","static/preload-helper.101896b7.js","static/vue.2fa98121.js","static/userInfo.79f4e961.js","static/storage.542a95ff.js","static/themeConfig.d1e9143e.js","static/mitt.7f99bbc0.js","static/index.d83bf2e6.js","static/index.8901bb4c.js","static/_plugin-vue_export-helper.c27b6911.js","static/user.e2697f38.css"])),g=i(()=>a(()=>import("./index.6b5a723e.js"),["static/index.6b5a723e.js","static/vue.2fa98121.js","static/themeConfig.d1e9143e.js","static/logo-mini.c6380ee5.js","static/_plugin-vue_export-helper.c27b6911.js","static/index.80a06759.css"])),x=i(()=>a(()=>import("./horizontal.42c66e00.js"),["static/horizontal.42c66e00.js","static/preload-helper.101896b7.js","static/vue.2fa98121.js","static/routesList.d06143f7.js","static/themeConfig.d1e9143e.js","static/other.76164931.js","static/index.8901bb4c.js","static/index.61bdf2ac.js","static/_commonjsHelpers.48992372.js","static/index.a9b756de.js","static/keepAliveNames.b0407c3b.js","static/storage.542a95ff.js","static/userInfo.79f4e961.js","static/loading.feb74a4a.js","static/loading.70fbfd85.css","static/tagsViewRoutes.9553160b.js","static/index.d83bf2e6.js","static/index.8b89e2e0.css","static/toolsValidate.e1c6b468.js","static/mitt.7f99bbc0.js","static/_plugin-vue_export-helper.c27b6911.js","static/horizontal.1112eed4.css"])),E=M(),I=j(),{themeConfig:c}=p(I),{routesList:u}=p(E),S=A(),l=P({menuList:[]}),b=f(()=>{let{isShowLogo:t,layout:e}=c.value;return t&&e==="classic"||t&&e==="transverse"}),T=f(()=>{let{layout:t,isClassicSplitMenu:e}=c.value;return t==="transverse"||e&&t==="classic"}),m=()=>{let{layout:t,isClassicSplitMenu:e}=c.value;if(t==="classic"&&e){l.menuList=k(n(u.value));const s=B(S.path);_.emit("setSendClassicChildren",s)}else l.menuList=n(u.value)},k=t=>(t.map(e=>{e.children&&delete e.children}),t),n=t=>t.filter(e=>{var s;return!((s=e.meta)!=null&&s.isHide)}).map(e=>(e=Object.assign({},e),e.children&&(e.children=n(e.children)),e)),B=t=>{const e=t.split("/");let s={children:[]};return n(u.value).map((o,D)=>{o.path===`/${e[1]}`&&(o.k=D,s.item={...o},s.children=[{...o}],o.children&&(s.children=o.children))}),s};return V(()=>{m(),_.on("getBreadcrumbIndexSetFilterRoutes",()=>{m()})}),O(()=>{_.off("getBreadcrumbIndexSetFilterRoutes",()=>{})}),(t,e)=>(d(),F("div",H,[r(b)?(d(),h(r(g),{key:0})):L("",!0),v(r(y)),r(T)?(d(),h(r(x),{key:1,menuList:l.menuList},null,8,["menuList"])):L("",!0),v(r(R))]))}});const W=w(U,[["__scopeId","data-v-df58053c"]]);export{W as default};
