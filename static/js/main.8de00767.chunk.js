(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),l=n.n(c),i=(n(14),n(3)),s=n(4),r=n(6),u=n(5),m=n(7),h=(n(15),n(16),function(e){var t=e.contact,n=e.ondelete;return o.a.createElement("div",null,o.a.createElement("p",null,"Name              phone"),t.map(function(e,t){return o.a.createElement("div",{className:"sanjay"},"".concat(t+1,".").concat(e.name,"         ").concat(e.phone,"  "),o.a.createElement("input",{className:"input",type:"button",value:"Delete",onClick:function(){console.log("sanjay"),n(t)}}))}))}),p=[],d={name:"",phone:"",save:"",filteredcontact:p},v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).onPhoneChange=function(t){e.setState({phone:t.target.value})},e.onSubmitData=function(){e.setState({save:1}),p.push({name:e.state.name,phone:e.state.phone}),e.setState({filteredcontact:p})},e.onNameChange=function(t){e.setState({name:t.target.value})},e.onDelete=function(t){console.log("hello"),p.splice(t,1),e.setState({filteredcontact:p})},e.state=d,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"him"},o.a.createElement("input",{type:"button",className:"input",value:"Add contact",onClick:function(){e.setState({save:0})}}),1==this.state.save?o.a.createElement(h,{contact:this.state.filteredcontact,ondelete:this.onDelete}):o.a.createElement("div",null,o.a.createElement("p",null,"Name:"),o.a.createElement("input",{id:"02",Style:{color:"green"},onChange:this.onNameChange}),o.a.createElement("p",null,"phone:"),o.a.createElement("input",{id:"03",type:"value",onChange:this.onPhoneChange}),o.a.createElement("p",null,"Name:".concat(this.state.name)),o.a.createElement("p",null,"Phone:".concat(this.state.phone)),o.a.createElement("input",{className:"input",type:"submit",value:"Save",onClick:this.onSubmitData})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.8de00767.chunk.js.map