import PropTypes from 'prop-types';
import { Message } from './StyledNotification';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
