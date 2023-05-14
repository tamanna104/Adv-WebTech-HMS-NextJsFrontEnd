import Dashlayout from "../components/dashLayout"
import Link from "next/link"
import Image from "next/image"
export default function bloodBank() {
    return (
      <>
      
      <Dashlayout title = "BloodBank"/><br/>

      {/* <div align="center">
      <Link href="/admin/viewBloodBanks">View Blood Banks</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/hospitalInfo/editBloodBank">Edit Blood Banks</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/addBloodBank">Add Blood Banks</Link>&nbsp;&nbsp;&nbsp;
      <label>Search : </label>
        <input type="text" placeholder=""></input><br/><br/>

      </div> */}
      <div className="mx-auto max-w-2xl flex "> 
              <a href={"/admin/viewBloodBanks"} className={"block w-full bg-teal-200 p-2 my-2  hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >View Blood Banks</a>
                 <a href={"/admin/addBloodBank"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Add Blood Banks</a>

      </div>
        
      </>
    )
  }