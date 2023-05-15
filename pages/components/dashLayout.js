import Link from "next/link"
import Header from "./header"
import Image from "next/image"
import Session from "./session"
import Footer from "./footer"
export default function Dashlayout(props){
    return(
    <>
    <Header title ={props.title}/>
    <header class="bg-teal-100 body-font flex flex-wrap">
    <div class="pt-2 mx-3 flex" >
        <Image src="/admin1.png" alt="me" width="65" height="65" />
        <span class="container flex flex-wrap flex-col md:flex-row ml-3 text-sm text-teal-600">Welcome</span>
        </div>
        <div class="container mx-auto flex flex-wrap flex-row justify-center pt-2 relative mb-2 p-2">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="text-2xl text-teal-600 ">Hospital Management System</span>
            </a>
        </div>
    </header>
    <Session />

        <nav>
            {/* <p align="right"><Link href="/logout">Log Out </Link>&nbsp;&nbsp;&nbsp;</p> */}
            {/* <dev style={{float:"left" }} class="pt-5">
            <nav>
            &nbsp;&nbsp;<Link href="/admin">DashBoard</Link><br/><br/>
            &nbsp;&nbsp;<Link href="/admin/profile">Profile</Link><br/><br/>
            &nbsp;&nbsp;<Link href="/admin/admins">Admin Info</Link><br/><br/>
            &nbsp;&nbsp;<Link href="/admin/hospital">Hospital</Link><br/><br/>
            &nbsp;&nbsp;<Link href="/admin/doctor">Doctor</Link><br/><br/>
            &nbsp;&nbsp;<Link href="/admin/bloodBank">Blood Bank</Link><br/><br/>
            &nbsp;&nbsp;<Link href="/admin/patient">Patient</Link><br/><br/>
            &nbsp;&nbsp;<Link href="/admin/staff">Staff</Link><br/><br/>
            &nbsp;&nbsp;<Link href="/admin/mail">Mails</Link><br/><br/>
            </nav>
            <dev style={{position: "absolute", bottom: 0, width: "100%", height:"5%"}} ></dev>
            </dev> */}
                {/* <div class="h-screen w-1/6 float-left bg-gray-200 h-full">
                    &nbsp;&nbsp;<Link href="/admin">DashBoard</Link><br/><br/>
                    &nbsp;&nbsp;<Link href="/admin/profile">Profile</Link><br/><br/>
                    &nbsp;&nbsp;<Link href="/admin/admins">Admin Info</Link><br/><br/>
                    &nbsp;&nbsp;<Link href="/admin/hospital">Hospital</Link><br/><br/>
                    &nbsp;&nbsp;<Link href="/admin/doctor">Doctor</Link><br/><br/>
                    &nbsp;&nbsp;<Link href="/admin/bloodBank">Blood Bank</Link><br/><br/>
                    &nbsp;&nbsp;<Link href="/admin/patient">Patient</Link><br/><br/>
                    &nbsp;&nbsp;<Link href="/admin/staff">Staff</Link><br/><br/>
                    &nbsp;&nbsp;<Link href="/admin/mail">Mails</Link><br/><br/>
                </div> */}
        </nav>
    <div className="bg-white p-4 rounded-lg mx-auto max-w-lg float-left">
              <a href={"/admin"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >DashBoard</a>
                <a href={"/admin/admins"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Admin Info</a>
                 <a href={"/admin/hospital"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Hospital</a>
                <a href={"/admin/doctor"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Doctor</a>
                <a href={"/admin/bloodBank"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Blood Bank</a>
                <a href={"/admin/patient"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Patient</a>
                <a href={"/admin/staff"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Staff</a>
                <a href={"/admin/mail"} className={"block w-full bg-teal-200 p-2 my-2 hover:bg-teal-700 hover:text-white rounded-m shadow-md cursor-pointer"}
                >Mails</a>
      </div>

            <main>
            </main>
            <div className="relative mb-4">
            <Footer/>
            </div>
        {/* <dev style={{position: "fixed", bottom: 0, width: "100%", height:"5%"}} >Hospital Management @copyright</dev> */}
    </>
    )
}