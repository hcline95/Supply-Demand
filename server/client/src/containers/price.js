
import React from 'react';
import { connect } from 'react-redux';
import {
  Line,
  LineChart,
  XAxis,
  YAxis
} from 'recharts';



const PriceGraph = (props) => {

      return (
        <div>
            {console.log('this.props', props.data)}
          <h1>Supply & Demand</h1>
          <LineChart width={500} height={300} data={props.data}>
          <XAxis dataKey="name" />
            <YAxis />
            <Line dataKey="value" />
          </LineChart>
        </div>
      );

    }

    function mapStateToProps(state) {
        return ({
            data: state.Data.data
        })
      }

      export default connect(mapStateToProps)(PriceGraph);