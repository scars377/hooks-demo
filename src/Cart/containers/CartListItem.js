import { connect } from 'react-redux';
import CartListItem from '../components/CartListItem';
import { removeFromCart } from '../actions/Cart';

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(CartListItem);
