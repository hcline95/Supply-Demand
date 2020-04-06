import { connect } from 'react-redux';
import Link from 'react-dom'
import React from 'react';
import  { Container, Row, Col, Table, Button }  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../containers/navBar'
import TutorialGraph from '../charts/supplyDemandChart'
import socket from './socket'



const Home = (props) => {

    const clickHandler=()=>{
        socket.emit('myClick')
        this.resetData()
      }

      return (
        <>
            <NavBar />
                <Container fluid="fluid">
                    <Row className='header justify-content-md-center'>
                        <Col>
                        <Row className='justify-content-md-center'>
                        <h1 className='econLab'><strong>EconLab.</strong></h1>
                        </Row>
                        <Row className='justify-content-md-center'>
                        <h4><strong>Market Predictions for Real Life Scenerios</strong></h4>
                        </Row>
                        <Row className='justify-content-md-center'>
                        <Button href='/simulation' variant="outline-dark" size="lg" onClick={clickHandler}>Start Simulation</Button>
                        </Row>
                        </Col>
                    </Row >
                    <Container fluid='fluid' className='home-container'>
                        <Table bordered hover responsive>
                            <tbody>
                                <td>
                    <tr>
                    <Row id='About' className='justify-content-md-center'>
                        <td>
                        <Col>
                        <td>
                            <h1><strong>What is Supply and Demand?</strong></h1>
                            <p>Supply and Demand is the relationship between the quantity of a commodity that producers wish to sell at various prices and the quantity that consumers wish to buy at various prices.</p>
                            </td>
                        </Col>
                        </td>
                    </Row>
                    </tr>
                    <tr>
                        <td>
                    <Row className='justify-content-md-center'>
                        <td>
                        <Col>
                            <h1><strong>Five ways the Demand Curve Shifts</strong></h1>
                            <ol>
                            <li>Prices of related goods (ex Peanut Butter and Jelly, Gas vs. Electric)</li>
                            <li>Disposable income</li>
                            <li>Tastes and preferences.</li> 
                            <li>Expectations of future prices.</li>
                            <li>Number of potential buyers</li>
                            </ol>
                        </Col>
                        </td>
                        <td>
                        <Col>
                            <h1><strong>Five ways the Supply Curve Shifts</strong></h1>
                            <ol>
                            <li>Number of seller</li>
                            <li>Cost of raw materials</li>
                            <li>Technology</li> 
                            <li>Expectations of future prices.</li>
                            <li>Other Prices</li>
                            </ol>
                        </Col>
                        </td>
                    </Row>
                    </td>
                    </tr>
                    <tr>
                    <Row className='justify-content-md-center' >
                        
                        <Col>
                            <TutorialGraph />
                        </Col>
    
                    </Row>
                    </tr>
                    </td>                       
                            </tbody>
                        </Table>
                    </Container>
                </Container>
                

        </>

      );
 
  }

  export default Home

  