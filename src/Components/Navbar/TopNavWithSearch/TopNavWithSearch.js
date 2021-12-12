import React, { useRef, useState } from 'react'
import classes from "./WithSearch.module.css"
import Logo from "../../../Asset/mainlogo.png"
import Drawer from "../../../Asset/drawer.png"
import User from '../../../Asset/user.png'
import { Link } from 'react-router-dom'
import Searchbar from '../../SearchBar/Searchbar'
import Profiles from '../../../Pages/Account/Profile/Profile'
import Search from "../../../Components/Search/Search"

function TopNavWithSearch(props) {

   const [profileShow, setProfileShow] = useState(false)

   const modalRef = useRef(null)
   const accountRef = useRef(null)

   window.addEventListener('click', (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target) && modalRef.current && !modalRef.current.contains(e.target)) {
         setProfileShow(false)
      }
   });

   return (
      <div className={classes.topnav}>
         <div className="container-fluid">
            <div className="row ">
               <div className={classes.navbar + " col-12 d-flex align-items-center "}>
                  <button onClick={props.sidebarFun} className={classes.drawer_btn + " d-flex align-items-center"}>
                     <img className='img-fluid' src={Drawer} alt="Drawer" />
                  </button>
                  <Link to='/'>
                     <img className={classes.logo + ' img-fluid'} src={Logo} alt="logo" />
                  </Link>
                  <div className={classes.search_bar}>
                     {/* <Searchbar /> */}
                     <Search />
                  </div>
                  <div className='ms-auto'>
                     <div ref={accountRef} onClick={() => setProfileShow(!profileShow)} className={classes.user_log + " d-flex justify-content-center align-items-center flex-column"} >
                        <img className={classes.user + ' img-fuid'} src={User} alt="user" />
                        <p>Account</p>
                     </div>
                     <div ref={modalRef} className={profileShow ? classes.profileModal : "d-none"}>
                        <Profiles profileShow={profileShow} setProfileShow={setProfileShow} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TopNavWithSearch
