import React from 'react'
import { PulseLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }} 
    > 


      <PulseLoader />
    </div>
  )
}

export default Loader