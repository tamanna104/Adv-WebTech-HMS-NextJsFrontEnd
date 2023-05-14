import Dashlayout from "@/pages/components/dashLayout"
import Link from "next/link"
import Image from "next/image"
import axios from "axios";

export default function viewHospitals({ data }) {
    return (
      <>
      
      <Dashlayout title = "View Hospitals"/>

      {/* <div align="center" style={{position:"absolute", left: "40%" }}>
      <p>Show All Hospitals</p>
      <label>Search : </label>
        <input type="text" placeholder=""></input><br/><br/>
        <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/admin/hospitalInfo/"+item.id}>{item.name}</Link>
            </li>
        ))}
         </ul>
        <Link href="/admin/admins">Go back</Link>
      </div> */}
      <div className="bg-green-200 p-4 rounded-lg mx-auto max-w-lg">
        <h4 class="text-xl font-bold leading-tight tracking-tight text-blue-800 md:text-2xl dark:text-white p-3">Show all Hospitals</h4>
        <ul className="list-none">
          {data.map(item => (
            <li key={item.id} className="mb-4">
              <a href={"/admin/adminInfo/"+item.id} className={"block w-full bg-white p-2 my-2 hover:bg-green-300 hover:text-teal-800 rounded-md shadow-md cursor-pointer"}
                >{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div class="flex justify-center mt-2 mb-4">
        <a href="/admin/hospital" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Go back
        </a>
      </div>
        
      </>
    );
  }
  export async function getServerSideProps() {
 
    const response = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/hospital/all');
    const data = await response.data;
  
return { props: { data } }
}