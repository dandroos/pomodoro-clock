(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/beep.0063e353.mp3"},20:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(11),r=n.n(a),c=(n(25),n(1)),o=n(2),m=n(5),l=n(3),u=n(4),d=n(9),b=n(7),p=n(18),h={session_time:25,break_time:5,current_category:"Session",current_time:25,isRunning:!1},_=Object(b.c)({timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_TIME":switch(t.target){case"work_time":return e.session_time<60?{session_time:e.session_time+1,break_time:e.break_time}:e;case"break_time":return e.break_time<60?{break_time:e.break_time+1,session_time:e.session_time}:e;default:return e}case"DECREMENT_TIME":switch(t.target){case"work_time":return e.session_time>1?{session_time:e.session_time-1,break_time:e.break_time}:e;case"break_time":return e.break_time>1?{break_time:e.break_time-1,session_time:e.session_time}:e;default:return e}case"RESET":return{session_time:25,break_time:5};default:return e}}}),E=[p.a],k=Object(b.d)(_,{},b.a.apply(void 0,E)),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("h1",{id:"heading"},"Pomodoro Clock"))}}]),t}(s.a.Component),v=n(6),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(l.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(v.a)(n)),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){var t=e.target.getAttribute("category");switch(e.target.getAttribute("action")){case"increment":this.props.incTime(t);break;case"decrement":this.props.decTime(t)}document.activeElement.blur()}},{key:"render",value:function(){return s.a.createElement("div",{id:"settings"},s.a.createElement("div",{className:"setting"},s.a.createElement("h2",{id:"session-label"},"Session"),s.a.createElement("div",{className:"setting-controls"},s.a.createElement("button",{className:"btn btn-settings",id:"session-decrement",category:"work_time",action:"decrement",onClick:this.handleClick},"-"),s.a.createElement("span",{className:"settings-display",id:"session-length"},this.props.session_time),s.a.createElement("button",{className:"btn btn-settings",id:"session-increment",category:"work_time",action:"increment",onClick:this.handleClick},"+"))),s.a.createElement("div",{className:"setting"},s.a.createElement("h2",{id:"break-label"},"Break"),s.a.createElement("div",{className:"setting-controls"},s.a.createElement("button",{className:"btn btn-settings",id:"break-decrement",category:"break_time",action:"decrement",onClick:this.handleClick},"-"),s.a.createElement("span",{className:"settings-display",id:"break-length"},this.props.break_time),s.a.createElement("button",{className:"btn btn-settings",id:"break-increment",category:"break_time",action:"increment",onClick:this.handleClick},"+"))))}}]),t}(i.Component),j={incTime:function(e){return function(t){t({type:"INCREMENT_TIME",target:e})}},decTime:function(e){return function(t){t({type:"DECREMENT_TIME",target:e})}}},O=Object(d.b)(function(e){return{session_time:e.timer.session_time,break_time:e.timer.break_time}},j)(f),y=n(19),w=n.n(y),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={minutes:n.props.session_time,seconds:0,current:"Session",is_running:!1,btn_text:"Start"},n.startStop=n.startStop.bind(Object(v.a)(n)),n.reset=n.reset.bind(Object(v.a)(n)),n.interval=null,n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"startStop",value:function(){var e=this,t=document.getElementById("beep");this.state.is_running?(document.getElementById("app").classList.remove("go"),window.clearInterval(this.interval),this.setState({is_running:!1,btn_text:"Start"})):(document.getElementById("app").classList.add("go"),this.setState({is_running:!0,btn_text:"Pause"}),this.interval=setInterval(function(){e.state.seconds>0?e.setState({seconds:e.state.seconds-1}):e.state.minutes>0?e.setState({minutes:e.state.minutes-1,seconds:59}):(t.currentTime=0,t.play(),"Session"===e.state.current?e.setState({current:"Break",minutes:e.props.break_time,seconds:0}):e.setState({current:"Session",minutes:e.props.session_time,seconds:0}))},1e3)),document.activeElement.blur()}},{key:"reset",value:function(){document.getElementById("app").classList.remove("go"),window.clearInterval(this.interval);var e=document.getElementById("beep");e.pause(),e.currentTime=0,this.props.resetTimes(),this.setState({is_running:!1,minutes:this.props.session_time,seconds:0,current:"Session",btn_text:"Start"}),document.activeElement.blur()}},{key:"componentDidUpdate",value:function(e){this.state.is_running||this.props.session_time!==e.session_time&&this.setState({minutes:this.props.session_time})}},{key:"render",value:function(){var e=this.state.minutes,t=this.state.seconds;return t<10&&(t="0"+t.toString()),this.state.minutes<10&&(e="0"+e.toString()),s.a.createElement("div",null,s.a.createElement("div",{id:"timer"},s.a.createElement("div",{id:"timer-label"},this.state.current),s.a.createElement("div",{id:"time-left"},e,":",t)),s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-controls",id:"start_stop",onClick:this.startStop},this.state.btn_text),s.a.createElement("button",{className:"btn btn-controls",id:"reset",onClick:this.reset},"Reset")),s.a.createElement("audio",{id:"beep"},s.a.createElement("source",{src:w.a})))}}]),t}(i.Component),C=Object(d.b)(function(e){return{session_time:e.timer.session_time,break_time:e.timer.break_time}},{resetTimes:function(){return function(e){e({type:"RESET"})}}})(S),N=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("main",{className:"main"},s.a.createElement(O,null),s.a.createElement(C,null))}}]),t}(i.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{id:"footer"},s.a.createElement("span",{id:"footer-copyright"},"\xa9 2019 David Andrews"))}}]),t}(i.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,{store:k},s.a.createElement("div",{id:"app"},s.a.createElement("div",{id:"app-content"},s.a.createElement(g,null),s.a.createElement(N,null),s.a.createElement(T,null))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.1d7fa14b.chunk.js.map