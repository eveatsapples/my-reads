import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom';
import './App.css'
import Search from './Search'
import MyBookshelf from './MyBookshelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  addToList = (whichList) => {
    console.log(whichList);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <Link
              to="/search"
              className="open-search"
            ><button>Add a book</button>
            </Link>
            <MyBookshelf
              addToList={this.addToList}
            />
          </div>
        )} />

        <Route exact path="/search" render={() => (
          <div>
            <Link
              to="/"
              className="link"
            ><button className="close-search ontop">Close</button>
            </Link>
            <Search
              addToList={this.addToList}
            />
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
