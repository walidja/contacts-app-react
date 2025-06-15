import { useState, useEffect } from "react";
import CONSTANTS from "./utils/CONSTANTS";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import ContactsSide from "./components/ContactsSide";
import ContactDetails from "./components/ContactDetails";
import AddContactModal from "./components/AddContactModal";
import {
  dbGetContacts,
  dbCreatContact,
  dbDeleteListOfContacts,
  dbDeleteContact,
  dbUpdateContact,
} from "./api/contactsApi";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editEnabled, setEditEnabled] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contactsToDelete, setContactsToDelete] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    dbGetContacts()
      .then((resContacts) => {
        setContacts(resContacts);
      })
      .catch((err) => {
        window.alert(err);
      });
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      setSelectedContact(selectedContact || contacts[0]); // Set the first contact as selected if none is selected
    } else {
      setSelectedContact(null);
    }
  }, [contacts]);

  const addContact = (e, contact, setContact) => {
    e.preventDefault();
    setIsSaving(true);
    dbCreatContact(contact)
      .then((res) => {
        setContacts([...contacts, { ...contact, id: Date.now() }]);
        // Reset the contact state to empty so the form is ready for the next contact
        setContact(CONSTANTS.EMPTY_CONTACT);
        // and close the modal
        setIsModalOpen(false);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const deleteManyContacts = () => {
    if (
      !window.confirm("Are you sure you want to delete the selected contacts?")
    ) {
      return;
    }
    dbDeleteListOfContacts(contactsToDelete).then((val) => {
      setContacts(
        contacts.filter((contact) => !contactsToDelete.includes(contact.id))
      );
      setContactsToDelete([]); // Clear the contacts to delete after deletion
      setSelectedContact(null);
    });
  };

  const deleteContact = (e) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }
    dbDeleteContact(selectedContact.id).then((val) => {
      const updatedContacts = contacts.filter(
        (contact) => contact.id !== selectedContact.id
      );
      setContacts(updatedContacts);
      console.log("Contact deleted:", selectedContact);
      // Reset the selected contact
      setSelectedContact(null);
    });
  };

  const editContact = (e) => {
    e.preventDefault();
    dbUpdateContact(selectedContact.id, selectedContact).then((val) => {
      setContacts(
        contacts.map((listContact) =>
          listContact.id === selectedContact.id ? selectedContact : listContact
        )
      );
      console.log("Changes saved:", selectedContact);
      setEditEnabled(false);
    });
  };

  return (
    <>
      <AppHeader setIsModalOpen={setIsModalOpen} />
      <ContactsSide
        selectedContact={selectedContact}
        contacts={contacts}
        setSelectedContact={setSelectedContact}
        setEditEnabled={setEditEnabled}
        contactsToDelete={contactsToDelete}
        setContactsToDelete={setContactsToDelete}
        onDeleteManyContacts={deleteManyContacts}
      />
      {selectedContact && (
        <ContactDetails
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
          editEnabled={editEnabled}
          setEditEnabled={setEditEnabled}
          deleteContact={deleteContact}
          saveChanges={editContact}
        />
      )}
      <AddContactModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        saveContact={addContact}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <AppFooter />
    </>
  );
}

export default App;
