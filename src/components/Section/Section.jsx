import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export class Section extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  onLeaveFeedback = type =>
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback && this.state.good > 0) {
      return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };

  options = Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onLeaveFeedback,
      options,
    } = this;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        <h2>Statistics</h2>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </div>
    );
  }
}
Section.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.exact({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};
