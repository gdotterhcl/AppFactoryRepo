google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() 
{
  /*
  var data = google.visualization.arrayToDataTable([
    ['Month', 'kWh', { role: 'style' }, 'Temp', { role: 'style' }],
    ['NOV',  1234, '#006cb7', 42, '#ff0000'],
    ['DEC',  1283, '#006cb7', 39, '#ff0000'],
    ['JAN',  1154, '#006cb7', 38, '#ff0000'],
    ['FEB',  1140, '#006cb7', 41, '#ff0000'],
    ['MAR',  1405, '#006cb7', 52, '#ff0000'],
    ['APR',  1338, '#006cb7', 65, '#ff0000'],
    ['MAY',  1517, '#006cb7', 84, '#ff0000'],
    ['JUN',  2011, '#006cb7', 96, '#ff0000'],
    ['JUL',  2567, '#006cb7', 97, '#ff0000'],
    ['AUG',  2602, '#006cb7', 92, '#ff0000'],
    ['SEP',  2387, '#006cb7', 80, '#ff0000'],
    ['OCT',  1831, '#006cb7', 75, '#ff0000']
  ]);
  */

  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Day', 'kWh', { role: 'style' }, 'Temp', { role: 'style' }],
    ['1',  82, '#006cb7', 88, '#ff0000'],
    ['2',  84, '#006cb7', 90, '#ff0000'],
    ['3',  83, '#006cb7', 88, '#ff0000'],
    ['4',  81, '#006cb7', 82, '#ff0000'],
    ['5',  75, '#006cb7', 79, '#ff0000'],
    ['6',  76, '#006cb7', 78, '#ff0000'],
    ['7',  79, '#006cb7', 77, '#ff0000'],
    ['8',  88, '#006cb7', 90, '#ff0000'],
    ['9',  82, '#006cb7', 80, '#ff0000'],
    ['10',  76, '#006cb7', 76, '#ff0000'],
    ['11',  72, '#006cb7', 70, '#ff0000'],
    ['12',  71, '#006cb7', 67, '#ff0000'],
    ['13',  73, '#006cb7', 73, '#ff0000'],
    ['14',  71, '#006cb7', 68, '#ff0000'],
    ['15',  75, '#006cb7', 72, '#ff0000'],
    ['16',  79, '#006cb7', 75, '#ff0000'],
    ['17',  80, '#006cb7', 81, '#ff0000'],
    ['18',  77, '#006cb7', 76, '#ff0000'],
    ['19',  78, '#006cb7', 81, '#ff0000'],
    ['20',  74, '#006cb7', 77, '#ff0000'],
    ['21',  72, '#006cb7', 75, '#ff0000'],
    ['22',  71, '#006cb7', 74, '#ff0000'],
    ['23',  69, '#006cb7', 65, '#ff0000'],
    ['24',  68, '#006cb7', 64, '#ff0000'],
    ['25',  67, '#006cb7', 66, '#ff0000'],
    ['26',  72, '#006cb7', 65, '#ff0000'],
    ['27',  78, '#006cb7', 75, '#ff0000'],
    ['28',  79, '#006cb7', 75, '#ff0000'],
    ['29',  74, '#006cb7', 70, '#ff0000'],
    ['30',  73, '#006cb7', 71, '#ff0000']
  ]);
  
  var options = {
    title : '',
    bar : {groupWidth: 3},
    tooltip: { isHtml: true },    // CSS styling affects only HTML tooltips.
    width : 320, /* data.getNumberOfRows() * 30 */
    legend: {alignment: 'center'},
    explorer: { axis: 'horizontal' },
    series: {
      0: {targetAxisIndex: 0, type: 'bars'},
      1: {targetAxisIndex: 1, type: 'line'}
    },
    hAxis: {
      textPosition: 'none'
    },
    hAxes: {
      0: {title: 'Day'}
    },
    vAxes: {
      // Adds titles to each axis.
      0: {title: 'kWh', minValue:0, maxValue: 150},
      1: {title: 'Avg. Temp (F)', minValue:0, maxValue:100}
    }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
