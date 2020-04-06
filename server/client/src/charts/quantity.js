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



const QuantityGraph = (props) => {
    console.log(props.quantity)
      return (
          
        <>
        <BarChart width={600} height={225} data={props.quantity}>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Quantity" fill="#82ca9d" />
        </BarChart>
          </>
      );

    }

    function mapStateToProps(state) {
        return ({
            quantity: state.Tutorial.quantity
        })
      }

      export default connect(mapStateToProps)(QuantityGraph);