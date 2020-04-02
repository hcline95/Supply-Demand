
import React from 'react';
import { connect } from 'react-redux';
import  { Button, Container, Row, Col, Table }  from 'react-bootstrap'
import MarketShareGraph from '../charts/marketShareChart'

const SupplierList = (props) => {

    const renderSupplier = (supplier) => {
    
        return (
            <Row >
                <Col md="auto">
                <MarketShareGraph name={supplier.brand} quanity={supplier.quanity_produced} />
                </Col>
                <Col >
                <h4>{supplier.brand}</h4>
                </Col>
                <Col md="auto">
                <h5>{supplier.quanity_produced * 100000}</h5>
                </Col>
            </Row>
        )
    }

      return (
        <Col>
            <Row>
                <h4><strong>Suppliers.</strong></h4>
            </Row>
            {props.suppliers.map(renderSupplier)}
        </Col>
      );

    }

    function mapStateToProps(state) {
        return ({
            suppliers: state.Suppliers
        })
      }

      export default connect(mapStateToProps)(SupplierList);