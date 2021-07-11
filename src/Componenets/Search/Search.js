import React from 'react'
import classes from './Search.module.css'
const Search = (props) => {
   return (
      <div className={classes.searchBar + " d-flex align-items-center"}>
         <input type="text" placeholder="Search" />
         {props.icon && <i class="fas fa-search fa-xs cPrimary-1 d-lg-none"></i>}
      </div>
   )
}

export default Search
