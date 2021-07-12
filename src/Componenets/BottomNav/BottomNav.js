import classes from "./BottomNav.module.css"
import ItemCart from '../ItemCart/ItemCart';

const BottomNav = () => {
    return (
        <div className={"px-3 py-2 bgPrimary-1  d-flex align-items-center d-md-none " + classes.navBarContainer}>
            <div className={" container-fluid d-flex justify-content-evenly "}>
                <div className="d-flex align-items-center ">
                    <i class="far fa-user fa-xs cWhite"></i>
                    <span className="ms-2 cWhite fs-14">Account</span>
                </div>
                <div className=" d-flex align-items-center">
                    <ItemCart />
                    <p className="ms-2 fw-500 fs-12 cWhite">My Cart</p>
                </div>

            </div>

        </div>
    );
}

export default BottomNav;