import React from "react";


function Button(props){
  return(
    <button className="main_buttons" type="button" name="button">{props.message}</button>
  )
}
export default Button
