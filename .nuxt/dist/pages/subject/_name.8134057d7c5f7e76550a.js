webpackJsonp([2],{"+olZ":function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",["default"===t.pkey?r("div",{staticClass:"ad-box"},[r("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-format":"fluid","data-ad-layout":"image-side","data-ad-layout-key":"-fd+6a+11-fw+q1","data-ad-client":"ca-pub-9906622596531689","data-ad-slot":"1784178322"}})]):t._e(),"alone"===t.pkey?r("div",{staticClass:"ad-box"},[r("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-format":"auto","data-ad-client":"ca-pub-9906622596531689","data-ad-slot":"8838418057"}})]):t._e()])},a=[],o={render:e,staticRenderFns:a};n.a=o},"3Tzb":function(t,n,r){"use strict";function e(t){r("9teK")}Object.defineProperty(n,"__esModule",{value:!0});var a=r("662v"),o=r("u8/Q"),i=r("J0+h"),s=e,c=i(a.a,o.a,s,null,null);n.default=c.exports},"5OAM":function(t,n,r){n=t.exports=r("BkJT")(!1),n.push([t.i,".page-subject-name{background-color:#f7f8fa}.page-subject-name .list-body{max-width:800px}.page-subject-name .split{height:70px}.page-subject-name header{-webkit-box-shadow:none!important;box-shadow:none!important}.page-subject-name .nav-banner{background-color:#fff;margin-top:30px;font-size:17.6px;font-size:1.1rem}.page-subject-name .nav-banner .sub-info{background-color:#437c85;color:#fff;padding:20px}.page-subject-name .nav-banner .sub-info article{color:#d3e3e6;margin-top:10px}.page-subject-name .nav-banner .nav-box{padding:20px}.page-subject-name .nav-banner .nav-level{margin-top:15px}.page-subject-name .nav-banner .nav-level>a{display:inline-block;margin-right:15px}.page-subject-name .nav-banner .nav-level .root{font-size:19.2px;font-size:1.2rem;font-weight:700}.page-subject-name .nav-banner .nav-level .num{color:#99a7b4}.page-subject-name .sub-banner{min-height:300px;padding:50px 1%;position:relative;color:#fff;overflow:hidden}.page-subject-name .sub-banner .bglayer{background-repeat:no-repeat;background-size:cover;background-attachment:fixed;z-index:1;overflow:hidden;background-position:50%;position:absolute;top:0;bottom:0;left:0;right:0}.page-subject-name .sub-banner .bgcover{z-index:2;background-color:#000;opacity:.6;position:absolute;top:0;bottom:0;left:0;right:0}.page-subject-name .sub-banner article{line-height:35px}.page-subject-name .sub-banner .container{z-index:10}@media (max-width:576px){.page-subject-name .list-body{display:block!important}.page-subject-name .list-typs,.page-subject-name .placeholder{display:none!important}.page-subject-name .middle{white-space:nowrap!important}}.page-subject-name .sub-repos{margin-bottom:50px}.page-subject-name .sub-repos h3{border-left:0;border-right:0;padding:30px 0;padding-top:0;padding-bottom:20px;color:#8b8b8b;font-size:20px;text-align:center}.page-subject-name .sub-repos h3 span:first-child{color:#ccc}.page-subject-name .sub-repos h3 span:nth-child(2){color:#cacaca}.page-subject-name .repo-card{margin:0 10px;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;padding:20px;border-radius:2px;margin-bottom:10px;border:1px solid #fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.page-subject-name .repo-card .cover{height:60px;border-radius:4px;margin:0 10px}.page-subject-name .repo-card h4{font-size:20px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.page-subject-name .repo-card .sdesc{padding:10px 0}.page-subject-name .repo-card .middle{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;word-break:keep-all;overflow:hidden;text-overflow:ellipsis}.page-subject-name .repo-card .stars{width:140px;text-align:right;color:#9da09e}.page-subject-name .sub-link{font-size:14px;padding:10px 20px;margin-right:20px;margin-top:40px;display:inline-block;background-color:#da552f;color:#fff;border:1px solid #fafafa}.page-subject-name .sub-link.github{background-color:#0275d8}.page-subject-name .amount{margin-left:3px;font-size:13px}.page-subject-name .ad-wraper{display:-webkit-box;display:-ms-flexbox;display:flex}.page-subject-name .ad-wraper .repo-card{width:50%}",""])},"662v":function(t,n,r){"use strict";var e=r("lC5x"),a=r.n(e),o=r("rVsN"),i=r.n(o),s=r("KH7x"),c=r.n(s),u=r("J0Oq"),l=r.n(u),p=r("YFWx"),f=r("g2WY"),d=r("u47Y"),h=r.n(d),b=r("tra3"),v=r.n(b),g=r("g05U");r("lLci");var y=void 0;n.a={asyncData:function(){function t(t){return n.apply(this,arguments)}var n=l()(a.a.mark(function t(n){var r,e,o,s,u,l,f=(n.req,n.params);n.query;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.all([Object(p.a)().get("subject/"+f.name),Object(p.a)().get("category/all")]);case 2:return r=t.sent,e=c()(r,2),o=e[0],s=e[1],u=0,l=h.a.sortBy(s.data,function(t){return"A"===t.typcd?t.key:t.parent}).map(function(t){return"B"===t.typcd&&(t.repos=o.data.repos.filter(function(n){return n.rootyp===t.parent&&n.typcd===t.key&&(u++,n.hasad=!1,10===u&&(n.hasad=!0),!0)}),t.repo=t.repos[0]),"A"===t.typcd&&(t.amount=o.data.repos.filter(function(n){return n.rootyp===t.key}).length),t}),t.abrupt("return",{sub:o.data,cates:l});case 9:case"end":return t.stop()}},t,this)}));return t}(),head:function(){return{title:this.sub.title+"专题",meta:[{hid:"description",name:"description",content:this.sub.sdesc},{hid:"keywords",name:"keywords",content:this.sub.title+","+this.sub.title+"专题,"+this.sub.title+"资源,"+this.sub.title+"组件,"+this.sub.title+"插件"}]}},data:function(){return{fixcate:!1,checkedTyp:""}},components:{Fresh:f.a,Adsense:g.a},computed:{rootyps:function(){return this.cates.filter(function(t){return"A"===t.typcd})}},methods:{uperCaseTitle:function(t){return t[0].toUpperCase()+t.slice(1)},switchTyp:function(t){this.checkedTyp=t,v()("html,body").animate({scrollTop:v()("#"+t).offset().top})},typcds:function(t){return this.cates.filter(function(n){return"B"===n.typcd&&n.parent===t.key})}},watch:{checkedTyp:function(t){window.location.href="#"+t}},mounted:function(){var t=v()(".split").map(function(){return{first:v()(this).attr("data-first"),second:v()(this).attr("id"),top:v()(this).offset().top}}),n=this;v()(document).scroll(function(){var r=v()(document).scrollTop();n.fixcate=r>=v()(".list-body").offset().top-50,clearTimeout(y),y=setTimeout(function(){var e=h.a.filter(t,function(t){return r>=t.top-170}).pop()||t[0];n.checkedTyp=e.second},300)}).scroll()}}},"9Q96":function(t,n,r){var e=r("WK9L"),a=r("IFGh")("iterator"),o=r("Ytca");t.exports=r("0nnt").isIterable=function(t){var n=Object(t);return void 0!==n[a]||"@@iterator"in n||o.hasOwnProperty(e(n))}},"9teK":function(t,n,r){var e=r("5OAM");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("XkoO")("7c2243f7",e,!0)},IHz1:function(t,n,r){n=t.exports=r("BkJT")(!1),n.push([t.i,".ad-box[data-v-7e17c5a6]{width:100%}",""])},KH7x:function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var a=r("MGgt"),o=e(a),i=r("HzJ8"),s=e(i);n.default=function(){function t(t,n){var r=[],e=!0,a=!1,o=void 0;try{for(var i,c=(0,s.default)(t);!(e=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(t){a=!0,o=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw o}}return r}return function(n,r){if(Array.isArray(n))return n;if((0,o.default)(Object(n)))return t(n,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},MGgt:function(t,n,r){t.exports={default:r("ij3L"),__esModule:!0}},Peu7:function(t,n,r){"use strict";var e=r("lC5x"),a=r.n(e),o=r("J0Oq"),i=r.n(o),s=r("rVsN"),c=r.n(s),u=this,l=function(t){var n=window.document.createElement("script");n.src=t;var r=window.document.getElementsByTagName("script")[0];return r.parentNode.insertBefore(n,r),new c.a(function(t){n.onload=n.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||t()}})},p=function(){var t=i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout(i()(a.a.mark(function t(){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.next=3,l(n);case 3:console.log("adsense loaded"),r=window.adsbygoogle||[],r.push({});case 6:case"end":return t.stop()}},t,this)})),500);case 1:case"end":return t.stop()}},t,u)}));return function(){return t.apply(this,arguments)}}();n.a={props:["ikey"],data:function(){return{pkey:this.ikey||"default"}},created:function(){p()}}},UYQP:function(t,n,r){n=t.exports=r("BkJT")(!1),n.push([t.i,".fresh[data-v-30e59c66]{display:inline-block;border-radius:100%;width:15px;height:15px;background-color:#eee;-ms-flex-negative:0;flex-shrink:0}.fresh.often[data-v-30e59c66]{background-color:#a4eda4}.fresh.outdated[data-v-30e59c66]{background-color:#ffbcbc}",""])},VB2n:function(t,n,r){"use strict";n.a={props:["time"],methods:{format:function(t){var n=(Date.parse(new Date)-Date.parse(new Date(t)))/1e3/60/60/24;return n<=20?"often":n<=210?"":"outdated"}}}},Yt1r:function(t,n,r){var e=r("IHz1");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("XkoO")("36f8d6fe",e,!0)},g05U:function(t,n,r){"use strict";function e(t){r("Yt1r")}var a=r("Peu7"),o=r("+olZ"),i=r("J0+h"),s=e,c=i(a.a,o.a,s,"data-v-7e17c5a6",null);n.a=c.exports},g2WY:function(t,n,r){"use strict";function e(t){r("goXt")}var a=r("VB2n"),o=r("zHzG"),i=r("J0+h"),s=e,c=i(a.a,o.a,s,"data-v-30e59c66",null);n.a=c.exports},goXt:function(t,n,r){var e=r("UYQP");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("XkoO")("3fa010f2",e,!0)},ij3L:function(t,n,r){r("yp0o"),r("LniK"),t.exports=r("9Q96")},lLci:function(t,n,r){var e=r("xtPh");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("XkoO")("83cce1b0",e,!0)},u47Y:function(t,n,r){var e,a;(function(){function r(t){function n(n,r,e,a,o,i){for(;o>=0&&o<i;o+=t){var s=a?a[o]:o;e=r(e,n[s],s,n)}return e}return function(r,e,a,o){e=w(e,o,4);var i=!F(r)&&k.keys(r),s=(i||r).length,c=t>0?0:s-1;return arguments.length<3&&(a=r[i?i[c]:c],c+=t),n(r,e,a,i,c,s)}}function o(t){return function(n,r,e){r=j(r,e);for(var a=T(n),o=t>0?0:a-1;o>=0&&o<a;o+=t)if(r(n[o],o,n))return o;return-1}}function i(t,n,r){return function(e,a,o){var i=0,s=T(e);if("number"==typeof o)t>0?i=o>=0?o:Math.max(o+s,i):s=o>=0?Math.min(o+1,s):o+s+1;else if(r&&o&&s)return o=r(e,a),e[o]===a?o:-1;if(a!==a)return o=n(h.call(e,i,s),k.isNaN),o>=0?o+i:-1;for(o=t>0?i:s-1;o>=0&&o<s;o+=t)if(e[o]===a)return o;return-1}}function s(t,n){var r=I.length,e=t.constructor,a=k.isFunction(e)&&e.prototype||p,o="constructor";for(k.has(t,o)&&!k.contains(n,o)&&n.push(o);r--;)(o=I[r])in t&&t[o]!==a[o]&&!k.contains(n,o)&&n.push(o)}var c=this,u=c._,l=Array.prototype,p=Object.prototype,f=Function.prototype,d=l.push,h=l.slice,b=p.toString,v=p.hasOwnProperty,g=Array.isArray,y=Object.keys,m=f.bind,x=Object.create,_=function(){},k=function(t){return t instanceof k?t:this instanceof k?void(this._wrapped=t):new k(t)};void 0!==t&&t.exports&&(n=t.exports=k),n._=k,k.VERSION="1.8.3";var w=function(t,n,r){if(void 0===n)return t;switch(null==r?3:r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,a){return t.call(n,r,e,a)};case 4:return function(r,e,a,o){return t.call(n,r,e,a,o)}}return function(){return t.apply(n,arguments)}},j=function(t,n,r){return null==t?k.identity:k.isFunction(t)?w(t,n,r):k.isObject(t)?k.matcher(t):k.property(t)};k.iteratee=function(t,n){return j(t,n,1/0)};var O=function(t,n){return function(r){var e=arguments.length;if(e<2||null==r)return r;for(var a=1;a<e;a++)for(var o=arguments[a],i=t(o),s=i.length,c=0;c<s;c++){var u=i[c];n&&void 0!==r[u]||(r[u]=o[u])}return r}},A=function(t){if(!k.isObject(t))return{};if(x)return x(t);_.prototype=t;var n=new _;return _.prototype=null,n},z=function(t){return function(n){return null==n?void 0:n[t]}},C=Math.pow(2,53)-1,T=z("length"),F=function(t){var n=T(t);return"number"==typeof n&&n>=0&&n<=C};k.each=k.forEach=function(t,n,r){n=w(n,r);var e,a;if(F(t))for(e=0,a=t.length;e<a;e++)n(t[e],e,t);else{var o=k.keys(t);for(e=0,a=o.length;e<a;e++)n(t[o[e]],o[e],t)}return t},k.map=k.collect=function(t,n,r){n=j(n,r);for(var e=!F(t)&&k.keys(t),a=(e||t).length,o=Array(a),i=0;i<a;i++){var s=e?e[i]:i;o[i]=n(t[s],s,t)}return o},k.reduce=k.foldl=k.inject=r(1),k.reduceRight=k.foldr=r(-1),k.find=k.detect=function(t,n,r){var e;if(void 0!==(e=F(t)?k.findIndex(t,n,r):k.findKey(t,n,r))&&-1!==e)return t[e]},k.filter=k.select=function(t,n,r){var e=[];return n=j(n,r),k.each(t,function(t,r,a){n(t,r,a)&&e.push(t)}),e},k.reject=function(t,n,r){return k.filter(t,k.negate(j(n)),r)},k.every=k.all=function(t,n,r){n=j(n,r);for(var e=!F(t)&&k.keys(t),a=(e||t).length,o=0;o<a;o++){var i=e?e[o]:o;if(!n(t[i],i,t))return!1}return!0},k.some=k.any=function(t,n,r){n=j(n,r);for(var e=!F(t)&&k.keys(t),a=(e||t).length,o=0;o<a;o++){var i=e?e[o]:o;if(n(t[i],i,t))return!0}return!1},k.contains=k.includes=k.include=function(t,n,r,e){return F(t)||(t=k.values(t)),("number"!=typeof r||e)&&(r=0),k.indexOf(t,n,r)>=0},k.invoke=function(t,n){var r=h.call(arguments,2),e=k.isFunction(n);return k.map(t,function(t){var a=e?n:t[n];return null==a?a:a.apply(t,r)})},k.pluck=function(t,n){return k.map(t,k.property(n))},k.where=function(t,n){return k.filter(t,k.matcher(n))},k.findWhere=function(t,n){return k.find(t,k.matcher(n))},k.max=function(t,n,r){var e,a,o=-1/0,i=-1/0;if(null==n&&null!=t){t=F(t)?t:k.values(t);for(var s=0,c=t.length;s<c;s++)(e=t[s])>o&&(o=e)}else n=j(n,r),k.each(t,function(t,r,e){((a=n(t,r,e))>i||a===-1/0&&o===-1/0)&&(o=t,i=a)});return o},k.min=function(t,n,r){var e,a,o=1/0,i=1/0;if(null==n&&null!=t){t=F(t)?t:k.values(t);for(var s=0,c=t.length;s<c;s++)(e=t[s])<o&&(o=e)}else n=j(n,r),k.each(t,function(t,r,e){((a=n(t,r,e))<i||a===1/0&&o===1/0)&&(o=t,i=a)});return o},k.shuffle=function(t){for(var n,r=F(t)?t:k.values(t),e=r.length,a=Array(e),o=0;o<e;o++)n=k.random(0,o),n!==o&&(a[o]=a[n]),a[n]=r[o];return a},k.sample=function(t,n,r){return null==n||r?(F(t)||(t=k.values(t)),t[k.random(t.length-1)]):k.shuffle(t).slice(0,Math.max(0,n))},k.sortBy=function(t,n,r){return n=j(n,r),k.pluck(k.map(t,function(t,r,e){return{value:t,index:r,criteria:n(t,r,e)}}).sort(function(t,n){var r=t.criteria,e=n.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return t.index-n.index}),"value")};var M=function(t){return function(n,r,e){var a={};return r=j(r,e),k.each(n,function(e,o){var i=r(e,o,n);t(a,e,i)}),a}};k.groupBy=M(function(t,n,r){k.has(t,r)?t[r].push(n):t[r]=[n]}),k.indexBy=M(function(t,n,r){t[r]=n}),k.countBy=M(function(t,n,r){k.has(t,r)?t[r]++:t[r]=1}),k.toArray=function(t){return t?k.isArray(t)?h.call(t):F(t)?k.map(t,k.identity):k.values(t):[]},k.size=function(t){return null==t?0:F(t)?t.length:k.keys(t).length},k.partition=function(t,n,r){n=j(n,r);var e=[],a=[];return k.each(t,function(t,r,o){(n(t,r,o)?e:a).push(t)}),[e,a]},k.first=k.head=k.take=function(t,n,r){if(null!=t)return null==n||r?t[0]:k.initial(t,t.length-n)},k.initial=function(t,n,r){return h.call(t,0,Math.max(0,t.length-(null==n||r?1:n)))},k.last=function(t,n,r){if(null!=t)return null==n||r?t[t.length-1]:k.rest(t,Math.max(0,t.length-n))},k.rest=k.tail=k.drop=function(t,n,r){return h.call(t,null==n||r?1:n)},k.compact=function(t){return k.filter(t,k.identity)};var S=function(t,n,r,e){for(var a=[],o=0,i=e||0,s=T(t);i<s;i++){var c=t[i];if(F(c)&&(k.isArray(c)||k.isArguments(c))){n||(c=S(c,n,r));var u=0,l=c.length;for(a.length+=l;u<l;)a[o++]=c[u++]}else r||(a[o++]=c)}return a};k.flatten=function(t,n){return S(t,n,!1)},k.without=function(t){return k.difference(t,h.call(arguments,1))},k.uniq=k.unique=function(t,n,r,e){k.isBoolean(n)||(e=r,r=n,n=!1),null!=r&&(r=j(r,e));for(var a=[],o=[],i=0,s=T(t);i<s;i++){var c=t[i],u=r?r(c,i,t):c;n?(i&&o===u||a.push(c),o=u):r?k.contains(o,u)||(o.push(u),a.push(c)):k.contains(a,c)||a.push(c)}return a},k.union=function(){return k.uniq(S(arguments,!0,!0))},k.intersection=function(t){for(var n=[],r=arguments.length,e=0,a=T(t);e<a;e++){var o=t[e];if(!k.contains(n,o)){for(var i=1;i<r&&k.contains(arguments[i],o);i++);i===r&&n.push(o)}}return n},k.difference=function(t){var n=S(arguments,!0,!0,1);return k.filter(t,function(t){return!k.contains(n,t)})},k.zip=function(){return k.unzip(arguments)},k.unzip=function(t){for(var n=t&&k.max(t,T).length||0,r=Array(n),e=0;e<n;e++)r[e]=k.pluck(t,e);return r},k.object=function(t,n){for(var r={},e=0,a=T(t);e<a;e++)n?r[t[e]]=n[e]:r[t[e][0]]=t[e][1];return r},k.findIndex=o(1),k.findLastIndex=o(-1),k.sortedIndex=function(t,n,r,e){r=j(r,e,1);for(var a=r(n),o=0,i=T(t);o<i;){var s=Math.floor((o+i)/2);r(t[s])<a?o=s+1:i=s}return o},k.indexOf=i(1,k.findIndex,k.sortedIndex),k.lastIndexOf=i(-1,k.findLastIndex),k.range=function(t,n,r){null==n&&(n=t||0,t=0),r=r||1;for(var e=Math.max(Math.ceil((n-t)/r),0),a=Array(e),o=0;o<e;o++,t+=r)a[o]=t;return a};var E=function(t,n,r,e,a){if(!(e instanceof n))return t.apply(r,a);var o=A(t.prototype),i=t.apply(o,a);return k.isObject(i)?i:o};k.bind=function(t,n){if(m&&t.bind===m)return m.apply(t,h.call(arguments,1));if(!k.isFunction(t))throw new TypeError("Bind must be called on a function");var r=h.call(arguments,2),e=function(){return E(t,e,n,this,r.concat(h.call(arguments)))};return e},k.partial=function(t){var n=h.call(arguments,1),r=function(){for(var e=0,a=n.length,o=Array(a),i=0;i<a;i++)o[i]=n[i]===k?arguments[e++]:n[i];for(;e<arguments.length;)o.push(arguments[e++]);return E(t,r,this,this,o)};return r},k.bindAll=function(t){var n,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(n=1;n<e;n++)r=arguments[n],t[r]=k.bind(t[r],t);return t},k.memoize=function(t,n){var r=function(e){var a=r.cache,o=""+(n?n.apply(this,arguments):e);return k.has(a,o)||(a[o]=t.apply(this,arguments)),a[o]};return r.cache={},r},k.delay=function(t,n){var r=h.call(arguments,2);return setTimeout(function(){return t.apply(null,r)},n)},k.defer=k.partial(k.delay,k,1),k.throttle=function(t,n,r){var e,a,o,i=null,s=0;r||(r={});var c=function(){s=!1===r.leading?0:k.now(),i=null,o=t.apply(e,a),i||(e=a=null)};return function(){var u=k.now();s||!1!==r.leading||(s=u);var l=n-(u-s);return e=this,a=arguments,l<=0||l>n?(i&&(clearTimeout(i),i=null),s=u,o=t.apply(e,a),i||(e=a=null)):i||!1===r.trailing||(i=setTimeout(c,l)),o}},k.debounce=function(t,n,r){var e,a,o,i,s,c=function(){var u=k.now()-i;u<n&&u>=0?e=setTimeout(c,n-u):(e=null,r||(s=t.apply(o,a),e||(o=a=null)))};return function(){o=this,a=arguments,i=k.now();var u=r&&!e;return e||(e=setTimeout(c,n)),u&&(s=t.apply(o,a),o=a=null),s}},k.wrap=function(t,n){return k.partial(n,t)},k.negate=function(t){return function(){return!t.apply(this,arguments)}},k.compose=function(){var t=arguments,n=t.length-1;return function(){for(var r=n,e=t[n].apply(this,arguments);r--;)e=t[r].call(this,e);return e}},k.after=function(t,n){return function(){if(--t<1)return n.apply(this,arguments)}},k.before=function(t,n){var r;return function(){return--t>0&&(r=n.apply(this,arguments)),t<=1&&(n=null),r}},k.once=k.partial(k.before,2);var B=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];k.keys=function(t){if(!k.isObject(t))return[];if(y)return y(t);var n=[];for(var r in t)k.has(t,r)&&n.push(r);return B&&s(t,n),n},k.allKeys=function(t){if(!k.isObject(t))return[];var n=[];for(var r in t)n.push(r);return B&&s(t,n),n},k.values=function(t){for(var n=k.keys(t),r=n.length,e=Array(r),a=0;a<r;a++)e[a]=t[n[a]];return e},k.mapObject=function(t,n,r){n=j(n,r);for(var e,a=k.keys(t),o=a.length,i={},s=0;s<o;s++)e=a[s],i[e]=n(t[e],e,t);return i},k.pairs=function(t){for(var n=k.keys(t),r=n.length,e=Array(r),a=0;a<r;a++)e[a]=[n[a],t[n[a]]];return e},k.invert=function(t){for(var n={},r=k.keys(t),e=0,a=r.length;e<a;e++)n[t[r[e]]]=r[e];return n},k.functions=k.methods=function(t){var n=[];for(var r in t)k.isFunction(t[r])&&n.push(r);return n.sort()},k.extend=O(k.allKeys),k.extendOwn=k.assign=O(k.keys),k.findKey=function(t,n,r){n=j(n,r);for(var e,a=k.keys(t),o=0,i=a.length;o<i;o++)if(e=a[o],n(t[e],e,t))return e},k.pick=function(t,n,r){var e,a,o={},i=t;if(null==i)return o;k.isFunction(n)?(a=k.allKeys(i),e=w(n,r)):(a=S(arguments,!1,!1,1),e=function(t,n,r){return n in r},i=Object(i));for(var s=0,c=a.length;s<c;s++){var u=a[s],l=i[u];e(l,u,i)&&(o[u]=l)}return o},k.omit=function(t,n,r){if(k.isFunction(n))n=k.negate(n);else{var e=k.map(S(arguments,!1,!1,1),String);n=function(t,n){return!k.contains(e,n)}}return k.pick(t,n,r)},k.defaults=O(k.allKeys,!0),k.create=function(t,n){var r=A(t);return n&&k.extendOwn(r,n),r},k.clone=function(t){return k.isObject(t)?k.isArray(t)?t.slice():k.extend({},t):t},k.tap=function(t,n){return n(t),t},k.isMatch=function(t,n){var r=k.keys(n),e=r.length;if(null==t)return!e;for(var a=Object(t),o=0;o<e;o++){var i=r[o];if(n[i]!==a[i]||!(i in a))return!1}return!0};var N=function(t,n,r,e){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return t===n;t instanceof k&&(t=t._wrapped),n instanceof k&&(n=n._wrapped);var a=b.call(t);if(a!==b.call(n))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!=+t?+n!=+n:0==+t?1/+t==1/n:+t==+n;case"[object Date]":case"[object Boolean]":return+t==+n}var o="[object Array]"===a;if(!o){if("object"!=typeof t||"object"!=typeof n)return!1;var i=t.constructor,s=n.constructor;if(i!==s&&!(k.isFunction(i)&&i instanceof i&&k.isFunction(s)&&s instanceof s)&&"constructor"in t&&"constructor"in n)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===t)return e[c]===n;if(r.push(t),e.push(n),o){if((c=t.length)!==n.length)return!1;for(;c--;)if(!N(t[c],n[c],r,e))return!1}else{var u,l=k.keys(t);if(c=l.length,k.keys(n).length!==c)return!1;for(;c--;)if(u=l[c],!k.has(n,u)||!N(t[u],n[u],r,e))return!1}return r.pop(),e.pop(),!0};k.isEqual=function(t,n){return N(t,n)},k.isEmpty=function(t){return null==t||(F(t)&&(k.isArray(t)||k.isString(t)||k.isArguments(t))?0===t.length:0===k.keys(t).length)},k.isElement=function(t){return!(!t||1!==t.nodeType)},k.isArray=g||function(t){return"[object Array]"===b.call(t)},k.isObject=function(t){var n=typeof t;return"function"===n||"object"===n&&!!t},k.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){k["is"+t]=function(n){return b.call(n)==="[object "+t+"]"}}),k.isArguments(arguments)||(k.isArguments=function(t){return k.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(k.isFunction=function(t){return"function"==typeof t||!1}),k.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},k.isNaN=function(t){return k.isNumber(t)&&t!==+t},k.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===b.call(t)},k.isNull=function(t){return null===t},k.isUndefined=function(t){return void 0===t},k.has=function(t,n){return null!=t&&v.call(t,n)},k.noConflict=function(){return c._=u,this},k.identity=function(t){return t},k.constant=function(t){return function(){return t}},k.noop=function(){},k.property=z,k.propertyOf=function(t){return null==t?function(){}:function(n){return t[n]}},k.matcher=k.matches=function(t){return t=k.extendOwn({},t),function(n){return k.isMatch(n,t)}},k.times=function(t,n,r){var e=Array(Math.max(0,t));n=w(n,r,1);for(var a=0;a<t;a++)e[a]=n(a);return e},k.random=function(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))},k.now=Date.now||function(){return(new Date).getTime()};var J={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},K=k.invert(J),q=function(t){var n=function(n){return t[n]},r="(?:"+k.keys(t).join("|")+")",e=RegExp(r),a=RegExp(r,"g");return function(t){return t=null==t?"":""+t,e.test(t)?t.replace(a,n):t}};k.escape=q(J),k.unescape=q(K),k.result=function(t,n,r){var e=null==t?void 0:t[n];return void 0===e&&(e=r),k.isFunction(e)?e.call(t):e};var P=0;k.uniqueId=function(t){var n=++P+"";return t?t+n:n},k.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var R=/(.)^/,Y={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(t){return"\\"+Y[t]};k.template=function(t,n,r){!n&&r&&(n=r),n=k.defaults({},n,k.templateSettings);var e=RegExp([(n.escape||R).source,(n.interpolate||R).source,(n.evaluate||R).source].join("|")+"|$","g"),a=0,o="__p+='";t.replace(e,function(n,r,e,i,s){return o+=t.slice(a,s).replace(D,L),a=s+n.length,r?o+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),n}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var i=new Function(n.variable||"obj","_",o)}catch(t){throw t.source=o,t}var s=function(t){return i.call(this,t,k)};return s.source="function("+(n.variable||"obj")+"){\n"+o+"}",s},k.chain=function(t){var n=k(t);return n._chain=!0,n};var H=function(t,n){return t._chain?k(n).chain():n};k.mixin=function(t){k.each(k.functions(t),function(n){var r=k[n]=t[n];k.prototype[n]=function(){var t=[this._wrapped];return d.apply(t,arguments),H(this,r.apply(k,t))}})},k.mixin(k),k.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=l[t];k.prototype[t]=function(){var r=this._wrapped;return n.apply(r,arguments),"shift"!==t&&"splice"!==t||0!==r.length||delete r[0],H(this,r)}}),k.each(["concat","join","slice"],function(t){var n=l[t];k.prototype[t]=function(){return H(this,n.apply(this._wrapped,arguments))}}),k.prototype.value=function(){return this._wrapped},k.prototype.valueOf=k.prototype.toJSON=k.prototype.value,k.prototype.toString=function(){return""+this._wrapped},e=[],void 0!==(a=function(){return k}.apply(n,e))&&(t.exports=a)}).call(this)},"u8/Q":function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",{staticClass:"container list-body"},[r("div",{staticClass:"nav-banner"},[r("div",{staticClass:"sub-info"},[r("h1",[t._v(t._s(t.uperCaseTitle(t.sub.title))+" 专题")]),r("article",[t._v(t._s(t.sub.sdesc))]),r("a",{staticClass:"sub-link website",attrs:{href:t.sub.website,target:"_blank"}},[r("icon",{attrs:{name:"home"}},[t._v("官  网")])],1),t.sub.repo.id>0?r("a",{staticClass:"sub-link github",attrs:{href:t.sub.repo.html_url,target:"_blank"}},[r("icon",{attrs:{name:"github"}},[t._v("GitHub")])],1):t._e()]),r("div",{staticClass:"nav-box"},t._l(t.rootyps,function(n){return n.amount>0?r("div",{staticClass:"nav-level"},[r("a",{staticClass:"root",attrs:{href:"javascript:void(0)","data-link":n.key},on:{click:function(r){t.switchTyp(n.sdesc)}}},[r("span",[t._v(t._s(n.sdesc))])]),t._l(t.typcds(n),function(e){return e.repos.length>0?r("a",{staticClass:"second",class:"active-"+(t.checkedTyp==n.sdesc+"-"+e.sdesc),attrs:{href:"javascript:void(0)"},on:{click:function(r){t.switchTyp(n.sdesc+"-"+e.sdesc)}}},[r("span",[t._v(t._s(e.sdesc))]),r("span",{staticClass:"num"},[t._v("（"+t._s(e.repos.length)+"）")])]):t._e()})],2):t._e()}))]),r("div",{staticClass:"sub-repos"},[t._l(t.cates,function(n,e){return n.repos&&n.repo?[r("div",{staticClass:"split",attrs:{id:n.repo.rootyp_zh+"-"+n.repo.typcd_zh,"data-first":n.repo.rootyp_zh}}),r("h3",[r("span",[t._v(t._s(n.repo.rootyp_zh)+" ")]),r("span",[t._v("» ")]),r("span",[t._v(t._s(n.repo.typcd_zh))]),r("span",{staticClass:"amount"},[t._v("（"+t._s(n.repos.length)+"）")])]),t._l(n.repos,function(n,e){return[r("div",{staticClass:"repo-card"},[r("fresh",{attrs:{time:n.pushed_at}}),r("nuxt-link",{attrs:{to:"/repo/"+n.owner+"/"+n.alia}},[r("img",{staticClass:"cover",attrs:{src:t.cdn(n.cover,"repo","subject_repo")}})]),r("div",{staticClass:"middle"},[r("nuxt-link",{attrs:{to:"/repo/"+n.owner+"/"+n.alia}},[r("h4",[t._v(t._s(n.name))])]),r("span",{staticClass:"sdesc"},[t._v(t._s(n.description_cn||n.description))])],1),r("div",{staticClass:"stars"},[r("icon",{attrs:{name:"star",width:"15px"}},[t._v(t._s(n.stargazers_count)+"  ")])],1)],1),n.hasad?r("div",{staticClass:"ad-wraper"},[r("div",{staticClass:"repo-card"},[r("adsense")],1),r("div",{staticClass:"repo-card"},[r("adsense")],1)]):t._e()]})]:t._e()})],2)])])},a=[],o={render:e,staticRenderFns:a};n.a=o},xtPh:function(t,n,r){n=t.exports=r("BkJT")(!1),n.push([t.i,".ps{-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;border-radius:6px;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear;right:0;width:15px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;border-radius:6px;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;right:2px;width:6px}.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{width:11px}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}",""])},zHzG:function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"fresh",class:t.format(t.time),attrs:{title:"更新于"+t.timeago(t.time)}})},a=[],o={render:e,staticRenderFns:a};n.a=o}});
//# sourceMappingURL=_name.8134057d7c5f7e76550a.js.map