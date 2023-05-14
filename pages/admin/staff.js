import Dashlayout from "../components/dashLayout"
import Link from "next/link"
import Image from "next/image"
export default function Staff() {
    return (
      <>
      
      <Dashlayout title = "Staff"/>

      <div align="center" style={{position: "absolute", top: 220, width: "100%", right: 100 }}>
      <Link href="/viewHospital">View Staffs</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/editHospital">Edit Staffs</Link>&nbsp;&nbsp;&nbsp;
      <label>Search : </label>
        <input type="text" placeholder=""></input><br/><br/>

      </div>
        
      </>
    )
  }