import PropTypes from 'prop-types';

const QuoteCard = ({ quote, fetchQuote }) => {
  const quoteCardStyle = {
    background: 'linear-gradient(135deg, #fff, #f0f2f5)',
    borderRadius: '12px',
    padding: '3rem',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '2rem auto',
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const blockquoteStyle = {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    lineHeight: '1.8',
    margin: '0 0 1.5rem 0',
    color: '#1d3557',
    position: 'relative',
    padding: '0.5rem 0',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const buttonStyle = {
    backgroundColor: '#1d3557',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={quoteCardStyle}>
      <blockquote style={blockquoteStyle}>{quote}</blockquote>
      <button style={buttonStyle} onClick={fetchQuote}>
        Get Random Ayah
      </button>
    </div>
  );
};

QuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  fetchQuote: PropTypes.func.isRequired,
};

export default QuoteCard;
