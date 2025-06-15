import CONSTANTS from "../utils/CONSTANTS";

const url = "http://localhost:4000/contacts";

const CODE_RESPONSE = CONSTANTS.CODE_RESPONSE;
const REST_METHODS = CONSTANTS.REST_METHODS;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const handleRequest = async ({
  reqUrl = url,
  method = REST_METHODS.GET,
  expectedCode = CODE_RESPONSE.SUCCESS,
  body = null,
  logMethod,
}) => {
  console.log(`=========${logMethod}===========`);
  console.log("reqUrl:", reqUrl);
  console.log("method:", method);
  console.log("expCode:", expectedCode);
  console.log("body:", body);

  const response = await fetch(reqUrl, {
    headers: myHeaders,
    redirect: "follow",
    method: method,
    body: body ? JSON.stringify(body) : null,
    headers: myHeaders,
  });
  console.log("response", response);
  if (response.status == expectedCode) {
    const contacts = await response.json();
    console.log(logMethod, contacts);
    return contacts;
  } else {
    const err = await response.json();
    window.alert(err);
  }
};

const dbGetContacts = async () => {
  return handleRequest({ logMethod: "getContacts" });
};

const dbCreatContact = (contact) => {
  return handleRequest({
    logMethod: "createContact",
    method: REST_METHODS.POST,
    body: contact,
    expectedCode: CODE_RESPONSE.CREATED,
  });
};

const dbDeleteListOfContacts = (idsList) => {
  return handleRequest({
    method: REST_METHODS.DELETE,
    logMethod: "deleteListOfContacts",
    body: idsList,
  });
};

const dbDeleteContact = (contactID) => {
  return handleRequest({
    reqUrl: `${url}/${contactID}`,
    method: REST_METHODS.DELETE,
    logMethod: "deleteContact",
  });
};

const dbUpdateContact = (id, updatedContact) => {
  return handleRequest({
    reqUrl: `${url}/${id}`,
    method: REST_METHODS.PUT,
    expectedCode: CODE_RESPONSE.ACCEPTED,
    logMethod: "dbUpdateContact",
    body: updatedContact,
  });
};

export {
  dbGetContacts,
  dbCreatContact,
  dbDeleteListOfContacts,
  dbDeleteContact,
  dbUpdateContact,
};
