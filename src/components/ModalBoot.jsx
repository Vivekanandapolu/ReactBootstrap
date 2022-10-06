import React from "react";
import { useState, useEffect } from "react";
import { Button, Container, Form, Modal, ThemeProvider } from "react-bootstrap";

function ModalBoot(props) {
  const [show, setShow] = useState(false);
  const handlerClose = () => setShow(false);
  const handlerShow = () => setShow(true);
  useEffect(() => {
    console.log(show);
  }, []);
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint='xxs'
    >
      <Button onClick={handlerShow}>Show Message</Button>
      <Modal show={show} onHide={handlerClose} centered>
        <Modal.Header closeButton>
          <h3>Please Signup Your Mail</h3>
        </Modal.Header>
        <Modal.Body>
          Modals are positioned over everything else in the document and remove
          scroll from the so that modal content scrolls instead. Modals are
          unmounted when closed. Bootstrap only supports one modal window at a
          time. Nested modals aren't supported, but if you really need them, the
          underlying @restart/ui library can support them if you're willing.
          <br />
          <Form>
            {" "}
            <h4>
              <Form.Label>Email</Form.Label>
            </h4>
            <Form.Control
              type='email'
              placeholder='name@gmail.com'
              name='Email'
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handlerClose} variant='danger'>
            Close
          </Button>
          <Button onClick={() => alert("Changes Saved")} variant='success'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeProvider>
  );
}

export default ModalBoot;
