import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => (
  <div>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total()}</p>
    <p>Positive feedback:{positivePercentage()}%</p>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
