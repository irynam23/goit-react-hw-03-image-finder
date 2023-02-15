import css from './Modal.module.css';

export const Modal = ({ largeImageURL, onClose }) => {
  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
