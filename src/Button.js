import React from "react";

function Button(props){
    // console.log(props.name);
    return(
        <div>
            <button onClick={()=>{props.age(props.name)}}> 
           {props.name}       
            </button>
        </div>
    )
}
export default Button;