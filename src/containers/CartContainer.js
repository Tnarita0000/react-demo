import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import { firestoreConnect } from 'react-redux-firebase'

class CartContainer extends React.Component {
  render() {
    return (
      <Cart
        products={this.props.products}
        total={this.props.total}
        onCheckoutClicked={() => this.props.checkout(this.props.products)}
      />
    )
  }
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default compose(
  connect( mapStateToProps, { checkout } ),
  /* firestoreConnect example
   *    Get Collection 'users'
   */
  firestoreConnect( (props, state) => [
    {
      collection: 'users',
    }
  ])
)(CartContainer)
