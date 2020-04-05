import Modal from 'react-bootstrap/Modal'
import React from 'react';
import  { Button, Container, Row, Col, Table }  from 'react-bootstrap'
import socket from '../containers/socket'

  export default function Start() {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {

      //starts simulation
      const handleClick = ()=> {
        props.onHide()
     }
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton />
            <Modal.Body>
            <Row className='title justify-content-md-center start'>
              <h1><strong>Click to Start the Simulation.</strong></h1>
              </Row>
              <Row className='title justify-content-md-center start'>
              <Button variant="primary" onClick={handleClick} size="lg">
                Start
              </Button>
              </Row>
            </Modal.Body>
          </Modal>
        );
      }
  
    return (
      <>  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
 
  
