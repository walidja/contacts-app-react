import { useState } from "react";
import CONSTANTS from "../utils/CONSTANTS";
import Modal from "react-bootstrap/Modal";
import ContactForm from "./ContactForm";
import Button from "react-bootstrap/Button";

function AddContactModal({
  isModalOpen,
  setIsModalOpen,
  saveContact,
  isSaving,
  setIsSaving,
}) {
  const [contact, setContact] = useState(CONSTANTS.EMPTY_CONTACT);
  if (!isModalOpen) {
    return null;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const saveChanges = (e) => {
    e.preventDefault();
    saveContact(e, contact, setContact);
  };
  return (
    <Modal
      size="lg"
      id="modal"
      show={isModalOpen}
      onHide={() => setIsModalOpen(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm
          formId="add-contact-form"
          contact={contact}
          handleChange={handleChange}
          saveChanges={saveChanges}
          isEditable={true}
        />
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
          Cancel
        </Button>
        <Button
          variant="primary"
          type="submit"
          form="add-contact-form"
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Saving...
            </>
          ) : (
            "Add Contact"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddContactModal;
