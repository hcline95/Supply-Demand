import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';



export default function MarketShareGraph(props){


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
            color: 'blue',
            title: 'Two',
            value: 50 - props.quanity
            },
            {
            color: 'green',
            title: props.name,
            value: props.quanity
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
