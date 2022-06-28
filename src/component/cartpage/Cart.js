import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./cart.css"

export default function Cart({ cart }) {

  // let [totSum,setTotSum] = useState(0)

  // function totCart(s){
  //   setTotSum(totSum+s)
  // }
  // console.log(totSum)
 
  return (
    
    <>
      <div className='cont'>
        {

          cart.cart.length == 0 ?
            <div>Your Cart is Empty</div>
            :
            cart.cart.map(ele => {
              return (
              <>
                  <div className='rectangle' key={ele.id}>
                    <img src={ele.image} alt="" />
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
                      ₹{ele.quantity*ele.price}
                      {/* {()=> totCart(ele.quantity*ele.price)} */}
                    </div>
                    <div className='btn'>
                      <button className="add-quant" onClick={()=>cart.addToCart(ele)}>+</button> 
                      <button className="rem-quant" onClick={()=>cart.reduceQuantityInCart(ele)}>-</button> 
                      <button className="del-btn" onClick={()=>cart.deleteFromCart(ele)}>Delete from Cart</button> 
                    </div>
                  </div>
              </>

              )
            })

        }
        {/* <div className='totCartSum'>total cart:</div> */}
      </div>



    </>
  )
}
