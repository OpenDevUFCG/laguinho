/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Layout from '@components/layout';
import '@styles/globals.css';

function CustomApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

CustomApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default CustomApp;
