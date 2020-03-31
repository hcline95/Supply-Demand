import socket from './containers/socket'
import React from 'react';
import PriceGraph from './containers/price';
import * as actions from './actions';
import {useEffect} from 'react'
import { connect } from "react-redux";


const App = (props) => {

   useEffect(() =>{

    socket.on('number', (number)=>{
      props.fetchData(number)
    })
  })

  const handleClick = ()=> {
    return socket.emit('myClick')
 }
      return (
        <div>
          <button onClick={handleClick}>Start</button>
          <PriceGraph />
        </div>
      );
 
  }

  export default connect(
    null,
    actions
  )(App);

  