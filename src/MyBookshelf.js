import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class MyBookshelf extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  func = () => {
    //console.log("HEY");
  }

  render() {
    return (
      <div className="my-bookshelf">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                      this.state.currentlyReading.map((book, index) => (
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
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                      this.state.wantToRead.map((book, index) => (
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
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                     {
                      this.state.read.map((book, index) => (
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
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default MyBookshelf
