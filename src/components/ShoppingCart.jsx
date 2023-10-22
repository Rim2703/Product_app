import React from 'react'

const ShoppingCart = ({ cart, removeFromCart }) => {

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Shopping Cart</h1>
            <div className='products-box'>
                {cart.map((item) => (
                    <div className='product' key={item._id}>
                        <div className='product-img'>
                            <img src={item.imageUrl} alt={item.name} style={{ width: '100px' }} />
                        </div>
                        <div className='product-text title'><p>{item.name}</p></div>
                        <div className='product-details'>
                            <div className='rating'>   <p> Rating: {item.rating}</p> </div>
                            <div className='price'><p>Price: {item.price}</p></div>
                        </div>
                        <button className="delete-box" onClick={() => removeFromCart(item._id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShoppingCart