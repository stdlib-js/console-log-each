// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/console-log@v0.2.1-esm/index.mjs";function i(i){var n,h,l,p,d,m,f,j,u,a,g;if(!s(i))throw new TypeError(t("1aZ3F",i));for(d=arguments.length,l=[],n=[],m=[],a=1;a<d;a++){if(e(j=arguments[a])){l.push(r(j)),m.push(j),n.push(1),f=j.length,a+=1;break}j=[j],l.push(r(j)),m.push(j),n.push(0)}for(void 0===f&&(f=1);a<d;a++){if(e(j=arguments[a])){if(j.length!==f)throw new RangeError(t("1aZD1"));u=1}else j=[j],u=0;l.push(r(j)),m.push(j),n.push(u)}for(p=[i],h=[],a=1;a<d;a++)p.push(null),h.push(0);for(a=0;a<f;a++){for(g=0;g<d-1;g++)p[g+1]=l[g](m[g],h[g]),h[g]+=n[g];o(t.apply(null,p))}}export{i as default};
//# sourceMappingURL=index.mjs.map
