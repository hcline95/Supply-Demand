import React from 'react';
import  { Button, Popover, OverlayTrigger}  from 'react-bootstrap'
import EqualibriumGraph from '../charts/equalibriumChart';

    const pop = (
        <Popover id="popover-basic" width="400px">
          <Popover.Title as="h3">Shortages & Surplus</Popover.Title>
          <Popover.Content>
            <EqualibriumGraph/>
          </Popover.Content>
        </Popover>
      );
      
    export default function Equalibrium(){
        return(
        <OverlayTrigger placement="right" overlay={pop}>
          <Button variant="light">
              <h4>Equalibrium</h4>
          </Button>
        </OverlayTrigger>
        )
        };
  