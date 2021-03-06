
import React from 'react';
import { connect } from 'react-redux';
import  {Row}  from 'react-bootstrap';
import * as actions from '../actions';



const Diary = (props) => {


    return(
      <>
      <div class="scrollable">
      {props.diary.map(function(day){
        return(
        <Row >  
       
          <p><strong>{day.day}</strong>: The price was ${day.price} and the quantity was {day.quantity}0,000. {day.description} </p>
        </Row>
        )
      })}

      </div>
        
      </>
    )

    }


    function mapStateToProps(state) {

        return ({
    
            diary:state.Diary.diary
        })
      }

      export default connect(mapStateToProps, actions)(Diary);