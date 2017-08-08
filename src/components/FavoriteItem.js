import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

class FavoriteItem extends React.Component {
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
      <em className="no-products">No favorite products.</em>
    );
  }

  render() {
    this.products = this.props.products;
    this.buildProducts();
    return(
      <div className="side-nav-content">
        <h2>Favorite</h2>
        <div className="side-nav-description">
          <div className="">{this.nodes}</div>
        </div>
      </div>
    )
  }
}

FavoriteItem.propTypes = {
  products: PropTypes.array
}
export default FavoriteItem;
