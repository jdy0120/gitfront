(this.webpackJsonpgitfront=this.webpackJsonpgitfront||[]).push([[0],{59:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(28),a=n.n(r),s=n(13),i=n(2),u=n(4),o=n.n(u),j=n(9),d=n(10),l=n(14),b=n.n(l),p=n(1),h=function(e){var t=e.friend,n=e.canChange,r=e.setCanChange,a=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:document.getElementById("name").value.toString(),age:parseInt(document.getElementById("age").value.toString()),nickname:document.getElementById("nickname").value.toString()},n={headers:{"Context-Type":"application/json"},body:{friendInfo:t}},e.next=4,b.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/insertFriend",n);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:r(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){}),[]),Object(p.jsx)("div",{children:!1===n?Object(p.jsx)("button",{onClick:function(){r(!0)},children:"\ubcc4\uba85\uc744 \ubc14\uafb8\uac70\ub098 \ucd94\uac00\ud558\uace0 \uc2f6\uc5b4\uc694."}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:"\uc774\ub984 : "}),Object(p.jsx)("input",{type:"text",id:"name",defaultValue:t.name}),Object(p.jsx)("p",{children:"\ub098\uc774 : "}),Object(p.jsx)("input",{type:"number",id:"age"}),Object(p.jsx)("p",{children:"\ubcc4\uba85 : "}),Object(p.jsx)("input",{type:"text",id:"nickname",defaultValue:t.nickname}),Object(p.jsx)("button",{onClick:s,children:"\ud655\uc778!"})]})})},f=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],u=s[1],l=Object(c.useState)({idx:0,name:"",age:0,nickname:""}),b=Object(d.a)(l,2),f=b[0],x=b[1],O=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Friends");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("name"),0!==(c=n.filter((function(e){return e.name===t.value}))).length?x(c[0]):x({idx:-1,name:t.value,age:-1,nickname:"\ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return O(),function(){}}),[i]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",id:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(p.jsx)("button",{type:"submit",onClick:m,children:"\ucc3e\uae30!"}),0===f.idx?Object(p.jsx)("h1",{children:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["\uc774\ub984 : ",f.name]}),Object(p.jsxs)("p",{children:["\ub098\uc774 : ",f.age]}),Object(p.jsxs)("p",{children:["\ubcc4\uba85 : ",f.nickname]}),Object(p.jsx)(h,{friend:f,canChange:i,setCanChange:u})]})]})})},x=Object(c.memo)(f),O=function(e){var t=e.toString().replace(/([0-9]{4})([0-9]{2})([0-9]{2})/,"$1-$2-$3"),n=new Date(t);return console.log(),t+", "+["\uc77c\uc694\uc77c","\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c"][n.getDay()]},m=function(){var e=Object(c.useState)("2021"),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),i=s[0],u=s[1],l=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Context-Type":"application/json"},body:{year:n}},e.next=3,b.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas",t);case 3:return c=e.sent,e.next=6,c.data.holidayList.item;case 6:return r=e.sent,e.t0=u,e.next=10,r;case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{id:"year",type:"number",placeholder:"\uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",onChange:function(e){r(e.target.value)}}),Object(p.jsx)("button",{onClick:l,children:"\ucc3e\uae30!"}),"undefined"==typeof i?Object(p.jsx)("p",{children:"\ud734\uc77c\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}):Object(p.jsx)("ul",{children:i.map((function(e,t){return Object(p.jsxs)("li",{children:[e.dateName,"(",O(e.locdate),")"]},t)}))})]})},v=function(){var e=Object(c.useState)({hour:0,minute:0,seconds:0}),t=Object(d.a)(e,2),n=t[0],r=t[1],a=function(){var e=new Date;r({hour:e.getHours(),minute:e.getMinutes(),seconds:e.getSeconds()})};return Object(c.useEffect)((function(){setInterval(a,1e3)}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"\ud604\uc7ac \uc2dc\uac04\uc740"}),Object(p.jsxs)("p",{children:[n.hour,"\uc2dc ",n.minute,"\ubd84 ",n.seconds,"\ucd08 \uc785\ub2c8\ub2e4."]}),n.hour+":"+n.minute+":"+n.seconds<"19:30:00"?Object(p.jsx)("p",{children:"\ud558\uc9c0\ub9cc \ub3c4\uc5f0\uc774\uc758 \ud1f4\uadfc \uc2dc\uac04\uc740 19\uc2dc 30\ubd84 0\ucd08 \uc785\ub2c8\ub2e4."}):Object(p.jsx)("p",{children:"\ub3c4\uc5f0\uc774\ub294 19\uc2dc 30\ubd84\uc5d0 \ud1f4\uadfc\ud588\uc2b5\ub2c8\ub2e4."})]})},g=Object(c.memo)(v);var y=function(){return Object(p.jsxs)(s.a,{children:[Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/nowtime",children:"\ud604\uc7ac\uc2dc\uac04\uc744 \ud655\uc778\ud558\uc138\uc694"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/profile",children:"\uce5c\uad6c\ub4e4\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/showholiday",children:"\uc774\ubc88\ub144\ub3c4 \ud734\uc77c\uc744 \uc54c\uc544\ubcf4\uc138\uc694"})})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/nowtime",exact:!0,component:g}),Object(p.jsx)(i.a,{path:"/profile",exact:!0,component:x}),Object(p.jsx)(i.a,{path:"/showholiday",exact:!0,component:m})]})]})};a.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.6ea995f2.chunk.js.map