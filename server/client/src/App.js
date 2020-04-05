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
import NavBar from './containers/navBar';




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

    socket.on('stage', (stage)=>{
      console.log('stage in socket', stage)
      props.fetchStage(stage)
    }) 
  })


      return (
        <div>
          <NavBar />
            <Container fluid="fluid" className='app'>
              <Row >
                <Table bordered hover responsive>
                  <tbody>
                    <td>
                      <tr>
                      <td colSpan="2">
                      <Row className='divider'>
                        <tr className="title"><td colspan="3">
                      <h1><strong>Hand Sanitizer.</strong></h1>
                      </td>
                    </tr>
                      </Row>
                      </td>
                    </tr>
                      <td >
                      <tr>
                        <td>
                        <Stage />
                        </td>
                        </tr>
                        <tr>
                          <td>
                        <Row className='title justify-content-md-center'>
                          <SupplyDemandGraph />
                        </Row>
                        </td>
                        </tr>
                      </td>
                      <td>
                        <tr>
                        <td>
                        <Equalibrium />
                        </td>
                        </tr>
                        <tr>
                        <td>
                          <Price />
                        </td>
                      
                        </tr>
                      </td>
                      <tr><td colSpan="2">
                        <SupplierList />
                        </td></tr>
                    </td>
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

  