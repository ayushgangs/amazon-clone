import React from 'react'
import '../card.css'

export default function ShirtComp({ data }) {
    // console.log(data)
    return (
        <>
            <div className='content'>
                {
                    data.arr.map((ele) => {

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
                                    <button className="add-button" onClick={() => data.addShirt(ele)}>Add to Cart</button>

                                </div>

                            </div>


                        )

                    }

                    )
                }
            </div>
        </>
    )
}
