const express = require("express");
const router = express.Router();
const contactCont = require("../controllers/contactController");
const contactController = new contactCont();

router
  .route("/")
  .get(contactController.getContacts)
  .post(contactController.addContact)
  .delete(contactController.deleteContacts);

router
  .route("/:id")
  .get(contactController.getContactById)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
