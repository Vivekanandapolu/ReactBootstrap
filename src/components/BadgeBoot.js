import React from "react";
import { Badge, Button } from "react-bootstrap";

const BadgeBoot = () => {
  return (
    <div>
      <Button>
        <Badge bg='dark'>New Offer</Badge> <Badge bg='primary'>New Offer</Badge>{" "}
        <Badge bg='secondary'>New Offer</Badge>{" "}
        <Badge bg='info'>New Offer</Badge> <Badge bg='success'>New Offer</Badge>{" "}
        <Badge bg='danger'>New Offer</Badge>{" "}
      </Button>
    </div>
  );
};

export default BadgeBoot;
