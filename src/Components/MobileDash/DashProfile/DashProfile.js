import React from 'react'
import classes from "./DashProfile.module.css"
import ProfileImg from "../../../Asset/DashProfile.png"


const DashProfile = () => {

   return (
      <div className={classes.DashProfile + " d-flex align-items-center justfy-content-around"}>

         <div className={classes.Profile + ' me-3'}>
            <div className={classes.ImgBorder + " d-flex align-items-center justify-content-center"}>
               <img src={ProfileImg} alt="ProfileImage" />
            </div>
         </div>

         <div>
            <p className={classes.DashInfo1 + " fw-4 fs-15"}>
               Mariya Klakar
            </p>
            <p className={classes.DashInfo2 + " fw-3 mt-1"}>
               Member Since 2021
            </p>
         </div>
      </div>
   )
}

export default DashProfile
