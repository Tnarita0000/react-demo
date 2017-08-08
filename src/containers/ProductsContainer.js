import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, addToFavorite, removeToFavorite } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import { getAddedIds } from '../reducers/favorite'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import './ProductsContainer.css'

class ProductsContainer extends React.Component {
  render() {
    return (
      <ProductsList title="Products">
        {this.props.products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            favorite={this.props.favorite}
            onAddToCartClicked={() => this.props.addToCart(product.id)}
            onAddToFavoriteClicked={() => this.props.addToFavorite(product.id)}
            onRemoveToFavoriteClicked={() => this.props.removeToFavorite(product.id)}
          />
        )}
      </ProductsList>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  favorite: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeToFavorite: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  favorite: getAddedIds(state.favorite)
})

export default connect(
  mapStateToProps,
  { addToCart, addToFavorite, removeToFavorite }
)(ProductsContainer)
