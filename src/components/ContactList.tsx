import ContactItem from "./ContactItem";

function ContactList({
  setSelectedContact,
  contacts,
  setEditEnabled,
  contactsToDelete,
  setContactsToDelete,
}) {
  const items = [];
  contacts.forEach((contact) => {
    items.push(
      <ContactItem
        contact={contact}
        contactsToDelete={contactsToDelete}
        setContactsToDelete={setContactsToDelete}
        onClick={(e) => {
          setSelectedContact(contact);
          setEditEnabled(false); // Reset edit mode when a contact is selected
        }}
      />
    );
  });
  return (
    <ul id="contacts-list" className="contacts-list">
      {items}
    </ul>
  );
}

export default ContactList;
