import{h as _,a9 as t,j as o,k as a,D as r,x as l,v as s,F as v,Z as C,l as h,n as w,A as i}from"./vue.2fa98121.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";const b={class:"icon-selector-warp-row"},B=_({name:"iconSelectorList"}),I=_({...B,props:{list:{type:Array,default:()=>[]},empty:{type:String,default:()=>"无相关图标"},prefix:{type:String,default:()=>""}},emits:["get-icon"],setup(e,{emit:m}){const d=e,p=c=>{m("get-icon",c)};return(c,N)=>{const u=t("SvgIcon"),f=t("el-col"),g=t("el-row"),y=t("el-empty"),k=t("el-scrollbar");return o(),a("div",b,[r(k,{ref:"selectorScrollbarRef"},{default:l(()=>[d.list.length>0?(o(),s(g,{key:0,gutter:10},{default:l(()=>[(o(!0),a(v,null,C(e.list,(n,x)=>(o(),s(f,{xs:6,sm:4,md:4,lg:4,xl:4,key:x,onClick:V=>p(n)},{default:l(()=>[h("div",{class:w(["icon-selector-warp-item",{"icon-selector-active":e.prefix===n}])},[r(u,{name:n},null,8,["name"])],2)]),_:2},1032,["onClick"]))),128))]),_:1})):i("",!0),e.list.length<=0?(o(),s(y,{key:1,"image-size":100,description:e.empty},null,8,["description"])):i("",!0)]),_:1},512)])}}});const F=S(I,[["__scopeId","data-v-2e4b32ad"]]);export{F as default};
