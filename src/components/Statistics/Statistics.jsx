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
