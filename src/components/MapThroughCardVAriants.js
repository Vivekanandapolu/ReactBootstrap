import React from "react";
import { Card } from "react-bootstrap";

function MapThroughCardVAriants() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        flexFlow: " wrap",
        gap: "10px 10px",
      }}
    >
      {[
        "Primary",
        "Secondary",
        "Success",
        "Danger",
        "Info",
        "Warning",
        "Light",
        "Dark",
      ].map((variant) => (
        <Card
          bg={variant.toLocaleLowerCase()}
          border={variant.toLocaleLowerCase()}
          text={variant.toLocaleLowerCase() === "light" ? "dark" : "white"}
          key={variant}
          style={{ width: "18rem", margin: "5px" }}
          className='mb-2'
        >
          <Card.Header>Beatiful Card</Card.Header>
          <Card.Body>
            <Card.Title>{variant} card title</Card.Title>
            <Card.Text>
              {" "}
              A beatiful rose is only belongs for the Beatiful Women
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MapThroughCardVAriants;
