const path = require("path");
const os = require("os");
require("dotenv").config();

// Define the path to the contacts file
exports.FULL_PATH = process.env.CONTACTS_FILE_PATH;
exports.DATA_DIR = path.join(os.tmpdir(), process.env.CONTACTS_DATA_DIR);
exports.CONTACTS_FILE_PATH = this.FULL_PATH
  ? this.FULL_PATH
  : path.join(this.DATA_DIR, process.env.CONTACTS_FILE_NAME);
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
