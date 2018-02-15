!function(){"use strict";function e(){p.add("interactive")}function t(){p.remove("interactive")}function n(e,t){function n(){r>=t||((r+=o)>t&&(r=t),e.textContent=f(r),requestAnimationFrame(n))}var o=Math.ceil(t/60),r=0;requestAnimationFrame(n)}var o="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,o){function r(){var e,t=[],n=[],o={};return i.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(r,i,c){t.push(i=i.toLowerCase()),n.push([i,c]),e=o[i],o[i]=e?e+","+c:c}),{ok:1==(i.status/200|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:r,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}var i=new XMLHttpRequest;i.open(t.method||"get",e);for(var c in t.headers)i.setRequestHeader(c,t.headers[c]);i.withCredentials="include"==t.credentials,i.onload=function(){n(r())},i.onerror=o,i.send(t.body)})},r=(function(){function e(e){this.value=e}function t(t){function n(r,i){try{var c=t[r](i),a=c.value;a instanceof e?Promise.resolve(a.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(c.done?"return":"normal",c.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(e,t){return new Promise(function(o,c){var a={key:e,arg:t,resolve:o,reject:c,next:null};i?i=i.next=a:(r=i=a,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();mapboxgl.supported()||alert("Hi sorry, looks like your browser is not supported to render the map 😢.\n\nYou could try to load this site on another (latest) browser perhaps? 🙏"),mapboxgl.accessToken="pk.eyJ1IjoiY2hlZWF1biIsImEiOiJjaXhmb3o3bTEwMDAzMnRudTJuNjh1eXQ1In0.yO6WeKJwx6yIPoVx5aPavQ";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/cheeaun/cixol8ezg002g2rqs007w3jmt",maxZoom:15.5,logoPosition:"top-right",attributionControl:!1,boxZoom:!1,zoom:.1}),s=(document.getElementById("info"),document.getElementById("info-countries")),u=document.getElementById("info-places"),l=document.getElementById("info-checkins"),d=document.getElementById("countries"),p=document.body.classList;a.on("dragstart",e),a.on("zoomstart",e),d.addEventListener("touchstart",t,!1),d.addEventListener("mouseenter",t),a.on("click",function(){p.toggle("interactive")});var f=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};a.addControl(new mapboxgl.AttributionControl({compact:!0}),"top-right");var m=function(){function e(){r(this,e)}return i(e,[{key:"onAdd",value:function(e){var t=document.createElement("div");t.className="mapboxgl-ctrl mapboxgl-ctrl-group";var n=document.createElement("button");return n.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24">\n      <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.5-.07l-3.57 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07L4.93 15.5c.05.15.07.32.07.5 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.5.07l4.57-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56c-.05-.14-.07-.3-.07-.5 0-1.1.9-2 2-2s2 .9 2 2z"/>\n    </svg>',n.type="button",n.title="Show/hide journey lines",n.addEventListener("click",function(){"visible"===e.getLayoutProperty("lines","visibility")?(e.setLayoutProperty("lines","visibility","none"),n.classList.remove("active")):(e.setLayoutProperty("lines","visibility","visible"),n.classList.add("active"))},!1),t.appendChild(n),t}}]),e}();a.addControl(new m,"top-right"),a.addControl(new mapboxgl.NavigationControl,"top-right");var h=void 0,y=function(){function e(){r(this,e)}return i(e,[{key:"onAdd",value:function(){var e=document.createElement("div");return e.className="mapboxgl-ctrl pitch-ctrl",e.innerHTML='<svg viewBox="0 0 24 24">\n      <title>Pitch</title>\n      <path d="M14 6l-3.8 5 3 3.8-1.7 1.2L7 10l-6 8h22L14 6z"/>\n    </svg>',h=document.createElement("input"),h.type="range",h.step=5,h.min=h.value=0,h.max=60,h.className="pitch-slider",h.addEventListener("change",function(e){a.easeTo({pitch:e.target.value})},!1),e.appendChild(h),e}}]),e}();a.addControl(new y,"top-right"),a.on("pitchend",function(){h.value=a.getPitch()}),Promise.all([new Promise(function(e,t){a.on("load",e),a.on("error",t)}),o("data/checkins.min.geojson").then(function(e){return e.json()})]).then(function(e){var t=c(e,2),o=(t[0],t[1]),r={},i={},m=o.features.length,h=[];o.features=o.features.filter(function(e,t){var n=e.properties,a=n.id,s=n.country,u=!i[a],l=c(e.geometry.coordinates,2),d=l[0],p=l[1];if(u){if(!r[s]){var f=e.properties.cc.toLowerCase();r[s]={cc:f,bounds:new mapboxgl.LngLatBounds,places_count:0,checkins_count:0}}r[s].bounds.extend([d,p]),r[s].places_count++,i[a]=!0}r[s].checkins_count++;var m=o.features[t+1];if(m&&e.properties.date===m.properties.date){var y=c(m.geometry.coordinates,2),v=y[0],g=y[1];v+=v-d>180?-360:d-v>180?360:0,h.push([[d,p],[v,g]])}return u});var y=Object.keys(i).length,v=Object.keys(r).map(function(e){var t=r[e];return{name:e,cc:t.cc,bounds:t.bounds,places_count:t.places_count,checkins_count:t.checkins_count}}),g=v.length;v.sort(function(e,t){return t.places_count-e.places_count}),v.forEach(function(e,t){var n=e.cc,o=e.name,r=e.bounds,i=e.checkins_count,c=e.places_count,s=document.createElement("button");s.type="button",s.addEventListener("click",function(e){a.fitBounds(r,{padding:150})},!1),s.innerHTML='\n      <img src="data/countries/'+n+'.svg" width="50" height="50" alt=""><br>\n      <b>'+o+"</b>\n      <br>\n      "+f(i)+" check-in"+(i>1?"s":"")+"\n      <br>\n      "+f(c)+" place"+(c>1?"s":"")+"\n    ",d.appendChild(s)}),o.features.slice(0,1).forEach(function(e,t){console.log(e,t);var n=document.createElement("button");n.type="button",n.id="lastcheckin",n.innerHTML="<b>"+e.properties.title+"</b>",d.appendChild(n);var o=[e.geometry.coordinates,e.geometry.coordinates];n.addEventListener("click",function(e){a.fitBounds(o,{padding:150})},!1)});var b=a.getStyle().layers.reverse(),k=b.findIndex(function(e){return"symbol"!==e.type}),w=-1!==k?b[k].id:void 0;a.addSource("checkins",{type:"geojson",data:o,cluster:!0,clusterMaxZoom:10,clusterRadius:10}),a.addLayer({id:"cluster",type:"circle",source:"checkins",filter:["has","point_count"],paint:{"circle-radius":{property:"point_count",stops:[[{zoom:0,value:3},7],[{zoom:0,value:10},10],[{zoom:0,value:100},13],[{zoom:0,value:200},16]]},"circle-color":"#14B7F4","circle-opacity":.9,"circle-stroke-width":{property:"point_count",stops:[[3,3],[50,6]]},"circle-stroke-color":"#14B7F4","circle-stroke-opacity":.3}}),a.addLayer({id:"checkins-count",type:"symbol",source:"checkins",filter:["has","point_count"],maxzoom:11,layout:{"text-field":"{point_count_abbreviated}","text-size":10}}),a.addLayer({id:"checkins",type:"circle",source:"checkins",minzoom:8,filter:["!has","point_count"],paint:{"circle-radius":6,"circle-color":"#14B7F4","circle-opacity":.9,"circle-stroke-width":3,"circle-stroke-color":"#14B7F4","circle-stroke-opacity":.1}},w),a.once("data",function(){requestAnimationFrame(function(){n(l,m),n(u,y),n(s,g),p.add("render")})}),a.on("mouseenter","cluster",function(){a.getCanvas().style.cursor="pointer"}),a.on("click","cluster",function(e){e.originalEvent.stopPropagation(),a.flyTo({center:e.lngLat,zoom:a.getZoom()+2})}),a.on("mouseleave","cluster",function(){a.getCanvas().style.cursor=""}),a.addLayer({id:"lines",type:"line",source:{type:"geojson",data:{type:"Feature",geometry:{type:"MultiLineString",coordinates:h}}},layout:{visibility:"none"},paint:{"line-color":"#fff","line-opacity":.3}},w),a.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#999","fill-extrusion-height":{type:"identity",property:"height"},"fill-extrusion-base":{type:"identity",property:"min_height"},"fill-extrusion-opacity":.6}},w);var x=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});a.on("mousemove","checkins",function(e){x.setLngLat(e.lngLat).setHTML("<div id='popup' class='popup' style='z-index: 10;'><div>"+e.features[0].properties.title+"</div></div>").addTo(a)}),a.on("mouseleave","checkins",function(){x.remove()});var L=function(e){confirm("Oops, the map is acting weird now. Reload this page? 😅")&&location.reload(),console.error(e)};a.on("error",L),window.onerror=L})}();
//# sourceMappingURL=app.js.map
