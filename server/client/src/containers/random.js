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
import SanitizerQuantityGraph from './charts/sanitizerQuantity'
import Diary from './containers/diary'




const Random = (props) => {



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
                      <h1><strong>Supply & Demand of Hand Sanitizer in a Pandemic.</strong></h1>
                      </Row>
                      </td>
                    </tr>
                      <td >
                      <tr>
                        <td className='stage'>
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
                        <tr>
                          <td>
                        <Row >
                          <SanitizerQuantityGraph />
                        </Row>
                        </td>
                        </tr>
                      </td>
                      <td>
                      <tr>
                        <td>
                        <Diary />
                        </td>
                        </tr>
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

  export default Random

  