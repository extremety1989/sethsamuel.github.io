!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){e.exports=r(4)},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},2:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=p[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(u(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(u(n.parts[i],t));p[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],c=o[3],u={css:a,media:s,sourceMap:c};r[i]?r[i].parts.push(u):t.push(r[i]={id:i,parts:[u]})}return t}function i(e,t){var r=g(),n=R[R.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),R.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=R.indexOf(e);t>=0&&R.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var r,n,o;if(t.singleton){var i=b++;r=m||(m=s(t)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(t),n=d.bind(null,r),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=f.bind(null,r),o=function(){a(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function l(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=A(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function d(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,R=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],c=p[s.id];c.refs--,i.push(c)}if(e){var u=o(e);n(u,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete p[c.id]}}}};var A=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t,r){"use strict";r(178);console.log("GRADIENT DEMO"),function(){function e(){var t=(1+Math.sin((new Date).getTime()/16711680))/2*16777215,r=((16711680&t)>>16)/255,n=((65280&t)>>8)/255,o=((255&t)>>0)/255;a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.bindBuffer(a.ARRAY_BUFFER,c),a.uniform3f(s,r,n,o),a.vertexAttribPointer(u,3,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLE_STRIP,0,4),requestAnimationFrame(e)}function t(){c=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,c);var e=[1,1,0,-1,1,0,1,-1,0,-1,-1,0];a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW)}function r(){var e=n(),t=o(),r=a.createProgram();a.attachShader(r,t),a.attachShader(r,e),a.linkProgram(r),a.getProgramParameter(r,a.LINK_STATUS)?console.log("Initialized shader program"):console.error("Unable to initialize the shader program."),a.useProgram(r),s=a.getUniformLocation(r,"aColor"),u=a.getAttribLocation(r,"vPosition"),a.enableVertexAttribArray(u)}function n(){var e=a.createShader(a.FRAGMENT_SHADER),t="\n\t\t\tprecision highp float;\n\t\t\tuniform vec3 aColor;\n\t\t\tvarying vec2 vCoord;\n\t\t\tvoid main(void) {\n\t\t\t\tgl_FragColor = vec4(vCoord.s, vCoord.t, 0, 1.0);\n\t\t\t}\n\t\t";return a.shaderSource(e,t),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)?(console.log("Fragment shader compiled"),e):(console.error("An error occurred compiling the shaders: "+a.getShaderInfoLog(e)),null)}function o(){var e=a.createShader(a.VERTEX_SHADER),t="\n\t\t\tprecision highp float;\n\t\t\tattribute vec3 vPosition;\n\t\t\tvarying vec2 vCoord;\n\t\t\tvoid main(void) {\n\t\t\t\tvCoord = vec2((vPosition.s+1.0)/2.0, 1.0-(vPosition.t+1.0)/2.0);\n\t\t\t\tgl_Position = vec4(vPosition, 1.0);\n\t\t\t}\n\t\t";return a.shaderSource(e,t),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)?(console.log("Vertex shader compiled"),e):(console.error("An error occurred compiling the shaders: "+a.getShaderInfoLog(e)),null)}var i=document.querySelector("canvas"),a=i.getContext("webgl"),s=void 0,c=void 0,u=void 0;a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.DEPTH_TEST),a.depthFunc(a.LEQUAL);document.querySelector("input");r(),t(),e()}()},7:function(e,t,r){t=e.exports=r(1)(),t.push([e.id,"body,html{padding:0;margin:0}",""])},178:function(e,t,r){var n=r(7);"string"==typeof n&&(n=[[e.id,n,""]]);r(2)(n,{});n.locals&&(e.exports=n.locals)}});
//# sourceMappingURL=gradient.js.map