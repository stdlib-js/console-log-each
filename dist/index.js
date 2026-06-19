"use strict";var d=function(t,s){return function(){try{return s||t((s={exports:{}}).exports,s),s.exports}catch(i){throw s=0,i}}};var c=d(function(y,m){"use strict";var q=require("@stdlib/assert-is-string").isPrimitive,p=require("@stdlib/assert-is-collection"),g=require("@stdlib/array-base-resolve-getter"),f=require("@stdlib/string-format"),w=require("@stdlib/console-log");function E(t){var s,i,u,o,n,v,l,r,h,e,a;if(!q(t))throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=arguments.length,u=[],s=[],v=[],e=1;e<n;e++)if(r=arguments[e],p(r)){u.push(g(r)),v.push(r),s.push(1),l=r.length,e+=1;break}else r=[r],u.push(g(r)),v.push(r),s.push(0);for(l===void 0&&(l=1);e<n;e++){if(r=arguments[e],p(r)){if(r.length!==l)throw new RangeError("invalid argument. Provided collections must have the same length.");h=1}else r=[r],h=0;u.push(g(r)),v.push(r),s.push(h)}for(o=[t],i=[],e=1;e<n;e++)o.push(null),i.push(0);for(e=0;e<l;e++){for(a=0;a<n-1;a++)o[a+1]=u[a](v[a],i[a]),i[a]+=s[a];w(f.apply(null,o))}}m.exports=E});var b=c();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
