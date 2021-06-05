// Mock data object used for LineChart and BarChart

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [
        50,
        20,
        2,
        86,
        71,
        100
      ],
      //color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    },{
      data: [
        20,
        10,
        4,
        56,
        87,
        90
      ]
    },{
      data: [
        30,
        90,
        67,
        54,
        10,
        2
      ]
    }]
  }

  // Mock data object used for Contribution Graph

  const contributionData = [
    { date: '2016-01-02', count: 1 },
    { date: '2016-01-03', count: 2 },
    { date: '2016-01-04', count: 3 },
    { date: '2016-01-05', count: 4 },
    { date: '2016-01-06', count: 5 },
    { date: '2016-01-30', count: 2 },
    { date: '2016-01-31', count: 3 },
    { date: '2016-03-01', count: 2 },
    { date: '2016-04-02', count: 4 },
    { date: '2016-03-05', count: 2 },
    { date: '2016-02-30', count: 4 }
  ]

  // Mock data object for Pie Chart

  const pieChartData = [
    { name: 'Soul', amount: 100, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', amount: 75, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', amount: 50, color: '#0003FF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', amount: 50, color: '#FF00DC', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Moscow', amount: 120, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ]

  // Mock data object for Progress

  const progressChartData = {
    data:[0.4, 0.6,0.2],
    labels: ['אינפי','ליניארית','בדידה'],
    colors: ['#7DFF00','#00FFCF','#0050FF'],
  }

  export { data, contributionData, pieChartData, progressChartData }