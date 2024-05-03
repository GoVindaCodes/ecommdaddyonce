(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[7],{1236:function(e,t,s){"use strict";var a=s(89),r=s.n(a),o=s(1),c=s(62),n=s(46),l=s(127),i=s(104),m=s(8);t.a=()=>{const[e,t]=Object(o.useState)(!1),{dispatch:s}=Object(o.useContext)(l.a),a=Object(n.useHistory)(),d=Object(n.useLocation)(),{register:b,handleSubmit:j,formState:{errors:h}}=Object(c.a)();return{onSubmit:e=>{let{name:o,email:c,verifyEmail:n,password:l,role:b}=e;t(!0);"/login"===d.pathname&&i.a.loginAdmin({email:c,password:l}).then((e=>{e&&e.token&&(console.log("Login response:",e),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),t(!1),Object(m.c)("Login Success!"),s({type:"USER_LOGIN",payload:{token:e.token}}),localStorage.setItem("email",c),a.replace("/"))})).catch((e=>{console.error("Login error:",e),Object(m.b)(e?e.response.data.message:e.message),t(!1)})),"/signup"===d.pathname&&i.a.registerAdmin({name:o,email:c,password:l,role:b}).then((e=>{e&&(t(!1),Object(m.c)("Register Success!"),s({type:"USER_LOGIN",payload:e}),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),a.replace("/"))})).catch((e=>{Object(m.b)(e?e.response.data.message:e.message),t(!1)})),"/forgot-password"===d.pathname&&(console.log("Forgot Password form submitted:",n),i.a.forgetPassword({verifyEmail:n}).then((e=>{t(!1),console.log("Password reset response:",e),Object(m.c)(e.message)})).catch((e=>{t(!1),console.error("Password reset error:",e),Object(m.b)(e?e.response.data.message:e.message)})))},register:b,handleSubmit:j,errors:h,loading:e}}},1243:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(4),o=s(145),c=s(17),n=s(15),l=s(40),i=s.p+"static/media/login-office.c7786a89.jpeg",m=s.p+"static/media/login-office-dark.c7786a89.jpeg",d=s(1236),b=s(127),j=s(46),h=s(8),u=s(18),g=s(1239),x=s(2);t.default=()=>{const{t:e}=Object(o.a)(),{onSubmit:t,register:s,handleSubmit:p,errors:f,loading:O}=Object(d.a)(),{dispatch:w}=Object(a.useContext)(b.a),y=Object(j.useHistory)(),N=Object(j.useLocation)();return Object(a.useEffect)((()=>{const e=localStorage.getItem("email");if(e){const{from:t}=N.state||{from:{pathname:"/"}};y.replace(t),Object(h.c)("Welcome back!"),w({type:"USER_LOGIN",payload:{email:e}})}}),[w,y,N.state]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(x.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(x.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(x.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(x.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:i,alt:"Office"}),Object(x.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:m,alt:"Office"})]}),Object(x.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(x.jsxs)("div",{className:"w-full",children:[Object(x.jsx)("h1",{className:"mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:"Login"}),Object(x.jsxs)("form",{onSubmit:p(t),children:[Object(x.jsx)(n.a,{label:"Email"}),Object(x.jsx)(l.a,{register:s,defaultValue:"",label:"Email",name:"email",type:"email",placeholder:"Enter Your Email....."}),Object(x.jsx)(c.a,{errorName:f.email}),Object(x.jsx)("div",{className:"mt-6"}),Object(x.jsx)(n.a,{label:"Password"}),Object(x.jsx)(l.a,{register:s,defaultValue:"",label:"Password",name:"password",type:"password",placeholder:"***************"}),Object(x.jsx)(c.a,{errorName:f.password}),Object(x.jsx)(r.Button,{disabled:O,type:"submit",className:"mt-4 h-12 w-full",to:"/dashboard",children:e("LoginTitle")}),Object(x.jsx)("hr",{className:"my-10"}),Object(x.jsxs)("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2 md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2",children:[Object(x.jsx)(g.a,{className:"w-4 h-4 mr-2"})," ",Object(x.jsxs)("span",{className:"ml-2",children:[" ",e("LoginWithFacebook")," "]})]}),Object(x.jsxs)("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2  md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full",children:[Object(x.jsx)(g.b,{className:"w-4 h-4 mr-2"})," ",Object(x.jsx)("span",{className:"ml-2",children:e("LoginWithGoogle")})]})]}),Object(x.jsx)("p",{className:"mt-4",children:Object(x.jsx)(u.Link,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/forgot-password",children:e("ForgotPassword")})}),Object(x.jsx)("p",{className:"mt-1",children:Object(x.jsx)(u.Link,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/signup",children:e("CreateAccountTitle")})}),Object(x.jsx)("p",{className:"mt-4",children:Object(x.jsx)("button",{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",onClick:()=>y.push("/forgot-password"),children:e("ForgotPassword")})}),Object(x.jsx)("p",{className:"mt-1",children:Object(x.jsx)("button",{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",onClick:()=>y.push("/signup"),children:e("CreateAccountTitle")})})]})})]})})})})}}}]);
//# sourceMappingURL=7.7e1501bd.chunk.js.map