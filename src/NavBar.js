import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">MovieTime</NavbarBrand>
              <Nav className="ml-auto m-3" navbar>
                <NavItem>
                  <NavLink href="https://www.themoviedb.org">
                    This product uses the TMDb API but is not endorsed or
                    certified by TMDb
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        {/*Search field and button*/}
        <Row className="search my-3">
          <Col sm="12">
            <InputGroup>
              <Input placeholder="Find a movie" />
              <InputGroupAddon addonType="prepend">
                <Button color="success" className="search-button">
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
