import{h as O,r as S,ar as H,aq as B,aG as j,K as U,o as V,a4 as q,aI as z,w as E,a9 as M,j as c,k as d,D as C,x as G,l as m,F as J,Z as K,n as _,u as f,C as k,J as Z}from"./vue.2fa98121.js";import{p as Q}from"./index.a9b756de.js";import{u as W}from"./routesList.d06143f7.js";import{u as X}from"./themeConfig.d1e9143e.js";import{e as i}from"./mitt.7f99bbc0.js";import{_ as Y}from"./_plugin-vue_export-helper.c27b6911.js";const ee={class:"layout-columns-aside"},te=["onClick","onMouseenter","title"],se={class:"columns-vertical-title font12"},ne=["href"],oe={class:"columns-vertical-title font12"},le=O({name:"layoutColumnsAside"}),ie=O({...le,setup(ae){const v=S([]),A=S(),h=W(),R=X(),{routesList:D,isColumnsMenuHover:T,isColumnsNavHover:b}=H(h),{themeConfig:a}=H(R),x=B(),y=j(),t=U({columnsAsideList:[],liIndex:0,liOldIndex:null,liHoverIndex:null,liOldPath:null,difference:0,routeSplit:[]}),g=e=>{t.liIndex=e,A.value.style.top=`${v.value[e].offsetTop+t.difference}px`},P=(e,s)=>{g(s);let{path:o,redirect:l}=e;l?y.push(l):y.push(o)},N=(e,s)=>{if(!a.value.isColumnsMenuHoverPreload)return!1;let{path:o}=e;t.liOldPath=o,t.liOldIndex=s,t.liHoverIndex=s,i.emit("setSendColumnsChildren",u(o)),h.setColumnsMenuHover(!1),h.setColumnsNavHover(!0)},$=async()=>{await h.setColumnsNavHover(!1),setTimeout(()=>{!T&&!b&&i.emit("restoreDefault")},100)},I=e=>{Z(()=>{g(e)})},w=()=>{var s;t.columnsAsideList=L(D.value);const e=u(x.path);if(Object.keys(e).length<=0)return!1;I((s=e.item)==null?void 0:s.k),i.emit("setSendColumnsChildren",e)},u=e=>{const s=e.split("/");let o={children:[]};return t.columnsAsideList.map((l,n)=>{l.path===`/${s[1]}`&&(l.k=n,o.item={...l},o.children=[{...l}],l.children&&(o.children=l.children))}),o},L=e=>e.filter(s=>{var o;return!((o=s.meta)!=null&&o.isHide)}).map(s=>(s=Object.assign({},s),s.children&&(s.children=L(s.children)),s)),F=e=>{t.routeSplit=e.split("/"),t.routeSplit.shift();const s=`/${t.routeSplit[0]}`,o=t.columnsAsideList.find(l=>l.path===s);if(!o)return!1;setTimeout(()=>{I(o.k)},0)};return V(()=>{w(),i.on("restoreDefault",()=>{t.liOldIndex=null,t.liOldPath=null})}),q(()=>{i.off("restoreDefault",()=>{})}),z(e=>{F(e.path),i.emit("setSendColumnsChildren",u(e.path))}),E(Q.state,e=>{if(e.themeConfig.themeConfig.columnsAsideStyle==="columnsRound"?t.difference=3:t.difference=0,!e.routesList.isColumnsMenuHover&&!e.routesList.isColumnsNavHover)t.liHoverIndex=null,i.emit("setSendColumnsChildren",u(x.path));else{if(t.liHoverIndex=t.liOldIndex,!t.liOldPath)return!1;i.emit("setSendColumnsChildren",u(t.liOldPath))}},{deep:!0}),(e,s)=>{const o=M("SvgIcon"),l=M("el-scrollbar");return c(),d("div",ee,[C(l,null,{default:G(()=>[m("ul",{onMouseleave:s[0]||(s[0]=n=>$())},[(c(!0),d(J,null,K(t.columnsAsideList,(n,r)=>(c(),d("li",{key:r,onClick:p=>P(n,r),onMouseenter:p=>N(n,r),ref_for:!0,ref:p=>{p&&(v.value[r]=p)},class:_({"layout-columns-active":t.liIndex===r,"layout-columns-hover":t.liHoverIndex===r}),title:n.meta.title},[!n.meta.isLink||n.meta.isLink&&n.meta.isIframe?(c(),d("div",{key:0,class:_(f(a).columnsAsideLayout)},[C(o,{name:n.meta.icon},null,8,["name"]),m("div",se,k(n.meta.title&&n.meta.title.length>=4?n.meta.title.substr(0,f(a).columnsAsideLayout==="columns-vertical"?4:3):n.meta.title),1)],2)):(c(),d("div",{key:1,class:_(f(a).columnsAsideLayout)},[m("a",{href:n.meta.isLink,target:"_blank"},[C(o,{name:n.meta.icon},null,8,["name"]),m("div",oe,k(n.meta.title&&n.meta.title.length>=4?n.meta.title.substr(0,f(a).columnsAsideLayout==="columns-vertical"?4:3):n.meta.title),1)],8,ne)],2))],42,te))),128)),m("div",{ref_key:"columnsAsideActiveRef",ref:A,class:_(f(a).columnsAsideStyle)},null,2)],32)]),_:1})])}}});const he=Y(ie,[["__scopeId","data-v-cad184d5"]]);export{he as default};
