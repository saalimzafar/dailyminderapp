if(!self.define){let i,e={};const a=(a,s)=>(a=new URL(a+".js",s).href,e[a]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=a,i.onload=e,document.head.appendChild(i)}else i=a,importScripts(a),e()})).then((()=>{let i=e[a];if(!i)throw new Error(`Module ${a} didn’t register its module`);return i})));self.define=(s,n)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let d={};const t=i=>a(i,r),c={module:{uri:r},exports:d,require:t};e[r]=Promise.all(s.map((i=>c[i]||t(i)))).then((i=>(n(...i),d)))}}define(["./workbox-42ce28c6"],(function(i){"use strict";importScripts(),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/dailyminderapp/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/dailyminderapp/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/dailyminderapp/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/dailyminderapp/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/dailyminderapp/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/dailyminderapp/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/dailyminderapp/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/dailyminderapp/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/dailyminderapp/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/dailyminderapp/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/dailyminderapp/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/dailyminderapp/manifest.json",revision:"7d670e96bdbb84fda438bd484bfea54e"},{url:"/dailyminderapp/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/-CgFnbgsPy_rYIFy_zOwB/_buildManifest.js",revision:"69fb24bd020f9424cc5736b384cd8f74"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/-CgFnbgsPy_rYIFy_zOwB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/777-cc7d00eae690f3ea.js",revision:"cc7d00eae690f3ea"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/framework-e3af5937d4bc683b.js",revision:"e3af5937d4bc683b"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/main-d96728c06cd133b8.js",revision:"d96728c06cd133b8"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/pages/_app-b0519fa777cdde20.js",revision:"b0519fa777cdde20"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/pages/_error-dffd65023f03470c.js",revision:"dffd65023f03470c"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/pages/index-9695977070cda81b.js",revision:"9695977070cda81b"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/pages/test-c3dce7045a7809f4.js",revision:"c3dce7045a7809f4"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/chunks/webpack-57271120bdd3d501.js",revision:"57271120bdd3d501"},{url:"https://saalimzafar.github.io/dailyminderapp/_next/static/css/f0d6858f7fb5253b.css",revision:"f0d6858f7fb5253b"}],{ignoreURLParametersMatching:[]}),i.cleanupOutdatedCaches(),i.registerRoute("/dailyminderapp",new i.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:i,response:e,event:a,state:s})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),i.registerRoute(/^https?.*/,new i.NetworkFirst({cacheName:"offlineCache",plugins:[new i.ExpirationPlugin({maxEntries:200})]}),"GET")}));
