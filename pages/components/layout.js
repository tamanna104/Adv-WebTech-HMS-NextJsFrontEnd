import Link from "next/link"
import Myheader from "./header"
import Header from "./header"
import Session from "./session"
import Image from "next/image"
export default function Mylayout(props){
    return(
    <>
    <Header title ={props.title}/>
    <header class="bg-teal-100 body-font">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mx-10">
        <Image src="/favicon.ico" alt="me" width="60" height="60" />
      <span class="ml-3 text-xl text-teal-600">Hospital Management System</span>
    </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href="/about">About us</Link>&nbsp;&nbsp;&nbsp;
        <Link href="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link href="/signup">Sign Up</Link>&nbsp;&nbsp;&nbsp;
        <Session />
    </nav>

        </div>

    </header>

    <main class=" flex-grow">

    </main>

    </>
    )
}