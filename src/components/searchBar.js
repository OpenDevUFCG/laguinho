import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import styles from '@styles/components/SearchBar.module.css';

function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className={styles.container}>
      <BiSearch />

      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
