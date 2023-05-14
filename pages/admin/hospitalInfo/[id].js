import Dashlayout from "@/pages/components/dashLayout"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"

export default function hospitalInfo({ data }) {
    const router = useRouter();
    return (
      <>
        <Dashlayout title = "Hospital Info"/>
        <div style={{ position:"absolute" ,left: "40%" }}>
            <h4>Name: {data.name}</h4>
            <h4>Address: {data.address}</h4>
            <h4>HelpLine: {data.helpline}</h4>
            <h4>Email: {data.email}</h4>
            <h4>Ambulance Avaiable: {data.ambulanceNumber}</h4>
            <button type="button" onClick={() => router.back()}>
            Click here to go back
            </button>
            <Link href={"/admin/hospitalInfo/editHospital/"+data.id}>Edit Info</Link>&nbsp;&nbsp;&nbsp;
        </div>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const id=context.params.id;
   
       const response = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/hospital/getHospital/'+id);
       const data = await response.data;
      
   return { props: { data } }
   }