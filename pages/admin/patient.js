import Dashlayout from "../components/dashLayout"
import Link from "next/link"
import Image from "next/image"
export default function Patient() {
    return (
      <>
      
      <Dashlayout title = "Patient"/>

      <div align="center" style={{ right: 100 }}>
      <Link href="/viewHospital">View Patients</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/editHospital">Edit Patients</Link>&nbsp;&nbsp;&nbsp;
      <label>Search : </label>
        <input type="text" placeholder=""></input><br/><br/>

      </div>
        
      </>
    )
  }