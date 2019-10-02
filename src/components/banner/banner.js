import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import MEDIA from '../../helpers/mediaTemplates';

const AnimatedContainer = styled.div`
  padding: 80px 0 0 0;
  margin-bottom: 65px;
  position: relative;
  background: #ff5757;
`;

const BannerText = styled.div`
  padding-top: 20%;
`;

const BannerButton = styled.a`
  color: #ffffff;
  cursor: pointer;
  padding: 10px 40px;
  font-size: 16px;
  background: #ff5555;
  border: 2px solid #fc7171;
  position: relative;
  display: inline-block;
  border-radius: 90px;
  transition: all .35s;
  box-shadow: 4px 4px 10px 1px rgba(170, 27, 26, 0.3);
  :focus,
  :active,
  :hover {
    color: #ffffff;
    text-decoration: none;
    box-shadow: 4px 4px 20px 1px rgba(170, 27, 26, 0.75);
  }
`;

const BottomImage = styled(Img)`
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

const Title = styled.h1`
  font-size: 1.8em;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0,0,0,.25);

  ${MEDIA.SM`
    font-size: 2.4em;
  `}
`;

export const SectionText = styled.p`
  margin-bottom: .75em;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 400;

  ${MEDIA.SM`
    font-size: 1.05em;
  `}
`;

const Banner = ({ sideImg, bottomImg }) => (
  <AnimatedContainer>
    <Container>
      <Row>
        <Col md={7}>
          <BannerText>
            <Title className={`text-white mb-3`}>Empower your business with IT</Title>
            <SectionText className={`text-white mb-4`}>
              Grow your business with the power of Cloud<br/>
              Pentafox Technologies is a Data age IT solutions firm focused on enabling different kind of
              businesses to leverage the power of AI/ML and Cloud platforms.
            </SectionText>
            <BannerButton href='#' className={``}>Know more</BannerButton>
          </BannerText>
        </Col>
        <Col>
          <Img fluid={sideImg.childImageSharp.fluid} alt="Empower your dreams" className={`img-fluid`} />
        </Col>
      </Row>
    </Container>
    <BottomImage fluid={bottomImg.childImageSharp.fluid} className={`img-fluid`} alt=" " />
  </AnimatedContainer>
);

Banner.propTypes = {
  sideImg: PropTypes.object,
  bottomImg: PropTypes.object
}

export default Banner;
