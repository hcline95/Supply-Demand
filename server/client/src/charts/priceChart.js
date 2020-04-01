
import React from 'react';
import { connect } from 'react-redux';
import  { Button, Container, Row, Col, Table }  from 'react-bootstrap'
import MyVerticallyCenteredModal from '../modals/modal'
import {
  Line,
  LineChart,
  XAxis,
  YAxis
} from 'recharts';



const PriceGraph = (props) => {


      return (
        <>
            <LineChart width={250} height={200} data={props.data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Line dataKey="value" />
            </LineChart>
          </>
      );

    }

    function mapStateToProps(state) {
        return ({
            data: state.Data.data
        })
      }

      export default connect(mapStateToProps)(PriceGraph);