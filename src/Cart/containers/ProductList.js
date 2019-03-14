import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../actions/Products';

const mapStateToProps = state => ({
  items: state.products,
});

const mapDispatchToProps = {
  fetchItems: fetchProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
