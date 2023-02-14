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
          className="Form"
          onSubmit={e => {
            e.preventDefault();
            this.props.getQuery(this.state.query);
          }}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

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
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
