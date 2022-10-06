import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListGroupBoot() {
  return (
    <ListGroup as='ol' numbered horizontal>
      <ListGroup.Item as='li' action href='#' variant='primary'>
        Item 1
      </ListGroup.Item>
      <ListGroup.Item as='li' action variant='secondary' disabled>
        Item 2
      </ListGroup.Item>
      <ListGroup.Item action as='li' variant='success'>
        Item 3
      </ListGroup.Item>
      <ListGroup.Item as='li' action variant='info'>
        Item 4
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ListGroupBoot;
