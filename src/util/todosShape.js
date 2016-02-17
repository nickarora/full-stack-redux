import { PropTypes } from 'react';

export default PropTypes.shape({
  _id: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}).isRequired;
