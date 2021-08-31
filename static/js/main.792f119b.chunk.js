(this["webpackJsonpconsole-client"]=this["webpackJsonpconsole-client"]||[]).push([[0],{107:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(37),o=n.n(s),c=(n(98),n(27)),i=n(8),l=n(9),u=n(11),d=n(10),h=n(16),m=n(142),g=n(2),j=n(3),b=n(1),p=["user","component","render"],O=function(e){var t=e.user,n=e.component,a=e.render,r=Object(j.a)(e,p);return t&&a?Object(b.jsx)(h.b,Object(g.a)(Object(g.a)({},r),{},{render:a})):Object(b.jsx)(h.b,Object(g.a)(Object(g.a)({},r),{},{render:function(e){return t?Object(b.jsx)(n,Object(g.a)({},e)):Object(b.jsx)(h.a,{to:"/sign-in"})}}))},f=n(73),v=(n(107),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,r=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){r(s)}),300),Object(b.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(f.a.Heading,{children:n}),Object(b.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(r.a.Component)),x=n(91),C=n(51),w=n(89),y=n(12),S=n(38),k=n.n(S),A=n(49),N="https://console-app-api.herokuapp.com",L="http://localhost:4741",I="localhost"===window.location.hostname?L:N,E=n(17),P=n.n(E),_={},D=function(){var e;return function(){var t=Object(A.a)(k.a.mark((function t(n){var a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e.cancel(),e=P.a.CancelToken.source(),t.prev=2,!_[n]){t.next=5;break}return t.abrupt("return",_[n]);case 5:return t.next=7,P()(n,{cancelToken:e.token});case 7:return a=t.sent,r=a.data.results,_[n]=r,t.abrupt("return",r);case 13:t.prev=13,t.t0=t.catch(2),P.a.isCancel(t.t0)?console.log("Request canceled",t.t0.message):console.log("Something went wrong: ",t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}()}(),U=(n(127),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:null,loading:!1,value:""},e.search=function(){var t=Object(A.a)(k.a.mark((function t(n){var a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,D("".concat(I,"/users?users=").concat(n));case 3:a=t.sent,r=a,e.setState({users:r,loading:!1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeHandler=function(){var t=Object(A.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.search(n.target.value),e.setState({value:n.target.value});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onBlurHandler=function(t){t.target.classList.contains("search")||e.setState({value:""})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.onBlurHandler)}},{key:"renderUsers",get:function(){var e="";return this.state.users&&(e=this.state.users.map((function(e){return Object(b.jsx)("div",{className:"search result",children:Object(b.jsx)(y.b,{className:"search resultLink",to:"/profile/".concat(e.username),children:e.username})},e._id)}))),this.state.value||(e=""),e}},{key:"render",value:function(){var e=this,t=this.state.value,n=0===this.renderUsers.length&&t.length>0,a=Object(b.jsx)("div",{className:"result",children:"No results"});return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"search searchBar",children:[Object(b.jsx)("input",{className:"search searchInput",value:t,onChange:function(t){return e.onChangeHandler(t)},placeholder:"Search Users"}),Object(b.jsx)("div",{className:"search resultContainer",children:n?a:this.renderUsers})]})})}}]),n}(a.Component)),B=(n(128),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(b.jsx)(y.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]})),T=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(b.jsx)(y.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),z=function(e){var t=e.user,n=e.deviceSize;return Object(b.jsxs)(C.a,{className:"navbar-light col-12",id:"header",expand:"md",children:[Object(b.jsx)(C.a.Brand,{children:Object(b.jsx)(y.b,{to:"/home",id:"headerTitle",children:"{ console }"})}),Object(b.jsx)(C.a.Toggle,{className:"navbar-light","aria-controls":"basic-navbar-nav"}),Object(b.jsx)("div",{className:"spacing"}),Object(b.jsx)(C.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsx)(x.a,{className:"ml-auto",children:t?n>600?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(U,{}),Object(b.jsx)(w.a,{title:"Account",children:B})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(U,{}),B]}):T})})]})},F=n(7),G=function(e){return P()({url:I+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},H="Couldn't find logs, please refresh the page and try again. Error: ",M=n(6),V=n(15),q=(n(68),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,r=n.msgAlert,s=n.history,o=n.setUser;(t=a.state,P()({method:"POST",url:I+"/sign-up/",data:{credentials:{username:t.username,email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return G(a.state)})).then((function(e){return o(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Successfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/home")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={username:"",email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.password,r=e.passwordConfirmation;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Sign Up"}),Object(b.jsxs)(M.a,{onSubmit:this.onSignUp,children:[Object(b.jsxs)(M.a.Group,{controlId:"email",children:[Object(b.jsx)(M.a.Label,{children:"Username"}),Object(b.jsx)(M.a.Control,{required:!0,type:"username",name:"username",value:t,placeholder:"Enter Username",onChange:this.handleChange})]}),Object(b.jsxs)(M.a.Group,{controlId:"email",children:[Object(b.jsx)(M.a.Label,{children:"Email address"}),Object(b.jsx)(M.a.Control,{required:!0,type:"email",name:"email",value:n,placeholder:"Enter Email",onChange:this.handleChange})]}),Object(b.jsxs)(M.a.Group,{controlId:"password",children:[Object(b.jsx)(M.a.Label,{children:"Password"}),Object(b.jsx)(M.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsxs)(M.a.Group,{controlId:"passwordConfirmation",children:[Object(b.jsx)(M.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(M.a.Control,{required:!0,name:"passwordConfirmation",value:r,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(b.jsx)(V.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component)),W=Object(h.f)(q),J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(F.a)({},e.target.name,e.target.value))},a.toggleChecked=function(){a.setState((function(e){return{checked:!e.checked}}))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.setUser,o=a.state.checked;G(a.state).then((function(e){return s(e.data.user),e.data.user})).then((function(e){var t=JSON.stringify(e);window&&o&&window.localStorage.setItem("user",t)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/home")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:"",checked:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.checked;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Sign In"}),Object(b.jsxs)(M.a,{onSubmit:this.onSignIn,children:[Object(b.jsxs)(M.a.Group,{controlId:"email",children:[Object(b.jsx)(M.a.Label,{children:"Email address"}),Object(b.jsx)(M.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(b.jsxs)(M.a.Group,{controlId:"password",children:[Object(b.jsx)(M.a.Label,{children:"Password"}),Object(b.jsx)(M.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsx)(V.a,{className:"authButton",variant:"primary",type:"submit",children:"Submit"}),Object(b.jsx)(M.a.Check,{type:"checkbox",id:"default-checkbox",label:"Keep me logged in",checked:a,onChange:this.toggleChecked})]})]})})}}]),n}(a.Component),Y=Object(h.f)(J),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return P()({url:I+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){window&&window.localStorage.removeItem("user")})).finally((function(){return n.push("/sign-in")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),K=Object(h.f)(R),Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.user;(function(e,t){return P()({url:I+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Change Password"}),Object(b.jsxs)(M.a,{onSubmit:this.onChangePassword,children:[Object(b.jsxs)(M.a.Group,{controlId:"oldPassword",children:[Object(b.jsx)(M.a.Label,{children:"Old password"}),Object(b.jsx)(M.a.Control,{className:"input",required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(b.jsxs)(M.a.Group,{controlId:"newPassword",children:[Object(b.jsx)(M.a.Label,{children:"New Password"}),Object(b.jsx)(M.a.Control,{className:"input",required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(b.jsx)(V.a,{className:"authButton",variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),X=Object(h.f)(Q),Z=function(e,t){return P()({method:"GET",url:"".concat(I,"/logs/").concat(t),headers:{Authorization:"Bearer ".concat(e.token)}})},$=n(43),ee=n.n($),te=n(34),ne=(n(69),n(70),n(131),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=Object(F.a)({},e.target.name,e.target.value);a.setState((function(e){return{log:Object(g.a)(Object(g.a)({},e.log),t)}}))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,r=t.msgAlert,s=t.history,o=t.match;(function(e,t,n){return P()({method:"PATCH",url:"".concat(I,"/logs/").concat(n),headers:{Authorization:"Bearer ".concat(t.token)},data:{log:{title:e.title,content:e.content}}})})(a.state.log,n,o.params.id).then((function(e){return s.push("/logs/"+o.params.id)})).catch((function(e){r({heading:"Log update failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={log:{title:"",content:""}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user;Z(a,n.params.id).then((function(t){return e.setState({log:t.data.log})}))}},{key:"render",value:function(){var e=this,t=this.state.log,n=this.props.match;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h5",{id:"updateLogHeader",children:"Edit Log"}),Object(b.jsx)("div",{className:"logContainer",children:Object(b.jsxs)(M.a,{onSubmit:this.handleSubmit,children:[Object(b.jsx)(M.a.Group,{controlId:"title",children:Object(b.jsx)(M.a.Control,{required:!0,className:"titleInput",name:"title",value:t.title,placeholder:"Log Title",onChange:this.handleChange})}),Object(b.jsx)(M.a.Group,{controlId:"content",children:Object(b.jsx)(ee.a,{className:"border codeEditor",value:t.content,onValueChange:function(t){return e.setState({content:t})},highlight:function(e){return Object(te.highlight)(e,te.languages.js)},padding:10})}),Object(b.jsx)(V.a,{id:"updateLogButton",type:"submit",children:"Update"})]})}),Object(b.jsx)(y.b,{to:"/logs/".concat(n.params.id),children:Object(b.jsx)(V.a,{size:"sm",className:"btn",children:"Go back"})})]})}}]),n}(a.Component)),ae=Object(h.f)(ne),re=(n(132),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onCreateComment=function(e){e.preventDefault();var t=Date.now();a.setState({createdAt:t},(function(){var e=a.props,t=e.msgAlert,n=e.user,r=e.logId,s=e.updateComments,o=e.showComments,c=e.toggleComments,i=a.state,l=i.content,u=i._id,d=i.timestamp;(function(e,t,n){return P()({method:"POST",url:I+"/logs/".concat(n,"/comments/"),headers:{Authorization:"Bearer ".concat(t.token)},data:{comment:{ownerName:e.ownerName,owner:e.owner,content:e.content,_id:e._id,createdAt:e.createdAt}}})})(a.state,n,r).then((function(){return s({ownerName:n.username,owner:n._id,content:l,_id:u,createdAt:d})})).then((function(){o||c()})).then((function(){a.setState({content:""})})).catch((function(e){t({heading:"Couldn't Create Comment",message:"Failed to create comment, please double check your input and try again. Error: "+e.message,variant:"danger"})})).finally((function(){a.setState({_id:Object(m.a)()})}))}))},a.state={ownerName:e.user.username,content:"",created:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({_id:Object(m.a)()})}},{key:"render",value:function(){var e=this.state.content;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(M.a,{className:"log",onSubmit:this.onCreateComment,children:Object(b.jsx)(M.a.Group,{children:Object(b.jsx)(M.a.Control,{required:!0,autoComplete:"off",className:"log commentInput",name:"content",value:e,placeholder:"Add Comment",onChange:this.handleChange})})})})}}]),n}(a.Component)),se=Object(h.f)(re),oe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onEditComment=function(e){e.preventDefault();var t=a.props,n=t.comment,r=t.user,s=t.logId,o=t.updateComments,c=t.toggle,i=a.state.content,l=Object(g.a)({},n);l.content=i,function(e,t,n){P()({method:"PATCH",url:I+"/logs/".concat(n,"/comments/"),headers:{Authorization:"Bearer ".concat(t.token)},data:{comment:{ownerName:e.ownerName,owner:e.owner,content:e.content,_id:e._id}}})}(l,r,s),o(l),c("showEdit")},a.state={deleted:!1,content:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.comment;this.setState({content:e.content})}},{key:"render",value:function(){var e=this.state,t=e.deleted,n=e.content;return t?Object(b.jsx)(h.a,{to:{pathname:"/home"}}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(M.a,{onSubmit:this.onEditComment,children:[Object(b.jsx)(M.a.Group,{controlId:"content",children:Object(b.jsx)(M.a.Control,{required:!0,name:"content",value:n,placeholder:"Comment",onChange:this.handleChange})}),Object(b.jsx)(V.a,{variant:"primary",type:"submit",children:"Update"})]})})}}]),n}(a.Component),ce=Object(h.f)(oe),ie=(n(133),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){var e=a.props.createdAt,t=new Date(e),n=(Date.now()-t)/1e3,r=n/60,s=r/60,o=s/24,c=o/7,i=c/4,l=n<60?{value:n,unit:"second"}:r<60?{value:r,unit:"minute"}:s<24?{value:s,unit:"hour"}:o<7?{value:o,unit:"day"}:c<4?{value:c,unit:"week"}:i<12?{value:i,unit:"month"}:{value:i/12,unit:"year"};l.value=l.value.toFixed(0);var u="1"===l.value?"":"s",d=isNaN(l.value)?"Just now":"".concat(l.value," ").concat(l.unit).concat(u," ago");a.setState({dateText:d})},a.state={dateText:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"log date",children:this.state.dateText})}}]),n}(a.Component)),le=Object(h.f)(ie),ue=(n(134),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).toggle=function(e){a.setState((function(t){return Object(F.a)({},e,!t[e])}))},a.onDestroyComment=function(e){e.preventDefault();var t=a.props,n=t.comment,r=t.user,s=t.logId,o=t.updateComments;!function(e,t,n){P()({method:"DELETE",url:I+"/logs/".concat(t,"/comments/"),headers:{Authorization:"Bearer ".concat(e.token)},data:{commentId:n,userId:e._id}})}(r,s,n._id),o(n._id)},a.state={comment:null,showEdit:!1,showButtons:!1,deleted:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.deleted,a=t.showEdit,r=t.showButtons,s=this.props,o=s.comment,c=s.user,i=s.msgAlert,l=s.logId,u=s.updateComments,d=o.owner===c._id&&r&&!a,m=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V.a,{size:"sm",variant:"secondary",className:"log commentButton edit",onClick:function(){return e.toggle("showEdit")},children:"Edit"}),Object(b.jsx)(V.a,{size:"sm",variant:"danger",className:"log commentButton delete",onClick:this.onDestroyComment,children:"Delete"})]}),g=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ce,{className:"log",toggle:this.toggle,updateComments:u,msgAlert:i,comment:o,logId:l,user:c}),Object(b.jsx)(V.a,{className:"log",size:"sm",variant:"danger",onClick:function(){return e.toggle("showEdit")},children:"Cancel"})]});return n?Object(b.jsx)(h.a,{to:{pathname:"/home"}}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{onClick:function(){return e.toggle("showButtons")},children:Object(b.jsxs)("div",{className:"log comment",children:[Object(b.jsx)(y.b,{to:"/profile/".concat(o.ownerName),className:"log commentOwner",children:o.ownerName}),a?g:o.content,Object(b.jsx)(le,{createdAt:o.createdAt}),d?m:""]})})})}}]),n}(a.Component)),de=Object(h.f)(ue),he=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={comments:[],loading:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.comments,n=e.msgAlert,a=e.user,r=e.logId,s=e.logOwner,o=e.updateComments;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(de,{updateComments:o,logOwner:s,msgAlert:n,comment:e,logId:r,user:a})},e._id)}))})}}]),n}(a.Component),me=(n(82),n(83),n(84),n(85),n(86),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).goToLog=function(e){if(e.target.classList.contains("showLog")){var t=a.props,n=t.log;t.history.push("/logs/".concat(n._id))}},a.updateComments=function(e){var t=a.state.comments,n=Object(c.a)(t);if("string"===typeof e){var r=t.findIndex((function(t){return t._id===e}));n.splice(r,1),a.setState({comments:n})}else{var s=t.findIndex((function(t){return t._id===e._id}));s>=0?(n.splice(s,1,e),a.setState({comments:n})):a.setState((function(t){return{comments:[].concat(Object(c.a)(t.comments),[e])}}))}},a.handleCommentBlur=function(e){e.target.classList.contains("log")||a.setState({showComments:!1})},a.state={comments:[],showComments:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.log;this.setState({comments:t.comments}),document.addEventListener("mousedown",(function(t){return e.handleCommentBlur(t)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.msgAlert,a=t.user,r=t.log,s=this.state,o=s.showComments,c=s.comments,i=1===c.length?"":"s",l=Object(b.jsx)(V.a,{className:"log showComments",size:"sm",variant:"outline-primary",onClick:function(){return e.setState({showComments:!0})},children:"".concat(c.length," Comment").concat(i)}),u=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(he,{className:"log",updateComments:this.updateComments,msgAlert:n,user:a,comments:c,logId:r._id}),Object(b.jsx)(se,{className:"log",updateComments:this.updateComments,showComments:o,msgAlert:n,user:a,logId:r._id,logOwner:r.owner._id})]});return Object(b.jsxs)("div",{className:"log showLog logContainer",onClick:function(t){return e.goToLog(t)},children:[Object(b.jsxs)("div",{className:"log showLog logTitle",children:[Object(b.jsx)(y.b,{to:"/profile/".concat(r.owner.username),className:"log logOwner",children:r.owner.username}),r.title,Object(b.jsx)(y.b,{className:"languageLink",children:r.language?"{ ".concat(r.language," }"):""}),Object(b.jsx)(le,{createdAt:r.createdAt})]}),Object(b.jsx)(ee.a,{className:"log border codeEditor logContent",placeholder:"// your code here",value:r.content,onValueChange:function(){return null},highlight:function(e){return Object(te.highlight)(e,te.languages.js)},padding:10}),o?u:l]})}}]),n}(a.Component)),ge=Object(h.f)(me),je=n(26),be=(n(135),[{language:"javascript",buttonValue:"JavaScript",placeholder:"const helloWorld = function () {\n  console.log('Hello World!')\n}",height:"90px"},{language:"python",buttonValue:"Python",placeholder:'def my_function():\n  print("Hello from a function")',height:"70px"},{language:"clike",buttonValue:"C#",placeholder:'namespace HelloWorld\n{\n  class Hello {\n    static void Main(string[] args)\n      {\n        System.Console.WriteLine("Hello World!");\n      }\n    }\n  }',height:"240px"},{language:"clike",buttonValue:"C++",placeholder:'#include <iostream>\n\n</iostream>int main() {\n  std::cout << "Hello World!";\n  return 0;\n}',height:"170px"},{language:"clike",buttonValue:"C",placeholder:'#include <stdio.h>\nint main() {\n  printf("Hello, World!");\nreturn null;\n}',height:"140px"}]),pe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onCreateLog=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.user,o=t.updateLogs;(function(e,t){return P()({method:"POST",url:I+"/logs/",headers:{Authorization:"Bearer ".concat(t.token)},data:{log:{owner:e.owner,title:e.title,content:e.content,language:e.buttonValue}}})})(a.state,s).then((function(e){return a.setState({logId:e.data.log._id}),e})).then((function(e){return o({owner:s,title:a.state.title,content:a.state.content,comments:[],_id:e.data.log._id})})).then((function(){return r.push("/home")})).then((function(){return a.setState({title:"",content:""})})).then((function(){n({heading:"Log Created",message:"Your log has successfully been created.",variant:"success"})})).catch((function(e){n({heading:"Couldn't Create Log",message:"Failed to create log, please double check your input and try again. Error: "+e.message,variant:"danger"})}))},a.state={title:"",content:"",language:"javascript",buttonValue:"Language",placeholder:"// your code here",height:"110px",logId:null,showCreate:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.buttonValue;return t.showCreate?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{id:"createLogHeader",children:"Create Log"}),Object(b.jsxs)(je.a,{className:"languages",children:[Object(b.jsx)(je.a.Toggle,{className:"languages",children:a}),Object(b.jsx)(je.a.Menu,{children:be.map((function(t,n){return Object(b.jsx)(je.a.Item,{onClick:function(){return e.setState({language:t.language,buttonValue:t.buttonValue,placeholder:t.placeholder,height:t.height})},href:"#/javascript",children:t.buttonValue},n)}))})]})]}),Object(b.jsx)("div",{className:"logContainer",children:Object(b.jsxs)(M.a,{onSubmit:this.onCreateLog,children:[Object(b.jsx)(M.a.Group,{controlId:"title",children:Object(b.jsx)(M.a.Control,{required:!0,autoComplete:"off",className:"titleInput",name:"title",value:n,placeholder:"Log Title",onChange:this.handleChange})}),Object(b.jsx)(M.a.Group,{controlId:"content",children:Object(b.jsx)(ee.a,{className:"border codeEditor",style:{minHeight:this.state.height},placeholder:this.state.placeholder,value:this.state.content,onValueChange:function(t){return e.setState({content:t})},highlight:function(e){return Object(te.highlight)(e,te.languages.js)},padding:10})}),Object(b.jsx)(V.a,{className:"logButton",onClick:function(){return e.setState({showCreate:!1})},children:"Cancel"}),Object(b.jsx)(V.a,{className:"logButton",id:"createLogButton",variant:"primary",type:"submit",children:"Create"})]})})]}):Object(b.jsx)(V.a,{className:"logButton",onClick:function(){return e.setState({showCreate:!0})},children:"New Log"})}}]),n}(a.Component),Oe=Object(h.f)(pe),fe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).updateLogs=function(e){a.setState((function(t){return{logs:[e].concat(Object(c.a)(t.logs))}}))},a.state={logs:[],loading:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.msgAlert;(function(e){return P()({method:"GET",url:I+"/home/",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){return e.setState({logs:t.data.logs.reverse()})})).catch((function(e){a({heading:"Couldn't Create Log",message:H+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this.state.logs,t=this.props,n=t.user,a=t.msgAlert;return Object(b.jsxs)("div",{children:[Object(b.jsx)(Oe,{updateLogs:this.updateLogs,msgAlert:a,user:n}),e.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(ge,{msgAlert:a,user:n,log:e,comments:e.comments})},e._id)}))]})}}]),n}(a.Component),ve=n(90),xe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).destroy=function(){var e=a.props,t=e.user,n=e.match,r=e.msgAlert;(function(e,t){return P()({method:"DELETE",url:"".concat(I,"/logs/").concat(t),headers:{Authorization:"Bearer ".concat(e.token)}})})(t,n.params.id).then((function(){r({heading:"Log Deleted",message:"Your log has successfully been deleted.",variant:"success"})})).then((function(){return a.setState({deleted:!0})})).catch((function(e){r({heading:"Couldn't Delete Log",message:"Something went wrong while deleting this log, please refresh and try again. Error: "+e.message,variant:"danger"})}))},a.state={log:null,deleted:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.match,r=t.msgAlert;Z(n,a.params.id).then((function(t){return e.setState({log:t.data.log})})).catch((function(e){r({heading:"Couldn't Create Log",message:"Couldn't find this log. Please refresh the page and try again. Error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this.state,t=e.log,n=e.deleted,a=this.props,r=a.user,s=a.msgAlert,o=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.b,{to:"/logs/".concat(this.props.match.params.id,"/edit"),children:Object(b.jsx)(V.a,{size:"sm",variant:"primary",children:"Edit"})}),Object(b.jsx)(V.a,{size:"sm",variant:"danger",onClick:this.destroy,children:"Delete log"})]});return t?n?Object(b.jsx)(h.a,{to:{pathname:"/home"}}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ge,{msgAlert:s,user:r,log:t,comments:t.comments}),Object(b.jsx)(y.b,{to:"/home",children:Object(b.jsx)(V.a,{size:"sm",className:"btn",children:"Go back"})}),t.owner._id===r._id?o:""]}):Object(b.jsx)(ve.a,{animation:"border",role:"status",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}}]),n}(a.Component),Ce=Object(h.f)(xe),we=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getUserProfile=function(e){if(a._isMounted){var t=a.props,n=t.user,r=t.msgAlert;(function(e,t){return P()({method:"GET",url:"".concat(I).concat(t),headers:{Authorization:"Bearer ".concat(e.token)}})})(n,e).then((function(e){return a.setState({logs:e.data.logs})})).catch((function(e){r({heading:"Couldn't Create Log",message:H+e.message,variant:"danger"})}))}},a.updateLogs=function(e){a.setState((function(t){return{logs:[e].concat(Object(c.a)(t.logs))}}))},a._isMounted=!1,a.state={logs:[],path:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.props.history,n=this.state.path;this.getUserProfile(t.location.pathname),this.setState({path:t.location.pathname}),this.unlisten=t.listen((function(t){var a=t.pathname.split("/")[1];t.pathname!==n&&"profile"===a&&e.getUserProfile(t.pathname)}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.unlisten()}},{key:"render",value:function(){var e=this.state.logs,t=this.props,n=t.user,a=t.msgAlert;return Object(b.jsxs)("div",{children:[Object(b.jsx)(Oe,{updateLogs:this.updateLogs,msgAlert:a,user:n}),e.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(ge,{msgAlert:a,user:n,log:e,comments:e.comments})},e._id)}))]})}}]),n}(a.Component),ye=Object(h.f)(we),Se=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,r=e.variant,s=Object(m.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:r,id:s}])}}))},a.getDeviceSize=function(){a.setState({deviceSize:document.body.clientWidth})},a.state={user:null,deviceSize:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.history,t=JSON.parse(window.localStorage.getItem("user"));window&&(window.addEventListener("resize",this.getDeviceSize),this.setUser(t),e.push("/home"))}},{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,a=t.user,r=t.deviceSize;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(z,{deviceSize:r,user:a}),n.map((function(t){return Object(b.jsx)(v,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(b.jsxs)("main",{className:"container col-sm-12 col-lg-6",children:[Object(b.jsx)(h.b,{path:"/sign-up",render:function(){return Object(b.jsx)(W,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(b.jsx)(h.b,{path:"/sign-in",render:function(){return Object(b.jsx)(Y,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(b.jsx)(O,{user:a,path:"/sign-out",render:function(){return Object(b.jsx)(K,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(b.jsx)(O,{user:a,path:"/change-password",render:function(){return Object(b.jsx)(X,{msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(O,{user:a,exact:!0,path:"/logs/:id/edit",render:function(){return Object(b.jsx)(ae,{msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(O,{user:a,exact:!0,path:"/home",render:function(){return Object(b.jsx)(fe,{msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(O,{user:a,exact:!0,path:"/logs/:id",render:function(){return Object(b.jsx)(Ce,{msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(O,{user:a,exact:!0,path:"/profile/:username",render:function(){return Object(b.jsx)(ye,{msgAlert:e.msgAlert,user:a})}})]})]})}}]),n}(a.Component),ke=Object(h.f)(Se),Ae=Object(b.jsx)(y.a,{basename:"/console-client",children:Object(b.jsx)(ke,{})});o.a.render(Ae,document.getElementById("root"))},68:function(e,t,n){},86:function(e,t,n){},98:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.792f119b.chunk.js.map