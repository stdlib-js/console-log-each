"use strict";var q=function(u,s){return function(){return s||u((s={exports:{}}).exports,s),s.exports}};var d=q(function(P,m){
var w=require('@stdlib/assert-is-string/dist').isPrimitive,c=require('@stdlib/assert-is-collection/dist'),p=require('@stdlib/array-base-accessors/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),E=require('@stdlib/console-log/dist');function b(u){var s,l,t,h,o,n,v,r,g,i,e,a;if(!w(u))throw new TypeError(f('1aZ3F',u));for(o=arguments.length,t=[],s=[],n=[],e=1;e<o;e++)if(r=arguments[e],c(r)){i=p(r),t.push(i.accessors[0]),n.push(r),s.push(1),v=r.length,e+=1;break}else r=[r],i=p(r),t.push(i.accessors[0]),n.push(r),s.push(0);for(v===void 0&&(v=1);e<o;e++){if(r=arguments[e],c(r)){if(r.length!==v)throw new RangeError(format('1aZD1'));g=1}else r=[r],g=0;i=p(r),t.push(i.accessors[0]),n.push(r),s.push(g)}for(h=[u],l=[],e=1;e<o;e++)h.push(null),l.push(0);for(e=0;e<v;e++){for(a=0;a<o-1;a++)h[a+1]=t[a](n[a],l[a]),l[a]+=s[a];E(f.apply(null,h))}}m.exports=b
});var x=d();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
