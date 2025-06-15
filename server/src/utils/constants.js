const path = require("path");
const os = require("os");

// Define the path to the contacts file
exports.DATA_DIR = path.join(os.tmpdir(), "contacts data");
exports.CONTACTS_FILE_PATH = path.join(this.DATA_DIR, "contacts.json");
exports.CODE_RESPONSE = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
