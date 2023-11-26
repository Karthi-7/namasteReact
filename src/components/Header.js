import { RiHome2Fill } from "react-icons/ri";
import { BsFillCartFill } from "react-icons/bs";
import { PiUserDuotone } from "react-icons/pi";
import logo from "../../assets/gofood.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Usercontext from "../utils/Usercontext";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";


const Header = () => {
  const{onlineStatus}=useOnlineStatus()
  const {userName}=useContext(Usercontext)

   const cartItems=useSelector(store=>store.cart.items)
console.log("cartItemsss",cartItems)
   

    return (
      <div className="header">
        <div className="logo_container">
          <img src={logo} alt="logo_img" />
        </div>
        <div className="nav_container">
          <ul>
          {/* <li>
           {onlineStatus ? '🟢'+" "+"online" : '🔴'+" "+"offline"}

            </li> */}
            <li>
            <Link to="/" className="nav_links">
            <RiHome2Fill />
              </Link>
            </li>

            <li className="cart">
            <Link className="nav_links" to="/cart">
              <BsFillCartFill />
              {cartItems.length> 0 && <span className="count">
              {cartItems.length}

              </span>}
              </Link>
              
            
            </li>
         
            <li>
              <PiUserDuotone /> 
            </li>
        
          </ul>
        </div>
      </div>
    );
  };

  export default Header