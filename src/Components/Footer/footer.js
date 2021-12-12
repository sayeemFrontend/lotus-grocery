import { useState } from "react"
import  classes from "./footer.module.css"
import Applestore from "../../Asset/applestore.png"
import Playstore from "../../Asset/playstore.png"
import Visa from "../../Asset/visa.png"

const Footer = () => {
    const [mobileView, setMobileView] = useState(false)

    window.addEventListener("resize", () => {
        if (window.innerWidth < 562) {
            setMobileView(true)
        }
        else {
            setMobileView(false)
        }
    })

    if (mobileView) {
        return (
            <div className={classes.footer + " " + classes.mobileView}>
                <div className="container">
                    <div className={classes.content}>
                        <p className={classes.title}>CONTACT US</p>
                        <p>+880 19 0000 0000 <br />garibook@gmail.com</p>
                    </div>
                    <div className={classes.content}>
                        <p className={classes.title}>FOLLOW US</p>
                        <div className={classes.followUs}>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-youtube-square"></i>
                        </div>
                    </div>


                    <div className={classes.content}>
                        <p className={classes.title}>ABOUT Groceries</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quisnostrud exerci tation nibh euismod tincidunt ut </p>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.payments}>
                            <img src={Visa} alt="" />
                            <img src={Visa} alt="" />
                            <img src={Visa} alt="" />
                            <img src={Visa} alt="" />
                            <img src={Visa} alt="" />
                            <img src={Visa} alt="" />
                            <img src={Visa} alt="" />
                            <img src={Visa} alt="" />
                        </div>

                    </div>

                </div>


            </div >
        );

    }

    return (
        <div className={classes.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <p className={classes.install}>Install App</p>
                        <div className={classes.storeApp}>
                            <img src={Playstore} alt="" />
                        </div>
                        <div className={classes.storeApp}>
                            <img src={Applestore} alt="" />
                        </div>
                    </div>
                    <div className="col-3">
                        <p className={classes.title}>Information</p>
                        <div className={classes.listContainer}>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li> Terms & Condition</li>
                            <li>Orders & Returns</li>
                            <li>Contact Us</li>
                            <li>Career</li>
                        </div>

                    </div>
                    <div className="col-6">
                        <p className={classes.title}>Adress</p>
                        <div className={classes.address}>
                            <p>
                                Address Address: 1234 Street Adress City Address, 1234
                            </p>
                            <p className={classes.phone}>Phones: <span>(00) 1234 5678</span></p>
                            <p>
                                We are open: Monday-Thursday: 9:00 AM - 5:30 PM <br />Friday: 9:00 AM - 6:00 PM <br />Saturday: 11:00 AM - 5:00 PM
                            </p>
                            <p className={classes.email}>E-mail: <span>shop@email.com</span></p>
                        </div>
                    </div>
                </div>
                <div className={classes.payments}>
                    <img src={Visa} alt="" />
                    <img src={Visa} alt="" />
                    <img src={Visa} alt="" />
                    <img src={Visa} alt="" />
                    <img src={Visa} alt="" />
                    <img src={Visa} alt="" />
                    <img src={Visa} alt="" />
                    <img src={Visa} alt="" />
                </div>
                <p className={classes.copyWrite}>
                    @ e-commerce.com 2020-2025 All rights reserved
                </p>
                <div className={classes.needHelp}>
                    <p>NEED HELP?<br />Contact us via phone or email:<br />+880 19 0000 0000<br />garibook@gmail.com</p>
                </div>
                <div className={classes.social}>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-youtube-square"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;