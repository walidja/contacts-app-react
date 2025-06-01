// This component represents the sidebar where contacts are listed and new contacts can be added.
import ContactList from "./ContactList";
import AddContactModal from "./AddContactModal";

function ContactsSide({
  isModalOpen,
  setIsModalOpen,
  contacts,
  setContacts,
  setSelectedContact,
  setEditEnabled,
  contactsToDelete,
  setContactsToDelete,
  onDeleteManyContacts,
}) {
  const onClickNewContact = () => {
    setIsModalOpen(true);
  };
  return (
    <aside id="contacts-bar" className="contacts-bar">
      <button
        id="new-contact-btn"
        className="new-contact-btn"
        onClick={onClickNewContact}
      >
        Add Contact
      </button>
      <ContactList
        setSelectedContact={setSelectedContact}
        contacts={contacts}
        setEditEnabled={setEditEnabled}
        contactsToDelete={contactsToDelete}
        setContactsToDelete={setContactsToDelete}
      />
      <button
        id="delete-many-btn"
        className="delete-many-btn"
        style={{ display: contactsToDelete.length > 0 ? "block" : "none" }}
        onClick={onDeleteManyContacts}
      >
        Delete Contacts
      </button>
      <AddContactModal
        contacts={contacts}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setContacts={setContacts}
      />
    </aside>
  );
}

export default ContactsSide;
