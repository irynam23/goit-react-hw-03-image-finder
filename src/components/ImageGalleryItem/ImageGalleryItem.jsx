import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  handleEscape = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.closeModal();
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleEscape);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleEscape);
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <li className="ImageGalleryItem">
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt=""
            onClick={this.openModal}
          />
        </li>
        {this.state.isOpen && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
