import{u as r,r as o,b as n,o as c,c as i,w as l,_ as m,a as _,d as u}from"./index-28c35e09.js";/* empty css                */import{_ as f}from"./UserTable-4dc7dec0.js";import"./ConfirmDelete-ba03924f.js";/* empty css                   */const d={class:"w-full"},B={__name:"Index",setup(p){const s=r(),a=o([]);n(async()=>{await t()});async function t(){await s.userAll(),a.value=s.allUser.map(e=>({id:e.id,name:e.name,email:e.email}))}return(e,h)=>(c(),i(m,{title:"List Payment Agent"},{default:l(()=>[_("div",d,[u(f,{users:a.value,fetchUsers:t},null,8,["users"])])]),_:1}))}};export{B as default};