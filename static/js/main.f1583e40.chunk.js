(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(8),s=n(17),l=n(3),u={searchField:""},h={isPending:!1,robots:[],error:""},d=n(18),b=(n(28),n(5)),E=n(6),p=n(9),m=n(7),g=n(10),f=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200*200"),alt:"robo"}),a.a.createElement("h2",null,n),a.a.createElement("p",null,"Email:",r))},O=function(e){var t=e.robots.map((function(e,t){return a.a.createElement(f,{id:e.id,name:e.name,email:e.email,key:t})}));return a.a.createElement("div",null,t)},v=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-lable":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search Rebort",onChange:t}))},R=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"900px",border:"1px solid #000"}},e.children)},S=function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))},y=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState((function(){return{hasError:!0}}))}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Error Happaned , Sorry for inconvension"):this.props.children}}]),t}(r.Component),j=function(e){function t(){return Object(b.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",null,"Robo Friend App"),a.a.createElement(v,{searchChange:n,searchField:t}),a.a.createElement(R,null,a.a.createElement(y,null,a.a.createElement(O,{robots:c}))))}}]),t}(r.Component),C=Object(i.b)((function(e){return{searchField:e.searchFieldReducer.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value.trim()})},onRequestRobots:function(){return e(S)}}}))(j);n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=Object(d.createLogger)(),w=Object(l.d)(Object(l.c)({searchFieldReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),Object(l.a)(s.a,_));c.a.render(a.a.createElement(i.a,{store:w},a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f1583e40.chunk.js.map