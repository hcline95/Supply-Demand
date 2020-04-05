import { Overlay, Popover } from 'react-bootstrap'
import React, { useEffect } from 'react';
import  { Button, Container, Row, Col, Table }  from 'react-bootstrap'
import { useState, useRef} from 'react'

export default function PopOver({ item }) {

    return (
        
          <Popover id="popover-contained" placement='bottom'>
            <Popover.Title as="h3">Titleeeeee</Popover.Title>
            <Popover.Content>
            <p>Description.Description. Description. Description. Description. </p>
            </Popover.Content>
          </Popover>
        
  
    );

}

 