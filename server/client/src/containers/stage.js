
import React from 'react';
import { connect } from 'react-redux';


const Stage = (props) => {
 

      return (
        <>
            <h4><strong>Stage One.</strong></h4>
            <p>Description. Description. Description. Description. Description. </p>
        </>
      );

    }

    function mapStateToProps(state) {
        return ({
            data: state.Data.data
        })
      }

      export default connect(mapStateToProps)(Stage);