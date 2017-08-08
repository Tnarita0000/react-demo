import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import FavoriteContainer from './FavoriteContainer'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='h100per'>
        <h2 className="App-title">Shopping Cart Example</h2>
        <div className="w80 h100per">
          <div className="fl">
            <ProductsContainer />
          </div>
          <div className="clear fix side-nav h100per p10px">
            <CartContainer />
            <FavoriteContainer />
          </div>
        </div>
        <div className="clear w20 fix side-nav">
        </div>
      </div>
    );
  }
}

export default App
