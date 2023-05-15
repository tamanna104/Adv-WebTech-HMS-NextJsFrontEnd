import Dashlayout from "../components/dashLayout"
import Footer from "../components/footer"
import Link from "next/link"
import Image from "next/image"
export default function hospital() {
    return (
      <>
      
      <Dashlayout title = "Hospital"/>

      {/* <div align="center" style={{ right: 100 }}>
      <Link href="/admin/viewHospital">View Hospitals</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/findHospital">Find Hospitals</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/editHospital">Edit Hospitals</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/addHospital">Add Hospital</Link>&nbsp;&nbsp;&nbsp;
      <label>Search : </label>
        <input type="text" placeholder=""></input><br/><br/>

      </div>
         */}
         <div className="mx-auto max-w-2xl flex "> 
              <a href={"/admin/viewHospital"} className={"block w-full bg-teal-200 p-2 my-2  hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >View Hospitals</a>
                 <a href={"/admin/editHospital"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Edit Hospitals</a>
                <a href={"/admin/addHospital"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Add Hospital</a>

      </div>
      <Footer/>
      </>
    )
  }