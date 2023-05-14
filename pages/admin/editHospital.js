import Dashlayout from "../components/dashLayout"
import Link from "next/link"
import Image from "next/image"
export default function hospital() {
    return (
      <>
      
      <Dashlayout title = "Edit Hospital"/>

      <div align="center" style={{position: "absolute", top: 220, width: "100%", right: 100 }}>
      <p>Edit Hospitals</p>
      <label>Search : </label>
        <input type="text" placeholder=""></input><br/><br/>

      </div>
        
      </>
    )
  }