(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),a=n(8),r=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=Object(r.useState)(s.NONE),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),j=l[0],N=l[1],d=function(t,e,n){var c=Object(a.a)(t);switch(e){case s.ALPHABET:c.sort();break;case s.LENGTH:c.sort((function(t,e){return t.length-e.length}))}return n&&c.reverse(),c}(h,n,j),O=n===s.ALPHABET,E=n===s.LENGTH,g=j||n!==s.NONE;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":!O}),onClick:function(){c(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":!E}),onClick:function(){c(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!j}),onClick:function(){N(!j)},children:"Reverse"}),g&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){N(!1),c(s.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fd1cc39c.chunk.js.map