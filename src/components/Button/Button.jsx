import PropTypes from 'prop-types';

export const Button = ({ label, onClick }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
