/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Header from '../components/Header';
import '@styles/globals.css';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

CustomApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default CustomApp;
