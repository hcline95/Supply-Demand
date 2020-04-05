import React from 'react';
import Chart from 'chart.js'
import { connect } from 'react-redux';


class SupplyDemandGraph extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }

    componentDidMount(){
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
          animation: false,
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              ticks: {
                min: 0,
                max: 120,
                stepSize: 20
              },
              scaleLabel: {
                display: true,
                labelString: 'Quanity (in hundred thousands)',
                fontSize: 24
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 6,
                stepSize: 1
              },
              scaleLabel: {
                display: true,
                labelString: 'Price',
                fontSize: 30
              }
            }]
          }
        }
    })
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
          animation: false,
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              ticks: {
                min: 0,
                max: 120,
                stepSize: 20
              },
              scaleLabel: {
                display: true,
                labelString: 'Quanity (in hundred thousands)',
                fontSize: 24
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 6,
                stepSize: 1
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
        <>
      <h4><strong>Supply & Demand</strong></h4>
      <canvas ref={this.chartRef} className="img-fluid" id="graph" />
      </>
      )
    }
  }

  function mapStateToProps(state) {
    return ({
        
        lines: state.MainGraph
    })
  }

  export default connect(mapStateToProps)(SupplyDemandGraph);