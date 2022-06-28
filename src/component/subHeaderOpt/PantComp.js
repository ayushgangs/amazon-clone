import React from 'react'
import '../card.css'

export default function PantComp({data}) {
    
  return (
    <>
        <div className='content'>
                {
                    data.pant.map((ele) => {

                        return (


                            <div className='card' key={ele.id}>
                                <img src={ele.image} />
                                <div className='shirt'>
                                    <span className='shirt-comp'>{ele.shirtComp}</span>
                                    <div className='shirt-name'>{ele.shirtName}</div>
                                </div>
                                <span className='price'>₹{ele.price}</span>
                                <span className='stock'>({ele.stock}) <em>In Stock</em></span>
                                <button className="add-button" onClick={()=> data.addPant(ele)}>Add to Cart</button>

                            </div>


                        )

                    }

                    )
                }
        </div>
    
    </>
  )
}
