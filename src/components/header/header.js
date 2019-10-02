import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const AnimatedContainer = styled.div`

  .navbar-light .navbar-nav a.nav-link {
    :active,
    :focus,
    :hover {
      color: #ff5757;
    }
  }
`;

const Header = ({ title, logo, email, mobile, mobilePlain }) => {
  console.log(logo);
  return (
    <AnimatedContainer>
      <Navbar>
        <Container>
          <Row style={{ width: '100%' }}>
            <Col>
              <Navbar.Brand href="/">
                <Img fixed={logo.childImageSharp.fixed} alt={title} style={{ verticalAlign: 'text-bottom' }}/>
                {'  '}{title}
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                <Nav className="text-right">
                  <Nav.Link href={`tel:${mobilePlain}`}><FontAwesomeIcon icon={faPhoneAlt} />&nbsp;{mobile}</Nav.Link>
                  <Nav.Link href={`mailto:${email}`}><FontAwesomeIcon icon={faPaperPlane} />&nbsp;{email}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </AnimatedContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  email: PropTypes.string,
  mobile: PropTypes.string,
  mobilePlain: PropTypes.string
};

export default Header;
