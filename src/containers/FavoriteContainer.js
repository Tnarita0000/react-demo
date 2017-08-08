import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFavoriteProducts } from '../reducers'
import FavoriteItem from '../components/FavoriteItem'

class FavoriteContainer extends React.Component {
  render() {
    return(
      <div className="favorite">
        <FavoriteItem products={this.props.products}/>
      </div>
    )
  }
}

FavoriteContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
}

const mapStateToProps = state => ({
  products: getFavoriteProducts(state)
})

export default connect(
  mapStateToProps
)(FavoriteContainer);
