function ContactItem({
  contact,
  onClick,
  contactsToDelete,
  setContactsToDelete,
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
    <li className="contact-item" key={contact.id} onClick={onClick}>
      <div className="contact-details">
        <span className="contact-name">{contact.name}</span>
        <span className="contact-number">{contact.primaryNumber}</span>
      </div>
      <input
        type="checkbox"
        name="delete-item"
        onChange={handleCheckboxChange}
      />
    </li>
  );
}

export default ContactItem;
