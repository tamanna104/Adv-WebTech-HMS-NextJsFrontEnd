import Dashlayout from "@/pages/components/dashLayout"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import Footer from "@/pages/components/footer"
import { useRouter } from "next/router"

export default function adminProfile({ data }) {
    const router = useRouter();
   
    const handleRemove = async (id) => {
      try {
        const confirmed = window.confirm("Sure you wanna remove this Admin?");
        if(confirmed){
          const response = await axios.delete(`https://adv-webtech-hms-nestjs-production.up.railway.app/admin/rmvAdmin/${id}`)
          const data = await response.data;
          if (data && data.affected) {
            console.log("Admin Successfully Deleted")
            router.push('../../admin/viewAdmins')
          }
        }
      }
      catch (error) {
        console.log(error)
      }
    };
    return (
      <>
        <Dashlayout title = "Admin Info"/>
        <div class="flex flex-wrap justify-center p-4">
          <div class="p-4">
            <div class="h-full flex flex-col items-center text-center">
              <Image src={"https://adv-webtech-hms-nestjs-production.up.railway.app/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">{data.name}</h2>
                <h3 class="text-gray-900 mb-3">Age: {data.age}</h3>
                <h3 class="text-gray-900 mb-3">Gender: {data.gender}</h3>
                <h3 class="text-gray-900 mb-3">Email: {data.email}</h3>
                <h3 class="text-gray-900 mb-3">Address: {data.address}</h3>
                <h3 class="text-gray-900 mb-3">Contact: {data.contactNo}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <a onClick={() => router.back()} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mr-2 rounded">
            Go back
          </a>
          <a href={"/admin/adminInfo/editAdmin/"+data.id} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mr-2 rounded">
            Edit Info
          </a>
          <button onClick={() => handleRemove(data.id)} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </>
    )
  }

  export async function getServerSideProps(context) {
    const id=context.params.id;
   
       const response = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/admin/getAdmin/'+id);
       const data = await response.data;
      
   return { props: { data } }
   }