import React from 'react';
import Chart from 'chart.js'
import { connect } from 'react-redux';
import  { Container, Row, Col, Table,Button, Pagination }  from 'react-bootstrap'
import * as actions from '../actions';


class TutorialGraph extends React.Component {
    constructor() {
      super();
      
      this.chartRef = React.createRef();

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
      console.log(this.props.equalibrium[0].x + .5)
      if (event.target.value === 'demandRight'){

          this.props.setDemandCurve(this.props.demand + 1, [{x:this.props.equalibrium[0].x +.5, y:this.props.equalibrium[0].y+.5 }], 'green')
          this.props.fetchData({value: this.props.equalibrium[0].x +.5})
          
      } else if (event.target.value === 'demandLeft'){
        this.props.setDemandCurve(this.props.demand - 1, [{x:this.props.equalibrium[0].x -.5, y:this.props.equalibrium[0].y-.5 }], 'red')
        this.props.fetchData({value: this.props.equalibrium[0].x -.5})
      } else if (event.target.value === 'supplyRight'){
        this.props.setSupplyCurve({y1: this.props.supply.y1-1, y2: this.props.supply.y2-1}, [{x:this.props.equalibrium[0].x +.5, y:this.props.equalibrium[0].y-.5 }], 'green')
        this.props.fetchData({value:this.props.equalibrium[0].x +.5})
      } else if (event.target.value === 'supplyLeft'){
        this.props.setSupplyCurve({y1: this.props.supply.y1+1, y2: this.props.supply.y2+1}, [{x:this.props.equalibrium[0].x -.5, y:this.props.equalibrium[0].y+.5 }], 'red')
        this.props.fetchData({value:this.props.equalibrium[0].x -.5})
      }
    }

  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        data: {
            datasets: [
                {label: 'Demand',
                data : [{x: 0, y: this.props.demand}, {x: this.props.demand, y: 0}],
                fill: false,
                backgroundColor: 'blue',
                borderColor: 'blue'
              },             
              {label: 'Supply',
              data : [{x: 0, y: 0}, {x:5, y: 5}],
              fill: false,
              backgroundColor: 'green',
              borderColor: 'green'
            }, 
              {label: 'Equalibrium',
              data : this.props.equalibrium,
              fill: false,
              backgroundColor: 'gray',
              borderColor: 'gray'}
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
                max: 5,
                stepSize: 1
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
                max: 5,
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

    componentDidUpdate(){
        this.myChart = new Chart(this.chartRef.current, {
          type: 'line',
          data: {
              datasets: [
                  {label: 'Demand',
                  data : [{x: 0, y: this.props.demand}, {x: this.props.demand, y: 0}],
                  fill: false,
                  backgroundColor: 'blue',
                  borderColor: 'blue'
                },             
                {label: 'Supply',
                data : [{x: 0, y: this.props.supply.y1}, {x:5, y: this.props.supply.y2}],
                fill: false,
                backgroundColor: 'green',
                borderColor: 'green'
              },
                {label: 'Equalibrium',
                data : this.props.equalibrium,
                fill: false,
                backgroundColor: 'gray',
                borderColor: 'gray'}
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
                  max: 5,
                  stepSize: 1
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
                  max: 5,
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
  
    render() {
      return(
 
        <>
        <Row>
          <Col>
        <Row>
      <canvas ref={this.chartRef} className="img-fluid" id="graph" />
      </Row>
        </Col>
        <Col>
      <Row className='justify-content-md-center'>
      <h4 ><strong>Price:</strong></h4>
      <h4><strong className={this.props.color}>${this.props.equalibriumX}</strong></h4>
      </Row>
      <Row className='justify-content-md-center'>
      <h4 ><strong>Quanity:</strong></h4>
      <h4><strong className={this.props.color}>{this.props.equalibriumY}</strong></h4>
      </Row>
      <Row  className='justify-content-md-center'>
      <p>Click the right arrow to move the demand line right.</p>
      </Row>
      <Row  className='justify-content-md-center'>
      <Button onClick={this.handleClick} value='demandRight'>Moves the Demand Curve Right</Button>
      <Button onClick={this.handleClick} value='demandLeft'>Moves the Demand Curve Left</Button>
      <Button onClick={this.handleClick} value='supplyRight'>Moves the Supply Curve Right</Button>
      <Button onClick={this.handleClick} value='supplyLeft'>Moves the Supply Curve Left</Button>
      </Row>
      </Col>
        </Row>
  </>
      )
    }
  }

  function mapStateToProps(state) {
    return({
    demand: state.Tutorial.demandLine,
    supply: state.Tutorial.supplyLine,
    equalibrium: state.Tutorial.equalibrium,
    equalibriumX: state.Tutorial.equalibrium[0].x,
    equalibriumY: state.Tutorial.equalibrium[0].y,
    color: state.Tutorial.color
    })
  }

  export default connect(
    mapStateToProps,
    actions
  )(TutorialGraph);