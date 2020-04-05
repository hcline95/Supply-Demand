import  Carousel  from 'react-bootstrap/Carousel'
import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import socket from '../containers/socket'
import  TutorialGraph from '../charts/supplyDemandChart'
import * as actions from '../actions'
import { connect } from 'react-redux';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const clickHandler=()=>{
      socket.emit('myClick')
      this.resetData()
    }

    const link = 'https://lh3.googleusercontent.com/proxy/NqzI4CSjeicHceZHAWTNytsQY9iA409kBinN7LzFS2z4Ps8XquonUMEfiDrEf_nsxBkmNHusPFN3d_iFT1oKEdNxoEdHR9IYxUz1Rv_LrTFwasz1qjDMw3kikF7P8jzzU7X3xBiCeu985fxg_2pO_DB6J2Pen7mIJtE'
  
    return (
      <>
        <Carousel activeIndex={index} onSelect={handleSelect} wrap={false} interval={20000} pause={'hover'}>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={link}
            alt="Second slide"
          />
            <Carousel.Caption>
              <Card >
                <Card.Title >
                  <h1><strong>Supply & Demand</strong></h1>
                </Card.Title>
                <Card.Body>
                  
                    <TutorialGraph />
                    <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={link}
              alt="Third slide"
              />
              <Carousel.Caption>
                <Card >
                  <Card.Body>
                    <Card.Text className='final'>
                      <h1>Thanks for Learning!</h1>                  
                      <h4>Now you are ready to watch the simulation. Click below to begin.</h4>
                      <br />
                    </Card.Text>
                  <Card.Link href="/simulation"><Button variant="dark" size="lg" onClick={clickHandler}>Simulation</Button></Card.Link>
                </Card.Body>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
  
  export default connect(
    null,
    actions
  )(ControlledCarousel);