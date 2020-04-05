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
    const list = this.props.suppliers.sort((a, b) => (a.quanity_produced < b.quanity_produced) ? 1 : (a.quanity_produced === b.quanity_produced) ? ((a.quanity_produced < b.quanity_produced) ? 1 : -1) : -1 )

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
            <MarketShareGraph name={item.brand} quanity={item.quanity_produced} />
          
            </Row>
            <br />
            <Row className='title justify-content-md-center'>
           
            <h4><strong >{item.brand}</strong></h4>
            </Row>
            <br/>
            <Row className='title justify-content-md-center'>
            <h4><strong> {item.quanity_produced}</strong></h4>
            <i class="fas fa-arrow-up"></i>
            </Row>
            <br />
            <Row className='title justify-content-md-center'>
            <p className="description">At full Capacity. </p>
            </Row>
            </Col>
            <div className="pop">
            </div>
            </Row>
            </Item>)}</PoseGroup>
        </ul>
        </Row>

    );
  }
}

function mapStateToProps(state) {
    return ({
        suppliers: state.Suppliers
    })
  }

  export default connect(mapStateToProps)(Animation);