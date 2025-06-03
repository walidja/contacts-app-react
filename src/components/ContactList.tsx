import ListGroup from "react-bootstrap/ListGroup";
import ContactItem from "./ContactItem";

function ContactList({
  selectedContact,
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
        active={selectedContact && selectedContact.id === contact.id}
        key={contact.id}
        contact={contact}
        contactsToDelete={contactsToDelete}
        setContactsToDelete={setContactsToDelete}
        onClick={() => {
          setSelectedContact(contact);
          setEditEnabled(false); // Reset edit mode when a contact is selected
        }}
      />
    );
  });
  return (
    <ListGroup as="ul" className="contacts-list m-1">
      {items}
    </ListGroup>
  );
}

export default ContactList;
