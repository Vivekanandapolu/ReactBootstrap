import React from "react";
import { Card, Nav } from "react-bootstrap";
import Img from "./Img";

function NavCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <Card.Img src={Img} />
          <Nav variant='pills'>
            <Nav.Item>
              <Nav.Link href='#home'>HOme</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#disabled' disabled>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Hi This is the carrd from Bootstrap</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NavCard;
