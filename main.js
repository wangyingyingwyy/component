window.onload= function() {
    // 表格数据定义
    var main = document.getElementById('main');
    var data=[
        ['Java',1,'降','-0.01%'],
        ['C',2,'升','+2.44%'],
        ['Python',3,'升','+1.41%'],
        ['C++',4,'降','-2.58%'],
        ['C#',5,'升','+2.07%'],
        ['Visual Basic .NET',6,'降','-1.17%'],
        ['JavaScript',7,'降','-0.85%'],
    ];
    new Handsontable(main, {
        data: data,
        colHeaders: ["语言名称", "排名", "升或降", "变化幅度"],
        filters: true,
        contextMenu: true,
        manualRowResize: true,
        manualColumnResize: true,
        colWidths: 170,
        rowHeights: 35,
        licenseKey: 'non-commercial-and-evaluation',
        className: "htCenter htMiddle",
        renderer: function(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.fontSize = '15px';
        }
    });
     // echarts定义
     var myChart = echarts.init(document.getElementById('container'));
     var option = {
         title: {
             text: 'JavaScript语言排名变化'
         },
         tooltip: {
            trigger: 'axis', 
            formatter : function(params){  
                var res ='<span style="padding-left:10px">'+params[0].seriesName+'</span><br><span>'+params[0].name+':'+params[0].value+'</span>'; 
                return res;
            },
         },
         xAxis: {
             data: [2000,2005,2010,2015,2020],
         },
         yAxis: {},
         series: [{
             name: '排名',
             type: 'line',
             data: [6,9,8,8,7]
         }]
     };
     myChart.setOption(option);
};
