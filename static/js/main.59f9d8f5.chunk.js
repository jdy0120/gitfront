(this.webpackJsonpgitfront=this.webpackJsonpgitfront||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),s=n.n(r),o=n(6),i=n(58),u=n(30),l=n(12),j=n(153),b=n(150),p=n(10),d=n.n(p),h=n(15),O=n(78),x=n(69),f=n(70),m=n(20),g=n.n(m),v=n(143),k=n(4),y=function(e){var t=e.history,n=Object(v.a)(),c={headers:{"Context-Type":"application/json",loginToken:Object(o.a)(n,1)[0].loginToken}},r=function(){var e=Object(h.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Calendar",c);case 3:n=e.sent,console.log(n),e.next=21;break;case 7:e.prev=7,e.t0=e.catch(0),a=e.t0.response,e.t1=a.data,e.next="Access Denied"===e.t1?13:"Not valid Token"===e.t1?16:19;break;case 13:return alert("\uc811\uadfc\uc774 \uc81c\ud55c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),t.push("/gitfront"),e.abrupt("break",21);case 16:return alert("\uc62c\ubc14\ub978 \ud1a0\ud070\uc774 \uc544\ub2d9\ub2c8\ub2e4."),t.push("/gitfront"),e.abrupt("break",21);case 19:return alert(a.data),e.abrupt("break",21);case 21:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(k.jsx)(O.a,{plugins:[f.a,x.a],initialView:"dayGridMonth",dateClick:function(e){return alert(e.dateStr)}})},w=n(71),C=function(e){var t=e.toString().replace(/([0-9]{4})([0-9]{2})([0-9]{2})/,"$1-$2-$3"),n=new Date(t);return console.log(),t+", "+["\uc77c\uc694\uc77c","\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c"][n.getDay()]},S=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("2021"),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(a.useState)([]),j=Object(o.a)(l,2),b=j[0],p=j[1],O=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),t={headers:{"Context-Type":"application/json"},body:{year:i}},e.next=4,g.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas",t);case 4:return n=e.sent,e.next=7,n.data.holidayList.item;case 7:return a=e.sent,e.t0=p,e.next=11,a;case 11:e.t1=e.sent,(0,e.t0)(e.t1),c(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),Object(k.jsx)(k.Fragment,{children:n?Object(k.jsx)(w.HeartSpinner,{size:30,color:"#bd2f1c",loading:n}):Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{id:"year",type:"number",placeholder:"\uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",onChange:function(e){u(e.target.value)}}),Object(k.jsx)("button",{onClick:O,children:"\ucc3e\uae30!"}),"undefined"==typeof b?Object(k.jsx)("p",{children:"\ud734\uc77c\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}):Object(k.jsx)("ul",{style:{listStyle:"none"},children:b.map((function(e,t){return Object(k.jsxs)("li",{children:[e.dateName,"(",C(e.locdate),")"]},t)}))})]})})},E=Object(a.memo)(S),T=function(e){return{headers:{"Context-Type":"application/json"},body:{location:e}}},D=function(){var e=Object(a.useState)("Seoul"),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(o.a)(r,2),i=s[0],u=s[1],l=function(){var e=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Weather",T(n));case 3:t=e.sent,u(t.data),e.next=20;break;case 7:e.prev=7,e.t0=e.catch(0),u(void 0),a=e.t0.response,e.t1=a.data,e.next="Not exist area"===e.t1?14:"Request path contains unescaped characters"===e.t1?16:18;break;case 14:return alert("\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc9c0\uc5ed\uc785\ub2c8\ub2e4."),e.abrupt("break",20);case 16:return alert("\uc601\uc5b4\ub85c \uc801\uc5b4\uc8fc\uc138\uc694."),e.abrupt("break",20);case 18:return alert(a.data),e.abrupt("break",20);case 20:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)}}),Object(k.jsx)("button",{onClick:function(e){l()},children:"\ucc3e\uae30"}),i?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("p",{children:["\uc9c0\uc5ed : ",i.country_name]}),Object(k.jsxs)("p",{children:["\uc628\ub3c4 : ",Math.floor(i.temp-273.15)]}),Object(k.jsxs)("p",{children:["\uccb4\uac10 \uc628\ub3c4 : ",Math.floor(i.feels_like-273.15)]})]}):Object(k.jsx)("div",{children:"\uc5c6\ub294 \uc9c0\uc5ed\uc785\ub2c8\ub2e4."})]})},F=n(144),I=n(152);function M(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var z=Object(F.a)((function(e){return Object(I.a)({paper:{alignItems:"center",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),N=function(e){var t=e.setOpenLoginModal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),l=u[0],j=u[1],b=Object(a.useState)(""),p=Object(o.a)(b,2),O=p[0],x=p[1],f=Object(a.useState)(M),m=Object(o.a)(f,1)[0],v=z(),y={headers:{"Context-Type":"application/json"},body:{name:r,email:l,pw:O}},w=function(){var e=Object(h.a)(d.a.mark((function e(n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,g.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/register",y);case 4:return e.next=6,g.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/login",y,{withCredentials:!0});case 6:t(!1),window.location.reload(),e.next=20;break;case 10:e.prev=10,e.t0=e.catch(1),a=e.t0.response,e.t1=a.data,e.next="Duplicated email"===e.t1?16:18;break;case 16:return alert("\uc911\ubcf5\ub41c \uc774\uba54\uc77c \uc785\ub2c8\ub2e4."),e.abrupt("break",20);case 18:return alert(a),e.abrupt("break",20);case 20:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)("div",{style:m,className:v.paper,children:Object(k.jsxs)("form",{action:"/",onSubmit:w,children:["name : ",Object(k.jsx)("input",{type:"text",placeholder:"\uc774\ub984",onChange:function(e){s(e.target.value)},required:!0}),Object(k.jsx)("br",{}),"email : ",Object(k.jsx)("input",{type:"email",placeholder:"\uc774\uba54\uc77c",onChange:function(e){j(e.target.value)},required:!0}),Object(k.jsx)("br",{}),"password : ",Object(k.jsx)("input",{type:"text",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:function(e){x(e.target.value)},required:!0}),Object(k.jsx)("br",{}),Object(k.jsx)("button",{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})]})})};function A(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var B=Object(F.a)((function(e){return Object(I.a)({paper:{alignItems:"center",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),L=function(e){var t=e.setOpenLoginModal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),l=u[0],j=u[1],b=Object(a.useState)(A),p=Object(o.a)(b,1)[0],O=Object(a.useState)(!1),x=Object(o.a)(O,2),f=x[0],m=x[1],y=Object(v.a)(),w=Object(o.a)(y,3),C=(w[0],w[1]),S=(w[2],B()),E={header:{"Context-Type":"application/json"},body:{email:r,pw:l}},T=function(){var e=Object(h.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/login",E,{withCredentials:!0});case 3:n=e.sent,t(!1),C("loginToken",n.data.loginToken,{path:"/",maxAge:n.data.maxAge}),C("name",n.data.name,{path:"/",maxAge:n.data.maxAge}),console.log("logged in"),window.location.reload(),e.next=23;break;case 11:e.prev=11,e.t0=e.catch(0),a=e.t0.response,e.t1=a.data,e.next="Not valid email"===e.t1?17:"Not valid password"===e.t1?19:21;break;case 17:return alert("\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc774\uba54\uc77c \uc785\ub2c8\ub2e4."),e.abrupt("break",23);case 19:return alert("\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4."),e.abrupt("break",23);case 21:return alert(a),e.abrupt("break",23);case 23:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsx)(k.Fragment,{children:f?Object(k.jsx)(N,{setOpenLoginModal:t}):Object(k.jsxs)("div",{style:p,className:S.paper,children:["email : ",Object(k.jsx)("input",{type:"text",placeholder:"\uc774\uba54\uc77c",onChange:function(e){s(e.target.value)}}),Object(k.jsx)("br",{}),"password : ",Object(k.jsx)("input",{type:"password",placeholder:"\ud328\uc2a4\uc6cc\ub4dc",onChange:function(e){j(e.target.value)}}),Object(k.jsx)("br",{}),Object(k.jsx)("button",{onClick:T,children:"\ub85c\uadf8\uc778"}),Object(k.jsx)("button",{onClick:function(e){m(!0)},children:"\ud68c\uc6d0\uac00\uc785"})]})})},q=n(148),V=n(151),W=function(){var e=Object(a.useState)({hour:0,minute:0,seconds:0}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=function(){var e=new Date;c({hour:e.getHours(),minute:e.getMinutes(),seconds:e.getSeconds()})};return Object(a.useEffect)((function(){setInterval(r,1e3)}),[]),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\ud604\uc7ac \uc2dc\uac04\uc740"}),Object(k.jsxs)("p",{children:[n.hour,"\uc2dc ",n.minute,"\ubd84 ",n.seconds,"\ucd08 \uc785\ub2c8\ub2e4."]}),n.hour+":"+n.minute+":"+n.seconds<"19:30:00"?Object(k.jsx)("p",{children:"\ud558\uc9c0\ub9cc \ub3c4\uc5f0\uc774\uc758 \ud1f4\uadfc \uc2dc\uac04\uc740 19\uc2dc 30\ubd84 0\ucd08 \uc785\ub2c8\ub2e4."}):Object(k.jsx)("p",{children:"\ub3c4\uc5f0\uc774\ub294 19\uc2dc 30\ubd84\uc5d0 \ud1f4\uadfc\ud588\uc2b5\ub2c8\ub2e4."})]})},$=Object(a.memo)(W),H=function(e){var t=e.friend,n=e.canChange,c=e.setCanChange,r=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:document.getElementById("name").value.toString(),age:parseInt(document.getElementById("age").value.toString()),nickname:document.getElementById("nickname").value.toString()},n={headers:{"Context-Type":"application/json"},body:{friendInfo:t}},e.next=4,g.a.put("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/insertFriend",n);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:c(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){}),[]),Object(k.jsx)("div",{children:!1===n?Object(k.jsx)("button",{onClick:function(){c(!0)},children:"\ubcc4\uba85\uc744 \ubc14\uafb8\uac70\ub098 \ucd94\uac00\ud558\uace0 \uc2f6\uc5b4\uc694."}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("p",{children:"\uc774\ub984 : "}),Object(k.jsx)("input",{type:"text",id:"name",defaultValue:t.name}),Object(k.jsx)("p",{children:"\ub098\uc774 : "}),Object(k.jsx)("input",{type:"number",id:"age"}),Object(k.jsx)("p",{children:"\ubcc4\uba85 : "}),Object(k.jsx)("input",{type:"text",id:"nickname",defaultValue:t.nickname}),Object(k.jsx)("button",{onClick:s,children:"\ud655\uc778!"})]})})},J=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(a.useState)({idx:0,name:"",age:0,nickname:""}),j=Object(o.a)(l,2),b=j[0],p=j[1],O=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Friends");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("name"),0!==(a=n.filter((function(e){return e.name===t.value}))).length?p(a[0]):p({idx:-1,name:t.value,age:-1,nickname:"\ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return O(),function(){}}),[i]),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"text",id:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(k.jsx)("button",{type:"submit",onClick:x,children:"\ucc3e\uae30!"}),0===b.idx?Object(k.jsx)("h1",{children:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}):Object(k.jsxs)("div",{children:[Object(k.jsxs)("p",{children:["\uc774\ub984 : ",b.name]}),Object(k.jsxs)("p",{children:["\ub098\uc774 : ",b.age]}),Object(k.jsxs)("p",{children:["\ubcc4\uba85 : ",b.nickname]}),Object(k.jsx)(H,{friend:b,canChange:i,setCanChange:u})]})]})})},R=Object(a.memo)(J),_=c.a.forwardRef((function(e,t){return Object(k.jsx)("span",Object(i.a)(Object(i.a)({},e),{},{ref:t,children:e.children}))})),G={textDecoration:"none",color:"green"};var K=function(){var e=Object(v.a)(["loginToken"]),t=Object(o.a)(e,3),n=t[0],c=(t[1],t[2],Object(a.useState)(!1)),r=Object(o.a)(c,2),s=r[0],i=r[1],p=Object(a.useState)(null),d=Object(o.a)(p,2),h=d[0],O=d[1],x=function(){O(null)};return Object(a.useEffect)((function(){}),[s]),Object(k.jsxs)("div",{style:{textAlign:"center"},children:[n.name?Object(k.jsxs)("p",{children:[n.name,"\ub2d8 \ud658\uc601\ud569\ub2c8\ub2e4."]}):Object(k.jsx)(j.a,{color:"primary",onClick:function(){i(!0)},children:"\ub85c\uadf8\uc778"}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(j.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){O(e.currentTarget)},children:"Open Menu"}),Object(k.jsx)(b.a,{open:s,onClose:function(){i(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(k.jsx)(_,{children:Object(k.jsx)(L,{setOpenLoginModal:i})})}),Object(k.jsxs)(q.a,{id:"simple-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:x,children:[Object(k.jsx)(V.a,{onClick:x,children:Object(k.jsx)(u.b,{style:G,to:"/nowtime",children:"\ud604\uc7ac\uc2dc\uac04\uc744 \ud655\uc778\ud558\uc138\uc694"})}),Object(k.jsx)(V.a,{onClick:x,children:Object(k.jsx)(u.b,{style:G,to:"/profile",children:"\uce5c\uad6c\ub4e4\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694"})}),Object(k.jsx)(V.a,{onClick:x,children:Object(k.jsx)(u.b,{style:G,to:"/showholiday",children:"\uc774\ubc88\ub144\ub3c4 \ud734\uc77c\uc744 \uc54c\uc544\ubcf4\uc138\uc694"})}),Object(k.jsx)(V.a,{onClick:x,children:Object(k.jsx)(u.b,{style:G,to:"/showWeather",children:"\ud604\uc7ac \ub0a0\uc528\ub97c \ubcf4\uace0 \uc2f6\uc5b4\uc694"})}),Object(k.jsx)(V.a,{onClick:x,children:Object(k.jsx)(u.b,{style:G,to:"calendar",children:"\uce98\ub9b0\ub354"})})]}),Object(k.jsx)("hr",{}),Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{path:"/nowtime",exact:!0,component:$}),Object(k.jsx)(l.a,{path:"/profile",exact:!0,component:R}),Object(k.jsx)(l.a,{path:"/showholiday",exact:!0,component:E}),Object(k.jsx)(l.a,{path:"/showWeather",exact:!0,component:D}),Object(k.jsx)(l.a,{path:"/calendar",exact:!0,component:y}),Object(k.jsx)(l.a,{path:"/login",exact:!0,component:L})]})]})]})},P=n(147);s.a.render(Object(k.jsx)(P.a,{children:Object(k.jsx)(K,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.59f9d8f5.chunk.js.map