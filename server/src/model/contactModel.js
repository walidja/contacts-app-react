const { readFile, writeToFile, makeDataDir } = require("../utils/fileUtils");
const { CONTACTS_FILE_PATH } = require("../utils/constants");

class ContactModel {
  constructor() {
    this.contacts = {};
    this.loadContacts(); // Load contacts when the model is initialized
  }

  loadContacts = async () => {
    try {
      // Load contacts from the file system
      console.log("Loading contacts from file:", CONTACTS_FILE_PATH);
      this.contacts = await await readFile(CONTACTS_FILE_PATH);
    } catch (error) {
      // Handle errors, e.g., file not found or JSON parsing error
      if (error.code === "ENOENT") {
        console.warn(
          "Contacts file not found, initializing with an empty object."
        );
        this.contacts = {}; // Initialize to an empty object if file not found
        makeDataDir(); // Ensure the data directory exists
        await writeToFile(CONTACTS_FILE_PATH, this.contacts); // Create the file
      } else {
        console.error("Error loading contacts:", error);
        throw new Error("Failed to load contacts");
      }
    }
  };

  saveContacts = async () => {
    try {
      console.log("Saving contacts to file:", CONTACTS_FILE_PATH);
      console.log("Contacts to save:", this.contacts);
      await writeToFile(CONTACTS_FILE_PATH, this.contacts);
      console.log("Contacts saved successfully.");
    } catch (error) {
      console.error("Error saving contacts:", error);
      throw new Error("Failed to save contacts");
    }
  };

  getContacts = () => {
    return Object.values(this.contacts);
  };

  getContactById = (id) => {
    return this.contacts[id] || null;
  };

  addContact = (contact) => {
    if (!contact || !contact.id) {
      throw new Error("Contact must have an id");
    }
    this.contacts[contact.id] = contact;
    this.saveContacts();
  };

  updateContact = (id, updatedContact) => {
    let oldContact = this.contacts[id];
    if (!oldContact) {
      throw new Error("Contact not found");
    }
    this.contacts[id] = { ...oldContact, ...updatedContact };
    this.saveContacts();
  };

  deleteContacts = (ids) => {
    console.log(`delete contacts:${ids}`);
    for (const contactId of ids) {
      if (!this.contacts[contactId]) {
        console.warn(`ID '${contactId}' not exist!, skipping`);
        continue;
      }
      delete this.contacts[contactId];
    }
    this.saveContacts();
  };

  deleteContact = (id) => {
    console.log(`delete contact with id: ${id}`);
    if (!this.contacts[id]) {
      return true;
    }
    delete this.contacts[id];
    this.saveContacts();
  };
}

module.exports = ContactModel;
