import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modals(props) {
  // export default function Modals(title, body, positive, negative) {
  return (
   <>
        <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.modalBody}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">{props.negative}</Button>
        <Button variant="primary">{props.positive}</Button>
      </Modal.Footer>
    </Modal.Dialog>
   </>
  )
}
