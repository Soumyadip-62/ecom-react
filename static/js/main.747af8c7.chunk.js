(this["webpackJsonpe-com"]=this["webpackJsonpe-com"]||[]).push([[0],{25:function(e,t,c){},32:function(e){e.exports=JSON.parse('[{"id":"1a","name":"Ducky One 2","price":100,"currency":"USD","delivery":false,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_DKME1961ST-USPDZZT1_10.jpg","inStock":true,"categoryId":"fgsa2142fa"},{"id":"2a","name":"Varmilo Sakura","price":140,"currency":"USD","delivery":true,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_2790_SakuraTKL_1.jpg","inStock":true,"categoryId":"fgsa2142fa"},{"id":"3a","name":"MK Disco","price":80,"currency":"USD","delivery":true,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_2017_Disco_White_Caps_1.png","inStock":false,"categoryId":"fgsa2142fa"},{"id":"4b","name":"Razer Kraken","price":60,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/71BKQhFzDmL._AC_SY355_.jpg","inStock":false,"categoryId":"xasgy42fa"},{"id":"5b","name":"HyperX Cloud II","price":115,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/719KtJ-RAFL._AC_SL1417_.jpg","inStock":true,"categoryId":"xasgy42fa"},{"id":"6b","name":"Sennheiser PC 3 Chat","price":60,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/61kIoNSe3VL._SL1500_.jpg","inStock":true,"categoryId":"xasgy42fa"}]')},33:function(e){e.exports=JSON.parse('[{"id":"fgsa2142fa","name":"Keyboards","description":"Buy different keyboard from any brand available"},{"id":"xasgy42fa","name":"Headphones","description":"Find best-fit for your ears"}]')},34:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(17),r=c.n(n),i=(c(25),c(8)),s=c(7),o=c(2),d=c(0),l=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)("a",{class:"navbar-brand",href:"#",children:"E-Com"}),Object(d.jsx)("div",{class:"navbar",id:"navbarNav",children:Object(d.jsxs)("ul",{class:"navbar-nav",children:[Object(d.jsx)("li",{class:"nav-item ",children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(i.b,{to:"/category",children:"Category"})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(i.b,{to:"/checkout",children:"Cart"})})]})})]})})},j=c(20),b=function(e){var t=e.products;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"center-img",children:Object(d.jsx)("img",{src:t.thumbnail,alt:"notfound"})}),Object(d.jsx)("h3",{children:t.name}),Object(d.jsxs)("p",{className:"price",children:["Price : ",t.price,t.currency]}),Object(d.jsx)("p",{className:t.inStock?"text-green":"text-red",children:t.inStock?"in stock":"Out of stock"})]})},u=c.p+"static/media/Doge.77e5589b.png",h=function(){var e=JSON.parse(localStorage.getItem("Cart"));console.log(e);return Object(d.jsx)("div",{className:"products",children:0!==e.length?function(e){return Object(d.jsx)("div",{children:e.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(b,{products:e})},e.id)}))})}(e):Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:u,alt:"not found"}),Object(d.jsx)("h3",{children:" First add something to cart"})]})})};function m(e,t){return"Add"===t.type?[].concat(Object(j.a)(e),[t.id]):e}var p=[],O=function(e){var t=e.match,n=Object(a.useReducer)(m,p),r=Object(s.a)(n,2),i=r[0],o=r[1];console.log(i),Object(a.useEffect)((function(){localStorage.setItem("Cart",JSON.stringify(i))}),[i]);var l=Object(a.useState)(c(32)),j=Object(s.a)(l,2),u=j[0],h=(j[1],Object(a.useState)("")),O=Object(s.a)(h,2),g=O[0],x=O[1],f=Object(a.useState)(null),v=Object(s.a)(f,2),y=v[0],S=v[1];console.log(u);var k=t.params.id;console.log(t);var C=Object(a.useState)(!0),N=Object(s.a)(C,2),_=N[0],I=N[1];console.log(g);var D=u.filter((function(e){if(e.categoryId===k)return e})),A=u.filter((function(e){if(!0===e.inStock)return e}));console.log(A);return console.log(_),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsxs)("label",{children:["Filter by Stock",Object(d.jsx)("input",{className:"radio",id:"filterbyDelivery",checked:y,type:"radio",value:"delivery",onChange:function(){I(!1),S(!0)}})]}),Object(d.jsxs)("label",{children:["Show all Products",Object(d.jsx)("input",{id:"filterbyStock",checked:!y,type:"radio",value:"inStock",onChange:function(e){x(e.target.value),I(!0),S(!1)}})]})]}),"/category/:id"===t.path?function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"products",children:e.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{products:e}),Object(d.jsx)("button",{className:e.inStock?"btn-vis":"btn-hid",onClick:function(){o({type:"Add",id:e})},children:"Add to Cart"})]},e.id)}))})})}(D):function(e){return Object(d.jsx)(d.Fragment,{children:_?Object(d.jsx)("div",{className:"products",children:e.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{products:e}),Object(d.jsx)("button",{className:e.inStock?"btn-vis":"btn-hid",onClick:function(){o({type:"Add",id:e})},children:"Add to Cart"})]},e.id)}))}):Object(d.jsx)("div",{className:"products",children:A.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{products:e}),Object(d.jsx)("button",{className:e.inStock?"btn-vis":"btn-hid",onClick:function(){o({type:"Add",id:e})},children:"Add to Cart"})]},e.id)}))})})}(u)]})},g=c.p+"static/media/keyboard.9d7920dc.jpg",x=c.p+"static/media/headphone.9787ebf7.jpg",f=function(){var e=c(33),t=Object(a.useState)(e),n=Object(s.a)(t,2),r=n[0];n[1];return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"category",children:r.map((function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:"Keyboards"===e.name?g:x,alt:"not found"}),Object(d.jsx)("h1",{children:Object(d.jsx)(i.b,{to:"/category/".concat(e.id),children:e.name})},e.id),Object(d.jsx)("p",{children:e.description})]})}))})})};var v=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2);return t[0],t[1],Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/checkout",component:h}),Object(d.jsx)(o.a,{exact:!0,path:"/category",component:O}),Object(d.jsx)(o.a,{path:"/category/:id",component:O}),Object(d.jsx)(o.a,{children:Object(d.jsx)("h1",{children:"404 page not found"})})]})]})};r.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.747af8c7.chunk.js.map