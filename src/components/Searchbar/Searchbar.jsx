import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
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
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
