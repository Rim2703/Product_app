import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductsList = ({ addToCart, cart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await fetch('http://3.7.252.58:4001/product/getAllProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                cookie: 'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8',
            },
            body: JSON.stringify({
                limit: 100,
                page: 0,
                search: '',
            }),
        });
        const data = await response.json();
        console.log('data', data);
        setProducts(data || []);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className=''>
            <div className='title-container'>
                <h1 className='text-center'>Products List</h1>
                <Link to='/cart' className='cart-icon'>
                    <FiShoppingCart size={30} />
                    {cart.length > 0 && <span className='cart-count'>{cart.length}</span>}
                </Link>
            </div>
            <div className='products-box'>
                {products.map((product) => (
                    <div className='product' key={product._id}>
                        <div className='product-img'>
                            <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                        </div>
                        <div className='product-text title'><p>{product.name}</p></div>
                        <div className='product-details'>
                            <div className='rating'>   <p> Rating: {product.rating}</p> </div>
                            <div className='price'><p>Price: {product.price}</p></div>
                        </div>
                        <div className=''>
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
