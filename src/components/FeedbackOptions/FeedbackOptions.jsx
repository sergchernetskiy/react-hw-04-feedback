import PropTypes from 'prop-types';
import { List, OptionBtn } from './StyledFeedbackOptions';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionBtn type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </OptionBtn>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
