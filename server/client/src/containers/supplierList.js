
import React from 'react';

import  { Button, Container, Row, Col, Table }  from 'react-bootstrap'
import PopOver from '../modals/popover'
import { connect } from 'react-redux';
import Animation from '../modals/animation'

const SupplierList = (props) => {


      return (
      
            <Row>
            <Col md="auto">
            <Row>
            <h4><strong>Supply.</strong></h4>
            </Row>
            </Col>
            <Col><Animation />
            </Col>
            </Row>
     
      );

    }

    function mapStateToProps(state) {
        return ({
            quantity: state.Quantity
        })
      }
    
      export default connect(mapStateToProps)(SupplierList);
