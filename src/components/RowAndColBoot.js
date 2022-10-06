import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

function RowAndColBoot() {
  return (
    <div>
      <Row>
        <Col sm={4}> 
          <ListGroup>
            <ListGroup.Item action href='#'>Column 1</ListGroup.Item>
            <ListGroup.Item action href='#' onClick={()=>{alert("Hi Vivekananda Reddyy")}}>Column 2</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={4}> 
          <ListGroup>
            <ListGroup.Item action href='#'>Column 1</ListGroup.Item>
            <ListGroup.Item action href='#'>Column 2</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default RowAndColBoot;
