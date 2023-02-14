import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as pixabayApi from 'api/pixabayApi';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
export class App extends Component {
  state = {
    images: [],
    page: 1,
    totalImages: 0,
    query: '',
    isLoading: false,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page, error } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }
    if (prevState.error !== error && error) {
      toast.error(error);
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { hits: images, totalHits: totalImages } =
        await pixabayApi.getImages(query, page);
      if (!images.length) {
        this.setState({ error: 'Sorry. There are no images ... 😭' });
        return;
      }
      this.setState(prevState => ({
        images: [
          ...prevState.images,
          ...images.map(({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL,
          })),
        ],
        error: '',
        totalImages,
      }));
    } catch (error) {
      this.setState({ error: 'Oops. Something went wrong 😭' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getQuery = value => {
    if (!value.trim() || value === this.state.query) {
      this.setState({ error: 'Please, change your request' });
      return;
    }
    this.setState({
      query: value,
      page: 1,
      images: [],
      totalImages: 0,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, totalImages } = this.state;
    return (
      <div>
        <Searchbar getQuery={this.getQuery} />
        <ImageGallery images={images} />
        {!isLoading && totalImages !== images.length && (
          <Button label="Load more" onClick={this.loadMore} />
        )}
        {isLoading && <Loader />}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          closeOnClick
          theme="colored"
        />
      </div>
    );
  }
}
