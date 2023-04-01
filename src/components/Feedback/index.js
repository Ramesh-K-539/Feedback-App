// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackClass: 'feedback-container',
    isThankYouClass: 'is-block-cont',
  }

  feedBackButton = () => {
    this.setState({
      isFeedbackClass: 'is-block-cont',
      isThankYouClass: 'feedback-thankyou-container',
    })
  }

  render() {
    const {emojis, loveEmojiUrl} = this.props
    const {isFeedbackClass, isThankYouClass} = this.state
    return (
      <div className="bg-container">
        <div className={isThankYouClass}>
          <img src={loveEmojiUrl} alt="love emoji" className="img" />
          <h1 className="thankyou-text">Thank You!</h1>
          <p className="thankyou-description">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>

        <div className={isFeedbackClass}>
          <h1 className="feedback-text">
            How satisfied are you with our customer support performance?
          </h1>
          <div>
            <ul className="feedback-expression-container">
              {emojis.map(each => (
                <li className="expression-cont" key={each.id}>
                  <button type="button" onClick={this.feedBackButton}>
                    <img alt={each.name} src={each.imageUrl} className="img" />
                  </button>
                  <p className="expression-name">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
