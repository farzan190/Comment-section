import { useState } from "react";

const Reply=(event)=>{
  const[bhaelu,setBhaelu]=useState()
  const handleChange=(event)=>{
       setBhaelu(event.target.value);
  }
  return <input type="text" value={bhaelu}  onChange={(event)=>handleChange(event) }  />

}
export default Reply;


// map through the comments and then match something there and if it does then add that value to the replies 
// jis par click kiya hai uspar add karna hai replies mai push karna hai 