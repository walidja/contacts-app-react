const express = require("express");
const cors = require("cors");
const contactsRouter = require("./src/routes/contacts");
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/contacts", contactsRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
