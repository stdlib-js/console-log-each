"use strict";var d=function(i,s){return function(){return s||i((s={exports:{}}).exports,s),s.exports}};var c=d(function(y,m){"use strict";var q=require("@stdlib/assert-is-string").isPrimitive,p=require("@stdlib/assert-is-collection"),g=require("@stdlib/array-base-resolve-getter"),f=require("@stdlib/string-format"),w=require("@stdlib/console-log");function E(i){var s,l,t,o,u,n,v,r,h,e,a;if(!q(i))throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",i));for(u=arguments.length,t=[],s=[],n=[],e=1;e<u;e++)if(r=arguments[e],p(r)){t.push(g(r)),n.push(r),s.push(1),v=r.length,e+=1;break}else r=[r],t.push(g(r)),n.push(r),s.push(0);for(v===void 0&&(v=1);e<u;e++){if(r=arguments[e],p(r)){if(r.length!==v)throw new RangeError("invalid argument. Provided collections must have the same length.");h=1}else r=[r],h=0;t.push(g(r)),n.push(r),s.push(h)}for(o=[i],l=[],e=1;e<u;e++)o.push(null),l.push(0);for(e=0;e<v;e++){for(a=0;a<u-1;a++)o[a+1]=t[a](n[a],l[a]),l[a]+=s[a];w(f.apply(null,o))}}m.exports=E});var b=c();module.exports=b;
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
