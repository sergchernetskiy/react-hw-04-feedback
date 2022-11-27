import PropTypes from 'prop-types';
import { StatList, StatisticValue } from './StyledStatistics';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatList>
        <StatisticValue>Good: {good}</StatisticValue>
        <StatisticValue>Neutral: {neutral}</StatisticValue>
        <StatisticValue>Bad: {bad}</StatisticValue>
        <StatisticValue>Total: {total}</StatisticValue>
        <StatisticValue>
          PositivePercentage: {positivePercentage}%
        </StatisticValue>
      </StatList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
