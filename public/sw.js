if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-build-manifest.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/server/middleware-react-loadable-manifest.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/171-bfb7b46ea6c1492d.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/fb7d5399-ab243316717ca7b2.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/framework-c2ad7fab13964d57.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/main-ee0a9a876bc6079c.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/pages/_app-b6a6a08f89e90260.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/pages/_error-815e492bede44f3e.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/pages/index-bf64ca773de354f5.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/chunks/webpack-03431657237e1529.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/lv_yiaNMgY-kVeXqneabA/_buildManifest.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/lv_yiaNMgY-kVeXqneabA/_middlewareManifest.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/_next/static/lv_yiaNMgY-kVeXqneabA/_ssgManifest.js",revision:"lv_yiaNMgY-kVeXqneabA"},{url:"/img/_SMD3464.jpg",revision:"32aa39858961c56561ac490729f77a8f"},{url:"/img/_SMD3569.jpg",revision:"5e342dfe166460454e2b42e68492abca"},{url:"/img/_SMD3657.jpg",revision:"47f904d2220b1d585e87cbd3b2530321"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/manifest.json",revision:"e74d8ed58ceeaecfd5366a1b2b083c54"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));