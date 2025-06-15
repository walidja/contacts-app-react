const express = require("express");
const cors = require("cors");
const path = require("path");
const contactsRouter = require("./src/routes/contacts");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/contacts", contactsRouter);
// app.use(express.static(path.join(__dirname, "../client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
