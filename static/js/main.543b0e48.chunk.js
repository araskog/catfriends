(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(3),a=n.n(s),i=(n(13),n(4)),o=n(5),h=n(7),l=n(6),d=function(e){var t=e.name,n=e.email;e.id;return Object(c.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"catphoto",src:"https://robohash.org/".concat(t,"?size=200x200&set=set4")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})},j=function(e){var t=e.cats;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},b=function(e){e.searchfield;var t=e.searchChange;return Object(c.jsx)("div",{className:"p2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search cats",onChange:t})})},u=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",borderTop:"2px solid black"},children:e.children})},f=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={cats:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({cats:t})}))}},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"Find Catfriends"}),Object(c.jsx)(b,{searchChange:this.onSearchChange}),Object(c.jsx)("br",{}),Object(c.jsx)(u,{children:Object(c.jsx)(j,{cats:r})})]}):Object(c.jsx)("h1",{children:"Loading"})}}]),n}(r.Component));n(15);a.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.543b0e48.chunk.js.map