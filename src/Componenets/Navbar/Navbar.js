import classes from "./Navbar.module.css"
import Search from './../Search/Search';
import Button from './../Button/button';
import ItemCart from '../ItemCart/ItemCart';
import Language from './../Language/Language';
import logo from "./.../../../../../src/Asset/brandLogo.png"

const Navbar = () => {
    return (
        <div className={" px-3 py-2 bgPrimary-1 d-flex align-items-center " + classes.navBarContainer}>

            <div className={" container-fluid container-lg d-flex justify-content-between " + classes.navBar}>
                <div className="me-2 d-md-none">
                    <i class="fas fa-bars"></i>
                </div>
                <div className={"d-none d-md-block me-3 " + classes.brandLogo}>
                    <img src={logo} alt="" />
                </div>
                <Search icon />
                <div className="d-none d-md-flex ms-2 me-auto bgSecondary-1 cWhite brPrimary-1 fs-16">
                    <Button title="Search" />
                </div>
                <div className="d-none d-md-flex me-3 fs-14">
                    <Language />
                </div>

                <div className="d-none d-md-block">
                    <ItemCart />
                </div>


                <div className=" py-2 ms-3 d-flex flex-column justify-content-evenly d-md-none">
                    <span className={classes.dotIcon}></span>
                    <span className={classes.dotIcon}></span>
                    <span className={classes.dotIcon}></span>
                </div>
            </div>

        </div>
    );
}

export default Navbar;