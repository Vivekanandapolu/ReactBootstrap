import React from "react";
import { Button, Card } from "react-bootstrap";
import Img from "./Img";
function CardBoot() {
  const url = "http://localhost:3000";
  return (
    <div
      className='mb-10'
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <Card.Img src={"http://localhost:8000" + Img}></Card.Img>
        <center>
          <Card.Title>Hey,Card</Card.Title>
        </center>
        <Card.Body
          style={{
            display: "center",
            justifyContent: "center",
          }}
        >
          Hello card How are You today!!.
        </Card.Body>
        <center>
          <Button variant='primary' size='sm' style={{ width: "100px" }}>
            Happy
          </Button>
        </center>
      </Card>
    </div>
  );
}

export default CardBoot;
