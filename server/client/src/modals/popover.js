import PriceGraph from '../charts/priceChart';
import React from 'react';
import Price from '../containers/price';
import  { Button, Popover, OverlayTrigger}  from 'react-bootstrap'

    const pop = (
        <Popover id="popover-basic" width="400px">
          <Popover.Title as="h3">Price</Popover.Title>
          <Popover.Content>
            <PriceGraph/>
          </Popover.Content>
        </Popover>
      );
      
    export default function PopOver(){
        return(
        <OverlayTrigger placement="right" overlay={pop}>
          <Button variant="light">
              <Price />
          </Button>
        </OverlayTrigger>
        )
        };
  
