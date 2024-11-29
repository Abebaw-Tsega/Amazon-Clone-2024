import classes from "./header.module.css"
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BiCartAdd } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";


function Header() {

  const [{basket}, dispatch] = useContext(DataContext);
  // console.log(state);


  return (
    <>
      <section className={classes.header}>
        <div className={classes.div} >
          <div className={classes.header_container}>

            <div className={classes.logo_container}>
              
              <Link to="/" ><img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="Amazon Logo"
              /></Link>
              <div className={classes.delivery}>
                <span className={classes.location} >
                  <CiLocationOn />
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            <div className={classes.search}>
              <select name="" id="" >
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search Amazon " />
              <IoSearchSharp />
            </div>

            <div className={classes.order_container}>
              <Link to="" className={classes.language}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlpeuBbh3tIuc3-Wj19ylhwA2XpZ2lI-Fjg&s" className={classes.languageImg} alt="" />
                <label name="" id="">
                  <p>EN</p>
                </label>
                <RiArrowDropDownFill className={classes.dropDown} />
              </Link>

              <Link to="/auth" className={classes.signIn}>
                {/* <MdOutlineArrowDropDown /> */}
                <p>Hello, sign in</p>
                <span>Account & List
                  <RiArrowDropDownFill className={classes.dropDown} />
                </span>

              </Link>

              <Link to="/orders" className={classes.Returns}>
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BiCartAdd className={classes.cartIcon} size={40} />
                <span>{basket.length} </span>
                <p>Cart</p>
              </Link>
            </div>

          </div>
        </div>
        <div className={classes.header_footer}>
          <div className={classes.menu}>
            <ul>
              <li className={classes.menuIcon} ><a href=""><GiHamburgerMenu className={classes.GiHamburgerMenu} />
                <span>All</span></a></li>
            </ul>
            <ul>
              <li><a href="#">Today`s Deals</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Registry</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Sell</a></li>
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}

export default Header;