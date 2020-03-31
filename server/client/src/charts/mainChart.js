import socket from './socket'
import React from 'react';
import {
  Line,
  LineChart,
  XAxis,
  YAxis
} from 'recharts';
import { useEffect, useState } from 'react';


const SupplyDemandGraph = ({}) => {
  const [data, setData] = useState([]);

  useEffect(() =>{

      socket.on('number', (number)=>{
        console.log('number', number)
        setData((state => [...state, number]))
      })


      }, []);

      return (
        <div>
          <h1>Supply & Demand</h1>
          <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
            <YAxis />
            <Line dataKey="value" />
          </LineChart>
        </div>
      );

    }

    export default SupplyDemandGraph