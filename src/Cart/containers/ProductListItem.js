import { connect } from 'react-redux';
import ProductListItem from '../components/ProductListItem';
import { addToCart } from '../actions/Cart';

const mapDispatchToProps = {
  addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductListItem);
