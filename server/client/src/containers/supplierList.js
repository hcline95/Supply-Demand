
import React from 'react';

import  { Button, Container, Row, Col, Table }  from 'react-bootstrap'
import PopOver from '../modals/popover'

import Animation from '../modals/animation'

const SupplierList = (props) => {


      return (
      
            <Row>
            <Col md="auto">
            <Row>
            <h4><strong>Supply.</strong></h4>
            </Row>
            <Row>
            <PopOver />
            </Row>
            </Col>
            <Col><Animation />
            </Col>
            </Row>
     
      );

    }


      export default SupplierList;