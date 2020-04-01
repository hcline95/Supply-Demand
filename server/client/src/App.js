import socket from './containers/socket'
import React from 'react';
import * as actions from './actions';
import {useEffect} from 'react'
import { connect } from "react-redux";
import SupplyDemandGraph from './charts/mainChart';
import  { Button, Container, Row, Col, Table, Popover }  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PopOver from './modals/popover'
import Equalibrium from './containers/equalibrium'


const App = (props) => {

   useEffect(() =>{

    socket.on('number', (number)=>{
      props.fetchData(number)
    })

    socket.on('mainGraph', (lines)=>{
      props.fetchGraph(lines)
      props.fetchEqualibrium(lines)
    })    
  })

  const handleClick = ()=> {
    return socket.emit('myClick')
 }
      return (
        <div>
            <Container fluid="md">
              <Row className='title justify-content-md-center'>
                  <h1>Supply & Demand</h1>
              </Row>
              <Row className='title justify-content-md-center'>
                  <h4>HandSanitizer</h4>
                <Button variant="primary" onClick={handleClick} size="lg">
                  Start Simulation
                </Button>
              </Row>
              <Row className='title justify-content-md-center'>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <td>
                        <SupplyDemandGraph />
                      </td>
                      <td>
                        <tr>
                          <PopOver />
                        </tr>
                        <tr>
                        <Equalibrium />
                        </tr>
                        <tr>
                        <PopOver />
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

  