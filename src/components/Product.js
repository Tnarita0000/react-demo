import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div className="mt10px">
        <span>{this.props.title}</span>
        <br/>
        <span className='price'>Price: {this.props.price}$ {this.props.inventory ? `, Inventory: ${this.props.inventory}` : null}</span>
      </div>
    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
