import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import Banner from '../components/banner/banner';
import '../styles/style.scss';
import SectionBlock, {
  SectionText,
} from '../components/section_block/section_block';

const Index = ({ data }) => (
  <Layout
    logo={data.homeJson.image.logo}
    footerImg={data.homeJson.image.footerImg}
  >
    <Banner
      sideImg={data.homeJson.image.landing}
      bottomImg={data.homeJson.image.bottomImg}
    />
    {data.homeJson.category.map((item, i) => (
      <SectionBlock
        key={`s${i}`}
        title={item.title}
        image={item.image}
        imageRight={(i + 1) % 2}
      >
        {item.content.map((text, j) => (
          <SectionText key={`p${j}`}>{text}</SectionText>
        ))}
      </SectionBlock>
    ))}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
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
        landing {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bottomImg {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
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
      category {
        title
        content
        image {
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
