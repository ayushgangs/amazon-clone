import React from 'react'
import data from '../object.js'
import "./card.css"
// console.log(data)

export default function Card({ inpSt }) {

    let filteredData = data.filter(ele => ele.type.includes(inpSt.inputState.toLowerCase()))

    console.log(filteredData);
    return (

        <div className='content'>
            {
                filteredData.length === 0 ?
                    data.map(ele => {   //'data' is array of objects and 'ele' gets object at each index one by one 
                        return (


                            <div className='card' key={ele.id}>
                                <div className='card-img'>
                                    <img src={ele.image} alt="" />
                                </div>
                                <div className='shirt'>
                                    <div className='shirt-comp'>{ele.shirtComp}</div>
                                    <div className='shirt-name'>{ele.shirtName}</div>
                                </div>
                                <span className='price'>₹{ele.price}</span>
                                <div className='stock'>({ele.stock}) <em>In Stock</em></div>
                                <div className='a-b'>
                                    <button className="add-button" onClick={() => inpSt.addToCart(ele)}>Add to Cart</button>

                                </div>
                            </div>
                        )

                    }
                    )
                    : filteredData.map(ele => {

                        return (

                            <>
                                <div className='card' key={ele.id}>
                                    <div className='card-img'>
                                        <img src={ele.image} alt="" />
                                    </div>
                                    <div className='shirt'>
                                        <div className='shirt-comp'>{ele.shirtComp}</div>
                                        <div className='shirt-name'>{ele.shirtName}</div>
                                    </div>
                                    <span className='price'>₹{ele.price}</span>
                                    <div className='stock'>({ele.stock}) <em>In Stock</em></div>
                                    <div className='a-b'>
                                        <button className="add-button" onClick={() => inpSt.addToCart(ele)}>Add to Cart</button>

                                    </div>

                                </div>

                            </>


                        )

                    }
                    )

            }
        </div>

    )
}