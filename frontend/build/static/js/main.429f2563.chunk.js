(this.webpackJsonphw5=this.webpackJsonphw5||[]).push([[0],{134:function(e,t,r){},139:function(e,t,r){},144:function(e,t,r){},145:function(e,t,r){},213:function(e,t,r){},214:function(e,t,r){},215:function(e,t,r){},216:function(e,t,r){},217:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(23),c=r.n(a),i=(r(134),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,227)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),s(e),n(e),a(e),c(e)}))}),o=r(22),l=r(34),d=r(20),j=r(24),u=r(25),p=r(27),b=r(26),m=r(9),h=(r(139),r(127)),f=r(103),O="SET_ERROR_REG",x="LOGIN",_="LOGOUT",v="NEW_USER",w="ADD_ARTICLES",y="UPDATE_USER",g="NEW_STATUS",N="ADD_ARTICLES_INIT",C="SHOW_COMMENTS",S="SET_DUMMY",M="SEARCH_BY",U="REMOVE_F",P="ADD_F";function I(e){return{type:S,res:e}}function z(e){return{type:N,new_json:e}}function F(e){return{type:g,new_status:e}}function T(e){return{type:w,json:e}}function D(e){return console.log(e),{type:O,error_msg:e}}var R,A,k,E,L=r(3),G="",Z=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.props.set_dummy(t)}))}},{key:"render",value:function(){var e=this,t=this.props.dummyUsers;return Object(L.jsx)("div",{className:"wrapper_login",children:Object(L.jsxs)("form",{className:"login",onSubmit:function(r){r.preventDefault();var s=function(e){console.log(e);var t=e.findIndex((function(e,t){return e.username===R.value}));return-1===t||A.value===e[t].password?t:-1}(t);s>=0?(h.b.success("Sign in Success\uff01"),e.props.set_error_reg(G),e.props.log_in(s),e.props.history.push("/Main")):(h.b.error("Sign in Failed\uff01"),G="Username or Password wrong",e.props.set_error_reg(G))},children:[Object(L.jsx)("h1",{className:"title_login_page",children:"welcome to folkZone"}),Object(L.jsx)("div",{children:Object(L.jsxs)("div",{className:"wrapper_login_form",children:[Object(L.jsxs)("div",{className:"login_form_item",children:[Object(L.jsx)("label",{htmlFor:"Username",children:"Username:"}),Object(L.jsx)("input",{type:"text",placeholder:"Username",id:"id_username",className:"form-control",required:!0,ref:function(e){R=e}})]}),Object(L.jsxs)("div",{className:"login_form_item",children:[Object(L.jsx)("label",{htmlFor:"Password",children:"Password:"}),Object(L.jsx)("input",{type:"password",placeholder:"Password",name:"password",id:"id_password",className:"form-control",required:!0,ref:function(e){A=e}})]}),Object(L.jsx)("p",{className:"warning_login_page",children:this.props.errorMSG}),Object(L.jsxs)("div",{children:[Object(L.jsx)(f.a,{className:"button_signup",children:Object(L.jsx)(l.b,{to:"/Register",children:"Sign Up"})}),Object(L.jsx)(f.a,{className:"button_signin",type:"primary",id:"id_login_button",htmlType:"submit",children:"Sign In"})]})]})})]})})}}]),r}(s.Component),q=Object(d.g)(Object(o.b)((function(e){return Object(m.a)(Object(m.a)({},e),{},{errorMSG:G})}),(function(e){return{set_dummy:function(t){return e(I(t))},set_error_reg:function(t){return e(D(t))},log_in:function(t){return e(function(e){return{type:x,id:e}}(t))}}}))(Z)),B=(r(144),r(104),{username:"",email:"",tel:"",bday:"",zipCode:"",password:"",passwordc:""}),Y="",V=function(e){return-1!==e.findIndex((function(e,t){if(e.username===B.username.value)return!0}))?(h.b.error("User already existed"),Y="User already existed",!1):B.password.value!==B.passwordc.value?(h.b.error("Password doesn't match"),Y="Passwords doesn't match",!1):function(e){var t=new Date,r=e.split("-"),s=new Date(r[0],r[1],r[2]),n=t.getYear()-s.getYear(),a=0;return(n<18||18===n&&(t.getMonth()<s.getMonth()||t.getMonth()===s.getMonth()&&t.getDay()<s.getDay()))&&(a=1),0===a}(B.bday.value)?(Y="",!0):(h.b.error("Must be 18 years old"),Y="Must be 18 years old",!1)},W=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this,t=this.props.dummyUsers;return Object(L.jsx)("div",{children:Object(L.jsxs)("form",{className:"row g-3",onSubmit:function(r){r.preventDefault(),V(t)?(e.props.set_error_reg(""),e.props.new_user(B),e.props.history.push("/Main")):e.props.set_error_reg(Y)},children:[Object(L.jsx)("h1",{children:"welcome to folkZone"}),Object(L.jsx)("div",{children:Object(L.jsxs)("div",{className:"wrapper_signup_form",children:[Object(L.jsxs)("div",{className:"signup_form_item",children:[Object(L.jsx)("label",{htmlFor:"UsernameR",className:"form-label",children:"Username:"}),Object(L.jsx)("input",{type:"text",placeholder:"Username",id:"usernameR",className:"form-control",required:!0,ref:function(e){B.username=e}})]}),Object(L.jsxs)("div",{className:"signup_form_item",children:[Object(L.jsx)("label",{htmlFor:"phone",className:"form-label",children:"Telephone:"}),Object(L.jsx)("input",{type:"tel",placeholder:"xxx-xxx-xxxx",id:"phone",className:"form-control",pattern:"\\d\\d\\d-\\d\\d\\d-\\d\\d\\d\\d",required:!0,ref:function(e){B.tel=e}})]}),Object(L.jsxs)("div",{className:"signup_form_item",children:[Object(L.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email Add:"}),Object(L.jsx)("input",{type:"email",placeholder:"xxx@xxx.xxx",id:"email",className:"form-control",pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",required:!0,ref:function(e){B.email=e}})]}),Object(L.jsxs)("div",{className:"signup_form_item",children:[Object(L.jsx)("label",{htmlFor:"zipCode",className:"form-label",children:"Zip Code:"}),Object(L.jsx)("input",{type:"text",placeholder:"xxxxx",id:"zipCode",className:"form-control",pattern:"[0-9]{5}",required:!0,ref:function(e){B.zipCode=e}})]}),Object(L.jsxs)("div",{className:"signup_form_item",children:[Object(L.jsx)("label",{htmlFor:"bday",className:"form-label",children:"Birthday:"}),Object(L.jsx)("input",{type:"date",id:"bday",className:"form-control",required:!0,ref:function(e){B.bday=e}})]}),Object(L.jsxs)("div",{className:"signup_form_item",children:[Object(L.jsx)("label",{htmlFor:"PasswordR",className:"form-label",children:"Password:"}),Object(L.jsx)("input",{type:"password",placeholder:"Password",name:"password",id:"passwordR",className:"form-control",required:!0,ref:function(e){B.password=e}})]}),Object(L.jsxs)("div",{className:"signup_form_item",children:[Object(L.jsx)("label",{htmlFor:"PasswordRC",className:"form-label",children:"Password Conformation:"}),Object(L.jsx)("input",{type:"password",placeholder:"Password Conformation",name:"passwordc",id:"passwordRc",className:"form-control",required:!0,ref:function(e){B.passwordc=e}})]}),Object(L.jsx)("p",{className:"badge-warning",children:this.props.errorMSG}),Object(L.jsxs)("div",{children:[Object(L.jsx)(f.a,{className:"button_login",children:Object(L.jsx)(l.b,{to:"/Login",children:"Sign In"})}),Object(L.jsx)(f.a,{className:"button_signup",htmlType:"submit",type:"primary",children:"Sign Up"})]})]})})]})})}}]),r}(s.Component),$=Object(d.g)(Object(o.b)((function(e){return Object(m.a)(Object(m.a)({},e),{},{location:e.location,errorMSG:Y})}),(function(e){return{set_dummy:function(t){return e(I(t))},new_user:function(t){return e(function(e){return{type:v,userInfo:e}}(t))},set_error_reg:function(t){return e(D(t))}}}))(W)),H=r(219),J=r(222),K=r(223),Q=(r(145),r(224)),X={userId:1,id:1,img:"",title:"New Article",body:"New Context"},ee=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e.props.init_articles(t);var r=e.props.articles_to_show;e.props.add_articles(r)}))}},{key:"render",value:function(){var e,t,r,s=this,n=this.props.articles_to_show;return Object(L.jsxs)("div",{children:[Object(L.jsxs)("form",{onSubmit:function(r){X.title=e.value,X.body=t.value,X.author=s.props.username,r.preventDefault(),X.timestamp=Math.floor(Date.now()/1e3);var a=Object(m.a)({},X);console.log(e.value),n.push(a),n.sort(),s.props.add_articles(n)},children:[Object(L.jsx)("label",{children:Object(L.jsx)("b",{children:"New Post Title"})}),Object(L.jsx)("input",{style:{width:"100%"},ref:function(t){e=t}}),Object(L.jsx)("label",{children:Object(L.jsx)("b",{children:"New Post"})}),Object(L.jsx)("input",{rows:4,style:{width:"100%",height:"100px"},ref:function(e){t=e}}),Object(L.jsx)(H.a,{children:Object(L.jsx)(f.a,{icon:Object(L.jsx)(Q.a,{}),style:{marginTop:"5px"},children:"Upload image"})}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(K.a,{span:2,offset:18,children:Object(L.jsx)(f.a,{type:"primary",htmlType:"reset",danger:!0,style:{width:"100px",float:"right",marginTop:"5px"},children:"Cancel"})}),Object(L.jsx)(K.a,{span:2,offset:1,children:Object(L.jsx)(f.a,{type:"primary",htmlType:"submit",style:{width:"100px",float:"right",marginTop:"5px"},children:"Submit"})})]})]}),Object(L.jsx)("input",{style:{width:"100%",marginTop:"20px"},ref:function(e){r=e}}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(K.a,{span:2,offset:18}),Object(L.jsx)(K.a,{span:2,offset:1,children:Object(L.jsx)(f.a,{type:"primary",style:{width:"100px",float:"right",marginTop:"10px"},onClick:function(){return s.props.search_by(r)},children:"Search"})})]}),this.props.articles.map((function(e,t){return Object(L.jsxs)("div",{className:"articleRow",children:[Object(L.jsxs)(J.a,{children:[Object(L.jsx)(K.a,{span:10,className:"articleimg",children:Object(L.jsx)("img",{src:e.img})}),Object(L.jsxs)(K.a,{span:10,className:"articletxt",children:[Object(L.jsx)("b",{children:e.title}),Object(L.jsx)("br",{}),e.author,Object(L.jsx)("br",{}),e.body]})]}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(K.a,{span:2,offset:18,children:Object(L.jsx)(f.a,{type:"primary",danger:!0,style:{width:"100px"},children:"Edit"})}),Object(L.jsx)(K.a,{span:2,offset:1,children:Object(L.jsx)(f.a,{type:"primary",style:{width:"100px"},onClick:function(){return s.props.show_comments_vis()},children:"Comment"})})]}),Object(L.jsx)(J.a,{children:s.props.show_comments&&Object(L.jsx)("div",{children:Object(L.jsx)("ol",{children:e.comments.map((function(e,t){return Object(L.jsx)("li",{children:e},t)}))})})})]},t)}))]})}}]),r}(s.Component),te=Object(o.b)((function(e){return Object(m.a)(Object(m.a)({},e),{},{articles:e.articles,show_comments:e.show_comments})}),(function(e){return{init_articles:function(t){return e(z(t))},add_articles:function(t){return e(T(t))},search_by:function(t){return e(function(e){return{type:M,val:e}}(t))},show_comments_vis:function(){return e({type:"SHOW_COMMENTS"})}}}))(ee),re=r(221),se=(r(213),function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return Object(L.jsxs)("div",{className:"account",children:[Object(L.jsx)(J.a,{className:"title",children:"Following"}),Object(L.jsx)("div",{className:"inner",children:Object(L.jsxs)(J.a,{style:{marginTop:"10px"},children:[Object(L.jsx)(K.a,{span:14,children:Object(L.jsx)("input",{placeholder:"Find User",type:"text",ref:function(e){k=e}})}),Object(L.jsx)(K.a,{span:8,offset:1,className:"button_followuser",children:Object(L.jsx)(f.a,{type:"primary",onClick:function(){return e.props.add_f(k.value)},value:"Add",children:"Add Follower"})})]})}),this.props.following.map((function(t,r){return Object(L.jsx)("div",{className:"inner followItem",children:Object(L.jsxs)(J.a,{children:[Object(L.jsx)(K.a,{span:8,className:"inner_ava",children:Object(L.jsx)(re.a,{size:90,src:e.props.avatar})}),Object(L.jsxs)(K.a,{span:14,offset:1,className:"inner_txt",children:[Object(L.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(L.jsx)("b",{children:e.props.dummyUsers[t-1].name}),Object(L.jsx)("br",{}),Object(L.jsx)("span",{children:e.props.dummyUsers[t-1].company.catchPhrase})]}),Object(L.jsx)(f.a,{onClick:function(){return e.props.remove_f(t)},children:"Unfollow"})]})]})})}))]})}}]),r}(s.Component)),ne=Object(o.b)((function(e){return Object(m.a)({},e)}),(function(e){return{remove_f:function(t){return e(function(e){return{type:U,follow:e}}(t))},add_f:function(t){return e(function(e){return{type:P,add_follow:e}}(t))}}}))(se),ae=r(220),ce=r(225),ie=r(226),oe=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(L.jsxs)(ae.a,{mode:"horizontal",children:[Object(L.jsx)(ae.a.Item,{icon:Object(L.jsx)(ce.a,{}),children:Object(L.jsx)(l.b,{to:"/Profile",children:"Profile"})},"profile_page"),Object(L.jsx)(ae.a.Item,{icon:Object(L.jsx)(ie.a,{}),children:Object(L.jsx)(l.b,{to:"/Login",children:"Log Out"})},"login_page")]})}}]),r}(s.Component),le=Object(o.b)((function(e){return Object(m.a)({},e)}),(function(e){return{}}))(oe),de=(r(214),function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e.props.init_articles(t);var r=e.props.articles_to_show;e.props.add_articles(r)}))}},{key:"render",value:function(){var e=this;return Object(L.jsxs)("div",{className:"account",children:[Object(L.jsx)(J.a,{className:"title",children:"Account"}),Object(L.jsxs)("div",{className:"inner",children:[Object(L.jsxs)(J.a,{children:[Object(L.jsx)(K.a,{span:8,className:"inner_ava",children:Object(L.jsx)(re.a,{size:120,src:this.props.avatar})}),Object(L.jsxs)(K.a,{span:14,offset:1,className:"inner_txt",children:[Object(L.jsx)("h3",{children:this.props.username}),Object(L.jsx)("span",{children:this.props.userStatus})]})]}),Object(L.jsxs)(J.a,{style:{marginTop:"10px"},children:[Object(L.jsx)(K.a,{span:14,children:Object(L.jsx)("input",{className:"input-group-lg",type:"text",placeholder:"New Status",id:"status",ref:function(e){E=e}})}),Object(L.jsx)(K.a,{span:8,offset:1,className:"updatestatus",children:Object(L.jsx)(f.a,{type:"button",onClick:function(){return e.props.change_status(E.value)},children:"Update Status"})})]})]})]})}}]),r}(s.Component)),je=Object(o.b)((function(e){return Object(m.a)({},e)}),(function(e){return{nav_landing:function(){return e({type:"NAV_LANDING"})},nav_profile:function(){return e({type:"NAV_PROFILE"})},change_status:function(t){return e(F(t))},init_articles:function(t){return e(z(t))},add_articles:function(t){return e(T(t))}}}))(de),ue=(r(215),function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e.props.init_articles(t);var r=e.props.articles_to_show;e.props.add_articles(r)}))}},{key:"render",value:function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(le,{}),Object(L.jsx)("center",{children:Object(L.jsx)("h1",{children:"Main Page"})}),Object(L.jsx)("div",{children:Object(L.jsxs)(J.a,{children:[Object(L.jsxs)(K.a,{span:6,children:[Object(L.jsx)(je,{}),Object(L.jsx)(ne,{})]}),Object(L.jsx)(K.a,{span:17,offset:1,children:Object(L.jsx)(te,{})})]})})]})}}]),r}(s.Component)),pe=Object(o.b)((function(e){return Object(m.a)({},e)}),(function(e){return{change_status:function(t){return e(F(t))},init_articles:function(t){return e(z(t))},add_articles:function(t){return e(T(t))}}}))(ue),be=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(L.jsxs)(ae.a,{mode:"horizontal",children:[Object(L.jsx)(ae.a.Item,{icon:Object(L.jsx)(ce.a,{}),children:Object(L.jsx)(l.b,{to:"/Main",children:"Main Page"})},"profile_page"),Object(L.jsx)(ae.a.Item,{icon:Object(L.jsx)(ie.a,{}),children:Object(L.jsx)(l.b,{to:"/Login",children:"Log Out"})},"login_page")]})}}]),r}(s.Component),me=Object(o.b)((function(e){return Object(m.a)({},e)}),(function(e){return{}}))(be),he=(r(216),{username:"",email:"",tel:"",bday:"",zipCode:"",password:"",passwordc:""}),fe="",Oe=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return Object(L.jsxs)("div",{children:[Object(L.jsx)(me,{}),Object(L.jsx)("center",{children:Object(L.jsx)("h1",{className:"card-header",children:"Profile Page"})}),Object(L.jsxs)(J.a,{children:[Object(L.jsxs)(K.a,{span:12,className:"colbox",children:[Object(L.jsx)("div",{className:"userImg",children:Object(L.jsx)(re.a,{size:90,src:this.props.avatar})}),Object(L.jsx)("div",{className:"leftUpload",children:Object(L.jsx)(H.a,{children:Object(L.jsx)(f.a,{icon:Object(L.jsx)(Q.a,{}),children:"Click to Upload"})})}),Object(L.jsx)("form",{onSubmit:function(t){t.preventDefault(),xe()?(e.props.set_error_reg(""),e.props.update_user(he)):e.props.set_error_reg(fe)},children:Object(L.jsxs)("div",{className:"wrapper_profile_form",children:[Object(L.jsxs)("div",{className:"profile_form_item",children:[Object(L.jsx)("label",{htmlFor:"UsernameR",className:"form-label",children:"Username:"}),Object(L.jsx)("input",{type:"text",placeholder:"username",id:"usernameR",className:"form-control",ref:function(e){he.username=e}})]}),Object(L.jsxs)("div",{className:"profile_form_item",children:[Object(L.jsx)("label",{htmlFor:"phone",className:"form-label",children:"Telephone:"}),Object(L.jsx)("input",{type:"tel",placeholder:"xxx-xxx-xxxx",id:"phone",className:"form-control",pattern:"\\d\\d\\d-\\d\\d\\d-\\d\\d\\d\\d",ref:function(e){he.tel=e}})]}),Object(L.jsxs)("div",{className:"profile_form_item",children:[Object(L.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email:"}),Object(L.jsx)("input",{type:"email",placeholder:"xx@xx.xxx",id:"email",className:"form-control",pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",ref:function(e){he.email=e}})]}),Object(L.jsxs)("div",{className:"profile_form_item",children:[Object(L.jsx)("label",{htmlFor:"zipCode",className:"form-label",children:"ZipCode:"}),Object(L.jsx)("input",{type:"text",placeholder:"xxxxx",id:"zipCode",className:"form-control",pattern:"[0-9]{5}",ref:function(e){he.zipCode=e}})]}),Object(L.jsxs)("div",{className:"profile_form_item",children:[Object(L.jsx)("label",{htmlFor:"bday",className:"form-label",children:"Birthday:"}),Object(L.jsx)("input",{type:"date",id:"bday",className:"form-control",ref:function(e){he.bday=e}})]}),Object(L.jsxs)("div",{className:"profile_form_item",children:[Object(L.jsx)("label",{htmlFor:"PasswordR",className:"form-label",children:"Password:"}),Object(L.jsx)("input",{type:"password",placeholder:"Password",name:"password",id:"passwordR",className:"form-control",ref:function(e){he.password=e}})]}),Object(L.jsxs)("div",{className:"profile_form_item",children:[Object(L.jsx)("label",{htmlFor:"PasswordRC",className:"form-label",children:"Password Conformation:"}),Object(L.jsx)("input",{type:"password",placeholder:"Password Conformation",name:"passwordc",id:"passwordRc",className:"form-control",ref:function(e){he.passwordc=e}})]}),Object(L.jsx)("br",{}),Object(L.jsxs)("p",{className:"badge-warning",children:[" ",this.props.errorMSG," "]}),Object(L.jsx)("div",{className:"profile_form_item",children:Object(L.jsx)(f.a,{type:"primary",htmlType:"submit",danger:!0,style:{width:"150px"},children:"Update"})})]})})]}),Object(L.jsx)(K.a,{span:12,className:"colbox",children:Object(L.jsxs)("div",{className:"wrapper_profile_form_left",children:[Object(L.jsx)("div",{className:"profile_form_item",children:this.props.username}),Object(L.jsx)("div",{className:"profile_form_item",children:this.props.tel}),Object(L.jsx)("div",{className:"profile_form_item",children:this.props.email}),Object(L.jsx)("div",{className:"profile_form_item",children:this.props.zipCode}),Object(L.jsx)("div",{className:"profile_form_item",children:this.props.bday}),Object(L.jsx)("div",{className:"profile_form_item",children:"*".repeat(this.props.password.length)})]})})]})]})}}]),r}(s.Component),xe=function(){return he.password.value!==he.passwordc.value?(h.b.error("Passwords doesn't match"),fe="Passwords doesn't match",!1):function(e){var t=new Date,r=e.split("-"),s=new Date(r[0],r[1],r[2]),n=t.getYear()-s.getYear(),a=0;return(n<18||18===n&&(t.getMonth()<s.getMonth()||t.getMonth()===s.getMonth()&&t.getDay()<s.getDay()))&&(a=1),0===a}(he.bday.value)?(fe="",!0):(h.b.error("Must older than 18"),fe="Must older than 18",!1)},_e=Object(o.b)((function(e){return Object(m.a)(Object(m.a)({},e),{},{errorMSG:fe})}),(function(e){return{nav_main:function(){return e({type:"NAV_MAIN"})},set_error_reg:function(t){return e(D(t))},update_user:function(t){return e(function(e){return{type:y,userInfo_profile:e}}(t))}}}))(Oe),ve=r(126),we=r(125),ye={username:"dummyUser",avatar:"",id:1,password:"",email:"",tel:"",bday:"",zipCode:"",errorMSG:"",userStatus:"initial status",following:[1],articles:[],articles_to_show:[],dummyUsers:[]};var ge=Object(we.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(m.a)(Object(m.a)({},e),{},{errorMSG:t.error_msg});case x:var r=e.dummyUsers;return Object(m.a)(Object(m.a)({},e),{},{avatar:r[t.id].avatar,username:r[t.id].username,id:t.id+1,password:r[t.id].password,email:r[t.id].email,tel:r[t.id].phone,bday:"1999-09-19",zipCode:r[t.id].address.zipcode,errorMSG:"",userStatus:r[t.id].company.catchPhrase,following:[(t.id+1)%10+1,(t.id+2)%10+1,(t.id+3)%10+1]});case _:return Object(m.a)(Object(m.a)({},e),{},{username:"dummyUser",avatar:"",id:20,password:"",email:"",tel:"",bday:"",zipCode:"",errorMSG:"",userStatus:"initial status",following:[1],articles:[],articles_to_show:[],dummyUsers:[]});case P:for(var s=[],n=0;n<e.following.length;n++)s.push(e.following[n]);var a=parseInt(t.add_follow);s.push(a);for(var c=[],i=0;i<e.articles_to_show.length;i++)(e.articles_to_show[i].userId===e.id||s.includes(e.articles_to_show[i].userId))&&c.push(e.articles_to_show[i]);return Object(m.a)(Object(m.a)({},e),{},{following:s,articles:c});case U:for(var o=[],l=0;l<e.following.length;l++)e.following[l]!==t.follow&&o.push(e.following[l]);for(var d=[],j=0;j<e.articles.length;j++)e.articles[j].userId!==t.follow&&d.push(e.articles[j]);return Object(m.a)(Object(m.a)({},e),{},{following:o,articles:d});case v:var u=t.userInfo;return Object(m.a)(Object(m.a)({},e),{},{username:u.username.value,password:u.password.value,email:u.email.value,tel:u.tel.value,bday:u.bday.value,zipCode:u.zipCode.value});case S:for(var p=[],b=0;b<t.res.length;b++)t.res[b].avatar="https://joeschmoe.io/api/v1/random",t.res[b].password=t.res[b].address.street,p.push(t.res[b]);return Object(m.a)(Object(m.a)({},e),{},{dummyUsers:p});case y:var h=e.username,f=e.password,I=e.email,z=e.tel,F=e.bday,T=e.zipCode,D=t.userInfo_profile;return""!==D.username.value&&(h=D.username.value),""!==D.password.value&&(f=D.password.value),""!==D.email.value&&(I=D.email.value),""!==D.tel.value&&(z=D.tel.value),""!==D.zipCode.value&&(T=D.zipCode.value),Object(m.a)(Object(m.a)({},e),{},{username:h,password:f,email:I,tel:z,bday:F,zipCode:T});case g:return Object(m.a)(Object(m.a)({},e),{},{userStatus:t.new_status});case N:for(var R=[],A=0;A<t.new_json.length;A++)t.new_json[A].img="https://picsum.photos/seed/picsum/400/200",t.new_json[A].timestamp=1111111111,t.new_json[A].author=e.dummyUsers[t.new_json[A].userId-1].name,t.new_json[A].comments=["Comment1","Comment2"],R.push(t.new_json[A]);return Object(m.a)(Object(m.a)({},e),{},{articles_to_show:R});case C:var k=e.show_comments;return Object(m.a)(Object(m.a)({},e),{},{show_comments:!k});case M:for(var E=[],L=0;L<e.articles.length;L++)(e.articles[L].author.includes(t.val.value)||e.articles[L].title.includes(t.val.value)||e.articles[L].body.includes(t.val.value))&&E.push(e.articles[L]);return Object(m.a)(Object(m.a)({},e),{},{articles:E});case w:for(var G=[],Z=[],q=0;q<t.json.length;q++)Z.push(t.json[q]),(t.json[q].userId===e.id||e.following.includes(t.json[q].userId))&&G.push(t.json[q]);return G.sort((function(e,t){var r=e.timestamp,s=t.timestamp;return r<s?1:r>s?-1:0})),Object(m.a)(Object(m.a)({},e),{},{articles:G,articles_to_show:Z})}return e})),Ne=ge,Ce=Object(ve.a)();c.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(o.a,{store:Ne,children:Object(L.jsx)(l.a,{history:Ce,children:Object(L.jsxs)(d.d,{children:[Object(L.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(L.jsx)(d.a,{to:"/Login"})}}),Object(L.jsx)(d.b,{exact:!0,path:"/Login",children:Object(L.jsx)(q,{})}),Object(L.jsx)(d.b,{exact:!0,path:"/Register",children:Object(L.jsx)($,{})}),Object(L.jsx)(d.b,{exact:!0,path:"/Main",children:Object(L.jsx)(pe,{})}),Object(L.jsx)(d.b,{exact:!0,path:"/Profile",children:Object(L.jsx)(_e,{})})]})})})}),document.getElementById("root")),i()}},[[217,1,2]]]);
//# sourceMappingURL=main.429f2563.chunk.js.map