import React from 'react';
import Chart from 'chart.js'
import { connect } from 'react-redux';


class SupplyDemandGraph extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }

  
    componentDidUpdate() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        data: {
            datasets: [
                {label: 'Demand',
                data : this.props.lines.demand,
                fill: false,
                backgroundColor: 'blue',
                borderColor: 'blue'
              },             
              {label: 'Supply',
              data : this.props.lines.supply,
              fill: false,
              backgroundColor: 'green',
              borderColor: 'green'},          
              {label: 'Equalibrium',
              data : this.props.lines.equalibrium,
              fill: false,
            }
            ]
        },
        options: {
          responsive: true,
          title:{
            display: true,
            text: 'Hand Sanitizer',
            fontSize: 30
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Quanity',
                fontSize: 24
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Price',
                fontSize: 30
              }
            }]
          }
        }
    })}
  
    render() {
      return(
      <canvas ref={this.chartRef} className="img-fluid" id="graph" />
      )
    }
  }

  function mapStateToProps(state) {
      console.log(state.MainGraph)
    return ({
        
        lines: state.MainGraph
    })
  }

  export default connect(mapStateToProps)(SupplyDemandGraph);