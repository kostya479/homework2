(()=>{"use strict";var e={41:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"#accept-order-button{max-width:260px;padding:4px;height:30px;text-align:center;margin:10px;cursor:pointer}body{padding:0;margin:0;height:100vh}.main-app-wrap{display:flex;height:100%;flex-direction:column}.main-app-wrap header{display:flex;align-content:center;justify-content:center;color:#fff;background:#f14e4e}.main-app-wrap footer{height:70px;background:#313b5e;color:#fff;display:flex;align-content:center;justify-content:center}.main-app-wrap .main-app{overflow:auto;padding:10px;flex:1;height:100%}.main-app-wrap .main-app .tour-wrap{display:flex;flex-wrap:wrap}.main-app-wrap .main-app .tour-wrap .tour-pic{width:100%;height:140px}.main-app-wrap .main-app .tour-wrap>div{flex-direction:column;display:flex;width:260px;height:400px;padding:4px;border:1px solid gray;margin:4px}.main-app-wrap .main-app .tour-wrap>div:hover{cursor:pointer}.main-app-wrap .main-app .tour-wrap>div>div.ticket-description{flex:1;height:155px;text-overflow:ellipsis;overflow:hidden}.modal-element{color:#292d2c;background-color:#e4e9e7;height:360px;width:300px;position:fixed;box-shadow:1px 1px 1px 2px #d7c7c7;top:50%;left:50%;padding:6px;transform:translateY(-50%) translateX(-50%);display:flex;justify-content:center;align-items:center}.modal-element .close-modal{position:absolute;top:0;margin:0;cursor:pointer;font-size:1.3rem;font-weight:bold;right:3px}.modal-element .ticket-submit{height:45px}",""]);const c=a},863:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".ticket-block{border-bottom:1px solid gray}.ticket-info{margin:30px 0}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(a[p]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},907:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(379),o=n.n(r),i=n(795),a=n.n(i),c=n(569),p=n.n(c),l=n(565),d=n.n(l),u=n(216),s=n.n(u),f=n(589),m=n.n(f),v=n(41),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=p().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),o()(v.Z,h);const y=v.Z&&v.Z.locals?v.Z.locals:void 0},98:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(379),o=n.n(r),i=n(795),a=n.n(i),c=n(569),p=n.n(c),l=n(565),d=n.n(l),u=n(216),s=n.n(u),f=n(589),m=n.n(f),v=n(863),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=p().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),o()(v.Z,h);const y=v.Z&&v.Z.locals?v.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var p=e[c],l=r.base?p[0]+r.base:p[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var s=n(u),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==s)t[s].references++,t[s].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var p=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=p}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},706:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initFooterTitle=t.initHeaderTitle=void 0,t.initHeaderTitle=function(e,t){var n=document.querySelector("header").querySelector(t);n&&(n.innerText=e)},t.initFooterTitle=function(e,t){var n=document.querySelector("footer").querySelector(t);n&&(n.innerText=e)}},823:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.postTicketData=t.getTicketById=void 0,t.getTicketById=function(e){return fetch("https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket").then((function(e){return e.json()})).then((function(e){return e}))},t.postTicketData=function(e){return fetch("https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket").then((function(e){return e.json()})).then((function(e){return e}))}},532:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initTicketElementTemplate=void 0,t.initTicketElementTemplate=function(e,t){return"\n       <div  data-item-index=".concat(t,' class="ticket-block">\n           <p>').concat(e,"</p>\n       </div>\n    ")}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{var e=n(823);n(907),n(98);var t,r,o=n(532),i=n(706);(0,e.getTicketById)("someId").then((function(e){var n,r,a,c,p,l,d="string"==typeof(null==(t=e[0])?void 0:t.name)?null==t?void 0:t.name:"";(0,i.initHeaderTitle)(d,"h3"),(0,i.initFooterTitle)("Туры по всему миру","h2"),n=t,c=document.querySelector(".ticket-info"),p=null==n?void 0:n.description,l=null==n?void 0:n.tourOperator,"vipStatus"in n&&(r=n.vipStatus),[p,l,r].forEach((function(e,t){a+=(0,o.initTicketElementTemplate)(e,t)})),c.innerHTML=a})),(r=document.getElementById("accept-order-button"))&&r.addEventListener("click",(function(){var t;document.querySelectorAll(".user-info > p").forEach((function(e){var n=e.getAttribute("data-name");if(n){var r=e.querySelector("input");t[n]=r.value}})),console.log("userInfoObj",t),(0,e.postTicketData)(undefined).then((function(e){e.success}))}))})()})();