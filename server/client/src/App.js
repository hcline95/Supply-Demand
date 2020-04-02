import socket from './containers/socket'
import React from 'react';
import * as actions from './actions';
import {useEffect} from 'react'
import { connect } from "react-redux";
import SupplyDemandGraph from './charts/mainChart';
import  { Container, Row, Col, Table }  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Price from './containers/price'
import Equalibrium from './containers/equalibrium'
import SupplierList from './containers/supplierList'
import Stage from './containers/stage'
import Start from './modals/modal'


const App = (props) => {

   useEffect(() =>{

    socket.on('number', (number)=>{
      props.fetchData(number)
    })

    socket.on('mainGraph', (lines)=>{
      props.fetchGraph(lines)
      props.fetchEqualibrium(lines)
    })   
    
    socket.on('suppliers', (suppliers)=>{
      props.fetchSuppliers(suppliers)
    }) 
  })


      return (
        <div>
            <Start />
            <Container fluid="md">
              <Row >
                <Table borderless hover responsive>
                  <tbody>
                    <tr>
                      <td colSpan="2">
                      <Row className='divider'>
                      <h1><strong>Hand Sanitizer.</strong></h1>
                      </Row>
                      </td>
                    </tr>
                    <tr >
                      <td >
                        <Row className='title justify-content-md-center'>
                          <SupplyDemandGraph />
                        </Row>
                        <Row className='row-of-small-graphs title justify-content-md-center'>
                          <Col >
                          <Equalibrium />
                          </Col>
                          <Col >
                          <Price />
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <tr>
                        <td>
                        <Stage />
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <SupplierList />
                        </td>
                        </tr>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
           </Container>
        </div>
      );
 
  }

  export default connect(
    null,
    actions
  )(App);

  