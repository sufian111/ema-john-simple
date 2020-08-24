import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    const total= cart.reduce((total,prd) => total + prd.price,0);

    let shipping =0;
    if (total>35){
        shipping=0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total>0){
        shipping = 12.99;
    }
    


    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items ordered :{cart.length}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p>Total price:{total+shipping}</p>
        </div>
    );
};

export default Cart;