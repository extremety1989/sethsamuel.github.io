!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,r){t.exports=r(7)},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},2:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=p[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(u(n.parts[i],e))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(u(n.parts[i],e));p[n.id]={id:n.id,refs:1,parts:a}}}}function o(t){for(var e=[],r={},n=0;n<t.length;n++){var o=t[n],i=o[0],a=o[1],s=o[2],c=o[3],u={css:a,media:s,sourceMap:c};r[i]?r[i].parts.push(u):e.push(r[i]={id:i,parts:[u]})}return e}function i(t,e){var r=g(),n=E[E.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),E.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=E.indexOf(t);e>=0&&E.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function u(t,e){var r,n,o;if(e.singleton){var i=T++;r=m||(m=s(e)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(e),n=d.bind(null,r),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(e),n=f.bind(null,r),o=function(){a(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function l(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=R(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function d(t,e){var r=e.css,n=e.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},v=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=v(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=v(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,T=0,E=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=o(t);return n(r,e),function(t){for(var i=[],a=0;a<r.length;a++){var s=r[a],c=p[s.id];c.refs--,i.push(c)}if(t){var u=o(t);n(u,e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete p[c.id]}}}};var R=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},3:function(t,e,r){e=t.exports=r(1)(),e.push([t.id,"body,html{padding:0;margin:0}",""])},4:function(t,e,r){var n=r(3);"string"==typeof n&&(n=[[t.id,n,""]]);r(2)(n,{});n.locals&&(t.exports=n.locals)},7:function(t,e,r){"use strict";r(4),r(184),console.log("EDGES"),!function(){var t=function v(){s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.bindBuffer(s.ARRAY_BUFFER,c),s.uniform1f(f,parseFloat(p.value)),s.vertexAttribPointer(u,3,s.FLOAT,!1,0,0),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,d),s.uniform1i(l,0),s.drawArrays(s.TRIANGLE_STRIP,0,4),requestAnimationFrame(v)},e=function(){d=s.createTexture();var e=new Image;e.crossOrigin=!0,e.onload=function(){s.bindTexture(s.TEXTURE_2D,d),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,e),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.bindTexture(s.TEXTURE_2D,null),t()},e.src="../images/edgefinder.jpg"},r=function(){c=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,c);var t=[1,1,0,-1,1,0,1,-1,0,-1,-1,0];s.bufferData(s.ARRAY_BUFFER,new Float32Array(t),s.STATIC_DRAW)},n=function(){var t=o(),e=i(),r=s.createProgram();s.attachShader(r,e),s.attachShader(r,t),s.linkProgram(r),s.getProgramParameter(r,s.LINK_STATUS)?console.log("Initialized shader program"):console.error("Unable to initialize the shader program."),s.useProgram(r),u=s.getAttribLocation(r,"vPosition"),s.enableVertexAttribArray(u),l=s.getUniformLocation(r,"uSampler"),f=s.getUniformLocation(r,"uThreshold")},o=function(){var t=s.createShader(s.FRAGMENT_SHADER),e="\n\t\t\tprecision highp float;\n\t\t\tuniform vec3 aColor;\n\t\t\tuniform sampler2D uSampler;\n\t\t\tuniform float uThreshold;\n\t\t\tvarying vec2 vCoord;\n\t\t\tvoid main(void) {\n\t\t\t\tvec4 c = texture2D(uSampler, vCoord);\n\t\t\t\tvec4 cLeft = texture2D(uSampler, vCoord - vec2(-0.005,0.0));\n\t\t\t\tif(distance(cLeft.rgb, c.rgb) > uThreshold){\n\t\t\t\t\tgl_FragColor = vec4(1.0,0.0,1.0,1.0);\n\t\t\t\t}else{\n\t\t\t\t\tgl_FragColor = vec4(0.0,0.0,0.0,1.0);\n\t\t\t\t}\n\t\t\t\t// gl_FragColor = vec4(cLeft.rgb - c.rgb, 1.0);\n\t\t\t\t//gl_FragColor = texture2D(uSampler, vCoord);\n\t\t\t\t// gl_FragColor = vec4(vCoord.s, vCoord.t, 0.0, 1.0);\n\t\t\t}\n\t\t";return s.shaderSource(t,e),s.compileShader(t),s.getShaderParameter(t,s.COMPILE_STATUS)?(console.log("Fragment shader compiled"),t):(console.error("An error occurred compiling the shaders: "+s.getShaderInfoLog(t)),null)},i=function(){var t=s.createShader(s.VERTEX_SHADER),e="\n\t\t\tprecision highp float;\n\t\t\tattribute vec3 vPosition;\n\t\t\tvarying vec2 vCoord;\n\t\t\tvoid main(void) {\n\t\t\t\tvCoord = vec2((vPosition.s+1.0)/2.0, 1.0-(vPosition.t+1.0)/2.0);\n\t\t\t\tgl_Position = vec4(vPosition, 1.0);\n\t\t\t}\n\t\t";return s.shaderSource(t,e),s.compileShader(t),s.getShaderParameter(t,s.COMPILE_STATUS)?(console.log("Vertex shader compiled"),t):(console.error("An error occurred compiling the shaders: "+s.getShaderInfoLog(t)),null)},a=document.querySelector("canvas"),s=a.getContext("webgl"),c=void 0,u=void 0,l=void 0,f=void 0,d=void 0;s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.enable(s.DEPTH_TEST),s.depthFunc(s.LEQUAL);var p=(document.querySelector("img"),document.querySelector("input"));n(),r(),e()}()},12:function(t,e,r){e=t.exports=r(1)(),e.push([t.id,"input{transform:rotate(90deg);transform-origin:left;width:512px;height:12px;position:absolute;background:#fff;left:15px;top:-6px}canvas{margin-left:32px}",""])},184:function(t,e,r){var n=r(12);"string"==typeof n&&(n=[[t.id,n,""]]);r(2)(n,{});n.locals&&(t.exports=n.locals)}});
//# sourceMappingURL=edgefinder.js.map