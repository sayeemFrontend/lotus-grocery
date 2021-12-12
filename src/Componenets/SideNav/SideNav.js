import { Link } from "react-router-dom";
import classes from "./SideNav.module.css";
import Logo from "./../../Asset/sidenavLogo.png"
import sideIcon from "./../../Asset/navIcon.png"
import { useState } from "react";

const SideNav = () => {
   const [expandedList, updateExpandedList] = useState([])
   const categoeis = [
      {
         id: 10, title: 'Fresh Fruits and vegetables', link: '/aaaa',
         subList: [
            { id: 101, title: 'Item1', link: '/aaaa/aaaa' },
            { id: 102, title: 'Item2', link: '/aaaa/aaaaa' },
            { id: 103, title: 'Item3', link: '/aaaa/aaaaaa' },
         ]
      },
      {
         id: 20, title: 'Beverages', link: '/aaaav',
         subList: [
            { id: 201, title: 'Item1', link: '/aaaav/aaaavv' },
            { id: 202, title: 'Item2', link: '/aaaav/aaaavvvvVVV' },
            { id: 203, title: 'Item3', link: '/aaaav/aaaavvvv' },
         ]
      },
      {
         id: 20, title: 'Bakery & Snacks', link: '/aaaav',
      },
      {
         id: 20, title: 'Bakery & Snacks', link: '/aaaav',
      },
   ]

   const expandListControl = (id) => {
      if (expandedList.includes(id)) {
         let newList = expandedList.filter(it => it !== id)
         updateExpandedList(newList)
      }
      else {
         updateExpandedList([...expandedList, id])
      }
   }

   return (

      <div className={classes.sidebar}>
         <Link to="/" className={classes.sideNavLogo}>
            <img src={Logo} alt="Logo" classname='img-fluid' />
         </Link>
         <div className={classes.listContainer}>
            {categoeis?.map((data) => (

               data.subList ? (
                  <>
                     <div onClick={() => expandListControl(data.id)} className={classes.listItem}>
                        <div className="d-flex align-items-center flex-grow-1">
                           <span> <img src={sideIcon} alt="" /></span>
                           <span className="mx-3">{data.title}</span>
                        </div>
                        <div className={expandedList.includes(data.id) && classes.rotate}><i class="fas fa-chevron-down"></i></div>
                     </div>
                     <div className={expandedList.includes(data.id) ? classes.subListContainer : "d-none"}>
                        {data.subList.map((sub) => (
                           <div className={classes.listItem}>
                              <span className="mx-4">{sub.title}</span>
                           </div>
                        ))}

                     </div>
                  </>

               ) : (
                  <Link to="">
                     <div className={classes.listItem}>
                        <div className="d-flex align-items-center flex-grow-1">
                           <span> <img src={sideIcon} alt="" /></span>
                           <span className="mx-3">{data.title}</span>
                        </div>
                     </div>
                  </Link>
               )
            ))}
         </div>

      </div>

   );
}

export default SideNav;