import{h as p,K as y,a as v,o as L,a4 as g,w as I,a9 as S,j as n,v as E,x as M,y as b,k as c,q as d,u,l,F as m,Z as B,D,C as T,A as V,E as W,T as $}from"./vue.2fa98121.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";const F={class:"el-dropdown-menu"},N=["onClick"],z=p({name:"layoutTagsViewContextmenu"}),A=p({...z,props:{dropdown:{type:Object,default:()=>({x:0,y:0})}},emits:["currentContextmenuClick"],setup(f,{expose:x,emit:_}){const o=f,e=y({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"刷新",affix:!1,icon:"ele-RefreshRight"},{contextMenuClickId:1,txt:"关闭",affix:!1,icon:"ele-Close"},{contextMenuClickId:2,txt:"关闭其它",affix:!1,icon:"ele-CircleClose"},{contextMenuClickId:3,txt:"全部关闭",affix:!1,icon:"ele-FolderDelete"},{contextMenuClickId:4,txt:"当前页全屏",affix:!1,icon:"iconfont icon-fullscreen"}],item:{},arrowLeft:10}),r=v(()=>o.dropdown.x+117>document.documentElement.clientWidth?{x:document.documentElement.clientWidth-117-5,y:o.dropdown.y}:o.dropdown),w=t=>{_("currentContextmenuClick",Object.assign({},{contextMenuClickId:t},e.item))},C=t=>{var i;e.item=t,(i=t.meta)!=null&&i.isAffix?e.dropdownList[1].affix=!0:e.dropdownList[1].affix=!1,a(),setTimeout(()=>{e.isShow=!0},10)},a=()=>{e.isShow=!1};return L(()=>{document.body.addEventListener("click",a)}),g(()=>{document.body.removeEventListener("click",a)}),I(()=>o.dropdown,({x:t})=>{t+117>document.documentElement.clientWidth?e.arrowLeft=117-(document.documentElement.clientWidth-t):e.arrowLeft=10},{deep:!0}),x({openContextmenu:C}),(t,i)=>{const h=S("SvgIcon");return n(),E($,{name:"el-zoom-in-center"},{default:M(()=>[b((n(),c("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:d(`top: ${u(r).y+5}px;left: ${u(r).x}px;`),key:Math.random()},[l("ul",F,[(n(!0),c(m,null,B(e.dropdownList,(s,k)=>(n(),c(m,null,[s.affix?V("",!0):(n(),c("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:k,onClick:O=>w(s.contextMenuClickId)},[D(h,{name:s.icon},null,8,["name"]),l("span",null,T(s.txt),1)],8,N))],64))),256))]),l("div",{class:"el-popper__arrow",style:d({left:`${e.arrowLeft}px`})},null,4)],4)),[[W,e.isShow]])]),_:1})}}});const K=j(A,[["__scopeId","data-v-ee4783cd"]]);export{K as default};
