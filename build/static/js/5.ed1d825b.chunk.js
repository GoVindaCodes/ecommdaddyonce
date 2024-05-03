(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[5],{1236:function(e,s,a){"use strict";var t=a(89),r=a.n(t),o=a(1),c=a(62),i=a(46),l=a(127),n=a(104),d=a(8);s.a=()=>{const[e,s]=Object(o.useState)(!1),{dispatch:a}=Object(o.useContext)(l.a),t=Object(i.useHistory)(),m=Object(i.useLocation)(),{register:b,handleSubmit:g,formState:{errors:j}}=Object(c.a)();return{onSubmit:e=>{let{name:o,email:c,verifyEmail:i,password:l,role:b}=e;s(!0);"/login"===m.pathname&&n.a.loginAdmin({email:c,password:l}).then((e=>{e&&e.token&&(console.log("Login response:",e),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),s(!1),Object(d.c)("Login Success!"),a({type:"USER_LOGIN",payload:{token:e.token}}),localStorage.setItem("email",c),t.replace("/"))})).catch((e=>{console.error("Login error:",e),Object(d.b)(e?e.response.data.message:e.message),s(!1)})),"/signup"===m.pathname&&n.a.registerAdmin({name:o,email:c,password:l,role:b}).then((e=>{e&&(s(!1),Object(d.c)("Register Success!"),a({type:"USER_LOGIN",payload:e}),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),t.replace("/"))})).catch((e=>{Object(d.b)(e?e.response.data.message:e.message),s(!1)})),"/forgot-password"===m.pathname&&(console.log("Forgot Password form submitted:",i),n.a.forgetPassword({verifyEmail:i}).then((e=>{s(!1),console.log("Password reset response:",e),Object(d.c)(e.message)})).catch((e=>{s(!1),console.error("Password reset error:",e),Object(d.b)(e?e.response.data.message:e.message)})))},register:b,handleSubmit:g,errors:j,loading:e}}},1237:function(e,s,a){"use strict";s.a=a.p+"static/media/forgot-password-office.d1630a33.jpeg"},1238:function(e,s,a){"use strict";s.a=a.p+"static/media/forgot-password-office-dark.d1630a33.jpeg"},1240:function(e,s,a){"use strict";a.r(s);a(1);var t=a(31),r=a(4),o=a(17),c=a(1236),i=a(15),l=a(40),n=a(1237),d=a(1238),m=a(2);s.default=()=>{const{onSubmit:e,register:s,handleSubmit:a,errors:b,loading:g}=Object(c.a)();return Object(m.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(m.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(m.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(m.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(m.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:n.a,alt:"Office"}),Object(m.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:d.a,alt:"Office"})]}),Object(m.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(m.jsxs)("div",{className:"w-full",children:[Object(m.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Forgot password"}),Object(m.jsxs)("form",{onSubmit:a(e),children:[Object(m.jsx)(i.a,{label:"Email"}),Object(m.jsx)(l.a,{register:s,label:"Email",name:"verifyEmail",type:"email",placeholder:"john@doe.com"}),Object(m.jsx)(o.a,{errorName:b.verifyEmail}),Object(m.jsx)(r.Button,{disabled:g,type:"submit",block:!0,className:"mt-4 h-12",children:"Recover password"})]}),Object(m.jsx)("p",{className:"mt-4",children:Object(m.jsx)(t.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:"Already have an account? Login"})})]})})]})})})}}}]);
//# sourceMappingURL=5.ed1d825b.chunk.js.map