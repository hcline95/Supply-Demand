
import React from 'react';
import { connect } from 'react-redux';
import  { Button }  from 'react-bootstrap'
import PriceGraph from '../charts/priceChart'




const Price = (props) => {
 
      let length = props.data.length - 1

      return (
        <>
          <td>
            <tr>
              <h4>Price: ${props.data[length].value}</h4>
            </tr>
          </td>
          </>
      );

    }

    function mapStateToProps(state) {
        return ({
            data: state.Data.data
        })
      }

      export default connect(mapStateToProps)(Price);