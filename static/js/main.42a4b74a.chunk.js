(this.webpackJsonpgitfront=this.webpackJsonpgitfront||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(17),r=n.n(i),s=n(7),j=n(2),a=n(10),o=n(1),l=function(){var e=Object(c.useState)({hour:0,minute:0,seconds:0}),t=Object(a.a)(e,2),n=t[0],i=t[1];return setInterval((function(){var e=new Date;i({hour:e.getHours(),minute:e.getMinutes(),seconds:e.getSeconds()})}),1e3),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"\ud604\uc7ac \uc2dc\uac04\uc740"}),Object(o.jsxs)("p",{children:[n.hour,"\uc2dc ",n.minute,"\ubd84 ",n.seconds,"\ucd08 \uc785\ub2c8\ub2e4."]}),Object(o.jsx)("p",{children:"\ud558\uc9c0\ub9cc \ub3c4\uc5f0\uc774\uc758 \ud1f4\uadfc \uc2dc\uac04\uc740 22\uc2dc 0\ubd84 0\ucd08 \uc785\ub2c8\ub2e4."})]})},d={"\uc870\ub3c4\uc5f0":{nickname:"\uc539\uac04\uc9c0 \uc874\uc798\ub0a8",age:"20"},"\uc804\uc9c4\uc601":{nickname:"\uc2dc\ubc1c\ub86c",age:"28"},"\uc624\uc815\ubbfc":{nickname:"\ub300\uc804\ucc10\ub530",age:"28"},"\ubb38\uc7ac\ud6c8":{nickname:"\ub3c4\uc5f0\uc9f1\uce5c",age:"28"},"\uc131\ubbfc\uc2b9":{nickname:"\uac15\ub0a8\ud638\ube60",age:"28"},"\uae40\uc900\uc11d":{nickname:"\ud64d\uc131\uc678\ub178\uc790",age:"28"},"\uae40\ucca0\uc9c4":{nickname:"\uc138\ub77c\ud540\ud50c\ub808\ud2f0\ub118",age:"28"}},b=function(e){var t=e.match.params.username,n=d[t];return n?Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["\uc774\ub984 : ",t]}),Object(o.jsxs)("p",{children:["\ubcc4\uba85 : ",n.nickname]}),Object(o.jsxs)("p",{children:["\ub098\uc774 : ",n.age]})]})}):Object(o.jsx)("div",{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc720\uc800 \uc785\ub2c8\ub2e4."})},h=n(13),O=n.n(h),u=n(18),x=function(){var e=Object(c.useState)([{dateKind:"",dateName:"",isHoliday:"",locdate:0,seq:0}]),t=Object(a.a)(e,2),n=t[0],i=t[1],r=n.map((function(e,t){return Object(o.jsxs)("li",{children:[e.dateName,"(",e.locdate,")"]},t)}));return Object(c.useEffect)((function(){console.log("\ub80c\ub354\ub9c1!")}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{id:"year",type:"number"}),Object(o.jsx)("button",{onClick:function(e){var t=document.getElementById("year").value,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({year:t})};(function(){var e=Object(u.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5050/fetchHoliday",n);case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).holidayList.item?i(c.holidayList.item):i([{dateKind:"\uc62c\ubc14\ub978 \uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",dateName:"\uc62c\ubc14\ub978 \uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",isHoliday:"",locdate:0,seq:0}]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},children:"\ud655\uc778"}),Object(o.jsx)("ul",{children:r})]})};var p=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/profile/\uc870\ub3c4\uc5f0",children:"\uc870\ub3c4\uc5f0"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/profile/\uae40\ucca0\uc9c4",children:"\uae40\ucca0\uc9c4"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/profile/\ubb38\uc7ac\ud6c8",children:"\ubb38\uc7ac\ud6c8"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/profile/\uc804\uc9c4\uc601",children:"\uc804\uc9c4\uc601"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/profile/\uc624\uc815\ubbfc",children:"\uc624\uc815\ubbfc"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/profile/\uae40\uc900\uc11d",children:"\uae40\uc900\uc11d"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/profile/\uc131\ubbfc\uc2b9",children:"\uc131\ubbfc\uc2b9"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/showholiday",children:"\uc774\ubc88\ub144\ub3c4 \ud734\uc77c\uc744 \uc54c\uc544\ubcf4\uc138\uc694"})})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",exact:!0,component:l}),Object(o.jsx)(j.a,{path:"/profile/:username",exact:!0,component:b}),Object(o.jsx)(j.a,{path:"/showholiday",exact:!0,component:x})]})]})})};r.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.42a4b74a.chunk.js.map