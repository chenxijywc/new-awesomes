webpackJsonp([27],{"8NK9":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"repos container"},[t.marks.length>0?[a("div",{staticClass:"row"},t._l(t.marks,function(e){return a("div",{staticClass:"col-md-3 col-sm-3 col-4"},[a("ul",{staticClass:"list-group repo-item",staticStyle:{"margin-bottom":"20px"}},[a("li",{staticClass:"list-group-item"},[a("nuxt-link",{attrs:{to:"/repo/"+e.repo.owner+"/"+e.repo.alia}},[a("h5",{staticClass:"reponame"},[t._v(t._s(e.repo.alia))])])],1),a("li",{staticClass:"list-group-item color-item"},[a("nuxt-link",{attrs:{to:"/repo/"+e.repo.owner+"/"+e.repo.alia}},[a("img",{staticClass:"cover",attrs:{src:t.cdn(e.repo.cover,"repo","subject_repo")}})]),a("div",[t._v(t._s(e.repo.typcd_zh)+" ")]),a("icon",{attrs:{name:"collect",width:"18px"}},[t._v(t._s(e.repo.mark))])],1),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"caption"},[t._v(t._s(e.repo.description_cn||e.repo.description))])]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"time-box"},[a("icon",{attrs:{name:"clock-o",width:"17px",title:"收藏于"+t.timeago(e.created_at)}},[t._v(t._s(t.timeago(e.created_at)))]),t.session.id===e.mem_id?a("a",{staticClass:"remove-btn",attrs:{href:"javascript:void(0)",title:"取消收藏"},on:{click:function(a){t.cancel(e)}}},[a("icon",{attrs:{name:"cancel",width:"12px"}})],1):t._e()],1)])])])})),a("pagination",{attrs:{flag:"weuse-list",total:t.pagetotal,size:t.pagesize}})]:[a("h2",{staticClass:"noitem"},[t._v("尚未收藏前端库")])]],2)},s=[],i={render:r,staticRenderFns:s};e.a=i},EUOL:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".repos .cover[data-v-bfe6e24c]{width:40px;float:left;margin-right:10px;border-radius:100%;padding:5px;background-color:hsla(0,0%,100%,.4)}.repos .reponame[data-v-bfe6e24c]{word-break:keep-all;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;padding:0}.repos .caption[data-v-bfe6e24c]{line-height:25px;height:50px;overflow:hidden;font-size:12px;color:#99a0a3}.repos .repo-item .remove-btn[data-v-bfe6e24c]{float:right;color:red;display:none}.repos .repo-item .list-group-item[data-v-bfe6e24c]{border:1px solid rgba(104,129,134,.125)}.repos .repo-item:hover .remove-btn[data-v-bfe6e24c]{display:inline-block}.repos .noitem[data-v-bfe6e24c]{padding:80px 0;text-align:center;color:#ddd}.repos .color-item[data-v-bfe6e24c]{background-color:hsla(47,33%,67%,.08)}",""])},cTvS:function(t,e,a){var r=a("EUOL");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("8bSs")("58880fe8",r,!0)},y5xQ:function(t,e,a){"use strict";function r(t){a("cTvS")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("zwIp"),i=a("8NK9"),o=a("46Yf"),n=r,c=o(s.a,i.a,!1,n,"data-v-bfe6e24c",null);e.default=c.exports},zwIp:function(t,e,a){"use strict";var r=a("lC5x"),s=a.n(r),i=a("J0Oq"),o=a.n(i),n=a("YFWx");e.a={data:function(){return{pagesize:20}},asyncData:function(t){var e=(t.req,t.params),a=t.query,r=(t.route,a.page||1);return Object(n.a)().get("mem/"+e.id+"/opers",{params:{opertyp:"MARK",typ:"REPO",limit:20,skip:20*(r-1)}}).then(function(t){return{marks:t.data.items,pagetotal:t.data.count}})},computed:{session:function(){return this.$store.state.session||{}}},methods:{cancel:function(){function t(t){return e.apply(this,arguments)}var e=o()(s.a.mark(function t(e){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(n.a)().post("oper",{opertyp:"MARK",typ:"REPO",idcd:e.repo.id});case 2:a=t.sent,a.data.has||this.marks.splice(this.marks.indexOf(e),1);case 4:case"end":return t.stop()}},t,this)}));return t}()}}}});
//# sourceMappingURL=repos.185d64a64c3b12ccb761.js.map