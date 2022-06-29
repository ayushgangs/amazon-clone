import React from 'react'
import "./cart.css"

export default function Cart({ cart }) {

  return (

    <>
      <div className='cont'>
        {

          cart.cart.length === 0 ?
            <div>Your Cart is Empty</div>
            :
          cart.cart.map(ele => {
            return (
              <>
                <div className='rectangle' key={ele.id}>
                  <div className='rec-img'>

                    <img src={ele.image} alt="" />
                  </div>

                  <div className='pr-details'>
                    <div className='quant'>
                      {ele.quantity}
                    </div>
                    <div className='mul'>
                      <i className="fa fa-times"></i>
                    </div>
                    <div className="pr">₹{ele.price}</div>
                    <div className='arrow'>
                      <i className="fa fa-arrow-right"></i>
                    </div>
                    <div className='tot-pr'>
                      ₹{ele.quantity * ele.price}
                    </div>

                  </div>

                  <div className='btn'>
                    <div className='add-rem'>
                      <button className="add-quant" onClick={() => cart.addToCart(ele)}>+</button>
                      <button className="rem-quant" onClick={() => cart.reduceQuantityInCart(ele)}>-</button>
                    </div>
                    <div className='pr-stock'><em>Stock :{ele.stock}</em></div>
                    <button className="del-btn" onClick={() => cart.deleteFromCart(ele)}>Delete from Cart</button>
                  </div>

                  
                </div>
              </>

            )
          })

        }

        <div className='total-price'>
          Total Cart Price: ₹{cart.totCartPrice}
        </div>
      </div>

    </>
  )
}
