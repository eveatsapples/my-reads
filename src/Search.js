import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import './App.css';
import Book from './Book';

class Search extends Component {
  state = {
    query: "",
    results: [],
    noResults: false,
  }

  updateSearch = (e) => {
    this.setState({ query: e.target.value })
  }

  submitSearch = (e) => {
    e.preventDefault()
    BooksAPI.search(this.state.query)
      .then(response => {
        this.setState({ results: [] })
        return response
      })
      .then(response => {
        if(response.length > 0) {
          response.forEach((bookData) => {
            console.log(bookData)
            this.setState((prevState) => ({ results: [...prevState.results, bookData]}))
            this.setState({ noResults: false })
          })
        } else {
          this.setState({ noResults: true })
        }
      })
      .then(
        this.setState({ query: "" })
      )
      .then(() => {
        if(this.state.results.length === 0) {
          this.setState({ noResults: true })
        } else {
          this.setState({ noResults: false })
        }
      })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <form onSubmit={this.submitSearch}>
              <input
                type="text"
                placeholder="search by title or author"
                onChange={this.updateSearch}
                value={this.state.query}
              />
            </form>  
          </div>
        </div>
        <div className="search-books-results">
          {this.state.noResults === true &&
            <div className="cant-find-any-results">try something else</div>
          }
          <ol className="books-grid">
            {
              this.state.results.map((book, index) => (
                <li>
                  <Book 
                    key={index}
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    thumbnail={book.imageLinks.thumbnail}
                    addToList={this.props.addToList}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>

    )
  }
}

export default Search
