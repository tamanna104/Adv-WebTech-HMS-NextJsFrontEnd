import Dashlayout from "@/pages/components/dashLayout"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import Footer from "@/pages/components/footer"
import { useRouter } from "next/router"

export default function bloodBankInfo({ data }) {
    const router = useRouter();
    return (
      <>
        <Dashlayout title = "Blood Bank Info"/>
        {/* {console.log(data)}
        {data.map(item => (
          <li key={item.id}>
            <h4>Hospital: {item.name}</h4>
            <h4>Email: {item.email}</h4>
            <h4>HelpLine: {item.helpline}</h4>
            <h4>BloodBank information:</h4>
            <h4>Quantity of Blood Bags: {item.bloodBank.quantity}</h4>
            <h4>Blood Doners Avaiable: {item.bloodBank.availableBloodDoner}</h4>
            <h4>Last Collection: {item.bloodBank.dateOfRecentCollection }</h4>
            <h4>Expired Blood Bags: {item.bloodBank.expiredBloodBags}</h4>
            {console.log(item.bloodBank.id)} */}
            {/* {console.log(item.name)} */}
            {/* {console.log(item.name)} */}

            {/* </li>
        ))} */}
             <div class="flex flex-wrap justify-center p-4 mb-10">
              <div class="p-4">
                <div class="w-full bg-teal-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-19 md:space-y-6 sm:p-15">
                <ul>
                {data.map(item => (
                <li key={item.id}>
                  <div class="h-full flex flex-col items-center text-center">
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-gray-900">{data.name}</h2>
                      <h3 class="text-gray-900 mb-3">Hospital: {item.name}</h3>
                      <h3 class="text-gray-900 mb-3">Email: {item.email}</h3>
                      <h3 class="text-gray-900 mb-3">HelpLine: {item.helpline}</h3>
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-800 md:text-2xl dark:text-white p-4"> BloodBank Info</h1>
                      <h3 class="text-gray-900 mb-3">Quantity of Blood Bags: {item.bloodBank.quantity}</h3>
                      <h3 class="text-gray-900 mb-3">Blood Doners Avaiable: {item.bloodBank.availableBloodDoner}</h3>
                      <h3 class="text-gray-900 mb-3">Last Collection: {item.bloodBank.dateOfRecentCollection }</h3>
                      <h3 class="text-gray-900 mb-3">Expired Blood Bags: {item.bloodBank.expiredBloodBags}</h3>
                    </div>
                  </div>
                </li>
                  ))}

                </ul>
                </div>
                </div>
             </div>
            </div>
            <div class="flex justify-center">
                  <a onClick={() => router.back()} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mr-2 rounded">
                    Go back
                  </a>
                  <a href={"/admin/bloodBankInfo/editBloodBank/"+data[0].bloodBank.id} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mr-2 rounded">
                    Edit Info
                  </a>
                  <button onClick={() => handleRemove(data.id)} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </div>
                <Footer/>

         {/* {console.log(data[0].bloodBank.id)}
            <button type="button" onClick={() => router.back()}>
             go back
            </button>
            <Link href={"/admin/bloodBankInfo/editBloodBank/"+data[0].bloodBank.id}>Edit Info</Link>&nbsp;&nbsp;&nbsp; */}
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const id=context.params.id;
   
       const response = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/hospital/findBankByHospital/'+id);
       const data = await response.data;
      
   return { props: { data } }
   }