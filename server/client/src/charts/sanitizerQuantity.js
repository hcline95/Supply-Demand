import React from 'react';
import { connect } from 'react-redux';
import {
  Bar,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  BarChart
} from 'recharts';



const SanitizerQuantityGraph = (props) => {
      return (
          
        <>
        <h4><strong>Quantity: {props.quantity[props.quantity.length-1].Quantity}</strong></h4>
        <BarChart width={725} height={225} data={props.quantity}>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Quantity" fill="#82ca9d" />
        </BarChart>
          </>
      );

    }

    function mapStateToProps(state) {
        console.log(state.Quantity)
        return ({
            quantity: state.Quantity.quantity
        })
      }

      export default connect(mapStateToProps)(SanitizerQuantityGraph);