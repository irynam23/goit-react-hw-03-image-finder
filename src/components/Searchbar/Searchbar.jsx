import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form
          className={css.SearchForm}
          onSubmit={e => {
            e.preventDefault();
            this.props.getQuery(this.state.query);
          }}
        >
          <input
            value={this.state.query}
            onChange={({ target }) => {
              this.setState({ query: target.value });
            }}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
