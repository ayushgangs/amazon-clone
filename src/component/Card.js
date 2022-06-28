import React from 'react'
import data from '../object.js'
import "./card.css"
// console.log(data)

export default function Card({inpSt}) {

    let filteredData = data.filter(ele => ele.type.includes(inpSt.inputState.toLowerCase()))
    
    console.log(filteredData);
    return (
        
            <div className='content'>
                {
                    filteredData.length===0?
                    data.map(ele => {   //'data' is array of objects and 'ele' gets object at each index one by one 
                        return (


                            <div className='card' key={ele.id}>
                                <div className='card-img'>
                                    {/* <img src={ele.image} alt="" /> */}
                                </div>
                                
                                <div className='shirt'>
                                    <span className='shirt-comp'>{ele.shirtComp}</span>
                                    <div className='shirt-name'>{ele.shirtName}</div>
                                </div>
                                <span className='price'>₹{ele.price}</span>
                                <span className='stock'>({ele.stock}) <em>In Stock</em></span>
                                <button className="add-button" onClick={()=>inpSt.addToCart(ele)}>Add to Cart</button>

                            </div>
                        )

                    }
                    )
                    :filteredData.map(ele => {

                            return (


                                <div className='card' key={ele.id}>
                                    <img src={ele.image} alt="" />
                                    <div className='shirt'>
                                        <span className='shirt-comp'>{ele.shirtComp}</span>
                                        <div className='shirt-name'>{ele.shirtName}</div>
                                    </div>
                                    <span className='price'>₹{ele.price}</span>
                                    <span className='stock'>({ele.stock}) <em>In Stock</em></span>
                                    <button className="add-button" onClick={()=>inpSt.addToCart(ele)}>Add to Cart</button>

                                </div>


                            )

                        }
                        )
                    
                }
            </div>
        
    )
}