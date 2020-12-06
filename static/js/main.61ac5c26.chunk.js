(this.webpackJsonptest_work_mrsoft=this.webpackJsonptest_work_mrsoft||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var i,r,c=t(1),a=t(0),o=t.n(a),s=t(10),l=t.n(s),u=t(3),d=t(2),b=t(8);!function(e){e.visibleNum="number",e.visibleStr="string",e.visibleNull="null"}(i||(i={})),function(e){e.loadingOn="Loading start",e.loadingOff="Loading finish",e.loadingError="Loading error"}(r||(r={}));var j={loading:r.loadingOn,data:[],filterNumber:0,filterString:"",registerSensitivity:!1,visible:i.visibleNull},f=Object(b.b)({name:"mainPage",initialState:j,reducers:{loadData:function(e,n){e.loading=n.payload},setInitialState:function(e,n){e.data=n.payload},setFilterByNumber:function(e,n){e.filterNumber=n.payload},setFilterBySubstring:function(e,n){e.filterString=n.payload},setVisible:function(e,n){e.visible=n.payload},setRegister:function(e,n){e.registerSensitivity=n.payload}}}),O=f.reducer,g=f.actions,v=g.loadData,x=g.setRegister,h=g.setFilterByNumber,m=g.setFilterBySubstring,p=g.setInitialState,y=g.setVisible,N=t(9),S=Object(d.c)({mainPage:O}),k=Object(b.a)({reducer:S,middleware:function(e){return e().prepend(N.a)}}),w=t(16),C=t(5),P=t(11),F=function(e){return e.mainPage.data},E=Object(P.a)([F,function(e){return e.mainPage.filterNumber}],(function(e,n){return e.filter((function(e){return e.length>n}))})),B=Object(P.a)([F,function(e){return e.mainPage.filterString},function(e){return e.mainPage.registerSensitivity}],(function(e,n,t){return t?e.filter((function(e){return e.indexOf(n)>-1})):e.filter((function(e){return e.toLowerCase().indexOf(n.toLowerCase())>-1}))})),L=o.a.memo((function(){var e=Object(u.c)((function(e){return e.mainPage.visible})),n=Object(u.c)(E),t=Object(u.c)(B);return e===i.visibleStr?t.length?Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)("div",{children:e},e)}))}):Object(c.jsx)("div",{children:"No Result"}):e===i.visibleNum&&n.length?Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsx)("div",{children:e},e)}))}):Object(c.jsx)("div",{children:"No Result"})})),R=t(12),T=t(13),_=t(6);function I(){var e=Object(C.a)(["\npadding: 5px 10px;\n    border-style: none;\n    border-radius: 15px;\n    margin: 10px 0 ;\n    box-shadow: 0 0 0 1px #2d2d2d, 0 0 5px 0 #2d2d2d;\n    outline: none;\n"]);return I=function(){return e},e}var D=Object(_.a)((function(e){var n=e.onChangeText,t=e.placeholder,i=e.value,r=Object(T.a)(e,["onChangeText","placeholder","value"]);return Object(c.jsx)("input",Object(R.a)({value:i,type:"text",onChange:function(e){n&&n(e.currentTarget.value)},placeholder:t},r))}))(I());function J(){var e=Object(C.a)(["\n    display: inline-block;\n    background-color: #999999;\n    color: white;\n    padding: .5em 1em;\n    border: 2px solid;\n    border-radius: 5px;\n    &:hover { background: #06adff;}\n    &:disabled { \n        opacity: 50%\n    }\n   \n"]);return J=function(){return e},e}var V=Object(_.a)((function(e){var n=e.onClick,t=e.disabled,i=Object(T.a)(e,["onClick","disabled"]);return Object(c.jsx)("button",Object(R.a)({onClick:n,disabled:t},i))}))(J()),q=(t(34),function(){return Object(c.jsxs)("div",{className:"cssload-thecube",children:[Object(c.jsx)("div",{className:"cssload-cube cssload-c1"}),Object(c.jsx)("div",{className:"cssload-cube cssload-c2"}),Object(c.jsx)("div",{className:"cssload-cube cssload-c4"}),Object(c.jsx)("div",{className:"cssload-cube cssload-c3"})]})});function z(){var e=Object(C.a)(["\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return z=function(){return e},e}var A=_.a.div(z()),G=function(){var e=Object(u.b)();Object(a.useEffect)((function(){e((function(e){e(v(r.loadingOn)),fetch("https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json").then((function(e){return e.json()})).then((function(n){e(p(n.data)),setTimeout((function(){return e(v(r.loadingOff))}),3e3)})).catch((function(n){e(v(r.loadingError))}))}))}),[]);var n=Object(u.c)((function(e){return e.mainPage.loading})),t=Object(a.useState)(""),o=Object(w.a)(t,2),s=o[0],l=o[1],d=Object(a.useState)(!1),b=Object(w.a)(d,2),j=b[0],f=b[1],O=!Number(s);return Object(c.jsxs)(A,{children:[n===r.loadingOn?Object(c.jsx)(q,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)(D,{value:s,placeholder:"Please, input value filter...",onChangeText:l}),Object(c.jsxs)("div",{children:["Register sensitivity: ",Object(c.jsx)("input",{type:"checkbox",onClick:function(){f(!j)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(V,{onClick:function(){e(h(+s)),e(y(i.visibleNum)),e(x(j)),l("")},disabled:O,children:"Filter by length"}),Object(c.jsx)(V,{onClick:function(){e(m(s)),e(y(i.visibleStr)),e(x(j)),l("")},disabled:""===s||!isNaN(Number(s)),children:"Filter by substring"})]}),Object(c.jsx)(L,{})]}),n===r.loadingError?Object(c.jsx)(c.Fragment,{children:"'Error loading data'"}):null]})},H=function(){return Object(c.jsx)(u.a,{store:k,children:Object(c.jsx)(G,{})})};t(35);l.a.render(Object(c.jsx)(H,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.61ac5c26.chunk.js.map