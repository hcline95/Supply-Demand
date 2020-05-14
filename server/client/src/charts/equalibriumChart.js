import React from 'react';
import { connect } from 'react-redux';
import {
  Bar,
  Legend,
  YAxis,
  Tooltip,
  BarChart
} from 'recharts';



const EqualibriumGraph = (props) => {

      return (
        <>
        <BarChart width={600} height={255} data={props.status}>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="surplus" fill="#82ca9d" />
            <Bar dataKey="shortage" fill='red' />
        </BarChart>
          </>
      );

    }

    function mapStateToProps(state) {
        return ({
            status: state.Equalibrium.status
        })
      }

      export default connect(mapStateToProps)(EqualibriumGraph);