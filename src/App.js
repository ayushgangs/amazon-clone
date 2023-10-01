
import './App.css';
import Card from './component/Card';
import AmzHeader from './component/AmzHeader';
import SubHeader from './component/SubHeader';
import Footer from './component/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shirts from './component/subHeaderOpt/Shirts';
import Pants from './component/subHeaderOpt/Pants';
import React,{useState} from 'react'
import Cart from './component/cartpage/Cart'
import SignUp from './component/siguppage/SignUp';
import LogIn from './component/loginpage/logIn';
// import data from "./object"

function App() {
  let [inputState,setInputState] = useState('')  //for filtering products based on input on search bar
  let [cart,setCart] = useState([]) //'cart' is used to display total items in cart in header
  let [totCartPrice,setTotCartPrice] = useState(0)
  
  function addToCart(product){ //'ele' from child component gets transferred to 'product'
    let productInCart = cart.find(ele => ele.id===product.id) // 'productIncart' will stay empty everytime a new product is added which is not there in cart
    
    if(productInCart)
    {
      if(productInCart.quantity<productInCart.stock) 
      {

        setCart(cart.map(ele=> ele.id===product.id?{...productInCart, quantity:productInCart.quantity+1}:ele)) //if product already exist in cart increase the quantity by 1
        
        setTotCartPrice(totCartPrice + productInCart.price)
      }   
    }
    else
    {

      setCart([...cart, {...product, quantity:1}]) // for every new product, add that in cart with a new key 'quantity' initialized with value 1

      setTotCartPrice(totCartPrice + product.price)
    }
  }
  
  console.log(cart)

  function reduceQuantityInCart(product){
  
      if(product.quantity>1)   
        setCart(cart.map(ele=> ele.id===product.id?{...product, quantity:product.quantity-1}:ele)) //this will reduce the product quantity by 1

      else    //if product quantity is 1 then reducing it further will remove the whole product from cart
        setCart(cart.filter(ele=> ele.id!==product.id))
      
      setTotCartPrice(totCartPrice - product.price)
      
  }

  function deleteFromCart(product)
  {
      setCart(cart.filter(ele=> ele.id!==product.id))

      setTotCartPrice(totCartPrice - (product.quantity * product.price))
  }

  function emptyCart(){
    setCart([])
  }
  
 
  return (
    <div className="App">
        
        <BrowserRouter>
        <AmzHeader setInp={{setInputState,cart}}/>
        <SubHeader/>
        {/* things b/w <BrowserRouter> and <Routes> stay constant on all components */}
          <Routes>
            <Route path='/' element={<Card inpSt={{inputState,addToCart}}/>}></Route>
            <Route path="/signuppage" element={<SignUp/>}></Route>
            <Route path="/logInpage" element={<LogIn/>}></Route>
            <Route path='/shirts' element={<Shirts addShirt={addToCart}/>}></Route>
            <Route path='/pants' element={<Pants addPant={addToCart}/>}></Route>
            <Route path='/cartpage' element={<Cart cart={{cart,addToCart,deleteFromCart,reduceQuantityInCart,totCartPrice,emptyCart}}/>}></Route>
          </Routes>
        <Footer/>
        </BrowserRouter>
      
    </div>
  );
  
}

export default App;
