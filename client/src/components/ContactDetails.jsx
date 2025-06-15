import Button from "react-bootstrap/Button";
import ContactForm from "./ContactForm";
import { Card } from "react-bootstrap";

function ContactDetails({
  selectedContact,
  setSelectedContact,
  editEnabled,
  setEditEnabled,
  deleteContact,
  saveChanges,
}) {
  const editContact = (e) => {
    // Logic for editing the contact can be implemented here
    console.log("Edit contact logic to be implemented");
    const name = e.target.name;
    const value = e.target.value;
    // Update the selected contact with the new value
    setSelectedContact({
      ...selectedContact,
      [name]: value,
    });
    console.log("Updated contact:", selectedContact);
  };
  const enableFields = () => {
    setEditEnabled(true);
  };
  return (
    <article className="details-page">
      <div className="details-page-container" id="details-page-container">
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <span className="">Contact Details</span>
              <div>
                <Button
                  variant="danger"
                  className="delete-item-btn"
                  id="delete-item-btn"
                  onClick={deleteContact}
                >
                  Delete
                </Button>
                <Button
                  variant="warning"
                  className="edit-item-btn ms-1"
                  id="edit-item-btn"
                  onClick={enableFields}
                >
                  Edit
                </Button>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <ContactForm
              formId={"edit-contact-form"}
              contact={selectedContact}
              handleChange={editContact}
              isEditable={editEnabled}
              saveChanges={saveChanges}
            />
          </Card.Body>
          <Card.Footer style={{ display: editEnabled ? "block" : "none" }}>
            <Button
              variant="secondary"
              onClick={() => setEditEnabled(false)}
              className="me-2"
            >
              Cancel
            </Button>
            <Button
              form="edit-contact-form"
              variant="success"
              type="submit"
              id="save-contact-btn"
            >
              Update Contact
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </article>
  );
}

export default ContactDetails;
