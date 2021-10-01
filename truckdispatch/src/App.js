
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Nav , Navbar , NavDropdown , Form, FormControl, Button,Container} from 'react-bootstrap';
function App() {
  return (
    <div className="container">
      <Navbar className="navbarcust" bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><i id="truckic"className="fa fa-truck fa-xl"></i>TruckDispatch</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="home" href="#action1">Home</Nav.Link>
        <NavDropdown renderMenuOnMount={true} title="Career Services" className="dropdown1">
          <NavDropdown.Item className="itm" href="">Truck Dispatch Services</NavDropdown.Item>
          <NavDropdown.Item className="itm" href="">Other Services</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown renderMenuOnMount={true} title="Contact Us" className="dropdown2">
          <NavDropdown.Item className="cont" href="">Admin</NavDropdown.Item>
          <NavDropdown.Item href="">Services</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<img src="./images/truck.jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
       <h1>Truck Dispatch System</h1>
    </div>
  );
}
export default App;