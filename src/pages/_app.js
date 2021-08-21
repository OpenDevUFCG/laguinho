/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import '../styles/globals.css';

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

CustomApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default CustomApp;
