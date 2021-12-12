import CategoryList from "../CategoryList/CategoryList";
import classes from "./Menu.module.css"
import { useState } from 'react';

const MenuBar = (props) => {
    return (
        <div className={"d-none d-md-flex " + classes.menuBarContainer}>
            <div className={"container-fluid container-lg " + classes.menuBar}>
                <div className={"me-5 " + classes.menuItem}>
                    <i className="fas fa-list-ul fa-xs "></i>
                    <p className="ms-1">Category</p>
                    <span onClick={props.sidebarFun} className={classes.arrow + " ms-4 " + (props.sideBarOn && classes.rotate)}><i class="fas fa-chevron-down fa-xs"></i></span>
                </div>

                <p>Popular</p>


                <div className={"me-5 ps-1 " + classes.menuItem}>
                    <i className="fas fa-list-ul fa-xs "></i>
                    <p className="ms-1">New Product</p>
                    <span className={classes.arrow + " ms-3 "}> <i class="fas fa-chevron-down fa-xs"></i></span>
                </div>

                <div className={"me-5 " + classes.menuItem}>
                    <p> Promotion</p>
                    <span className=" ms-1 px-1 bgSecondary-1 fw-500 fs-12 cWhite rounded-pill">HOT</span>
                </div>

                <div className={"" + classes.menuItem}>
                    <i className="fas fa-list-ul fa-xs "></i>
                    <p className="ms-1">Track Your Order</p>
                </div>

                <div className={"" + classes.menuItem}>
                    <i class="fas fa-list-ul fa-xs "></i>
                    <p className="ms-1"><span>Sign In</span> / <span>Register</span></p>
                </div>


            </div>

        </div>
    );
}

export default MenuBar;