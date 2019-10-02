import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import '../styles/style.scss';

const NotFound = ({ data }) => (
  <Layout
    logo={data.homeJson.image.logo}
    footerImg={data.homeJson.image.footerImg}
  >
    <h2>Not found.</h2>
  </Layout>
);

NotFound.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotFound;

export const query = graphql`
  query NotFoundpageQuery {
    homeJson {
      title
      image {
        logo {
          childImageSharp {
            fixed(width: 28, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        footerImg {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
