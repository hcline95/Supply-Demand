import React, { Component } from 'react'
import Chart from "chart.js";


export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        let lines = [
          {
          label: 'Demand',
          data : [{
            x: 0,
            y: 100
          }, {
            x : 100,
            y : 0
          }],
          fill: false,
          backgroundColor: 'blue',
          borderColor: 'blue'
          },
          {
            label: 'Supply',
            data : [{
              x: 0,
              y: 0
            }, {
              x : 100,
              y : 100
            }],
            fill: false,
            backgroundColor: 'purple',
            borderColor: 'purple'
            },
            {
              label: 'Equalibrium',
              data : [{
                x: 50,
                y: 50
              }],
              fill: false,
              backgroundColor: 'green',
              borderColor: 'green'
              }
        ]
        let ids=0
        new Chart( myChartRef, {
          type: 'line',
          data: {
            datasets: lines
          },
          options: {
            responsive: true,
            title:{
              display: true,
              text: 'Supply & Demand',
              fontSize: 30
            },
            scales: {
              xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                  max: 100,
                  min: 0
                },
                scaleLabel: {
                  display: true,
                  labelString: "Quanity",
                  fontSize: 24
                }
              }],
              yAxes: [{
                ticks: {
                  max: 100,
                  min: 0
                },
                scaleLabel: {
                  display: true,
                  labelString: "Price",
                  fontSize: 30
                }
              }]
            }
          }
    
        })
      }

    render() {
        return (
            <div >
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

  