import PropTypes from 'prop-types';

const Search = ({ onSearchChange }) => {
  const inputStyle = {
    width: '100%',
    maxWidth: '600px',
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #dcdcdc',
    borderRadius: '5px',
    marginBottom: '1rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease',
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      style={inputStyle}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
