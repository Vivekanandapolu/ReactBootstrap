import React from "react";
import { Nav } from "react-bootstrap";

function NavBoot() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Nav
      justify fill
      defaultActiveKey='/action'
      variant='tabs'
      onSelect={handleSelect}
    >
      <Nav.Item>
        <Nav.Link href='/action' eventKey='Link-1'>
          Action
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='Link-2'>Process</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='Link-3'>Done</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBoot;
