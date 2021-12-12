import { useRef, useState } from "react";
import classes from "./selectedInput.module.css";

const SelectedInput = ({ defaultValue, options, type, customStyle }) => {

   const [selBox, setSelBox] = useState(false)
   const [inputValue, setInputValue] = useState(defaultValue)
   const modalRef = useRef()

   const changeInputValue = (op) => {
      console.log("ksakshaks", selBox);
      setInputValue(op)
      setSelBox(false)
   }

   window.addEventListener('click', (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
         setSelBox(false)
      }

   });


   let element;
   switch (type) {
      case "modal":
         element = (<div className={selBox ? classes.selBoxContainer + " " + classes.modalPosition : "d-none"}>
            {options ? options.map((op) => (
               <li key={op} onClick={() => changeInputValue(op)}>{op}</li>
            )) : null}
         </div>);
         break;
      default:
         element = (<div className={selBox ? classes.selBoxContainer + " " + classes.selBoxPosition : "d-none"}>
            {options ? options.map((op) => (
               <li key={op} onClick={() => changeInputValue(op)}>{op}</li>
            )) : null}
         </div>)
         break;

   }


   return (
      <div ref={modalRef} style={customStyle && customStyle} className={classes.selectedInput} >
         <div onClick={() => setSelBox(!selBox)} className={!selBox ? classes.inputContainer : classes.inputContainer + " " + classes.rotate}>
            <input type="text" value={inputValue} readOnly onChange={(e) => setInputValue(e.target.value)} placeholder="select from" />
            <span><i className='fas fa-chevron-down'></i></span>
         </div>
         {element}
      </div>

   );
}

export default SelectedInput;