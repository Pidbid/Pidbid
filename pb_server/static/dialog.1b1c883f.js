import{_ as E}from"./preload-helper.101896b7.js";import{h as S,ap as H,r as j,ar as O,K as $,o as q,a9 as r,j as _,k as b,D as e,x as l,l as U,B as s,C as V,A as c,F as D,u as G,v as J}from"./vue.2fa98121.js";import{u as Q}from"./routesList.d06143f7.js";const W={class:"system-menu-dialog-container"},X={key:0},Y={class:"dialog-footer"},Z=S({name:"systemMenuDialog"}),te=S({...Z,emits:["refresh"],setup(ee,{expose:T,emit:L}){const w=H(()=>E(()=>import("./index.eed99dea.js"),["static/index.eed99dea.js","static/preload-helper.101896b7.js","static/index.8901bb4c.js","static/vue.2fa98121.js","static/index.47b5c078.css"])),C=j(),v=Q(),{routesList:A}=O(v),a=$({ruleForm:{menuSuperior:[],menuType:"menu",name:"",component:"",isLink:!1,menuSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""},btnPower:""},menuData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),g=p=>{const o=[];return p.map(n=>{var m;n.title=(m=n.meta)==null?void 0:m.title,o.push({...n}),n.children&&g(n.children)}),o},I=(p,o)=>{var n;p==="edit"?(o.menuType="menu",o.menuSort=Math.random(),o.component=(n=`${o.component} `.match(/\'(.+)\'/g))==null?void 0:n.join("").replace(/\'/g,""),a.ruleForm=o,a.dialog.title="修改菜单",a.dialog.submitTxt="修 改"):(a.dialog.title="新增菜单",a.dialog.submitTxt="新 增"),a.dialog.type=p,a.dialog.isShowDialog=!0},x=()=>{a.dialog.isShowDialog=!1},h=()=>{a.ruleForm.meta.isIframe?a.ruleForm.isLink=!0:a.ruleForm.isLink=!1},B=()=>{x()},P=()=>{x(),L("refresh")};return q(()=>{a.menuData=g(A.value)}),T({openDialog:I}),(p,o)=>{const n=r("el-cascader"),m=r("el-form-item"),u=r("el-col"),d=r("el-radio"),f=r("el-radio-group"),i=r("el-input"),F=r("el-option"),R=r("el-select"),K=r("el-input-number"),M=r("el-row"),N=r("el-form"),k=r("el-button"),z=r("el-dialog");return _(),b("div",W,[e(z,{title:a.dialog.title,modelValue:a.dialog.isShowDialog,"onUpdate:modelValue":o[17]||(o[17]=t=>a.dialog.isShowDialog=t),width:"769px"},{footer:l(()=>[U("span",Y,[e(k,{onClick:B,size:"default"},{default:l(()=>[s("取 消")]),_:1}),e(k,{type:"primary",onClick:P,size:"default"},{default:l(()=>[s(V(a.dialog.submitTxt),1)]),_:1})])]),default:l(()=>[e(N,{ref_key:"menuDialogFormRef",ref:C,model:a.ruleForm,size:"default","label-width":"80px"},{default:l(()=>[e(M,{gutter:35},{default:l(()=>[e(u,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"上级菜单"},{default:l(()=>[e(n,{options:a.menuData,props:{checkStrictly:!0,value:"path",label:"title"},placeholder:"请选择上级菜单",clearable:"",class:"w100",modelValue:a.ruleForm.menuSuperior,"onUpdate:modelValue":o[0]||(o[0]=t=>a.ruleForm.menuSuperior=t)},{default:l(({node:t,data:y})=>[U("span",null,V(y.title),1),t.isLeaf?c("",!0):(_(),b("span",X," ("+V(y.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"菜单类型"},{default:l(()=>[e(f,{modelValue:a.ruleForm.menuType,"onUpdate:modelValue":o[1]||(o[1]=t=>a.ruleForm.menuType=t)},{default:l(()=>[e(d,{label:"menu"},{default:l(()=>[s("菜单")]),_:1}),e(d,{label:"btn"},{default:l(()=>[s("按钮")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单名称"},{default:l(()=>[e(i,{modelValue:a.ruleForm.meta.title,"onUpdate:modelValue":o[2]||(o[2]=t=>a.ruleForm.meta.title=t),placeholder:"格式：message.router.xxx",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),a.ruleForm.menuType==="menu"?(_(),b(D,{key:0},[e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由名称"},{default:l(()=>[e(i,{modelValue:a.ruleForm.name,"onUpdate:modelValue":o[3]||(o[3]=t=>a.ruleForm.name=t),placeholder:"路由中的 name 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由路径"},{default:l(()=>[e(i,{modelValue:a.ruleForm.path,"onUpdate:modelValue":o[4]||(o[4]=t=>a.ruleForm.path=t),placeholder:"路由中的 path 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"重定向"},{default:l(()=>[e(i,{modelValue:a.ruleForm.redirect,"onUpdate:modelValue":o[5]||(o[5]=t=>a.ruleForm.redirect=t),placeholder:"请输入路由重定向",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单图标"},{default:l(()=>[e(G(w),{placeholder:"请输入菜单图标",modelValue:a.ruleForm.meta.icon,"onUpdate:modelValue":o[6]||(o[6]=t=>a.ruleForm.meta.icon=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"组件路径"},{default:l(()=>[e(i,{modelValue:a.ruleForm.component,"onUpdate:modelValue":o[7]||(o[7]=t=>a.ruleForm.component=t),placeholder:"组件路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"链接地址"},{default:l(()=>[e(i,{modelValue:a.ruleForm.meta.isLink,"onUpdate:modelValue":o[8]||(o[8]=t=>a.ruleForm.meta.isLink=t),placeholder:"外链/内嵌时链接地址（http:xxx.com）",clearable:"",disabled:!a.ruleForm.isLink},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(R,{modelValue:a.ruleForm.meta.roles,"onUpdate:modelValue":o[9]||(o[9]=t=>a.ruleForm.meta.roles=t),multiple:"",placeholder:"取角色管理",clearable:"",class:"w100"},{default:l(()=>[e(F,{label:"admin",value:"admin"}),e(F,{label:"common",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):c("",!0),a.ruleForm.menuType==="btn"?(_(),J(u,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(i,{modelValue:a.ruleForm.btnPower,"onUpdate:modelValue":o[10]||(o[10]=t=>a.ruleForm.btnPower=t),placeholder:"请输入权限标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):c("",!0),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单排序"},{default:l(()=>[e(K,{modelValue:a.ruleForm.menuSort,"onUpdate:modelValue":o[11]||(o[11]=t=>a.ruleForm.menuSort=t),"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),a.ruleForm.menuType==="menu"?(_(),b(D,{key:2},[e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否隐藏"},{default:l(()=>[e(f,{modelValue:a.ruleForm.meta.isHide,"onUpdate:modelValue":o[12]||(o[12]=t=>a.ruleForm.meta.isHide=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[s("隐藏")]),_:1}),e(d,{label:!1},{default:l(()=>[s("不隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"页面缓存"},{default:l(()=>[e(f,{modelValue:a.ruleForm.meta.isKeepAlive,"onUpdate:modelValue":o[13]||(o[13]=t=>a.ruleForm.meta.isKeepAlive=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[s("缓存")]),_:1}),e(d,{label:!1},{default:l(()=>[s("不缓存")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否固定"},{default:l(()=>[e(f,{modelValue:a.ruleForm.meta.isAffix,"onUpdate:modelValue":o[14]||(o[14]=t=>a.ruleForm.meta.isAffix=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[s("固定")]),_:1}),e(d,{label:!1},{default:l(()=>[s("不固定")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否外链"},{default:l(()=>[e(f,{modelValue:a.ruleForm.isLink,"onUpdate:modelValue":o[15]||(o[15]=t=>a.ruleForm.isLink=t),disabled:a.ruleForm.meta.isIframe},{default:l(()=>[e(d,{label:!0},{default:l(()=>[s("是")]),_:1}),e(d,{label:!1},{default:l(()=>[s("否")]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否内嵌"},{default:l(()=>[e(f,{modelValue:a.ruleForm.meta.isIframe,"onUpdate:modelValue":o[16]||(o[16]=t=>a.ruleForm.meta.isIframe=t),onChange:h},{default:l(()=>[e(d,{label:!0},{default:l(()=>[s("是")]),_:1}),e(d,{label:!1},{default:l(()=>[s("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):c("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{te as default};
