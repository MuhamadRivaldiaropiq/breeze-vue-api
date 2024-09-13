import{e as f,r as i,f as u,g as m,o as v,h as C,d as s,i as E,a as t,w as l,m as j,j as _,R as h,k as I,v as M,t as y,l as N,b as R,c as T,_ as U}from"./index-28c35e09.js";/* empty css                */import{_ as D}from"./ConfirmDelete-ba03924f.js";const L={class:"relative"},F={class:"bg-light-primary-1 dark:bg-dark-primary-2 p-5 rounded-lg space-y-3 shadow-lg"},q={class:"flex justify-between items-center"},z=t("i",{class:"fa-solid fa-plus"},null,-1),G=t("p",null,"Add Product",-1),H=[z,G],J={class:"grid grid-cols-1 py-2"},K={class:"line-clamp-2"},O={class:"grid grid-cols-1 py-2"},Q={class:"line-clamp-2"},W={class:"flex gap-3 items-center justify-center text-xs"},X=t("div",{class:"flex gap-2 items-center text-white bg-secondary-2 hover:bg-opacity-90 rounded-lg px-3 py-1 cursor-pointer"},[t("i",{class:"fa-solid fa-pen"}),t("p",null,"Edit")],-1),Y={__name:"ProductTable",props:{products:Array,fetchProducts:Function},setup(p){const n=f(),d=p,a=i(""),e=i(1),g=i(10),b=[{key:"name",title:"Product Name"},{key:"product_price",title:"Price",align:"start"},{key:"product_stock",title:"Stock",align:"start"},{key:"product_tag",title:"Tag",align:"start"},{key:"id",title:"Action",align:"center"}];function k(o){return o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const P=u(()=>Math.ceil(x.value.length/g.value)),x=u(()=>d.products.filter(o=>o.name.toLowerCase().includes(a.value))),w=i(!1),V=i([]),B=u(()=>V.value),S=async o=>{await n.deleteProduct(o,w),N(()=>{d.fetchProducts()},d.products)};return(o,c)=>{const $=m("v-data-table"),A=m("v-pagination");return v(),C("div",L,[s(E,{class:"w-full",errors:B.value},null,8,["errors"]),t("div",F,[t("div",q,[s(_(h),{to:{name:"admin.product.create"}},{default:l(()=>[t("div",j(o.activatorProps,{class:"bg-secondary-3 text-white hover:bg-opacity-90 px-4 py-2 rounded-lg gap-1 flex items-center text-sm cursor-pointer shadow-lg"}),H,16)]),_:1}),I(t("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=r=>a.value=r),class:"rounded-lg text-sm min-w-52 dark:!border-gray-500 border !border-typography-2/20 shadow-lg bg-light-primary-1 dark:bg-dark-primary-1 text-typography-3 dark:text-white",placeholder:"Search Product Item"},null,512),[[M,a.value]])]),s($,{page:e.value,"onUpdate:page":c[1]||(c[1]=r=>e.value=r),search:a.value,headers:b,items:p.products,"hide-default-footer":"","header-props":{class:"dark:bg-dark-primary-1 bg-light-primary-2 dark:!text-white border-b dark:!border-white/30"},"item-key":"id",class:"border dark:!border-typography-2/20 shadow-lg dark:!bg-dark-primary-1 !bg-light-primary-2 dark:!text-typography-1"},{"item.name":l(({item:r})=>[t("div",J,[t("p",K,y(r.name),1)])]),"item.product_price":l(({item:r})=>[t("div",O,[t("p",Q," Rp. "+y(k(r.product_price)),1)])]),"item.id":l(({item:r})=>[t("div",W,[s(_(h),{to:{name:"admin.product.edit",params:{id:r.id}}},{default:l(()=>[X]),_:2},1032,["to"]),s(D,{type:"Product",id:r.id,method:S},null,8,["id"])])]),_:1},8,["page","search","items"]),s(A,{modelValue:e.value,"onUpdate:modelValue":c[2]||(c[2]=r=>e.value=r),length:P.value,"next-icon":"fa-solid fa-chevron-right","prev-icon":"fa-solid fa-chevron-left",class:"bg-light-primary-2 border !border-typography-2/20 shadow-lg rounded-lg dark:bg-dark-primary-1 dark:text-white","total-visible":5},null,8,["modelValue","length"])])])}}},Z={class:"w-full"},at={__name:"Index",setup(p){const n=f(),d=i([]);R(async()=>{await a()});async function a(){await n.productAll(),d.value=n.allProduct.map(e=>({name:e.product_name,id:e.id,subcategory:e.subcategory,product_price:e.product_price,product_stock:e.product_stock,product_tag:e.product_tag,product_image:e.product_image}))}return(e,g)=>(v(),T(U,{title:"Product Items"},{default:l(()=>[t("div",Z,[s(Y,{products:d.value,fetchProducts:a},null,8,["products"])])]),_:1}))}};export{at as default};