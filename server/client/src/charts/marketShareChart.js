import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { connect } from 'react-redux';



function MarketShareGraph(props){
  console.log(props)

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
            radius={30}
            rounded={false}
            startAngle={340}
            viewBoxSize={[
            100,
            100
            ]}>
              <div className='chart-inner-text d-flex flex-column'>
                  <h4 className={props.item_previous_quantity > props.item_quantity ? 'red' : 'green'}><strong> {Math.round(100 - (props.item_previous_quantity/props.item_quantity * 100))}%</strong></h4>
              </div>
            </ReactMinimalPieChart>



      );

    }

    function mapStateToProps(state) {
    
        return ({
            quantity: state.Quantity
        })
      }
    
      export default connect(mapStateToProps)(MarketShareGraph);