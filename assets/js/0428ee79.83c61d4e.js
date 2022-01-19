"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[732],{5318:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return s}});var a=r(7378);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),c=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(r),s=t,f=p["".concat(i,".").concat(s)]||p[s]||m[s]||o;return r?a.createElement(f,l(l({ref:n},u),{},{components:r})):a.createElement(f,l({ref:n},u))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=p;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:t,l[1]=d;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3561:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=r(5773),t=r(808),o=(r(7378),r(5318)),l=["components"],d={},i="General",c={unversionedId:"general",id:"general",title:"General",description:"`randBoolean`",source:"@site/docs/general.md",sourceDirName:".",slug:"/general",permalink:"/falso/docs/general",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/general.md",tags:[],version:"current",frontMatter:{},sidebar:"foo",previous:{title:"Food",permalink:"/falso/docs/food"},next:{title:"Git",permalink:"/falso/docs/git"}},u=[{value:"<code>randBoolean</code>",id:"randboolean",children:[],level:3},{value:"<code>randImg</code>",id:"randimg",children:[],level:3},{value:"<code>randFloat</code>",id:"randfloat",children:[],level:3},{value:"<code>randNumber</code>",id:"randnumber",children:[],level:3},{value:"<code>rand</code>",id:"rand",children:[],level:3},{value:"<code>random</code>",id:"random",children:[],level:3},{value:"<code>seed</code>",id:"seed",children:[],level:3},{value:"<code>randSequence</code>",id:"randsequence",children:[],level:3},{value:"<code>randUuid</code>",id:"randuuid",children:[],level:3}],m={toc:u};function p(e){var n=e.components,r=(0,t.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general"},"General"),(0,o.kt)("h3",{id:"randboolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"randBoolean")),(0,o.kt)("p",null,"Generate a random boolean."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBoolean } from '@ngneat/falso';\n\nrandBoolean()\nrandBoolean({ length: 10 })\n")),(0,o.kt)("h3",{id:"randimg"},(0,o.kt)("inlineCode",{parentName:"h3"},"randImg")),(0,o.kt)("p",null,"Generate a random img."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randImg } from '@ngneat/falso';\n\nrandImg()\nrandImg({ length: 10 })\n")),(0,o.kt)("h3",{id:"randfloat"},(0,o.kt)("inlineCode",{parentName:"h3"},"randFloat")),(0,o.kt)("p",null,"Generate a random random float."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFloat } from '@ngneat/falso';\n\nrandFloat()\nrandFloat({ length: 10 })\n")),(0,o.kt)("h3",{id:"randnumber"},(0,o.kt)("inlineCode",{parentName:"h3"},"randNumber")),(0,o.kt)("p",null,"Generate a random random number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randNumber } from '@ngneat/falso';\n\nrandNumber()\nrandNumber({ length: 10 })\nrandNumber({ min: 10, max: 1000 })\n")),(0,o.kt)("h3",{id:"rand"},(0,o.kt)("inlineCode",{parentName:"h3"},"rand")),(0,o.kt)("p",null,"Get a random item from array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { rand } from '@ngneat/falso';\n\nrand([1, 2, 3])\n")),(0,o.kt)("h3",{id:"random"},(0,o.kt)("inlineCode",{parentName:"h3"},"random")),(0,o.kt)("p",null,"Create a seed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { random } from '@ngneat/falso';\n\nrandom()\n")),(0,o.kt)("h3",{id:"seed"},(0,o.kt)("inlineCode",{parentName:"h3"},"seed")),(0,o.kt)("p",null,"Sets and Resets random seed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { seed } from '@ngneat/falso';\n\nseed()\nseed('some-constant-seed')\n")),(0,o.kt)("h3",{id:"randsequence"},(0,o.kt)("inlineCode",{parentName:"h3"},"randSequence")),(0,o.kt)("p",null,"Generate a random random sequence."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSequence } from '@ngneat/falso';\n\nrandSequence()\nrandSequence({ size: 10 })\nrandSequence({ chars: 'aAbBcC@#' })\nrandSequence({ length: 10 })\n")),(0,o.kt)("h3",{id:"randuuid"},(0,o.kt)("inlineCode",{parentName:"h3"},"randUuid")),(0,o.kt)("p",null,"Generate a random random uuid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUuid } from '@ngneat/falso';\n\nrandUuid()\nrandUuid({ length: 10 })\n")))}p.isMDXComponent=!0}}]);