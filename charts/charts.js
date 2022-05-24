// OFD chart
var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' ,'2021-12-28'],
            ['OFD', 10, 15, 25, 40, 100],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },

    size: {
        height : 120
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
        y: {
            max: 100,
            min: 0,
            tick: {
               format: function (d)
               { return d + "%"; }
            },
        },
    },
    bindto: '#chart'
});
// end OFD chart

// DEA chart
var chart1 = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' , '2021-12-28'],
            ['DEA', 0, 0, 0, 0, 0],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },

    size: {
        height : 120
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
        y: {
            max: 100,
            min: 0,
            tick: {
                format: function (d)
                { return d + "%"; }
            },
        },
    },
    bindto: '#chart1'
});
// end DEA chart

// FDDS chart
var chart2 = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' , '2021-12-28'],
            ['FDDS', 10, 15, 25, 28, 60],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },

    size: {
        height : 120
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
        y: {
            max: 100,
            min: 0,
            tick: {
                format: function (d)
                { return d + "%"; }
            },
        },
    },
    bindto: '#chart2'
});
//END FDDS chart

// OCC chart
var chart3 = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' , '2021-12-28'],
            ['OCC', 5, 50, 100, 250, 100],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },

    size: {
        height : 120
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
        y: {
            max: 300,
            min: 0,
        },
    },
    bindto: '#chart3'
});
// end OCC chart

// APT chart
var chart4 = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' , '2021-12-28'],
            ['APT', 50, 80, 120, 300, 200],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },

    size: {
        height : 120
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
        y: {
            max: 300,
            min: 0,
        },
    },
    bindto: '#chart4'
});
// end APT chart


// ADT chart
var chart5 = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' , '2021-12-28'],
            ['ADT', 50, 80, 120, 90, 200],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },

    size: {
        height : 120
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
        y: {
            max: 300,
            min: 0,
        },
    },
    bindto: '#chart5'
});
// end ADT chart

// DSR chart
var chart6 = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' ,'2021-12-28'],
            ['OFD', 10, 15, 25, 40, 100],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },

    size: {
        height : 120
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
        y: {
            max: 100,
            min: 0,
            tick: {
                format: function (d)
                { return d + "%"; }
            },
        },
    },
    bindto: '#DSR-chart'
});
// end DSR chart

// RTO chart
var chart7 = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' ,'2021-12-28'],
            ['OFD', 0, 0, 0, 0, 0],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },

    size: {
        height : 120
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
        y: {
            max: 100,
            min: 0,
            tick: {
                format: function (d)
                { return d + "%"; }
            },
        },
    },
    bindto: '#RTO-chart'
});
// end RTO chart


// COD chart
var codChart = c3.generate({
    data: {
        columns: [
            ['data1', 205888],
            ['data2', 10000],
            ['data3', 100558],
        ],
        type: 'pie'
    },
    pie: {
        label: {
            format: function (value, ratio, id) {
                return d3.format('$')(value);
            }
        }
    },
    bindto: '#COD-chart'
});
// end COD chart


// ETD-ATD chart
var ETDATD = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' , '2021-12-28'],
            ['ETD', 300, 250, 150, 200, 300],
            ['ATD', 10, 15, 5, 0, 0]
        ],
        types: {
            ETD: 'area-spline',
            ATD: 'area-spline'
        }
    },
    size: {
        height : 400
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    color: {
        pattern: ['#e95286','#6bb9f6']
    },
    bindto: '#ETD-ATD'
});
// end ETD-ATD chart

// barChart chart
var barChart = c3.generate({
    data: {
        columns: [
            ['data1', 0, 0, 80, 0, 0, 0],
            ['data2', 0, 0, 0, 0, 50, 0],
            ['data3', 70, 0, 0, 0, 0, 0],
            ['data4', 0, 0, 0, 0, 0, 0],
        ],
        type: 'bar'
    },
    colors: {
        data1: '#e91e63',
        data2: '#fcff1b',
        data3: '#8bc34a',
        data4: '#2196f3',
    },
    axis:{
        y: {
            max: 100,
            min: 0,
            tick: {
                format: function (d)
                { return d + "%"; }
            },
        },
    },
    bar: {
        width: {
            ratio: 1
        }
    },
    grid: {
        y: {
            show: true
        }
    },
    bindto:'#bar-chart'
});
//end barChart chart


// DISPATCHED VS ATTEMPTED chart
var DISATT = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-12-28'],
            ['ETD', 300, 250, 150, 300],
            ['ATD', 20, 50, 100, 200]
        ],
        types: {
            ETD: 'area-spline',
            ATD: 'area-spline'
        }
    },
    size: {
        height : 400
    },
    axis: {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        },
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    color: {
        pattern: ['#e95286','#6bb9f6']
    },
    bindto: '#DIS-ATT'
});
// end DISPATCHED VS ATTEMPTED chart