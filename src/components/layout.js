import PropTypes from 'prop-types';
import Header from '@components/header';

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
