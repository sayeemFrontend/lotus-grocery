import classes from "./Layout.module.css"
import { useState } from "react";

// import { Redirect, Route, Switch } from "react-router";
import SideNav from "../Components/SideNav/SideNav";
// import LoginPage from "../Pages/Account/LoginPage";
// import SignUpPage from "../Pages/Account/SignUpPage";
// import CustomerDashBoard from "../Pages/CustomerDashBoard/CustomerDashBoard";
// import HomePage from "../Pages/Home/HomePage";
// import OrderHistoryPage from "../Pages/OrderHistory/OrderHistoryPage";
// import ProductAll from "../Pages/ProductAll/productAll";
// import ProductView from "../Pages/ProductView/productView";
// import Profile from "./../Pages/Account/Profile/Profile"
// import MobileNav from "../Components/Navbar/MobileNav/MobileNav"
// import CheckOut from "../Pages/Checkout/CheckOut";
// import FooterPage from "../Pages/Footer/FooterPage";
// import AddToCart from "../Pages/AddToCart/AddToCart";
// import TopNavWithSearch from "../Components/Navbar/TopNavWithSearch/TopNavWithSearch";
import Navbar from "../Componenets/Navbar/Navbar";
import MenuBar from './../Componenets/MenuBar/Menu';
import BottomNav from "../Componenets/BottomNav/BottomNav";


function Layout() {
   const [sideBarOn, setSidebarOn] = useState(true)
   return (
      <>
         <div className={classes.topBars}>
            <Navbar />
            <MenuBar sidebarFun={() => setSidebarOn(!sideBarOn)} sideBarOn={sideBarOn} />
            <BottomNav />
         </div>
         {/* <div className={classes.topbar + " d-none d-lg-block"}>
            <TopNavWithSearch sidebarFun={() => setSidebarOn(!sideBarOn)} />
         </div>
         <div className={classes.topbar + ' d-blok d-lg-none'}>
            <MobileNav />
         </div> */}
         <div className="container-fluid">
            <div className={classes.customBody}>
               <div className={classes.sidebarStyle + " " + (sideBarOn ? classes.showSidebar : classes.hideSidebar)}>
                  <SideNav />
               </div>
               <div className={sideBarOn ? classes.push : classes.mainScreen}>
                  <div className={classes.ShowCard}>
                     {/* <AddToCart /> */}
                  </div>
                  {/* <Switch >
                     <Route exact path='/'><HomePage /></Route>
                     <Route exact path='/profile'><Profile /></Route>
                     <Route path='/product/all'><ProductAll /></Route>
                     <Route path='/productview'><ProductView /> </Route>
                     <Route path="/customer/dashboard/"><CustomerDashBoard /> </Route>
                     <Route path="/account/login" ><LoginPage /></Route>
                     <Route path="/account/signup"><SignUpPage /> </Route>
                     <Route path="/checkout"><CheckOut /></Route>
                     <Route path="/orderHistory"><OrderHistoryPage /> </Route>
                     <Route path="/mycart"><OrderHistoryPage /> </Route>
                     <Route path='/'> </Route>
                     <Redirect to="/" />
                  </Switch> */}
                  {/* <FooterPage /> */}
               </div>
            </div>
         </div>
      </>
   );
}

export default Layout;