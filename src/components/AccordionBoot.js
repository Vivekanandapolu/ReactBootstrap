import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Accordion 1</Accordion.Header>
        <Accordion.Body>HEyy hi how are you today all </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Accordion 2</Accordion.Header>
        <Accordion.Body>HEyy hi how are you today all </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
