(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(23),a=n.n(s),i=(n(30),n(22)),o=n(18),j=n(8),b=n(9),u=n(10),d=n(11),l=n(4),h=n(2),O=n(0),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.accountBalance,t="number"===typeof e?e.toFixed(2):"Loading...";return Object(O.jsxs)("div",{style:{position:"fixed",top:"10px",right:"10px",backgroundColor:"#fff",padding:"5px 10px",borderRadius:"5px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)"},children:["Balance: ",t]})}}]),n}(c.Component),p=x,m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(O.jsx)("h1",{children:"Bank of React"}),Object(O.jsx)(l.b,{to:"/userProfile",children:"User Profile"}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/login",children:"Login"}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/credits",children:"Credits (to be implemented in the Assignment)"}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/debits",children:"Debits (to be implemented in the Assignment)"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(p,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),f=m,v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"User Profile"}),Object(O.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(O.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),g=v,S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=Object(o.a)({},c.state.user);t.userName=e.target.value,c.setState({user:t})},c.handleSubmit=function(e){e.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(b.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(h.a,{to:"/userProfile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"User Name"}),Object(O.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password"})]}),Object(O.jsx)("button",{children:"Log In"})]}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),B=n(13),C=function(e){console.log("Credit props:",e.credits);var t=e.credits;console.log(t);for(var n=Object(c.useState)(""),r=Object(B.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(0),o=Object(B.a)(i,2),j=o[0],b=o[1],u=t.length,d=[],h=0;h<u;h++){var x=t[h];d.push(Object(O.jsxs)("li",{children:[Object(O.jsx)("h3",{children:"ID:"})," ",x.id," ",Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Description:"})," ",x.description," ",Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Amount:"})," $",x.amount," ",Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Date:"})," ",x.date.slice(0,10)," ",Object(O.jsx)("br",{}),Object(O.jsx)("hr",{})," "]},h))}return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Credits"}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Add Credit: "}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:d.length+1,description:s,amount:parseFloat(j).toFixed(2),date:(new Date).toISOString()};e.addCredit(n),a(""),b(0)},children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{type:"text",id:"description",value:s,onChange:function(e){a(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(O.jsx)("input",{type:"number",id:"amount",value:j,onChange:function(e){b(e.target.value)},step:"0.01"}),Object(O.jsx)("button",{type:"submit",children:"Add"})]}),Object(O.jsx)("ul",{children:d}),Object(O.jsx)(l.b,{to:"/",children:"Return to Home"})]})},L=function(e){console.log("Debit props:",e.debits);for(var t=e.debits,n=Object(c.useState)(""),r=Object(B.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(0),o=Object(B.a)(i,2),j=o[0],b=o[1],u=t.length,d=[],h=0;h<u;h++){var x=t[h];d.push(Object(O.jsxs)("li",{children:[Object(O.jsx)("h3",{children:"ID:"})," ",x.id," ",Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Description:"})," ",x.description," ",Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Amount:"})," $",x.amount," ",Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Date:"})," ",x.date.slice(0,10)," ",Object(O.jsx)("br",{}),Object(O.jsx)("hr",{})," "]},x.id))}return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Debits"}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Add Debit: "}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:d.length+1,description:s,amount:parseFloat(j).toFixed(2),date:(new Date).toISOString()};e.addDebit(n),a(""),b(0)},children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{type:"text",id:"description",value:s,onChange:function(e){a(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(O.jsx)("input",{type:"number",id:"amount",value:j,onChange:function(e){b(e.target.value)},step:"0.01"}),Object(O.jsx)("button",{type:"submit",children:"Add"})]}),Object(O.jsx)("ul",{children:d}),Object(O.jsx)(l.b,{to:"/",children:"Return to Home"})]})},D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.addCredit=function(t){var n=[].concat(Object(i.a)(e.state.creditList),[t]),c=e.calculateBalance(n,e.state.debitList);e.setState({creditList:n,accountBalance:c}),console.log("New Balance:",c)},e.addDebit=function(t){var n=[].concat(Object(i.a)(e.state.debitList),[t]),c=e.calculateBalance(e.state.creditList,n);e.setState({debitList:n,accountBalance:c})},e.calculateBalance=function(e,t){return e.reduce((function(e,t){return e+parseFloat(t.amount)}),0)-t.reduce((function(e,t){return e+parseFloat(t.amount)}),0)},e.state={accountBalance:0,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://johnnylaicode.github.io/api/credits.json").then((function(e){return e.json()})).then((function(t){e.setState({creditList:t}),console.log(t)})),fetch("https://johnnylaicode.github.io/api/debits.json").then((function(e){return e.json()})).then((function(t){e.setState({debitList:t},(function(){var t=e.calculateBalance(e.state.creditList,e.state.debitList);e.setState({accountBalance:t})}))}))}},{key:"render",value:function(){var e=this;return Object(O.jsx)(l.a,{basename:"/assignment-3",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(f,{accountBalance:e.state.accountBalance})}}),Object(O.jsx)(h.b,{exact:!0,path:"/userProfile",render:function(){return Object(O.jsx)(g,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(O.jsx)(h.b,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(S,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(O.jsx)(h.b,{exact:!0,path:"/credits",render:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{accountBalance:e.state.accountBalance}),Object(O.jsx)(C,{credits:e.state.creditList,addCredit:e.addCredit})]})}}),Object(O.jsx)(h.b,{exact:!0,path:"/debits",render:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{accountBalance:e.state.accountBalance}),Object(O.jsx)(L,{debits:e.state.debitList,addDebit:e.addDebit})]})}}),Object(O.jsx)(h.b,{exact:!0,path:"/accountBalance",render:function(){return Object(O.jsx)(p,{accountBalance:e.state.accountBalance})}})]})})}}]),n}(c.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.89b86bbd.chunk.js.map