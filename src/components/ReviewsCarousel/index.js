/* eslint-disable react/no-unknown-property */
// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onDec = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onInc = () => {
    const {count} = this.state

    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {count} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <>
        <div className="container">
          <h1>Reviews</h1>
          <div className="card">
            <button
              type="button"
              className="button"
              data-testid="leftArrow"
              onClick={this.onDec}
            >
              <img
                className="image2"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>
            <div className="description">
              <img src={imgUrl} alt={username} />
              <p className="styling">{username}</p>
              <p>{companyName}</p>
            </div>
            <button
              type="button"
              className="button"
              data-testid="rightArrow"
              onClick={this.onInc}
            >
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p>{description}</p>
        </div>
      </>
    )
  }
}
export default ReviewsCarousel
