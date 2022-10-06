import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Alertboots() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant='danger' onClose={() => setShow(false)} dismissible>
        <Alert.Heading className='sm-5'>Hey you got an error</Alert.Heading>
      </Alert>
    );
  } else {
    return <Button onClick={() => setShow(true)}>Show Error</Button>;
  }
}

export default Alertboots;
