
import React from 'react';
import RandomGraph from '../charts/randomSupply';
import  { Container, Row, Col, Table }  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Price from './price'
import Equalibrium from './equalibrium'
import SupplierList from './supplierList'
import NavBar from './navBar';
import SanitizerQuantityGraph from '../charts/sanitizerQuantity'
import Diary from './diary'
import {useEffect} from 'react'
import socket from './socket'
import * as actions from '../actions'
import { connect } from "react-redux";




const Random = (props) => {

    useEffect(() =>{
    

        socket.on('number', (number)=>{
          console.log('made it to price')
          props.fetchData(number)
        })
    
        socket.on('mainGraph', (lines)=>{
          props.fetchGraph(lines)
          props.fetchEqualibrium(lines)
        })   
        
        socket.on('suppliers', (suppliers)=>{
          props.fetchSuppliers(suppliers)
        }) 
    
        socket.on('quantity', (quantity)=>{
          console.log('made it to price')
          props.fetchQuantity(quantity)
        }) 
    
        socket.on('stage', (stage)=>{
          props.fetchStage(stage)
        }) 
    
        socket.on('diary', (diary)=>{
          console.log('made it to diary')
          props.fetchDiary(diary)
        }) 
        socket.on('random', (results)=>{
          console.log(results)
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
                      <Row className='divider justify-content-md-center'>
                      <h1><strong>Supply & Demand Randomizer</strong></h1>
                      </Row>
                      </td>
                    </tr>
                      <td >
                      <tr>
                        <td>
                        <Diary />
                        </td>
                        </tr>
                        <tr>
                          <td>
                        <Row className='title justify-content-md-center'>
                          <RandomGraph />
                        </Row>
                        </td>
                        </tr>
                      </td>
                      <td>
                        <tr>
                        <td>
                          <Price />
                        </td>
                      
                        </tr>
                        <tr>
                          <td>
                        <Row >
                          <SanitizerQuantityGraph />
                        </Row>
                        </td>
                        </tr>
                      </td>
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
  )(Random);

  