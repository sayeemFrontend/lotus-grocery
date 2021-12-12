import { useState } from "react";
import classes from "./DashDrop.module.css";

const DashDropMenu = ({ activeItem, setActiveItem, lists }) => {
   const [selBox, setSelBox] = useState(false)
   const [inputValue, setInputValue] = useState()



   window.addEventListener('click', (e) => {
      if (document.getElementById("modalArea") && selBox && !document.getElementById("modalArea").contains(e.target)) {
         setSelBox(false)
      }
   });

   const changeInputValue = (op) => {
      setInputValue(op.title)
      setSelBox(false)
      setActiveItem(op.id)
   }

   return (
      <div id="modalArea" className={classes.selectedInput} >
         <div onClick={() => setSelBox(!selBox)} className={!selBox ? classes.inputContainer : classes.inputContainer + " " + classes.rotate}>
            <input className='fw-5' type="text" readOnly value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Edit Account" />
            <span className='d-flex align-items-center justify-content-center hover'><i className='fas fa-chevron-down'></i></span>
         </div>
         <div className={selBox ? classes.DashContainer + " " + classes.modalPosition : "d-none"}>
            {lists && lists.map((op) => (
               <li className='fw-5' key={op.id} onClick={() => changeInputValue(op)}>{op.title}</li>
            ))}
         </div>
      </div>

   );
}

export default DashDropMenu;