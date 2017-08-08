import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

class ProductItem extends React.Component {
  product;
  onAddToCartClicked;
  onAddToFavoriteClicked;

  render() {
    this.product = this.props.product;
    this.favorite = this.props.favorite;
    this.onAddToCartClicked = this.props.onAddToCartClicked;
    this.onAddToFavoriteClicked = this.props.onAddToFavoriteClicked;
    this.onRemoveToFavoriteClicked = this.props.onRemoveToFavoriteClicked;
    return(
      <div className="product fl" style={{ marginBottom: 20 }}>
        <Product
          title={this.product.title}
          price={this.product.price}
          inventory={this.product.inventory}
        />
        <img className='productImg mt5px' alt={this.product.title} src={this.product.image}/>
        <div className='block mt5px'>
          <button
            className={
              this.favorite.includes(this.product.id) ? 'ml5px btn fr fav-btn' : 'ml5px btn fr'
            }
            onClick={
              this.favorite.includes(this.product.id) ? this.onRemoveToFavoriteClicked : this.onAddToFavoriteClicked
            }
          >
            Favorite
          </button>
          <button
            onClick={this.onAddToCartClicked}
            className={
              this.product.inventory > 0 ? 'btn add-btn fr' : 'btn invalid-btn fr'
            }
            disabled={
              this.product.inventory > 0 ? '' : 'disabled'
            }
          >
            {this.product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onAddToFavoriteClicked: PropTypes.func.isRequired
}

export default ProductItem
