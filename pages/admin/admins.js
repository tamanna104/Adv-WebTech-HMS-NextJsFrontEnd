import Dashlayout from "@/pages/components/dashLayout"
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/footer"
export default function Doctor() {
    return (
      <>
      
      <Dashlayout title = "Admins"/>

      {/* <div align="center" style={{top: 195, right: 100 }}>
      <Link href="/admin/viewAdmins">View Admins</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/findAdmin">Find Admin by ID</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/findAdminByName">Find Admin by Name</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/findAdminByGender">Find Admin by Gender</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/admin/addAdmin">Add New Admin </Link>&nbsp;&nbsp;&nbsp;
      

      </div> */}
      {/* <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center"> */}
         <div className="mx-auto max-w-2xl flex "> 
              <a href={"/admin/viewAdmins"} className={"block w-full bg-teal-200 p-2 my-2  hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >View Admins</a>
                <a href={"/admin/findAdmin"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Find Admin by ID</a>
                 <a href={"/admin/findAdminByName"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Find Admin by Name</a>
                <a href={"/admin/findAdminByGender"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Find Admin by Gender</a>
                <a href={"/admin/addAdmin"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Add New Admin</a>

      </div>
      {/* </div> */}
      </>
    )
  }