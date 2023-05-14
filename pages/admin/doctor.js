import Dashlayout from "../components/dashLayout"
import Link from "next/link"
import Image from "next/image"
export default function Doctor() {
    return (
      <>
      
      <Dashlayout title = "Doctor"/>

      <div align="center" style={{top: 195, right: 100 }}>
      <Link href="/admin/viewDoctors">View Doctors</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/editHospital">Edit Doctors</Link>&nbsp;&nbsp;&nbsp;
      <label>Search : </label>
        <input type="text" placeholder=""></input><br/><br/>

      </div>
        
      </>
    )
  }