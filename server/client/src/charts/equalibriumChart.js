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

    const data = [
        {
          "Day": "1",
          "shortage": 0
        },
        {
          "Day": "2",
          "shortage": -50
        },
        {
          "Day": "3",
          "shortage": 0
        },
        {
          "Day": "4",
          "surplus": 35
        },
        {
          "Day": "5",
          "shortage": 0
        }
      ]


      return (
        <>
        <BarChart width={250} height={150} data={data}>
            <XAxis dataKey="Day" />
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
            equalibrium: state.MainGraph.equalibrium
        })
      }

      export default connect(mapStateToProps)(EqualibriumGraph);