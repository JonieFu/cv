const a=a=>document.querySelector(a),e=a(".header__info"),t=Date.parse("1996/10/29"),n=parseInt((Date.now()-t)/31536e6),r=n?`${n}\u{5C81}`:"-",u=`\u{5973} | ${r} | \u{524D}\u{7AEF}\u{5F00}\u{53D1}\u{5DE5}\u{7A0B}\u{5E08} | \u{5317}\u{4EAC} | \u{7855}\u{58EB}`;e.textContent=u;const m=a(".charts"),i=a(".charts>ul"),o=a("#radar");o.style.width=`${m.clientWidth-i.clientWidth}px`,echarts.init(o).setOption({title:{},tooltip:{},radar:{shape:"circle",name:{textStyle:{color:"#fff",backgroundColor:"#555",borderRadius:3,padding:[5,5]}},indicator:[{name:"静态页面",max:100},{name:"编程基础",max:100},{name:"原生 JS",max:100},{name:"Vue 全家桶",max:100},{name:"数据可视化",max:100},{name:"项目开发",max:100},{name:"沟通能力",max:100}],radius:"70%",nameGap:8},series:[{name:"能力分配",type:"radar",areaStyle:{normal:{}},data:[{value:[100,90,90,95,90,90,85],name:"能力分配"}]}]});
//# sourceMappingURL=index.dd47127f.js.map
