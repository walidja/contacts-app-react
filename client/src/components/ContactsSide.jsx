// This component represents the sidebar where contacts are listed and new contacts can be added.
import Button from "react-bootstrap/Button";
import ContactList from "./ContactList";

function ContactsSide({
  contacts,
  selectedContact,
  setSelectedContact,
  setEditEnabled,
  contactsToDelete,
  setContactsToDelete,
  onDeleteManyContacts,
}) {
  return (
    <aside id="contacts-bar" className="contacts-bar">
      <ContactList
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        contacts={contacts}
        setEditEnabled={setEditEnabled}
        contactsToDelete={contactsToDelete}
        setContactsToDelete={setContactsToDelete}
      />
      <Button
        variant="danger"
        id="delete-many-btn"
        className="delete-many-btn"
        style={{ display: contactsToDelete.length > 0 ? "block" : "none" }}
        onClick={onDeleteManyContacts}
      >
        Delete Contacts
      </Button>
    </aside>
  );
}

export default ContactsSide;
