import React, { useState, useContext } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { store } from "./store"

const ContactForm = () => {

  // variables and functions to manipulate state

  const globalStore = useContext(store)
  const lang = globalStore.state.lang
  const modalOpen = globalStore.state.modalOpen
  const { dispatch } = globalStore
  console.log(modalOpen)

  // local state

  const [message, setMessage] = useState("")

  // local variables

  let send = "Send"
  let yourMessage = "Your message"
  let writeSomething = "Write me a message"
  let yourEmail = "Your email"
  let phone = "phone:"
  let email = "email:"

  // translations for text of local variables

  if (lang === "FR") {
    send = "Envoyer"
    yourMessage = "Votre message"
    yourEmail = "Votre mail"
    writeSomething = "Envoyez-moi un mail"
    phone = "téléphone :"
    email = "mél :"
  } else if (lang === "IT") {
    send = "Inviare"
    yourMessage = "Il tuo messaggio"
    yourEmail = "La tua email"
    writeSomething = "Scrivimi qualcosa"
    phone = "telefono:"
  }

  // message functions

  const writeMessage = (event) => {
    setMessage(event.target.value)
    console.log(message)
  }
  const sendMessageWithSendGrid = () => {
    console.log("hi")
  }

  return (
    <>
      {(modalOpen) ?
        <Modal
          show={modalOpen}
          onHide={() => dispatch({ type: "openModal" })}
          size="lg"
          aria-labelledby="contained-modal-title-center"
          centered
        >
          {/*<Modal.Header closeButton>*/}
          {/*  <Modal.Title id="contained-modal-title-center">*/}
          {/*    <Form>*/}
          {/*      <Form.Group controlId="formBasicEmail">*/}
          {/*        <Form.Label>{writeSomething}</Form.Label>*/}
          {/*        <Form.Control type="email" placeholder={yourEmail} className='emailBlank'/>*/}

          {/*      </Form.Group>*/}
          {/*    </Form>*/}
          {/*  </Modal.Title>*/}
          {/*</Modal.Header>*/}
          {/*<Modal.Body>*/}
          {/*  <Form>*/}
          {/*    <Form.Group controlId='formBasicEmail'>*/}
          {/*      <Form.Control as='textarea' onChange={writeMessage} className='bottomMargin' placholder={yourMessage}/>*/}
          {/*      <Button variant='primary' onClick={sendMessageWithSendGrid}>{send}</Button>*/}
          {/*    </Form.Group>*/}
          {/*  </Form>*/}
          {/*</Modal.Body>*/}
          <Modal.Body>
            <div style={{ textAlign: "center" }}>
              <h2>{email} anismemon096@gmail.com</h2>
              <h2>{phone} +1 802 355 6227</h2>
            </div>
          </Modal.Body>
        </Modal> : null}
    </>
  )
}

export default ContactForm