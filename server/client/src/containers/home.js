import { connect } from 'react-redux';
import Link from 'react-dom'
import React from 'react';
import  { Container, Row, Col, Card, Button }  from 'react-bootstrap'
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
                    <Container fluid='md' className='home-container'>
                    <Row>
                        <Col>
                            <h1><strong>What is Supply and Demand?</strong></h1>
                            <p>Supply and Demand is the relationship between the quantity of a commodity that producers wish to sell at various prices and the quantity that consumers wish to buy at various prices.</p>
                        </Col>
                    </Row>
                    <Row>
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
                    </Row>
                    <Row className='justify-content-md-center' >
                        <Col>
                            <h1><strong>Try moving it yourself!</strong></h1>
                            <TutorialGraph />
                        </Col>
                    </Row>
                    </Container>
                </Container>
                

        </>

      );
 
  }

  export default Home

  