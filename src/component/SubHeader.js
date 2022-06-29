import React from 'react'
import {Link} from 'react-router-dom'
import "./subheader.css"

export default function SubHeader(){
    return(
        <div className="subheader">
            <i className="fa fa-bars"></i>
            <div className="all">All</div>
            <Link to='/shirts' className="shirts"><div >Shirts</div></Link> 
            <Link to='/pants' className="pants"><div >Pants</div></Link>
            
            {/* <div className="shirts">Shirts</div> */}
            
            {/* <div className="pants">Pants</div> */}
           
        </div>
    )
}