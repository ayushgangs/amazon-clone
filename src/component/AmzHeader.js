import React from 'react'
import {Link} from 'react-router-dom'
import "./header.css"


import amzimg from '../images/amz.PNG'
export default function AmzHeader({setInp}){
    // console.log(setInp);
    
    function manageInp(e){
        console.log(e)
        setInp.setInputState(e.target.value)
    }
    return(
        <div className="header">
            <div className="amz-img">
                <Link to='/'><img src={amzimg} alt="amz-logo"/></Link>

            </div>
            
            <input type="text" className="searchbar" placeholder="Search Your Product" onChange={manageInp}/>

            <div className="search-icon">

                <i className="fa fa-search"></i>
            </div>
            <div className="cart">
                <Link to='/cartpage'><i className="fa fa-shopping-cart"></i></Link>
                <div className='cart-count'>{setInp.cart.length}</div>
            </div>
            {/* <Link to="/signuppage" className="signup"><div>Sign Up</div></Link>
            <Link to="/logInpage" className='signup login'><div>Log In</div></Link> */}
            
        </div>
    )

}
