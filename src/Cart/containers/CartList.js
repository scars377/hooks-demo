import { connect } from 'react-redux';
import { emptyCart } from '../actions/Cart';
import CartList from '../components/CartList';

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products,
});

const mapDispatchToProps = {
  emptyCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartList);
