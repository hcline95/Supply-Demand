import { connect } from 'react-redux';
import React from 'react';
import  { Container, Row, Col, Table, Carousel }  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../containers/navBar'
import ControlledCarousel from './carousel'
import App from '../App'
import TutorialGraph from '../charts/supplyDemandChart'
import PriceGraph from '../charts/priceChart'



const Home = (props) => {

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
                        </Col>
                    </Row >
                    <Container fluid='md'>
                    <Row className='justify-content-md-center' >
                        <Col>
                            <TutorialGraph />
                            <PriceGraph />
                            <ControlledCarousel/>
                        </Col>
                    </Row>
                    </Container>
                </Container>
                

        </>

      );
 
  }

  export default Home

  