import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ObjectivesModal = ({ show, handleClose, objectives }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>วัตถุประสงค์</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <ul>
            {objectives && objectives.map(obj => {
              return (
                <li key={obj.id} style={{ listStyle: 'none' }}>
                  {`${obj.objective_no} ${obj.objective_desc}`}
                </li>
              );
            })}
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ObjectivesModal