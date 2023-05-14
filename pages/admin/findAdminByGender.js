import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Dashlayout from "@/pages/components/dashLayout"

import Link from "next/link"
import Image from "next/image"
export default function findAdminByGender({ data }) {
    const [inputValue, setInputValue] = useState();
    const router = useRouter();
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    }
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // redirect to the same page with query params containing the input value
      router.push({
        pathname: 'findAdminByGender',
        query: { inputValue: inputValue }
      });
    }
    return (
      <>
      
      <Dashlayout title = "Find Admin"/>
      {/* <form align="center" onSubmit={handleFormSubmit}>
      <h4>find by gender</h4>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      <div align="center" style={{position:"absolute", left: "60%" }}>
      </div>
      <br/> */}
      <div className="flex justify-center">
          <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
            <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
              <input value={inputValue} onChange={handleInputChange} 
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" placeholder="Find By Gender" aria-label="ID" />
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
                type="submit" onClick={handleFormSubmit}>
                Fetch Data
              </button>
            </div>
          </form>
        </div>
        <br/>
      <div class="flex justify-center">
      <ul>
        {/* {data.map(item => (
          <li key={item.id}>
            <h4>Name: {item.name}</h4>
            <h4>Age: {item.age}</h4>
            <h4>Gender: {item.gender}</h4>
            <h4>Email: {item.email}</h4>
            <h4>Address: {item.address}</h4>
            <h4>Contact: {item.contactNo}</h4>
            <h4>Picture: </h4>
            <Image src={"http:/localhost:3000/admin/getimage/"+item.filename} alt="me" width="150" height="150" /><br/><br/>

            </li>
        ))} */}
        
          <div class="flex flex-wrap justify-center">
            <div class="p-4">
            {data.map(item => (
                <li key={item.id}>
              <div class="h-full flex flex-col items-center text-center pt-10">
                <Image src={"http:/localhost:3000/admin/getimage/"+item.filename} alt="me" width="150" height="150" />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">{item.name}</h2>
                  <h3 class="text-gray-900 mb-3">Age: {item.age}</h3>
                  <h3 class="text-gray-900 mb-3">Gender: {item.gender}</h3>
                  <h3 class="text-gray-900 mb-3">Email: {item.email}</h3>
                  <h3 class="text-gray-900 mb-3">Address: {item.address}</h3>
                  <h3 class="text-gray-900 mb-3">Contact: {item.contactNo}</h3>
                </div>
              </div>
              </li>
          ))}
            </div>
          </div>


         </ul>
         <br/><br/>
        </div>
        <div class="flex justify-center">
          <a href="/admin/admins" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back
          </a>
        </div>
        
      </>
    );
  }
  export async function getServerSideProps({ query }) {
    const inputValue = query.inputValue;
    try {
    const response = await axios.get('http://adv-webtech-hms-nestjs-production.up.railway.app/admin/getAdminByGender/'+inputValue);
    const data = await response.data;

  
    return {
      props: {
        data
      }
    };
    
    } catch (error) {
  
    return {
      props: {
        data: {status:"enter valid gender"}
      }
    };
  }
  }
