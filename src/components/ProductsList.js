import React from 'react'
import PropTypes from 'prop-types'

class ProductsList extends React.Component {
  render() {
    return (
      <div className='product-list m10px'>
        <div>{this.props.children}</div>
      </div>
    )
  }

}

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
