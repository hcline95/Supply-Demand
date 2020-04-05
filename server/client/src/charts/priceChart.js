
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
        <>
            <LineChart width={600} height={225} data={props.data}>
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