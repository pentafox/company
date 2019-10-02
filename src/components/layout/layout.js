import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import Footer from '../footer/footer';

const Layout = ({ data, logo, footerImg, children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header
      logo={logo}
      title={data.site.siteMetadata.siteTitle}
      mobile={data.site.siteMetadata.mobile}
      mobilePlain={data.site.siteMetadata.mobilePlain}
      email={data.site.siteMetadata.email}
    />

    {children}

    <Footer
      coverImg={footerImg}
      mobile={data.site.siteMetadata.mobile}
      mobilePlain={data.site.siteMetadata.mobilePlain}
      email={data.site.siteMetadata.email}
    />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  logo: PropTypes.object.isRequired,
  footerImg: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
            mobile
            mobilePlain
            email
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
