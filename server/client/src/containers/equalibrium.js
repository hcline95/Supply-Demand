import React from 'react';
import  { Button, Popover, OverlayTrigger}  from 'react-bootstrap'
import EqualibriumGraph from '../charts/equalibriumChart';
import { connect } from 'react-redux';


      
    function Equalibrium(props){

        const status = ()=>{
            let length = props.status.length - 1

            //checking if a surplus or shortage or equalibrium
            if (props.status[length].shortage === 0){
                return (
                    <h4><strong>Market is in Equalibrium.</strong></h4>
                )
            }else if (props.status[length].shortage < 0){
                return (
                    <h4><strong>Market Shortage: {props.status[length].shortage }</strong></h4>
                )
            } else{
                return (
                    <h4><strong>Market Surplus:{props.status[length].surplus }</strong></h4>
                )
            }
        }


        return(
            <>
            {status()}
            <EqualibriumGraph/>
            </>

        )
        };
  
        function mapStateToProps(state) {
            return ({
                status: state.Equalibrium.status
            })
          }
    
          export default connect(mapStateToProps)(Equalibrium);