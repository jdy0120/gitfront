(this.webpackJsonpgitfront=this.webpackJsonpgitfront||[]).push([[0],{59:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(27),a=n.n(r),s=n(13),i=n(2),o=n(8),u=n.n(o),j=n(11),d=n(9),l=n(1),b=function(e){var t=e.friendList,n=Object(c.useState)({idx:0,name:"",age:0,nickname:""}),r=Object(d.a)(n,2),a=r[0],s=r[1],i=function(){var e=Object(j.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.getElementById("name");case 2:n=e.sent,0!==(c=t.filter((function(e){return e.name===n.value}))).length?s(c[0]):s({idx:-1,name:"\ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",age:-1,nickname:"\ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",id:"name"}),Object(l.jsx)("button",{type:"submit",onClick:i,children:"\ucc3e\uae30!"}),0===a.idx?Object(l.jsx)("h1",{children:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}):Object(l.jsxs)("div",{children:["\uc774\ub984 : ",a.name,"\ub098\uc774 : ",a.age,"\ubcc4\uba85 : ",a.nickname]})]})},h=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Friends");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(l.jsx)(b,{friendList:n})},x=Object(c.memo)(h),O=n(28),p=n.n(O),f=function(){var e=Object(c.useState)([{dateKind:"",dateName:"",isHoliday:"",locdate:0,seq:0}]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=n.map((function(e,t){return Object(l.jsxs)("li",{children:[e.dateName,"(",(n=e.locdate,n.toString().replace(/([0-9]{4})([0-9]{2})([0-9]{2})/,"$1-$2-$3")),")"]},t);var n}));return Object(c.useEffect)((function(){console.log("\ub80c\ub354\ub9c1!")}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{id:"year",type:"number"}),Object(l.jsx)("button",{onClick:function(e){var t={headers:{"Context-Type":"application/json"},body:{year:document.getElementById("year").value}};(function(){var e=Object(j.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas",t);case 2:return n=e.sent,e.next=5,n.data.holidayList.item;case 5:c=e.sent,r(c||[{dateKind:"\uc62c\ubc14\ub978 \uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",dateName:"\uc62c\ubc14\ub978 \uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",isHoliday:"",locdate:0,seq:0}]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},children:"\ud655\uc778"}),Object(l.jsx)("ul",{children:a})]})},m=Object(c.memo)(f),v=function(){var e=Object(c.useState)({hour:0,minute:0,seconds:0}),t=Object(d.a)(e,2),n=t[0],r=t[1];return setInterval((function(){var e=new Date;r({hour:e.getHours(),minute:e.getMinutes(),seconds:e.getSeconds()})}),1e3),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"\ud604\uc7ac \uc2dc\uac04\uc740"}),Object(l.jsxs)("p",{children:[n.hour,"\uc2dc ",n.minute,"\ubd84 ",n.seconds,"\ucd08 \uc785\ub2c8\ub2e4."]}),Object(l.jsx)("p",{children:"\ud558\uc9c0\ub9cc \ub3c4\uc5f0\uc774\uc758 \ud1f4\uadfc \uc2dc\uac04\uc740 22\uc2dc 0\ubd84 0\ucd08 \uc785\ub2c8\ub2e4."})]})},y=Object(c.memo)(v);var g=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/nowtime",children:"\ud604\uc7ac\uc2dc\uac04\uc744 \ud655\uc778\ud558\uc138\uc694"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/profile",children:"\uce5c\uad6c\ub4e4\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/showholiday",children:"\uc774\ubc88\ub144\ub3c4 \ud734\uc77c\uc744 \uc54c\uc544\ubcf4\uc138\uc694"})})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/nowtime",exact:!0,component:y}),Object(l.jsx)(i.a,{path:"/profile",exact:!0,component:x}),Object(l.jsx)(i.a,{path:"/showholiday",exact:!0,component:m})]})]})};a.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.66408163.chunk.js.map