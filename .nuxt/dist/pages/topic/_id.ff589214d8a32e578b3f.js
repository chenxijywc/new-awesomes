webpackJsonp([15],{"02Ii":function(t,i,a){(t.exports=a("XLS9")(!1)).push([t.i,".page-topic-id header{-webkit-box-shadow:none!important;box-shadow:none!important;border-bottom:1px solid #eee}.page-topic-id .topic-container{max-width:700px;padding-top:40px}.page-topic-id .topic-container .cover{width:100%}.page-topic-id .topic-container .banner h3{padding:20px 0}.page-topic-id .topic-container .banner .extras{color:#9a9a9a;padding-bottom:10px}.page-topic-id .topic-container .banner .extras>span{margin:0 8px;display:inline-block;position:relative}.page-topic-id .topic-container .banner .extras svg{width:18px;height:18px;float:left;margin-right:3px}.page-topic-id .topic-container .banner .extras .mem-tx{border-radius:100%;width:25px;height:25px;margin-right:5px}.page-topic-id .topic-container article{font-size:15px;line-height:25px}",""])},bDCF:function(t,i,a){"use strict";var e=a("YFWx");i.a={asyncData:function(t){t.req;var i=t.params;t.query;return Object(e.a)().get("topic/"+i.id).then(function(t){return{topic:t.data}})}}},eJ15:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("bDCF"),n=a("yQjO");var o=function(t){a("jRK0")},c=a("X4nt")(e.a,n.a,!1,o,null,null);i.default=c.exports},jRK0:function(t,i,a){var e=a("02Ii");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("FIqI")("d7ea6512",e,!0,{sourceMap:!1})},yQjO:function(t,i,a){"use strict";var e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container topic-container"},[a("div",{staticClass:"banner"},[a("div",{staticClass:"extras"},[a("nuxt-link",{attrs:{to:""}},[a("img",{staticClass:"mem-tx",attrs:{src:t.cdn(t.topic.mem.avatar,"mem")}}),a("span",[t._v(t._s(t.topic.mem.nc))])]),a("span",[t._v("发布于 "+t._s(t.timeago(t.topic.created_at)))])],1),a("img",{staticClass:"cover",attrs:{src:t.cdn(t.topic.cover,"topic")}}),a("h3",[t._v(t._s(t.topic.title))]),a("div",{staticClass:"extras"},[a("span",[a("icon",{attrs:{name:"eye-o"}},[t._v(t._s(t.topic.visit)+" 次阅读")])],1),a("span",[a("icon",{attrs:{name:"heart-o"}},[t._v(t._s(t.topic.favor)+" 人喜欢")])],1),a("span",[a("icon",{attrs:{name:"comment"}},[t._v(t._s(t.topic.comment>0?t.topic.comment+" 条评论":"暂无评论"))])],1)])]),a("article",{domProps:{innerHTML:t._s(t.marked(t.topic.con))}})])},staticRenderFns:[]};i.a=e}});