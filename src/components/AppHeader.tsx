import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { PersonLinesFill } from "react-bootstrap-icons";

function AppHeader({ setIsModalOpen }) {
  return (
    <Navbar
      id="page-header"
      bg="primary"
      variant="dark"
      className="mb-4 page-header"
    >
      <Container>
        <Navbar.Brand>
          <PersonLinesFill className="me-2" />
          Contacts List App
        </Navbar.Brand>
        <Button variant="light" onClick={() => setIsModalOpen(true)}>
          + Add Contact
        </Button>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
