import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import MEDIA from '../../helpers/mediaTemplates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const AnimatedContainer = styled.footer`
  margin-top: 4em;
  padding-bottom: .5em;
  position: relative;
  background: #ff5757;
`;

const CopyrightText = styled.p`
  padding-top: 2.5em;
  margin-bottom: .5em;
  font-size: .8em;
  color: rgba(255,255,255, .75);
  text-align: center;
`;

const TopImage = styled(Img)`
  left: 0;
  position: absolute;
  img {
    content: "";
    bottom: -1px;
    width: 100%;
    height: 230px;
    background-size: cover;
    display: inline-block;
  }
`;

const FooterHeading = styled.h2`
  font-size: 1.8em;
  font-weight: 400;
  color: #fcfcfc;
  text-align: center;
  margin-top: 1.25em;
  margin-bottom: 1.5em;

  ${MEDIA.SM`
    font-size: 2.2em;
  `}
`

const FooterText = styled.div`
  margin-top: 1em;
  font-size: 1em;
  display: block;

  ${MEDIA.SM`
    font-size: 1.2em;
  `};
`;


const IconWrapper = styled(FontAwesomeIcon)`
  font-size: 4em;
  transition: all .35s;
`;

const LinkWrapper = styled.a`
  display: block;
  text-align: center;
  color: rgba(255,255,255, 0.8);
  border: 2px solid transparent;
  padding: 1em 0em;
  border-radius: .5em;
  transition: all .35s;

  ${MEDIA.SM`
    padding: 2em 1em;
  `};

  :active,
  :focus,
  :hover {
    color: #fff;
    text-decoration: none;
    border-color: rgba(255,255,255,.5);

    ${IconWrapper} {
      transform: rotateZ(10deg);
    }
  }
`;

const Footer = ({ coverImg, mobile, mobilePlain, email }) => (
  <AnimatedContainer>
    <TopImage fluid={coverImg.childImageSharp.fluid} className={`img-fluid`} alt=" " />
    <Container>
      <Row>
        <Col xs={12}>
          <FooterHeading>Contact us</FooterHeading>
        </Col>
        <Col xs={6} sm={{ span: 3, offset: 3 }}>
          <LinkWrapper href={`tel:${mobilePlain}`}>
            <div className={`text-center`}><IconWrapper icon={faPhoneAlt} /></div>
            <FooterText>{mobile}</FooterText>
          </LinkWrapper>
        </Col>
        <Col xs={6} sm={3}>
          <LinkWrapper href={`mailto:${email}`}>
            <div className={`text-center`}><IconWrapper icon={faPaperPlane} /></div>
            <FooterText>{email}</FooterText>
          </LinkWrapper>
        </Col>
      </Row>
    </Container>
    <CopyrightText>Copyright &copy; {new Date().getFullYear()}. Pentafox Technologies</CopyrightText>
  </AnimatedContainer>
);

Footer.propTypes = {
  coverImg: PropTypes.object,
  email: PropTypes.string,
  mobile: PropTypes.string,
  mobilePlain: PropTypes.string
}

export default Footer;
