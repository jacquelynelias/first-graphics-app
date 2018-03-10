var Plotly = require('plotly.js/lib/core');
var Plotlybar = require("plotly.js/lib/bar");

Plotly.register(Plotlybar);


//At the end of the chart.js file
console.log("hello this is my chart");
console.log(annualTotals);

// Initialize the arrays that will hold our lists of data
var countyHomicides = annualTotals.map(a => a.homicides_total);
var harvardParkHomicides = annualTotals.map(a => a.homicides_harvard_park);
var years = annualTotals.map(a => a.year);

function createChart(x, y, element, color, title) {
  var settings = [{
    x: x,
    y: y,
    type: 'bar',
    marker: {
      color: color
    },
    hoverinfo: 'y',
    hoverlabel: {
      bgcolor: '#777777'
    }
  }];
  var layout = {
    title: title,
    xaxis: {
        title: 'Year',
        fixedrange: true
    },
    yaxis: {
        fixedrange: true
    },
    margin: {
      l: 30,
      r: 15,
      t: 45,
      b: 30
    },
    height: 250
  };

  //Create the chart
  Plotly.newPlot(element, settings, layout, { displayModeBar: false });

}

var countyChartTitle = '<b>County Homicides, 2000-2017</b>';
var hpChartTitle = '<b>Harvard Park Homicides, 2000-2017</b>';

createChart(years, countyHomicides, 'county-homicides', '#86c7df', countyChartTitle);
createChart(years, harvardParkHomicides, 'harvard-park-homicides', '#ff6600', hpChartTitle);
