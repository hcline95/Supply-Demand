import React from 'react';
import { connect } from 'react-redux';
import {
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart
} from 'recharts';



const EqualibriumGraph = (props) => {

      return (
        <>
        <BarChart width={250} height={200} data={props.status}>
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
        console.log(state.Equalibrium)
        return ({
            status: state.Equalibrium.status
        })
      }

      export default connect(mapStateToProps)(EqualibriumGraph);