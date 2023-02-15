import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ label, onClick }) => {
  return (
    <button className={css.Button} type="button" onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
