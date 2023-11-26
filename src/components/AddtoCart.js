import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SWIGGY_IMAGE_URL } from '../utils/constant'
import { clearItem } from '../utils/cartSlice'



function AddtoCart() {
    const cartItems=useSelector((store)=>store.cart.items)
    const [total,setTotal]=useState(0)

    const dispatch=useDispatch()
   useEffect(()=>{
    let totalPrice=0
    cartItems.forEach((item)=>(
        totalPrice+=item.price

    ))
    setTotal(totalPrice)

   },[total])

   const handleClearCart=()=>{
    dispatch(clearItem())

   }
   if(cartItems.length === 0){
    return <div className='empty'>
           <div className='empty_cart'>
           <img className='cart-empty' src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt="" />

           </div>
       
    </div>
   }
  return (

    <div  className='add__cart' >
    
        <div className= "addToCart">
       { cartItems.map((item)=>(
            <div id={item.id} className='cart_page'>
                <div className='item_price'>
                <p className='foodItem' >{item.name}</p>
                <p>&#8377; {item.price/100}</p>
                </div>
                <div className='item_img'>
                    <img src={SWIGGY_IMAGE_URL+item.imageId} alt="" />
                </div>
              
              
            </div>
            
        ))
       }
       <div className='total'>
    
        <span className=''>Total</span>
        <span>&#8377;{total/100}</span>
       </div>
       <div className='payment'>
       <button>Place Order</button>
       <button onClick={()=>handleClearCart()}>Clear cart</button>

       </div>
      

        </div>
     
      
    
    
      
    </div>
  )
}

export default AddtoCart
