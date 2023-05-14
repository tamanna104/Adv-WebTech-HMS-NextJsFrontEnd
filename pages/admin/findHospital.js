import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Dashlayout from "@/pages/components/dashLayout"
import HospitalData from '@/pages/components/hospitalData';

export default function findHospital({ data }) {
    const [inputValue, setInputValue] = useState();
    const router = useRouter();
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    }
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // redirect to the same page with query params containing the input value
      router.push({
        pathname: 'findHospital',
        query: { inputValue: inputValue }
      });
    }
    return (
      <>
      
      <Dashlayout title = "Find Hospital"/>

      <form align="center" onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      {data.status == null? 
        <HospitalData data={data}/>
      : data.status }
        
      </>
    );
  }
  export async function getServerSideProps({ query }) {
    const inputValue = query.inputValue;
    try {
    const response = await axios.get('http://localhost:3000/hospital/getHospital/'+inputValue);
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