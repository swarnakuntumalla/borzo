import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LocationModal = (props) =>{
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your region
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Mumbai</p>
          <p>Delhi/NCR</p>
          <p>Bengaluru</p>
          <p>Hydarabad</p>
          <p>Ahmadabad</p>
          <p>Chennai</p>
          <p>kolkata</p>
          <p>Pune</p>
          <p>Surat</p>
        </Modal.Body>
      </Modal>
    );
}

export default LocationModal;