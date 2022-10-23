import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { cartItems } = this.props;
    const productItems = this.props.products.map((product) => (
      <div className="productContainer" key={product.id}>
        <div className="product">

          <a href={`#${product.id}`} onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
          </a>
          <div className="productInfo">
            <p>{product.title}</p>

            <b>{util.formatCurrency(product.price)}</b>
            
            <button className="addToCart" onClick={(e) => this.props.addToCart(cartItems, product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);