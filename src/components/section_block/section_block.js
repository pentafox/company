import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import MEDIA from '../../helpers/mediaTemplates';

const SectionContainer = styled.div`
  position: relative;
  ${MEDIA.SM`
    margin-bottom: 4em;
  `}
`;

const SectionHeading = styled.h2`
  font-size: 1.8em;
  font-weight: 400;
  color: #333;

  ${MEDIA.SM`
    font-size: 2em;
  `}
`;

export const SectionText = styled.p`
  margin-bottom: 0.75em;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 400;
  color: #565656;

  ${MEDIA.SM`
    font-size: 1.05em;
  `}
`;

const SectionBlock = ({ image, title, children, imageRight }) => {
  const SideImg = image ? (
      <Col className='d-none d-sm-block'>
        <Img
          fluid={image.childImageSharp.fluid}
          alt={title}
          className='img-fluid'
        />
      </Col>
    ) : <Col className='d-none d-sm-block' />;

  return (
    <Container>
      <Row className='mb-4 align-items-center'>
        {!imageRight ? SideImg : null}
        <Col>
          <SectionContainer>
            <SectionHeading className='mb-3'>{title}</SectionHeading>
            <Img
              fluid={image.childImageSharp.fluid}
              alt={title}
              className='img-fluid d-block d-sm-none'
            />
            {children}
          </SectionContainer>
        </Col>
        {imageRight ? SideImg : null}
      </Row>
    </Container>
  );
};

SectionBlock.propTypes = {
  image: PropTypes.object,
  imageRight: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default SectionBlock;
