import React from 'react'
import {Link} from 'react-router-dom'
import "./header.css"


import amzimg from '../images/amz.PNG'
export default function AmzHeader({setInp}){
    // console.log(setInp);
    
    function manageInp(e){
        // console.log(e.target.value)
        setInp.setInputState(e.target.value)
    }
    return(
        <header className="header">
            <Link to='/'><img className="amz-img" src={amzimg} alt=""></img></Link>
            
            <input type="text" className="searchbar" placeholder="Search Your Product" onChange={manageInp}></input>
            <div className="search-icon">

                <i className="fa fa-search"></i>
            </div>
            <div className="cart">
                <Link to='/cartpage'><i className="fa fa-shopping-cart"></i></Link>
                <div className='cart-count'>{setInp.cart.length}</div>
            </div>
            <Link to="/signInpage" className="signin"><div>Sign In</div></Link>
            <Link to="/logInpage" className='signin login'><div>Log In</div></Link>
            
        </header>
    )

}
