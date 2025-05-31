import "./styles.css";
import { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import ContactsSide from "./components/ContactsSide";
import ContactDetails from "./components/ContactDetails";
import AddContactModal from "./components/AddContactModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editEnabled, setEditEnabled] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contactsToDelete, setContactsToDelete] = useState([]);
  useEffect(() => {
    if (contacts.length > 0) {
      setSelectedContact(contacts[0]);
    } else {
      setSelectedContact(null);
    }
  }, [contacts]);

  const onDeleteManyContacts = () => {
    setContacts(
      contacts.filter((contact) => !contactsToDelete.includes(contact.id))
    );
    setContactsToDelete([]); // Clear the contacts to delete after deletion
  };

  return (
    <>
      <AppHeader />
      <ContactsSide
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        contacts={contacts}
        setContacts={setContacts}
        setSelectedContact={setSelectedContact}
        setEditEnabled={setEditEnabled}
        contactsToDelete={contactsToDelete}
        setContactsToDelete={setContactsToDelete}
        onDeleteManyContacts={onDeleteManyContacts}
      />
      {selectedContact && (
        <ContactDetails
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
          contacts={contacts}
          setContacts={setContacts}
          editEnabled={editEnabled}
          setEditEnabled={setEditEnabled}
        />
      )}
      <AddContactModal
        contacts={contacts}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setContacts={setContacts}
      />
      <AppFooter />
    </>
  );
}

export default App;
