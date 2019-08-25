// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title : {
        text: '我的技术栈',
        subtext: '熟练度',
        x:'left',
        y:'top',
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['JavaScript','HTML5','CSS3','PHP','JQuery','Thinkphp5','Bootstrap4','MySQL']
    },
    calculable : true,
    series : [

        {
            name:'技术熟练度',
            type:'pie',
            radius : [0, '80%'],
            center : ['50%', '50%'],
            roseType : 'area',
            max: 40,                // for funnel
            sort : 'ascending',     // for funnel
            color:['#90EE90','#FFE4C4','#00FFFF','#FF83FA','#FFA500','#CD5C5C','#FF69B4','#00BFFF	'],
            data:[
                {value:40, name:'JavaScript'},
                {value:35, name:'HTML5'},
                {value:30, name:'CSS3'},
                {value:22, name:'PHP'},
                {value:26, name:'JQuery'},
                {value:28, name:'Thinkphp5'},
                {value:25, name:'Bootstrap4'},
                {value:18, name:'MySQL'}
            ]
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;