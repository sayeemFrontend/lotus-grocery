import React from 'react'
import classes from './Search.module.css'
const Search = () => {
   return (
      <div className={classes.search_bar + " d-flex align-items-center"}>
         <input type="text" placeholder="Search" />
         <button className={classes.search_btn + " d-flex align-items-center justify-content-center"}>
            <i class="fas fa-search"></i>
         </button>
      </div>
   )
}

export default Search
