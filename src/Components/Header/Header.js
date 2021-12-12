import { useState } from "react";
import TopNavWithoutSearch from '../../Components/Navbar/TopNavWithoutSearch/TopNavWithoutSearch'
import MobileNav from '../../Components/Navbar/MobileNav/MobileNav'
import classes from './Header.module.css'

const Header = () => {
   const [sideBarOn, setSidebarOn] = useState(false)
   return (
      <>
         <div className={classes.topbar + " d-none d-lg-block"}>
            <TopNavWithoutSearch sidebarFun={() => setSidebarOn(!sideBarOn)} />
         </div>
         <div className='d-blok d-lg-none'>
            <MobileNav />
         </div>
      </>
   )
}

export default Header
