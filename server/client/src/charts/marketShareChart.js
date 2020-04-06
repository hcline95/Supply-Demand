import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { connect } from 'react-redux';



function MarketShareGraph(props){


      return (
        <ReactMinimalPieChart
            className='pie-chart'
            animate={true}
            animationDuration={500}
            animationEasing="ease-out"
            cx={50}
            cy={50}
            data={[
            {
            color: 'gray',
            title: 'Two',
            value: props.quantity
            },
            {
            color: 'blue',
            title: props.name,
            value: props.item_quantity
            }
            ]}
            label={false}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={30}
            onClick={undefined}
            onMouseOut={undefined}
            onMouseOver={undefined}
            paddingAngle={5}
            radius={40}
            rounded={false}
            startAngle={0}
            viewBoxSize={[
            10,
            10
            ]}
/>


      );

    }

    function mapStateToProps(state) {
    
        return ({
            quantity: state.Quantity
        })
      }
    
      export default connect(mapStateToProps)(MarketShareGraph);