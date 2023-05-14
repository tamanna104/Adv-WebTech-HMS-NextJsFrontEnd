import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Dashlayout from "@/pages/components/dashLayout"
import AdminData from '../components/adminData';

import Link from "next/link"
import Image from "next/image"
export default function findAdmin({ data }) {
  console.log("data", data);
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    if (e.target.value) {
      setInputValue(e.target.value);
    }
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'findAdmin',
      query: { inputValue: inputValue }
    });
  }
  return (
    <>
      <Dashlayout title = "Find Admin"/>
      <div className="flex justify-center">
        <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input value={inputValue} onChange={handleInputChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter ID" aria-label="ID" />
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
              type="submit" onClick={handleFormSubmit}>
              Fetch Data
            </button>
          </div>
        </form>
        
      </div>
      {data !== "no input" ? (
        data.status == null ? 
          <AdminData data={data}/> : 
          <h4 class="flex justify-center text-red-600 text-lg">{data.status}</h4>) : ''}
    </>
  )}

  export async function getServerSideProps({ query }) {
    const inputValue = query.inputValue;
    if (inputValue) {
      try {
        const response = await axios.get('http://localhost:3000/admin/getAdmin/'+inputValue);
        const data = await response.data;
        if (data) {
          return {
            props: {data}
          }
        } else {
          return {
            props: {
              data: {status:"Enter valid user id"}
            }
          };
        }
      } catch (error) {
        return {
          props: {
            data: {status:"Enter valid user id"}
          }
        };
      }
    } else {
      return {
        props: {data: "no input"}
      }
    }
    // try {
    //   const response = await axios.get('http://localhost:3000/admin/getAdmin/'+inputValue);
    //   const data = await response.data;
    //   return {
    //     props: {data}
    //   }
    // } catch (error) {
    //   return {
    //     props: {data: "Invalid id"}
    //   }
    // }
  }
