(this["webpackJsonpbirthday-reminder-ui"]=this["webpackJsonpbirthday-reminder-ui"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),c=n(7),a=n.n(c),s=(n(13),n.p,n(14),n(2)),o=n(3),u=n(5),j=n(4),d=n(8),b=n.n(d),h=n(0),p=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={isLoading:!0,userList:[]},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=b.a.dev.apiEndpoint+"/users";fetch(e).then((function(t){return t.json()})).then((function(e){t.setState({userList:e.data,isLoading:!1})})).catch((function(e){alert("Unable to get /users api"),t.setState({isLoading:!1})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:["User List:",Object(h.jsxs)("p",{children:[this.state.isLoading?"Loading ...":this.state.userList.map((function(t){return Object(h.jsx)("div",{children:t.name})}))," "]})]})}}]),n}(r.a.Component),O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(p,{})})}}]),n}(r.a.Component),f=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"Header Component"})}}]),n}(r.a.Component),l=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("footer",{children:"Footer works !"})})}}]),n}(r.a.Component);var v=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{}),Object(h.jsx)(O,{}),Object(h.jsx)(l,{})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),c(t),a(t)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),m()},8:function(t,e){t.exports={dev:{apiEndpoint:"https://breminder.herokuapp.com"}}}},[[16,1,2]]]);
//# sourceMappingURL=main.fa213136.chunk.js.map