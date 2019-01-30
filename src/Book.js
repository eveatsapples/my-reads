import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class Book extends Component {
  state = {
  }

  render() {
    return (
      <div className="search-books">
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.thumbnail }}>
              <img src={this.props.thumbnail} alt="book cover" className="thumbnails"/> 
            </div>
            <div className="book-shelf-changer">
              <select onChange={(() => this.props.addToList("how do i get the value of the chosen one?"))}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
      </div>

    )
  }
}

export default Book
