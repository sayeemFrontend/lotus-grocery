import React from 'react'
import classes from "./searchbar.module.css"

function Searchbar() {
   return (
      <div className={classes.search_bar}>
         <input type="text" placeholder="Search" />
         <button className={classes.search_btn}>
            <i class="fas fa-search"></i>
         </button>
      </div>
   )
}

export default Searchbar
