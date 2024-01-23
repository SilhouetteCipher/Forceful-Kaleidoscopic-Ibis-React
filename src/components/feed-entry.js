import React from 'react'

import PropTypes from 'prop-types'

import './feed-entry.css'

const FeedEntry = (props) => {
  return (
    <div
      id="feed-view"
      className={`feed-entry-container ${props.rootClassName} `}
    >
      <div id="feed-entry" className="feed-entry-container1">
        <h1 id="title-element" className="feed-entry-text">
          {props.bookTitle}
        </h1>
        <span id="author-entry" className="feed-entry-text1">
          {props.authorName}
        </span>
        <span id="goodreeads-link" className="feed-entry-text2">
          {props.link}
        </span>
        <button
          id="more-detail"
          name="More Detail"
          type="submit"
          className="feed-entry-more-detail button"
        >
          <span>
            <span>More Detail</span>
            <br></br>
          </span>
        </button>
      </div>
    </div>
  )
}

FeedEntry.defaultProps = {
  link: 'view on goodreads',
  rootClassName: '',
  authorName: 'author',
  bookTitle: 'book_title',
}

FeedEntry.propTypes = {
  link: PropTypes.string,
  rootClassName: PropTypes.string,
  authorName: PropTypes.string,
  bookTitle: PropTypes.string,
}

export default FeedEntry
