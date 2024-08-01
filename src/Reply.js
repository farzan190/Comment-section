import { useState } from "react";

const Reply=(event)=>{
  const[bhaelu,setBhaelu]=useState()
  const handleChange=(event)=>{
       setBhaelu(event.target.value);
  }
  return <input type="text" value={bhaelu} onChange={(event)=>handleChange(event)}  />

}
export default Reply;