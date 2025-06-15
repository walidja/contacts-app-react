const EMPTY_CONTACT = {
  name: "",
  primaryNumber: "",
  secondaryNumber: "",
  address: "",
  email: "",
  notes: "",
};

const CONTACTS_API_URL = "/api/contacts";
const CODE_RESPONSE = {
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

const REST_METHODS = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

const CONSTANTS = {
  EMPTY_CONTACT,
  CONTACTS_API_URL,
  CODE_RESPONSE,
  REST_METHODS,
};

export default CONSTANTS;
