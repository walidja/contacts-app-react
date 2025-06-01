function ContactDetails({
  selectedContact,
  setSelectedContact,
  contacts,
  setContacts,
  editEnabled,
  setEditEnabled,
}) {
  const deleteContact = (e) => {
    e.preventDefault();
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== selectedContact.id
    );
    setContacts(updatedContacts);
    console.log("Contact deleted:", selectedContact);
    // Reset the selected contact
    setSelectedContact(null);
  };
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
  const saveChanges = (e) => {
    e.preventDefault();
    setContacts(
      contacts.map((listContact) =>
        listContact.id === selectedContact.id ? selectedContact : listContact
      )
    );
    console.log("Changes saved:", selectedContact);
    setEditEnabled(false);
  };
  return (
    <article className="details-page">
      <div className="details-page-container" id="details-page-container">
        <header className="contact-details-header">
          <h3>Contact Details</h3>
          <div>
            <button
              className="delete-item-btn"
              id="delete-item-btn"
              onClick={deleteContact}
            >
              Delete
            </button>
            <button
              className="edit-item-btn"
              id="edit-item-btn"
              onClick={enableFields}
            >
              Edit
            </button>
          </div>
        </header>
        <main>
          <form id="contact-details-form" onSubmit={saveChanges}>
            Name:{" "}
            <input
              type="text"
              name="name"
              id="contact-name"
              disabled={!editEnabled}
              value={selectedContact.name}
              onChange={editContact}
              required
            />
            <br />
            Primary Number:{" "}
            <input
              type="number"
              name="primaryNumber"
              id="primary-number"
              disabled={!editEnabled}
              value={selectedContact.primaryNumber}
              onChange={editContact}
              required
            />
            <br />
            Secondary Number:{" "}
            <input
              type="number"
              name="secondaryNumber"
              id="sec-number"
              disabled={!editEnabled}
              value={selectedContact.secondaryNumber}
              onChange={editContact}
            />
            <br />
            E-mail:{" "}
            <input
              type="text"
              name="email"
              id="email"
              disabled={!editEnabled}
              value={selectedContact.email}
              onChange={editContact}
            />
            <br />
            Address:{" "}
            <input
              type="text"
              name="address"
              id="address"
              disabled={!editEnabled}
              value={selectedContact.address}
              onChange={editContact}
            />
            <br />
            Notes:
            <br />
            <textarea
              name="notes"
              id="notes"
              placeholder="enter your notes here if any"
              disabled={!editEnabled}
              value={selectedContact.notes}
              onChange={editContact}
            ></textarea>
            <br />
            <button
              type="submit"
              id="save-changes-btn"
              className="save-changes-btn"
              style={{ display: editEnabled ? "block" : "none" }}
            >
              Save Changes
            </button>
          </form>
        </main>
      </div>
    </article>
  );
}

export default ContactDetails;
