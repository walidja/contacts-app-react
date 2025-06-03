import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

function ContactForm({
  contact,
  handleChange,
  saveChanges,
  isEditable,
  formId,
}) {
  return (
    <Form id={formId} onSubmit={saveChanges}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} htmlFor="modal-contact-name">
          Name
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            id="modal-contact-name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            disabled={!isEditable}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} htmlFor="modal-primary-number">
          Primary Number
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="number"
            id="modal-primary-number"
            name="primaryNumber"
            value={contact.primaryNumber}
            onChange={handleChange}
            disabled={!isEditable}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} htmlFor="modal-sec-number">
          Secondary Number
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="number"
            id="modal-sec-number"
            name="secondaryNumber"
            value={contact.secondaryNumber}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} htmlFor="modal-email">
          E-mail
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="email"
            id="modal-email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} htmlFor="modal-address">
          Address:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            id="modal-address"
            name="address"
            value={contact.address}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} htmlFor="modal-notes">
          Notes:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            as={"textarea"}
            id="modal-notes"
            name="notes"
            rows={2}
            placeholder="Enter your notes here"
            onChange={handleChange}
            value={contact.notes}
            disabled={!isEditable}
          />
        </Col>
      </Form.Group>
    </Form>
  );
}
export default ContactForm;
