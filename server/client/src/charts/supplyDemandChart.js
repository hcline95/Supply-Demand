import React from 'react';
import Chart from 'chart.js'
import { connect } from 'react-redux';
import  { Container, Row, Col, Table,Button, Pagination }  from 'react-bootstrap'
import * as actions from '../actions';
import PriceGraph from './priceChart';
import QuantityGraph from './quantity'


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
        this.props.setSupplyCurve({y1: this.props.supply.y1-1, y2: this.props.supply.y2-1}, [{x:this.props.equalibrium[0].x +.5, y:this.props.equalibrium[0].y-.5 }], 'red')
        this.props.fetchData({value:this.props.equalibrium[0].x +.5})
      } else if (event.target.value === 'supplyLeft'){
        this.props.setSupplyCurve({y1: this.props.supply.y1+1, y2: this.props.supply.y2+1}, [{x:this.props.equalibrium[0].x -.5, y:this.props.equalibrium[0].y+.5 }], 'green')
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
                labelString: 'Quantity (in hundreds)',
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
                  labelString: 'Quantity (in hundreds)',
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
    
      <Row className='justify-content-md-center'>
        <Col>
        <td>
          <tr>
      <h4><strong>Try moving it yourself.</strong></h4>
      <p>Move the Demand and Supply curve to see how Price and Quantity will change!</p>
        
      </tr>
      <tr>
          <Row className='justify-content-md-center'>
            <h4><strong>Supply & Demand</strong></h4>
            <canvas ref={this.chartRef} className="img-fluid" id="graph" />
          </Row>
      </tr>
      <tr>
          <Row  className='justify-content-md-center'>
            <Col>
            <Button onClick={this.handleClick} variant="outline-dark" value='demandLeft' size="lg"><i class="fas fa-arrow-left"></i> Left</Button>
            <Button size="lg" variant="dark" >Demand</Button>
            <Button onClick={this.handleClick} variant="outline-dark" value='demandRight' size="lg">Right <i class="fas fa-arrow-right"></i></Button>
            </Col>
            <Col>
            <Button onClick={this.handleClick} variant="outline-dark" size="lg" value='supplyLeft'><i class="fas fa-arrow-left"></i> Left</Button>         
            
            <Button size="lg" variant="dark" >Supply </Button>
            <Button onClick={this.handleClick} variant="outline-dark" size="lg" value='supplyRight'>Right <i class="fas fa-arrow-right"></i></Button>
            </Col>
          </Row>
          </tr>
          </td>
        </Col>
    
        <td>
       <tr>
      
     
          <Row className='justify-content-md-center price-quantity'>
          <tr className='quantity-price'>
          <td className='quantity-price-num'>
          <h1><strong>Price:</strong></h1>
          <h1><strong className={this.props.color}>${this.props.equalibriumY}</strong></h1>
          </td>
          </tr>
          <tr className='quantity-price'>
         <td className='quantity-price-num'>
          <h1 ><strong>Quantity:</strong></h1>
          <h1><strong className={this.props.color}>{this.props.equalibriumX * 100}</strong></h1>
          </td>
          </tr>
      
          </Row>
       
    
  
      <Row className='justify-content-md-center'>
        <tr>
          <td>
  
          <PriceGraph />

   
          </td>
          </tr>
      </Row>
      <tr>
          <td>
  
          <QuantityGraph />
          
   
          </td>
          </tr>
    </tr>
      </td>
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