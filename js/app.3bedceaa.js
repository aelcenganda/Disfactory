(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},caf5:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("OSM")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"root",staticClass:"map"})},i=[],u=(n("99af"),n("4de4"),n("d81d"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("89ba")),s=n("e587"),f=n("750b"),l=n("5eee"),p=n("a2c7"),d=n("4cdf"),g=n("d510"),w=n("6ed8"),m=n("256f"),h=n("0af5"),v=n("480c"),b=n("3e6b"),y=n("5831"),O=n("6c77"),j=n("6cbf"),P=n("82b0"),x=n("f403"),S=(n("a630"),n("fb6a"),n("45fc"),window.OffscreenCanvas?new OffscreenCanvas(500,500):document.createElement("canvas")),E=S.getContext("2d"),M=function(e){return function(t){return new Promise((function(n){var r=new Image;r.crossOrigin="",r.src=t,r.style.display="none",r.onload=Object(u["a"])(regeneratorRuntime.mark((function t(){var a,o,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return S.width=r.width,S.height=r.height,E.clearRect(0,0,S.width,S.height),E.drawImage(r,0,0),a=E.getImageData(0,0,r.width,r.height),o=a.data,t.next=8,Promise.resolve(e(o));case 8:c=document.createElement("canvas"),i=c.getContext("2d"),c.width=r.width,c.height=r.height,i.putImageData(a,0,0),n(c.toDataURL()),r.remove(),c.remove();case 16:case"end":return t.stop()}}),t)})))}))}},_=(M((function(e){for(var t=0;t<e.length;t+=4){var n=(e[t]+e[t+1]+e[t+2])/3;e[t]=n,e[t+1]=n,e[t+2]=n}})),[[152,230,0],[209,255,115],[171,220,97],[110,221,97],[233,255,190],[198,230,150],[56,204,61],[200,205,56],[126,237,39],[99,192,59],[170,192,60],[142,169,68],[138,255,218],[159,177,105],[112,134,79],[147,203,62],[168,168,0],[107,144,75],[77,101,57]]),G=function(e,t){return!e.some((function(e,n){return t[n]!==e}))},I=function(e){return _.some((function(t){return G(t,e)}))},A=M((function(e){for(var t=0;t<e.length;t+=4){var n=Array.from(e.slice(t,t+3));I(n)?(e[t]=0,e[t+1]=0,e[t+2]=0,e[t+3]=0):(e[t]=0,e[t+1]=0,e[t+2]=0,e[t+3]=255)}})),k=(n("5bc0"),Object(f["a"])({setup:function(){var e=Object(f["d"])(null),t=function(){for(var e=Object(m["d"])("EPSG:3857"),t=e.getExtent(),n=new Array(20),r=Object(h["E"])(t)/256,a=new Array(20),o=0;o<20;++o)n[o]=r/Math.pow(2,o),a[o]=o;return new w["b"]({origin:Object(h["C"])(t),resolutions:n,matrixIds:a})},n=function(e){return new v["a"]({source:new g["a"]({matrixSet:"EPSG:3857",format:"image/png",url:"https://wmts.nlsc.gov.tw/wmts",layer:"EMAP",tileGrid:e,crossOrigin:"Anonymous",style:"default",wrapX:!0,attributions:'<a href="https://maps.nlsc.gov.tw/" target="_blank">國土測繪圖資服務雲</a>'}),opacity:.5})},r=function(e){return new v["a"]({source:new g["a"]({matrixSet:"EPSG:3857",format:"image/png",url:"https://wmts.nlsc.gov.tw/wmts/LUIMAP/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}",layer:"LUIMAP",requestEncoding:"REST",tileGrid:e,tileLoadFunction:function(e,t){var n=e.getImage();A(t).then((function(e){n.src=e}))},crossOrigin:"Anonymous",style:"default",wrapX:!0,attributions:'<a href="https://maps.nlsc.gov.tw/" target="_blank">國土測繪圖資服務雲</a>'}),opacity:.5})};return Object(f["c"])((function(){var a,o=t(),c=new l["a"]({target:e.value,layers:[n(o),r(o)],view:new p["a"]({center:Object(m["g"])([120.1,23.234],"EPSG:4326","EPSG:3857"),zoom:15})});c.on("click",(function(e){c.forEachLayerAtPixel(e.pixel,(function(e,t){var n=Object(s["a"])(t,4),r=n[0],a=n[1],o=n[2],c=n[3];console.log("rgba(".concat(r,", ").concat(a,", ").concat(o,", ").concat(c,")"))}),{layerFilter:function(e){return"LUIMAP"===e.getProperties().source.layer_}})}));var i=new Map,f=new O["b"]({image:new j["a"]({anchorYUnits:P["a"].PIXELS,src:"/images/marker-red.png"})});c.on("moveend",function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,u,l,p,g,w,h,v,O,j;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=c.getView(),r=n.getZoom(),o=n.getResolutionForZoom(r),u=Math.ceil(o),l=Object(m["g"])(n.getCenter(),"EPSG:3857","EPSG:4326"),p=Object(s["a"])(l,2),g=p[0],w=p[1],e.next=7,fetch("/server/api/factories?range=".concat(u,"&lng=").concat(g,"&lat=").concat(w));case 7:return h=e.sent,e.next=10,h.json();case 10:v=e.sent,O=v.filter((function(e){return!i.has(e.id)})).map((function(e){var t=new d["a"]({geometry:new x["a"](Object(m["g"])([e.lng,e.lat],"EPSG:4326","EPSG:3857"))});return t.setId(e.id),t.setStyle(f),i.set(e.id,e),t})),a?a.addFeatures(O):(a=new y["a"]({features:O}),j=new b["a"]({source:a}),c.addLayer(j));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),window.map=c})),{root:e}}})),R=k,C=(n("fc7f"),n("2877")),L=Object(C["a"])(R,c,i,!1,null,"727cf122",null),T=L.exports,U=Object(f["a"])({components:{OSM:T},setup:function(){}}),F=U,D=(n("5c0b"),Object(C["a"])(F,a,o,!1,null,null,null)),X=D.exports;r["a"].config.productionTip=!1,r["a"].use(f["b"]),new r["a"]({render:function(e){return e(X)}}).$mount("#app")},fc7f:function(e,t,n){"use strict";var r=n("caf5"),a=n.n(r);a.a}});
//# sourceMappingURL=app.3bedceaa.js.map