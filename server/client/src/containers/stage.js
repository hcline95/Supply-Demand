
import React from 'react';
import { connect } from 'react-redux';
import  {Row}  from 'react-bootstrap';
import * as actions from '../actions';
import {useEffect} from 'react'


const Stage = (props) => {

      if (props.stage>=0 && props.stage<20 ){
        return (
          <>
              <h4><strong>Stage One.</strong></h4>
              <p>The pandemic has begun, and worry is starting to spread. 
                The demand for sanitizer is rapidly increasing, pushing the Demand curve to the right.
                The curve is also becoming more inelastic (vertical) because the demand for sanitizer is becoming less effected by changes in price.
                The price sky rockets, while the supply has remained steady.
              </p>
          </>
        );
      }else if (props.stage>=20 && props.stage < 30) {
        return (
          <>
              <h4><strong>Stage Two.</strong></h4>
              <p>Suppliers are trying to respond to the increase in demand. 
                They slowly increase production of their factories to their maximum capacities. 
                The price begins to fall, but the suppliers are still not able to meet the demand without expansion.
              </p>
          </>
        );
      }else if(props.stage>=30 && props.stage < 40) {
        return (
          <>
              <h4><strong>Stage Three.</strong></h4>
              <p>There is still a shortage in the market.
                New suppliers, such as local distilleries, jump into the market to meet the need, but there is a lag time until the product is at market.
                When new suppliers enter the market it shifts the supply curve to the right, the price begins to drop and quantity produced increases.  
                By the end of this stage, production has finally reached the new market demands of the pandemic.
              </p>
          </>

        )
    }else if (props.stage>=40 && props.stage < 50){
      return (
        <>
            <h4><strong>Stage Four.</strong></h4>
            <p>The pandemic is finally starting to subside! The demand curve is slowly moving to the left,
              price is dropping, and the quantity bought also has dropped. 
            </p>
        </>
      )
    }else if (props.stage>=50 && props.stage < 60){
      return (
        <>
            <h4><strong>Stage Five.</strong></h4>
            <p>Unfortunately, there is no need for the extra production any more. 
              The price is too low for all the suppliers to stay in the market.
              The distilleries return to the drinking spirits market and 
              sanitizer companies return to their initial production levels before the pandemic began. 
            </p>
        </>
      )
      }else{
        return (
          <>
              <h4><strong>Stage Six.</strong></h4>
              <p>All has returned to normal! After the extra suppliers drop out the price increases to its original amount. 
              </p>
          </>
        )
      }
    }
 


    function mapStateToProps(state) {
     
        return ({
            stage: state.Stage,
          
        })
      }

      export default connect(mapStateToProps, actions)(Stage);