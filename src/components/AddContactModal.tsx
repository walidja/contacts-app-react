import { useState } from "react";
import { CONSTANTS } from "../utils/CONSTANTS";

function AddContactModal({
  isModalOpen,
  setIsModalOpen,
  contacts,
  setContacts,
}) {
  const [contact, setContact] = useState(CONSTANTS.EMPTY_CONTACT);
  const modalDisplay = () => (!isModalOpen ? "none" : "block");
  if (!isModalOpen) {
    return null;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const saveContact = (e) => {
    e.preventDefault();
    setContacts([...contacts, { ...contact, id: Date.now() }]);
    // Reset the contact state to empty so the form is ready for the next contact
    setContact(CONSTANTS.EMPTY_CONTACT);
    // and close the modal
    setIsModalOpen(false);
  };
  return (
    <div id="modal" className="modal" style={{ display: modalDisplay() }}>
      <div className="modal-content">
        <span
          className="close-btn"
          id="close-modal"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          &times;
        </span>
        <h2>Add New Contact</h2>
        <form id="add-contact-form" onSubmit={saveContact}>
          <div className="form-group">
            <label htmlFor="modal-contact-name">Name</label>
            <input
              type="text"
              id="modal-contact-name"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-primary-number">Primary Number</label>
            <input
              type="number"
              id="modal-primary-number"
              name="primaryNumber"
              value={contact.primaryNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-sec-number">Secondary Number</label>
            <input
              type="number"
              id="modal-sec-number"
              name="secondaryNumber"
              value={contact.secondaryNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-email">E-mail</label>
            <input
              type="email"
              id="modal-email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="modal-email">E-mail:</label>
          <input
            type="email"
            id="modal-email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="modal-address">Address:</label>
          <input
            type="text"
            id="modal-address"
            name="address"
            value={contact.address}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="modal-notes">Notes:</label>
          <br />
          <textarea
            id="modal-notes"
            name="notes"
            placeholder="Enter your notes here"
            onChange={handleChange}
            value={contact.notes}
          ></textarea>
          <br />

          <button type="submit" id="save-contact-btn">
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContactModal;
