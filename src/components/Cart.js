import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

class Cart extends React.Component {
  products;
  total;
  onCheckoutClicked;

  nodes = null;
  hasProducts = false;

  buildProducts() {
    this.hasProducts = this.products.length > 0;
    this.nodes = this.hasProducts ? (
      this.products.map(product =>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />
      )
    ) : (
      <em className="no-products">Please add some products to cart.</em>
    );
  }

  render() {
    this.products = this.props.products;
    this.total = this.props.total;
    this.onCheckoutClicked = this.props.onCheckoutClicked;

    this.buildProducts();
    const hr = this.hasProducts ? <hr className="calc-line"/> : "";
    return(
      <div className="side-nav-content">
        <h2>Cart</h2>
        <div className="side-nav-description">
          <div className="product-name">{this.nodes}</div>
          {hr}
          <p className="textR">Total: &#36;{this.total}</p>
          <button className="btn confirm-btn block fr" onClick={this.onCheckoutClicked}
            disabled={this.hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
