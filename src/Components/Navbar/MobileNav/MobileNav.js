import React, { useState } from 'react'
import classes from "./MobileNav.module.css"
import Logo from "../../../Asset/mainlogo.png"
import Drawer from "../../../Asset/drawer.png"
import Profile from '../../../Asset/mobileProfile.png'
import { Link } from 'react-router-dom'
import Profiles from "../../../Pages/Account/Profile/Profile.js"
import MobileCart from "./MobileCart/MobileCart"
import Search from "../../../Components/Search/Search"
import SideNav from '../../SideNav/SideNav'

function MobileNav() {

   const [profileShow, setProfileShow] = useState(false);
   const [sideBarOpen, setSideBarOpen] = useState(false);

   return (
      <>
         <div className={classes.topnav}>
            <div className="container-fluid">
               <div className="row ">
                  <div className={classes.navbar + " col-12 d-flex align-items-center justify-content-between"}>
                     <div className={classes.partOne + " d-flex justify-content-start align-items-center"}>

                        <button onClick={() => setSideBarOpen(!sideBarOpen)} className={classes.all_btn + " d-flex align-items-center"}>
                           <img className='img-fluid' src={Drawer} alt="Drawer" />
                        </button>
                        <div className={sideBarOpen ? classes.showSideNav : "d-none"}>
                           <SideNav />
                        </div>

                        <Link to='/' className={classes.logoLink}>
                           <img className={classes.logo + ' img-fluid'} src={Logo} alt="logo" />
                        </Link>

                     </div>
                     <div className={classes.partTwo + " d-flex justify-content-center align-items-center"}>

                        <div className={classes.searchBar}>
                           <Search />
                        </div>

                     </div>
                     <div className={classes.partThree + " d-flex justify-content-end align-items-center"}>
                        <MobileCart />
                        <button onClick={() => setProfileShow(!profileShow)} className={classes.all_btn}>
                           <img className="img-fuid" src={Profile} alt="profile" />
                        </button>
                        <div className={profileShow ? classes.profileModal : "d-none"}>
                           <Profiles profileShow={profileShow} setProfileShow={setProfileShow} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default MobileNav
