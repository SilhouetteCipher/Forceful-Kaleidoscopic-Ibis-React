import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forceful Kaleidoscopic Ibis</title>
        <meta property="og:title" content="Forceful Kaleidoscopic Ibis" />
      </Helmet>
      <div className="home-nav">
        <input
          type="text"
          placeholder="paste goodreads url"
          className="home-textinput input"
        />
        <button type="button" className="home-button button">
          Refresh
        </button>
      </div>
      <div id="FeedView" className="home-container1">
        <div id="FeedEntry" className="home-container2">
          <h1 id="title-element" className="home-text">
            book_title
          </h1>
          <span id="author-entry" className="home-text1">
            author
          </span>
          <span id="goodreeads-link" className="home-text2">
            view on goodreads
          </span>
          <button
            id="more-detail"
            name="More Detail"
            type="submit"
            className="home-more-detail button"
          >
            <span>
              <span>More Detail</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
