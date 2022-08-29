// import PropTypes from 'prop-types';
import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

const Section = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback && good > 0) {
      return Math.trunc((good / countTotalFeedback()) * 100);
    }
    return 0;
  };
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={() => setGood(good + 1)}>
        {Object.keys({ good })}
      </button>
      <button type="button" onClick={() => setNeutral(neutral + 1)}>
        {Object.keys({ neutral })}
      </button>
      <button type="button" onClick={() => setBad(bad + 1)}>
        {Object.keys({ bad })}
      </button>
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
};

export default Section;
