(this.webpackJsonpgitfront=this.webpackJsonpgitfront||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),s=n(7),o=n.n(s),i=n(6),u=n(54),l=n(30),j=n(11),b=n(150),d=n(147),p=n(77),O=n(66),h=n(67),x=n(140),f=n(4),m=function(e){e.history;var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=(n[0],n[1],Object(x.a)());Object(i.a)(a,1)[0].loginToken;return console.log("Entrance Calendar Page"),Object(f.jsx)(p.a,{plugins:[h.a,O.a],initialView:"dayGridMonth",dateClick:function(e){return alert(e.dateStr)},events:[{title:"event 1",date:"2021-04-01"},{title:"event 2",date:"2021-04-02"}],eventColor:"#378006"})},g=n(10),v=n.n(g),y=n(16),k=n(68),w=n(23),C=n.n(w),S=function(e){var t=e.toString().replace(/([0-9]{4})([0-9]{2})([0-9]{2})/,"$1-$2-$3"),n=new Date(t);return console.log(),t+", "+["\uc77c\uc694\uc77c","\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c"][n.getDay()]},E=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("2021"),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(c.useState)([]),j=Object(i.a)(l,2),b=j[0],d=j[1],p=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),t={headers:{"Context-Type":"application/json"},body:{year:o}},e.next=4,C.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas",t);case 4:return n=e.sent,e.next=7,n.data.holidayList.item;case 7:return c=e.sent,e.t0=d,e.next=11,c;case 11:e.t1=e.sent,(0,e.t0)(e.t1),a(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(k.HeartSpinner,{size:30,color:"#bd2f1c",loading:n}):Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{id:"year",type:"number",placeholder:"\uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",onChange:function(e){u(e.target.value)}}),Object(f.jsx)("button",{onClick:p,children:"\ucc3e\uae30!"}),"undefined"==typeof b?Object(f.jsx)("p",{children:"\ud734\uc77c\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}):Object(f.jsx)("ul",{style:{listStyle:"none"},children:b.map((function(e,t){return Object(f.jsxs)("li",{children:[e.dateName,"(",S(e.locdate),")"]},t)}))})]})})},D=Object(c.memo)(E),F=function(e){return{headers:{"Context-Type":"application/json"},body:{location:e}}},I=function(){var e=Object(c.useState)("Seoul"),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(i.a)(r,2),o=s[0],u=s[1],l=function(){var e=Object(y.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Weather",F(n));case 3:t=e.sent,u(t.data),e.next=20;break;case 7:e.prev=7,e.t0=e.catch(0),u(void 0),a=e.t0.response,e.t1=a.data,e.next="Not exist area"===e.t1?14:"Request path contains unescaped characters"===e.t1?16:18;break;case 14:return alert("\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc9c0\uc5ed\uc785\ub2c8\ub2e4."),e.abrupt("break",20);case 16:return alert("\uc601\uc5b4\ub85c \uc801\uc5b4\uc8fc\uc138\uc694."),e.abrupt("break",20);case 18:return alert(a.data),e.abrupt("break",20);case 20:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)}}),Object(f.jsx)("button",{onClick:function(e){l()},children:"\ucc3e\uae30"}),o?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{children:["\uc9c0\uc5ed : ",o.country_name]}),Object(f.jsxs)("p",{children:["\uc628\ub3c4 : ",Math.floor(o.temp-273.15)]}),Object(f.jsxs)("p",{children:["\uccb4\uac10 \uc628\ub3c4 : ",Math.floor(o.feels_like-273.15)]})]}):Object(f.jsx)("div",{children:"\uc5c6\ub294 \uc9c0\uc5ed\uc785\ub2c8\ub2e4."})]})},M=n(141),T=n(149),z=n(72),B=n(51).default.h1(a||(a=Object(z.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"])));function N(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var A=Object(M.a)((function(e){return Object(T.a)({paper:{alignItems:"center",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),L=function(e){var t=e.setOpenLoginModal,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),l=u[0],j=u[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),p=d[0],O=d[1],h=Object(c.useState)(N),x=Object(i.a)(h,1)[0],m=A(),g={headers:{"Context-Type":"application/json"},body:{name:r,email:l,pw:p}},k=function(){var e=Object(y.a)(v.a.mark((function e(n){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,C.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/register",g);case 4:return e.next=6,C.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/login",g,{withCredentials:!0});case 6:t(!1),window.location.reload(),e.next=20;break;case 10:e.prev=10,e.t0=e.catch(1),a=e.t0.response,e.t1=a.data,e.next="Duplicated email"===e.t1?16:18;break;case 16:return alert("\uc911\ubcf5\ub41c \uc774\uba54\uc77c \uc785\ub2c8\ub2e4."),e.abrupt("break",20);case 18:return alert(a),e.abrupt("break",20);case 20:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{style:x,className:m.paper,children:[Object(f.jsx)(B,{children:"\ub3c4\uc5f0"}),Object(f.jsxs)("form",{action:"/",onSubmit:k,children:["name : ",Object(f.jsx)("input",{type:"text",placeholder:"\uc774\ub984",onChange:function(e){s(e.target.value)},required:!0}),Object(f.jsx)("br",{}),"email : ",Object(f.jsx)("input",{type:"email",placeholder:"\uc774\uba54\uc77c",onChange:function(e){j(e.target.value)},required:!0}),Object(f.jsx)("br",{}),"password : ",Object(f.jsx)("input",{type:"text",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:function(e){O(e.target.value)},required:!0}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})]})]})};function q(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var V=Object(M.a)((function(e){return Object(T.a)({paper:{alignItems:"center",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),W=function(e){var t=e.setOpenLoginModal,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),l=u[0],j=u[1],b=Object(c.useState)(q),d=Object(i.a)(b,1)[0],p=Object(c.useState)(!1),O=Object(i.a)(p,2),h=O[0],m=O[1],g=Object(x.a)(),k=Object(i.a)(g,3),w=(k[0],k[1]),S=(k[2],V()),E={header:{"Context-Type":"application/json"},body:{email:r,pw:l}},D=function(){var e=Object(y.a)(v.a.mark((function e(){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/login",E,{withCredentials:!0});case 3:n=e.sent,t(!1),w("loginToken",n.data.loginToken,{path:"/",maxAge:n.data.maxAge}),w("name",n.data.name,{path:"/",maxAge:n.data.maxAge}),console.log("logged in"),e.next=22;break;case 10:e.prev=10,e.t0=e.catch(0),a=e.t0.response,e.t1=a.data,e.next="Not valid email"===e.t1?16:"Not valid password"===e.t1?18:20;break;case 16:return alert("\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc774\uba54\uc77c \uc785\ub2c8\ub2e4."),e.abrupt("break",22);case 18:return alert("\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4."),e.abrupt("break",22);case 20:return alert(a),e.abrupt("break",22);case 22:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:h?Object(f.jsx)(L,{setOpenLoginModal:t}):Object(f.jsxs)("div",{style:d,className:S.paper,children:["email : ",Object(f.jsx)("input",{type:"text",placeholder:"\uc774\uba54\uc77c",onChange:function(e){s(e.target.value)}}),Object(f.jsx)("br",{}),"password : ",Object(f.jsx)("input",{type:"password",placeholder:"\ud328\uc2a4\uc6cc\ub4dc",onChange:function(e){j(e.target.value)}}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:D,children:"\ub85c\uadf8\uc778"}),Object(f.jsx)("button",{onClick:function(e){m(!0)},children:"\ud68c\uc6d0\uac00\uc785"})]})})},$=n(145),H=n(148),J=function(){var e=Object(c.useState)({hour:0,minute:0,seconds:0}),t=Object(i.a)(e,2),n=t[0],a=t[1],r=function(){var e=new Date;a({hour:e.getHours(),minute:e.getMinutes(),seconds:e.getSeconds()})};return Object(c.useEffect)((function(){setInterval(r,1e3)}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"\ud604\uc7ac \uc2dc\uac04\uc740"}),Object(f.jsxs)("p",{children:[n.hour,"\uc2dc ",n.minute,"\ubd84 ",n.seconds,"\ucd08 \uc785\ub2c8\ub2e4."]}),n.hour+":"+n.minute+":"+n.seconds<"19:30:00"?Object(f.jsx)("p",{children:"\ud558\uc9c0\ub9cc \ub3c4\uc5f0\uc774\uc758 \ud1f4\uadfc \uc2dc\uac04\uc740 19\uc2dc 30\ubd84 0\ucd08 \uc785\ub2c8\ub2e4."}):Object(f.jsx)("p",{children:"\ub3c4\uc5f0\uc774\ub294 19\uc2dc 30\ubd84\uc5d0 \ud1f4\uadfc\ud588\uc2b5\ub2c8\ub2e4."})]})},R=Object(c.memo)(J),_=function(e){var t=e.friend,n=e.canChange,a=e.setCanChange,r=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:document.getElementById("name").value.toString(),age:parseInt(document.getElementById("age").value.toString()),nickname:document.getElementById("nickname").value.toString()},n={headers:{"Context-Type":"application/json"},body:{friendInfo:t}},e.next=4,C.a.put("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/insertFriend",n);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:a(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){}),[]),Object(f.jsx)("div",{children:!1===n?Object(f.jsx)("button",{onClick:function(){a(!0)},children:"\ubcc4\uba85\uc744 \ubc14\uafb8\uac70\ub098 \ucd94\uac00\ud558\uace0 \uc2f6\uc5b4\uc694."}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{children:"\uc774\ub984 : "}),Object(f.jsx)("input",{type:"text",id:"name",defaultValue:t.name}),Object(f.jsx)("p",{children:"\ub098\uc774 : "}),Object(f.jsx)("input",{type:"number",id:"age"}),Object(f.jsx)("p",{children:"\ubcc4\uba85 : "}),Object(f.jsx)("input",{type:"text",id:"nickname",defaultValue:t.nickname}),Object(f.jsx)("button",{onClick:s,children:"\ud655\uc778!"})]})})},G=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(c.useState)({idx:0,name:"",age:0,nickname:""}),j=Object(i.a)(l,2),b=j[0],d=j[1],p=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Friends");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(y.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("name"),0!==(a=n.filter((function(e){return e.name===t.value}))).length?d(a[0]):d({idx:-1,name:t.value,age:-1,nickname:"\ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return p(),function(){}}),[o]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",id:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(f.jsx)("button",{type:"submit",onClick:O,children:"\ucc3e\uae30!"}),0===b.idx?Object(f.jsx)("h1",{children:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["\uc774\ub984 : ",b.name]}),Object(f.jsxs)("p",{children:["\ub098\uc774 : ",b.age]}),Object(f.jsxs)("p",{children:["\ubcc4\uba85 : ",b.nickname]}),Object(f.jsx)(_,{friend:b,canChange:o,setCanChange:u})]})]})})},P=Object(c.memo)(G),K=r.a.forwardRef((function(e,t){return Object(f.jsx)("span",Object(u.a)(Object(u.a)({},e),{},{ref:t,children:e.children}))})),Q={textDecoration:"none",color:"green"};var U=function(){var e=Object(x.a)(["loginToken"]),t=Object(i.a)(e,3),n=t[0],a=(t[1],t[2],Object(c.useState)(!1)),r=Object(i.a)(a,2),s=r[0],o=r[1],u=Object(c.useState)(null),p=Object(i.a)(u,2),O=p[0],h=p[1],g=function(){h(null)};return Object(c.useEffect)((function(){}),[s]),console.log("2021 04 19 2"),Object(f.jsxs)("div",{style:{textAlign:"center"},children:[n.name?Object(f.jsxs)("p",{children:[n.name,"\ub2d8 \ud658\uc601\ud569\ub2c8\ub2e4."]}):Object(f.jsx)(b.a,{color:"primary",onClick:function(){o(!0)},children:"\ub85c\uadf8\uc778"}),Object(f.jsxs)(l.a,{children:[Object(f.jsx)(b.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},children:"Open Menu"}),Object(f.jsx)(d.a,{open:s,onClose:function(){o(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(f.jsx)(K,{children:Object(f.jsx)(W,{setOpenLoginModal:o})})}),Object(f.jsxs)($.a,{id:"simple-menu",anchorEl:O,keepMounted:!0,open:Boolean(O),onClose:g,children:[Object(f.jsx)(H.a,{onClick:g,children:Object(f.jsx)(l.b,{style:Q,to:"/nowtime",children:"\ud604\uc7ac\uc2dc\uac04\uc744 \ud655\uc778\ud558\uc138\uc694"})}),Object(f.jsx)(H.a,{onClick:g,children:Object(f.jsx)(l.b,{style:Q,to:"/profile",children:"\uce5c\uad6c\ub4e4\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694"})}),Object(f.jsx)(H.a,{onClick:g,children:Object(f.jsx)(l.b,{style:Q,to:"/showholiday",children:"\uc774\ubc88\ub144\ub3c4 \ud734\uc77c\uc744 \uc54c\uc544\ubcf4\uc138\uc694"})}),Object(f.jsx)(H.a,{onClick:g,children:Object(f.jsx)(l.b,{style:Q,to:"/showWeather",children:"\ud604\uc7ac \ub0a0\uc528\ub97c \ubcf4\uace0 \uc2f6\uc5b4\uc694"})}),Object(f.jsx)(H.a,{onClick:g,children:Object(f.jsx)(l.b,{style:Q,to:"calendar",children:"\uce98\ub9b0\ub354"})})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/nowtime",exact:!0,component:R}),Object(f.jsx)(j.a,{path:"/profile",exact:!0,component:P}),Object(f.jsx)(j.a,{path:"/showholiday",exact:!0,component:D}),Object(f.jsx)(j.a,{path:"/showWeather",exact:!0,component:I}),Object(f.jsx)(j.a,{path:"/calendar",exact:!0,component:m}),Object(f.jsx)(j.a,{path:"/login",exact:!0,component:W})]})]})]})},X=n(144);o.a.render(Object(f.jsx)(X.a,{children:Object(f.jsx)(U,{})}),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.d3e6c110.chunk.js.map