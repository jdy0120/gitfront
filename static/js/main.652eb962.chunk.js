(this.webpackJsonpgitfront=this.webpackJsonpgitfront||[]).push([[0],{59:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(25),r=n.n(i),a=n(8),s=n(2),j=n(1),l={"\uc870\ub3c4\uc5f0":{nickname:"\uc539\uac04\uc9c0 \uc874\uc798\ub0a8",age:"20"},"\uc804\uc9c4\uc601":{nickname:"\uc2dc\ubc1c\ub86c",age:"28"},"\uc624\uc815\ubbfc":{nickname:"\ub300\uc804\ucc10\ub530",age:"28"},"\ubb38\uc7ac\ud6c8":{nickname:"\ub3c4\uc5f0\uc9f1\uce5c",age:"28"},"\uc131\ubbfc\uc2b9":{nickname:"\uac15\ub0a8\ud638\ube60",age:"28"},"\uae40\uc900\uc11d":{nickname:"\ud64d\uc131\uc678\ub178\uc790",age:"28"},"\uae40\ucca0\uc9c4":{nickname:"\uc138\ub77c\ud540\ud50c\ub808\ud2f0\ub118",age:"28"}},o=function(e){var t=e.match.params.username,n=l[t];return n?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["\uc774\ub984 : ",t]}),Object(j.jsxs)("p",{children:["\ubcc4\uba85 : ",n.nickname]}),Object(j.jsxs)("p",{children:["\ub098\uc774 : ",n.age]})]})}):Object(j.jsx)("div",{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc720\uc800 \uc785\ub2c8\ub2e4."})},d=n(13),b=n.n(d),h=n(26),x=n(29),u=n(27),O=n.n(u),p=function(){var e=Object(c.useState)([{dateKind:"",dateName:"",isHoliday:"",locdate:0,seq:0}]),t=Object(x.a)(e,2),n=t[0],i=t[1],r=n.map((function(e,t){return Object(j.jsxs)("li",{children:[e.dateName,"(",e.locdate,")"]},t)}));return Object(c.useEffect)((function(){console.log("\ub80c\ub354\ub9c1!")}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{id:"year",type:"number"}),Object(j.jsx)("button",{onClick:function(e){var t={headers:{"Context-Type":"application/json"},body:{year:document.getElementById("year").value}};(function(){var e=Object(h.a)(b.a.mark((function e(){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getHoliday/fetchHoliday",t);case 2:return n=e.sent,e.next=5,n.data.holidayList.item;case 5:c=e.sent,i(c||[{dateKind:"\uc62c\ubc14\ub978 \uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",dateName:"\uc62c\ubc14\ub978 \uc5f0\ub3c4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",isHoliday:"",locdate:0,seq:0}]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},children:"\ud655\uc778"}),Object(j.jsx)("ul",{children:r})]})};var f=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(a.a,{children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/profile/\uc870\ub3c4\uc5f0",children:"\uc870\ub3c4\uc5f0"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/profile/\uae40\ucca0\uc9c4",children:"\uae40\ucca0\uc9c4"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/profile/\ubb38\uc7ac\ud6c8",children:"\ubb38\uc7ac\ud6c8"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/profile/\uc804\uc9c4\uc601",children:"\uc804\uc9c4\uc601"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/profile/\uc624\uc815\ubbfc",children:"\uc624\uc815\ubbfc"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/profile/\uae40\uc900\uc11d",children:"\uae40\uc900\uc11d"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/profile/\uc131\ubbfc\uc2b9",children:"\uc131\ubbfc\uc2b9"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/showholiday",children:"\uc774\ubc88\ub144\ub3c4 \ud734\uc77c\uc744 \uc54c\uc544\ubcf4\uc138\uc694"})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/profile/:username",exact:!0,component:o}),Object(j.jsx)(s.a,{path:"/showholiday",exact:!0,component:p})]})]})})};r.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.652eb962.chunk.js.map