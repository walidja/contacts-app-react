import ListGroup from "react-bootstrap/ListGroup";

function ContactItem({
  contact,
  onClick,
  contactsToDelete,
  setContactsToDelete,
  active,
}) {
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setContactsToDelete([...contactsToDelete, contact.id]);
    } else {
      // If the checkbox is unchecked, remove the contact from contactsToDelete
      setContactsToDelete(contactsToDelete.filter((id) => id !== contact.id));
    }
  };
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-center"
      key={contact.id}
      onClick={onClick}
      active={active}
    >
      <div className="contact-details">
        <span className="contact-name">{contact.name}</span>
        <span className="contact-number">{contact.primaryNumber}</span>
      </div>
      <input
        type="checkbox"
        name="delete-item"
        onChange={handleCheckboxChange}
      />
    </ListGroup.Item>
  );
}

export default ContactItem;
