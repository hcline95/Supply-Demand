import React from 'react';
import Component from 'react'
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import  { Button, Container, Row, Col, Table }  from 'react-bootstrap'
import { connect } from 'react-redux';
import MarketShareGraph from '../charts/marketShareChart'
import PopOver from '../modals/popover'
import useRef from 'react'



const Item = posed.li({})


class Animation extends React.Component {
 state = {items: []};
 

  componentDidMount() {
    
    setInterval(() => {
    const list = this.props.suppliers.sort((a, b) => (a.quantity_produced < b.quantity_produced) ? 1 : (a.quantity_produced === b.quantity_produced) ? ((a.quantity_produced < b.quantity_produced) ? 1 : -1) : -1 )

      this.setState({
        items: list
      });
    }, 1000);
  }


  render() {
    const { items } = this.state;
    
    

    return (
        <Row className='title justify-content-md-center'>
        <ul>
    
            <PoseGroup>{items.map(item => <Item className='list' key={item.id}>
            <Row className='title justify-content-md-center'>
            <Col>
            <br />
            <Row className='title justify-content-md-center'>
           
           <h4><strong >{item.brand}</strong></h4>
           </Row>
            <Row className='title justify-content-md-center'>
            <MarketShareGraph name={item.brand} item_quantity={item.quantity_produced} item_previous_quantity={item.previous_quantity} />
            </Row>

            </Col>
    
            </Row>
            </Item>)}</PoseGroup>
        </ul>
        </Row>

    );
  }
}

function mapStateToProps(state) {
  console.log(state.Quantity)
    return ({
        suppliers: state.Suppliers
    })
  }

  export default connect(mapStateToProps)(Animation);