!function(){new function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.offset,e=void 0===n?0:n,o=t.duration,r=void 0===o?800:o,u=this;this.offset=e,this.duration=r;var i={inOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},inOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},inOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},inOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},a=function(){return Array.prototype.slice.call(document.getElementsByTagName("a"))},c=function(t){return-1!=(t.href&&t.href.indexOf("#"))},f=a().filter((function(t){return c(t)})),l=function(t){return t.pathname==window.location.pathname||"/"+t.pathname==window.location.pathname&&t.search==location.search},d=f.filter((function(t){return l(t)})),s=function(t){var n=t.getAttribute("href"),o=document.querySelector(n),a=o.getAttribute("data-anchor-offset");e=a||u.offset;var c,f=(c=o,Math.floor(c.getBoundingClientRect().top)),l=window.pageYOffset||document.documentElement.scrollTop,d=l,s=l+f-e,m=!1,h=null,p=function(t){if(m)return document.documentElement.scrollTop=s,o.focus(),void window.history.pushState("","",n);(d==s||t-h>=r)&&(m=!0);var e=(t-h)/r,u=i.inOutQuart(e),a=d+(s-d)*u;document.documentElement.scrollTop=a,requestAnimationFrame(p)};requestAnimationFrame((function(t){(h=t)+r,p(t)}))};document.addEventListener("click",(function(t){var n=d.filter((function(n){return t.target===n}))[0];n&&(t.preventDefault(),s(n))}))}({offset:70,duration:1e3});console.log("Index.js file 😎")}();
//# sourceMappingURL=index.a74208f9.js.map
