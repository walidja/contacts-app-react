const ContactModel = require("../model/contactModel");
const contactModel = new ContactModel();
const CODE_RESPONSE = require("../utils/constants").CODE_RESPONSE;

class ContactController {
  constructor() {}

  getContacts = async (req, res) => {
    try {
      const contacts = await contactModel.getContacts();
      res.status(CODE_RESPONSE.SUCCESS).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res
        .status(CODE_RESPONSE.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to fetch contacts" });
    }
  };

  getContactById = async (req, res) => {
    const { id } = req.params;
    try {
      const contact = await contactModel.getContactById(id);
      console.log("Fetching contact by ID:", id);
      console.log("Contact found:", contact);
      if (!contact) {
        return res
          .status(CODE_RESPONSE.NOT_FOUND)
          .json({ error: "Contact not found" });
      }
      res.status(CODE_RESPONSE.SUCCESS).json(contact);
    } catch (error) {
      console.error("Error fetching contact:", error);
      res
        .status(CODE_RESPONSE.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to fetch contact" });
    }
  };

  addContact = async (req, res) => {
    const contact = req.body;
    console.log("Adding contact:", contact);
    if (!contact || !contact.name || !contact.primaryNumber) {
      return res
        .status(CODE_RESPONSE.BAD_REQUEST)
        .json({ error: "Invalid contact data" });
    }
    try {
      await contactModel.addContact({ ...contact, id: Date.now().toString() }); // Generate a unique ID
      res.status(CODE_RESPONSE.CREATED).json({ message: "Contact added" });
    } catch (error) {
      console.error("Error adding contact:", error);
      res
        .status(CODE_RESPONSE.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to add contact" });
    }
  };
  updateContact = async (req, res) => {
    const { id } = req.params;
    const contact = req.body;
    console.log("Updating contact:", id, contact);
    try {
      await contactModel.updateContact(id, contact);
      res.status(CODE_RESPONSE.ACCEPTED).json({ message: "Contact updated" });
    } catch (error) {
      console.error("Error updating contact:", error);
      res
        .status(CODE_RESPONSE.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to update contact" });
    }
  };
  deleteContact = async (req, res) => {
    const { id } = req.params;
    try {
      await contactModel.deleteContact(id);
      res.status(CODE_RESPONSE.SUCCESS).json({ message: "Contact deleted" });
      console.log(`One contact ${id} was deleted successfully`);
    } catch (error) {
      console.error("Error deleting contact:", error);
      res
        .status(CODE_RESPONSE.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to delete contact" });
    }
  };
  deleteContacts = async (req, res) => {
    let idList = req.body; // Expecting an array of IDs in the request body
    try {
      await contactModel.deleteContacts(idList);
      res.status(CODE_RESPONSE.SUCCESS).json({ message: "Contacts deleted" });
      console.log(`Contact ${idList} were deleted`);
    } catch (error) {
      console.error("Error deleting contacts:", error);
      res
        .status(CODE_RESPONSE.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to delete contacts" });
    }
  };
}

module.exports = ContactController;
