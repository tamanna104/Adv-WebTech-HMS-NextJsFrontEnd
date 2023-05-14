import Dashlayout from "@/pages/components/dashLayout"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"
import SessionCheck from "../components/sessionCheck"
import { useEffect } from 'react';

export default function myProfile({ data }) {
    const router = useRouter();
    useEffect(() => {
      const response = axios.get('http://localhost:3000/admin/getProfile/');
      console.log("useeffect", response)
    }, []);

    return (
      <>
        <Dashlayout title = "My Profile"/>
        <div style={{ position:"absolute" ,left: "40%" }}>
        <Image src={"http:/localhost:3000/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
            <h4>Name: {data.name}</h4>
            <h4>Age: {data.age}</h4>
            <h4>Gender: {data.gender}</h4>
            <h4>Email: {data.email}</h4>
            <h4>Address: {data.address}</h4>
            <h4>Contact: {data.contactNo}</h4><br/>
     <br></br>
            <button type="button" onClick={() => router.back()}>
             go back
            </button>
            <Link href={"/admin/adminInfo/editAdmin/"+data.id}>Edit Info</Link>&nbsp;&nbsp;&nbsp;
        </div>
        
      </>
    )
  }

  export async function getServerSideProps() {
       
        const response = await axios.get('http://localhost:3000/admin/getProfile/');
       const data = await response.data;
    
      
   return { props: { data } }
   }