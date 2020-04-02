import PriceGraph from '../charts/priceChart'
import React from 'react';
import { connect } from 'react-redux';


const Price = (props) => {
 
      let length = props.data.length - 1

      return (
        <>
              <h4><strong>Price: ${props.data[length].value}</strong></h4>
              <PriceGraph/>
          </>
      );

    }

    function mapStateToProps(state) {
        return ({
            data: state.Data.data
        })
      }

      export default connect(mapStateToProps)(Price);