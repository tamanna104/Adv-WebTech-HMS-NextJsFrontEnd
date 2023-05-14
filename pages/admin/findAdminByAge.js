import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Dashlayout from "@/pages/components/dashLayout"

import Link from "next/link"
import Image from "next/image"
export default function findAdminByAge({ data }) {
    const [inputValue, setInputValue] = useState();
    const router = useRouter();
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    }
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // redirect to the same page with query params containing the input value
      router.push({
        pathname: 'findAdminByAge',
        query: { inputValue: inputValue }
      });
    }
    return (
      <>
      
      <Dashlayout title = "Find Admin"/>

      <form align="center" onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form><br/>
      <div align="center" style={{position:"absolute", left: "60%" }}>
      <Link href="/admin/admins">Go back</Link>
      </div>
      {data.status == null? 
        <AdminData data={data}/>
      : data.status }
        
      </>
    );
  }
  export async function getServerSideProps({ query }) {
    const inputValue = query.inputValue;
    try {
    const response = await axios.get('http://localhost:3000/admin/getAdminByAge/'+inputValue);
    const data = await response.data;

  
    return {
      props: {
        data
      }
    };
    
    } catch (error) {
  
    return {
      props: {
        data: {status:"enter valid user id"}
      }
    };
  }
  }
