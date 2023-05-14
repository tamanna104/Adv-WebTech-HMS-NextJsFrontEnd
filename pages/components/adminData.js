import Image from 'next/image'
import Link from "next/link"

export default function AdminData({data})   
{
    return(
        <>

          {/* <div>
          <h4>Name: {data.name}</h4>
          <h4>Age: {data.age}</h4>
          <h4>Gender: {data.gender}</h4>
          <h4>Email: {data.email}</h4>
          <h4>Address: {data.address}</h4>
          <h4>Contact: {data.contactNo}</h4><br/>
          <h4>Picture: </h4>
          <Image src={"http:/localhost:3000/admin/getimage/"+data.filename} alt="me" width="150" height="150" /><br/><br/>
          </div>
        </div>
        <div class="flex justify-center">
          <a href="../admin/admins" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back
          </a> */}
          <div class="flex flex-wrap justify-center">
            <div class="p-4">
              <div class="h-full flex flex-col items-center text-center pt-10">
                <Image src={"http:/localhost:3000/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">{data.name}</h2>
                  <h3 class="text-gray-900 mb-3">Age: {data.age}</h3>
                  <h3 class="text-gray-900 mb-3">Gender: {data.gender}</h3>
                  <h3 class="text-gray-900 mb-3">Email: {data.email}</h3>
                  <h3 class="text-gray-900 mb-3">Address: {data.address}</h3>
                  <h3 class="text-gray-900 mb-3">Contact: {data.contactNo}</h3>
                </div>
                  <div class="flex justify-center">
                  <a href="../admin/admins" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go back
                  </a> 
                </div>
              </div>
            </div>
          </div>
      
        </>
    )
}
