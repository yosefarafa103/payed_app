(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},9390:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,pages:()=>l,routeModule:()=>p,tree:()=>c});var n=r(260),i=r(8203),o=r(5155),a=r.n(o),s=r(7292),u={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>s[e]);r.d(t,u);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3605)),"E:\\work\\paying_product\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"E:\\work\\paying_product\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["E:\\work\\paying_product\\src\\app\\page.tsx"],f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2015:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},5143:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},5324:()=>{},2172:()=>{},6487:()=>{},8335:()=>{},5852:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var i={},o=t.split(n),a=(r||{}).decode||e,s=0;s<o.length;s++){var u=o[s],c=u.indexOf("=");if(!(c<0)){var l=u.substr(0,c).trim(),f=u.substr(++c,u.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==i[l]&&(i[l]=function(e,t){try{return t(e)}catch(t){return e}}(f,a))}}return i},t.serialize=function(e,t,n){var o=n||{},a=o.encode||r;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var s=a(t);if(s&&!i.test(s))throw TypeError("argument val is invalid");var u=e+"="+s;if(null!=o.maxAge){var c=o.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(c)}if(o.domain){if(!i.test(o.domain))throw TypeError("option domain is invalid");u+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw TypeError("option path is invalid");u+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw TypeError("option expires is invalid");u+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(u+="; HttpOnly"),o.secure&&(u+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},8577:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{function e(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var i="",o=r+1;o<e.length;){var a=e.charCodeAt(o);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||95===a){i+=e[o++];continue}break}if(!i)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=o;continue}if("("===n){var s=1,u="",o=r+1;if("?"===e[o])throw TypeError('Pattern cannot start with "?" at '+o);for(;o<e.length;){if("\\"===e[o]){u+=e[o++]+e[o++];continue}if(")"===e[o]){if(0==--s){o++;break}}else if("("===e[o]&&(s++,"?"!==e[o+1]))throw TypeError("Capturing groups are not allowed at "+o);u+=e[o++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!u)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:u}),r=o;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,o=void 0===n?"./":n,a="[^"+i(t.delimiter||"/#?")+"]+?",s=[],u=0,c=0,l="",f=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var n=r[c];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},d=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var m=f("CHAR"),h=f("NAME"),g=f("PATTERN");if(h||g){var v=m||"";-1===o.indexOf(v)&&(l+=v,v=""),l&&(s.push(l),l=""),s.push({name:h||u++,prefix:v,suffix:"",pattern:g||a,modifier:f("MODIFIER")||""});continue}var y=m||f("ESCAPED_CHAR");if(y){l+=y;continue}if(l&&(s.push(l),l=""),f("OPEN")){var v=d(),x=f("NAME")||"",b=f("PATTERN")||"",E=d();p("CLOSE"),s.push({name:x||(b?u++:""),pattern:x&&!b?a:b,prefix:v,suffix:E,modifier:f("MODIFIER")||""});continue}p("END")}return s}function r(e,t){void 0===t&&(t={});var r=o(t),n=t.encode,i=void 0===n?function(e){return e}:n,a=t.validate,s=void 0===a||a,u=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var o=e[n];if("string"==typeof o){r+=o;continue}var a=t?t[o.name]:void 0,c="?"===o.modifier||"*"===o.modifier,l="*"===o.modifier||"+"===o.modifier;if(Array.isArray(a)){if(!l)throw TypeError('Expected "'+o.name+'" to not repeat, but got an array');if(0===a.length){if(c)continue;throw TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<a.length;f++){var p=i(a[f],o);if(s&&!u[n].test(p))throw TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but got "'+p+'"');r+=o.prefix+p+o.suffix}continue}if("string"==typeof a||"number"==typeof a){var p=i(String(a),o);if(s&&!u[n].test(p))throw TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+p+'"');r+=o.prefix+p+o.suffix;continue}if(!c){var d=l?"an array":"a string";throw TypeError('Expected "'+o.name+'" to be '+d)}}return r}}function n(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var o=n[0],a=n.index,s=Object.create(null),u=1;u<n.length;u++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return i(e,r)}):s[r.name]=i(n[e],r)}}(u);return{path:o,index:a,params:s}}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function a(e,t,r){void 0===r&&(r={});for(var n=r.strict,a=void 0!==n&&n,s=r.start,u=r.end,c=r.encode,l=void 0===c?function(e){return e}:c,f="["+i(r.endsWith||"")+"]|$",p="["+i(r.delimiter||"/#?")+"]",d=void 0===s||s?"^":"",m=0;m<e.length;m++){var h=e[m];if("string"==typeof h)d+=i(l(h));else{var g=i(l(h.prefix)),v=i(l(h.suffix));if(h.pattern){if(t&&t.push(h),g||v){if("+"===h.modifier||"*"===h.modifier){var y="*"===h.modifier?"?":"";d+="(?:"+g+"((?:"+h.pattern+")(?:"+v+g+"(?:"+h.pattern+"))*)"+v+")"+y}else d+="(?:"+g+"("+h.pattern+")"+v+")"+h.modifier}else d+="("+h.pattern+")"+h.modifier}else d+="(?:"+g+v+")"+h.modifier}}if(void 0===u||u)a||(d+=p+"?"),d+=r.endsWith?"(?="+f+")":"$";else{var x=e[e.length-1],b="string"==typeof x?p.indexOf(x[x.length-1])>-1:void 0===x;a||(d+="(?:"+p+"(?="+f+"))?"),b||(d+="(?="+p+"|"+f+")")}return new RegExp(d,o(r))}function s(t,r,n){return t instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(t,r):Array.isArray(t)?RegExp("(?:"+t.map(function(e){return s(e,r,n).source}).join("|")+")",o(n)):a(e(t,n),r,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=e,t.compile=function(t,n){return r(e(t,n),n)},t.tokensToFunction=r,t.match=function(e,t){var r=[];return n(s(e,r,t),r,t)},t.regexpToFunction=n,t.tokensToRegexp=a,t.pathToRegexp=s})(),e.exports=t})()},8077:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataPageToRoute:function(){return d},normalizeMetadataRoute:function(){return p}});let n=r(9177),i=function(e){return e&&e.__esModule?e:{default:e}}(r(8130)),o=r(8654),a=r(3960),s=r(3171),u=r(2045),c=r(8977);function l(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function f(e,t,r){let n=(0,u.normalizeAppPath)(e),s=(0,a.getNamedRouteRegex)(n,!1),f=(0,o.interpolateDynamicPath)(n,t,s),p=l(e),d=p?`-${p}`:"",{name:m,ext:h}=i.default.parse(r);return(0,c.normalizePathSep)(i.default.join(f,`${m}${d}${h}`))}function p(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":r=l(e.slice(0,-(i.default.basename(e).length+1))),!t.endsWith("/route")){let{dir:e,name:n,ext:o}=i.default.parse(t);t=i.default.posix.join(e,`${n}${r?`-${r}`:""}${o}`,"route")}return t}function d(e,t){let r=e.endsWith("/route"),n=r?e.slice(0,-6):e,i=n.endsWith("/sitemap")?".xml":"";return(t?`${n}/[__metadata_id__]`:`${n}${i}`)+(r?"/route":"")}},9177:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return i},getExtensionRegexString:function(){return a},isMetadataRoute:function(){return l},isMetadataRouteFile:function(){return s},isStaticMetadataRoute:function(){return c},isStaticMetadataRouteFile:function(){return u}});let n=r(8977),i={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},o=["js","jsx","ts","tsx"],a=(e,t)=>t?`(?:\\.(${e.join("|")})|((\\[\\])?\\.(${t.join("|")})))`:`\\.(?:${e.join("|")})`;function s(e,t,r){let o=[RegExp(`^[\\\\/]robots${r?`${a(t.concat("txt"),null)}$`:""}`),RegExp(`^[\\\\/]manifest${r?`${a(t.concat("webmanifest","json"),null)}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`${a(["xml"],t)}$`:""}`),RegExp(`[\\\\/]${i.icon.filename}\\d?${r?`${a(i.icon.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.apple.filename}\\d?${r?`${a(i.apple.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.openGraph.filename}\\d?${r?`${a(i.openGraph.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.twitter.filename}\\d?${r?`${a(i.twitter.extensions,t)}$`:""}`)],s=(0,n.normalizePathSep)(e);return o.some(e=>e.test(s))}function u(e){return s(e,[],!0)}function c(e){return"/robots"===e||"/manifest"===e||u(e)}function l(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,o,!1)}},4713:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(5852);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},2828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},extractInterceptionRouteInformation:function(){return a},isInterceptionRouteAppPath:function(){return o}});let n=r(2045),i=["(..)(..)","(.)","(..)","(...)"];function o(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function a(e){let t,r,o;for(let n of e.split("/"))if(r=i.find(e=>n.startsWith(e))){[t,o]=e.split(r,2);break}if(!t||!r||!o)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":o="/"===t?`/${o}`:t+"/"+o;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);o=t.split("/").slice(0,-1).concat(o).join("/");break;case"(...)":o="/"+o;break;case"(..)(..)":let a=t.split("/");if(a.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);o=a.slice(0,-2).concat(o).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:o}}},8654:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getUtils:function(){return h},interpolateDynamicPath:function(){return d},normalizeDynamicRouteParams:function(){return m},normalizeVercelUrl:function(){return p}});let n=r(9551),i=r(9160),o=r(5296),a=r(3960),s=r(7073),u=r(8469),c=r(5e3),l=r(2045),f=r(2216);function p(e,t,r,i,o){if(i&&t&&o){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query))){let n=e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX),i=e!==f.NEXT_INTERCEPTION_MARKER_PREFIX&&e.startsWith(f.NEXT_INTERCEPTION_MARKER_PREFIX);(n||i||(r||Object.keys(o.groups)).includes(e))&&delete t.query[e]}e.url=(0,n.format)(t)}}function d(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let i;let{optional:o,repeat:a}=r.groups[n],s=`[${a?"...":""}${n}]`;o&&(s=`[${s}]`);let u=t[n];i=Array.isArray(u)?u.map(e=>e&&encodeURIComponent(e)).join("/"):u?encodeURIComponent(u):"",e=e.replaceAll(s,i)}return e}function m(e,t,r,n){let i=!0;return r?{params:e=Object.keys(r.groups).reduce((o,a)=>{let s=e[a];"string"==typeof s&&(s=(0,l.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,l.normalizeRscURL)(e)),e)));let u=n[a],c=r.groups[a].optional;return((Array.isArray(u)?u.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(u))||void 0===s&&!(c&&t))&&(i=!1),c&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${a}]]`))&&(s=void 0,delete e[a]),s&&"string"==typeof s&&r.groups[a].repeat&&(s=s.split("/")),s&&(o[a]=s),o},{}),hasValidParams:i}:{params:e,hasValidParams:!1}}function h({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:l,trailingSlash:h,caseSensitive:g}){let v,y,x;return l&&(v=(0,a.getNamedRouteRegex)(e,!1),x=(y=(0,s.getRouteMatcher)(v))(e)),{handleRewrites:function(a,s){let f={},p=s.pathname,d=n=>{let c=(0,o.getPathMatch)(n.source+(h?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!g})(s.pathname);if((n.has||n.missing)&&c){let e=(0,u.matchHas)(a,s.query,n.has,n.missing);e?Object.assign(c,e):c=!1}if(c){let{parsedDestination:o,destQuery:a}=(0,u.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:c,query:s.query});if(o.protocol)return!0;if(Object.assign(f,a,c),Object.assign(s.query,o.query),delete o.query,Object.assign(s,o),p=s.pathname,r&&(p=p.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,i.normalizeLocalePath)(p,t.locales);p=e.pathname,s.query.nextInternalLocale=e.detectedLocale||c.nextInternalLocale}if(p===e)return!0;if(l&&y){let e=y(p);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])d(e);if(p!==e){let t=!1;for(let e of n.afterFiles||[])if(t=d(e))break;if(!t&&!(()=>{let t=(0,c.removeTrailingSlash)(p||"");return t===(0,c.removeTrailingSlash)(e)||(null==y?void 0:y(t))})()){for(let e of n.fallback||[])if(t=d(e))break}}return f},defaultRouteRegex:v,dynamicRouteMatcher:y,defaultRouteMatches:x,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:i}=v;return{re:{exec:o=>{let a=Object.fromEntries(new URLSearchParams(o)),s=t&&n&&a["1"]===n;for(let e of Object.keys(a)){let t=a[e];e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)&&(a[e.substring(f.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete a[e])}let u=Object.keys(i||{}),c=e=>{if(t){let i=Array.isArray(e),o=i?e[0]:e;if("string"==typeof o&&t.locales.some(e=>e.toLowerCase()===o.toLowerCase()&&(n=e,r.locale=n,!0)))return i&&e.splice(0,1),!i||0===e.length}return!1};return u.every(e=>a[e])?u.reduce((t,r)=>{let n=null==i?void 0:i[r];return n&&!c(a[r])&&(t[e[n].pos]=a[r]),t},{}):Object.keys(a).reduce((e,t)=>{if(!c(a[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:a[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>m(e,t,v,x),normalizeVercelUrl:(e,t,r)=>p(e,t,r,l,v),interpolateDynamicPath:(e,t)=>d(e,t,v)}}},620:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},3171:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&0xffffffff;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},164:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},8977:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},2045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return o},normalizeRscURL:function(){return a}});let n=r(164),i=r(8758);function o(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function a(e){return e.replace(/\.rsc($|\?)/,"$1")}},1089:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return i}}),r(1706);let n=r(6678);function i(e,t,r){void 0===r&&(r=!0);let i=new URL("http://n"),o=t?new URL(t,i):e.startsWith(".")?new URL("http://n"):i,{pathname:a,searchParams:s,search:u,hash:c,href:l,origin:f}=new URL(e,o);if(f!==i.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:a,query:r?(0,n.searchParamsToUrlQuery)(s):void 0,search:u,hash:c,href:l.slice(f.length)}}},7600:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return o}});let n=r(6678),i=r(1089);function o(e){if(e.startsWith("/"))return(0,i.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},5296:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return i}});let n=r(8577);function i(e,t){let r=[],i=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),o=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(i.source),i.flags):i,r);return(e,n)=>{if("string"!=typeof e)return!1;let i=o(e);if(!i)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete i.params[e.name];return{...n,...i.params}}}},8469:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{compileNonPath:function(){return f},matchHas:function(){return l},prepareDestination:function(){return p}});let n=r(8577),i=r(620),o=r(7600),a=r(2828),s=r(484),u=r(4713);function c(e){return e.replace(/__ESC_COLON_/gi,":")}function l(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let i={},o=r=>{let n;let o=r.key;switch(r.type){case"header":o=o.toLowerCase(),n=e.headers[o];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,u.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[o];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return i[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(o)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{i[e]=t.groups[e]}):"host"===r.type&&t[0]&&(i.host=t[0])),!0}return!1};return!!r.every(e=>o(e))&&!n.some(e=>o(e))&&i}function f(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function p(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let u=e.destination;for(let t of Object.keys({...e.params,...r}))u=t?u.replace(RegExp(":"+(0,i.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t):u;let l=(0,o.parseUrl)(u),p=l.query,d=c(""+l.pathname+(l.hash||"")),m=c(l.hostname||""),h=[],g=[];(0,n.pathToRegexp)(d,h),(0,n.pathToRegexp)(m,g);let v=[];h.forEach(e=>v.push(e.name)),g.forEach(e=>v.push(e.name));let y=(0,n.compile)(d,{validate:!1}),x=(0,n.compile)(m,{validate:!1});for(let[t,r]of Object.entries(p))Array.isArray(r)?p[t]=r.map(t=>f(c(t),e.params)):"string"==typeof r&&(p[t]=f(c(r),e.params));let b=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!b.some(e=>v.includes(e)))for(let t of b)t in p||(p[t]=e.params[t]);if((0,a.isInterceptionRouteAppPath)(d))for(let t of d.split("/")){let r=a.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){"(..)(..)"===r?(e.params["0"]="(..)",e.params["1"]="(..)"):e.params["0"]=r;break}}try{let[r,n]=(t=y(e.params)).split("#",2);l.hostname=x(e.params),l.pathname=r,l.hash=(n?"#":"")+(n||""),delete l.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return l.query={...r,...l.query},{newUrl:t,destQuery:p,parsedDestination:l}}},6678:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return o},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i}})},7073:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(1706);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let o=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>o(e)):t.repeat?[o(n)]:o(n))}),a}}},3960:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return h},getNamedRouteRegex:function(){return m},getRouteRegex:function(){return f},parseParameter:function(){return u}});let n=r(2216),i=r(2828),o=r(620),a=r(5e3),s=/\[((?:\[.*\])|.+)\]/;function u(e){let t=e.match(s);return t?c(t[1]):c(e)}function c(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(e=>{let t=i.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(s);if(t&&a){let{key:e,optional:i,repeat:s}=c(a[1]);return r[e]={pos:n++,repeat:s,optional:i},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:i}=c(a[1]);return r[e]={pos:n++,repeat:t,optional:i},t?i?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function f(e){let{parameterizedRoute:t,groups:r}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function p(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:i,keyPrefix:a}=e,{key:s,optional:u,repeat:l}=c(n),f=s.replace(/\W/g,"");a&&(f=""+a+f);let p=!1;(0===f.length||f.length>30)&&(p=!0),isNaN(parseInt(f.slice(0,1)))||(p=!0),p&&(f=r()),a?i[f]=""+a+s:i[f]=s;let d=t?(0,o.escapeStringRegexp)(t):"";return l?u?"(?:/"+d+"(?<"+f+">.+?))?":"/"+d+"(?<"+f+">.+?)":"/"+d+"(?<"+f+">[^/]+?)"}function d(e,t){let r;let s=(0,a.removeTrailingSlash)(e).slice(1).split("/"),u=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),c={};return{namedParameterizedRoute:s.map(e=>{let r=i.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&a){let[r]=e.split(a[0]);return p({getSafeRouteKey:u,interceptionMarker:r,segment:a[1],routeKeys:c,keyPrefix:t?n.NEXT_INTERCEPTION_MARKER_PREFIX:void 0})}return a?p({getSafeRouteKey:u,segment:a[1],routeKeys:c,keyPrefix:t?n.NEXT_QUERY_PARAM_PREFIX:void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:c}}function m(e,t){let r=d(e,t);return{...f(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function h(e,t){let{parameterizedRoute:r}=l(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=d(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},1706:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return v},NormalizeError:function(){return h},PageNotFoundError:function(){return g},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return s},isAbsoluteUrl:function(){return o},isResSent:function(){return c},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return l},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>i.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function l(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class v extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>i});var n=r(2740);r(1135);let i={title:"Create Next App",description:"Generated by create next app"};function o({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{children:e})})}},3605:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var n=r(2740),i=r(6301),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(o),s=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,i;n=t,i=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return t=>i.createElement(p,u({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>i.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function p(e){var t=t=>{var r,{attr:n,size:o,title:a}=e,c=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,s),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),e.children)};return void 0!==a?i.createElement(a.Consumer,null,e=>t(e)):t(o)}function d(e){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function m(e){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 64H257.6L76.5 251.6c-8 8-12.3 18.5-12.5 29-.3 11.3 3.9 22.6 12.5 31.2l123.7 123.6c8 8 20.8 12.5 28.8 12.5s22.8-3.9 31.4-12.5L448 256V96l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z"},child:[]}]})(e)}function h(e){return f({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M17 21h-10c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zm-10-16c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h10c.551 0 1-.449 1-1v-12c0-.551-.449-1-1-1h-10zM16 11h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 8h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 14h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 17h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"},child:[]}]}]})(e)}let g=({children:e})=>(0,n.jsx)("div",{className:"bg-white py-[1.5vw] px-[3vw] min-h-screen lg:w-[50%] mx-auto",children:e}),v=()=>(0,n.jsxs)(g,{children:[(0,n.jsxs)("section",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{className:"size-[40px] flex cursor-pointer hover:bg-[#ffbb8a] items-center hover:text-white transition-all duration-[300ms] text-[#f69424] justify-center rounded-[50%] bg-[#fdf1e8]",children:(0,n.jsx)(d,{})}),(0,n.jsx)("h2",{className:"font-semibold",children:"تفاصيل الدفع"}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("section",{className:"rounded-[12px] border border-[#f7f7f7] py-[20px] mt-[20px] px-[15PX] shadow-[#eee] shadow-2xl",children:[(0,n.jsx)("h4",{children:"LOGO"}),(0,n.jsxs)("div",{className:"flex items-center font-semibold mt-[15px]  gap-2",children:[(0,n.jsx)("span",{className:"size-[30px] text-[20px] flex items-center justify-center bg-[#eee] rounded-[8px]",children:(0,n.jsx)(m,{})}),(0,n.jsx)("h4",{className:"text-[14px]",children:"مبلغ الفاتورة: 5 KWD"})]}),(0,n.jsxs)("div",{className:"flex items-center font-semibold mt-[15px]  gap-2",children:[(0,n.jsx)("span",{className:"size-[30px] text-[20px] flex items-center justify-center bg-[#eee] rounded-[8px]",children:(0,n.jsx)(h,{})}),(0,n.jsx)("h4",{className:"text-[14px]",children:"نوع الفاتوره: (عربون تثبيت) (PREPAY INVOCE)"})]})]}),(0,n.jsx)("h4",{className:"font-semibold mt-[25px]",children:"اختر طريقه الدفع الي تناسبك"}),(0,n.jsxs)("div",{className:"flex mt-[15px] items-center gap-2",children:[(0,n.jsx)("div",{className:"min-h-[100px] flex-1 bg-[#eee] rounded-[8px]"}),(0,n.jsx)("div",{className:"min-h-[100px] flex-1 bg-[#eee] rounded-[8px]"})]})]}),y=()=>(0,n.jsx)("div",{children:(0,n.jsx)(v,{})})},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(8077);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[989,112],()=>r(9390));module.exports=n})();