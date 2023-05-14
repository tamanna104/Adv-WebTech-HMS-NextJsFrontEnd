import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Session() {
  const [email, setEmail] = useState(null);
    const router = useRouter();
    
  useEffect(() => {
      if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
      {
          const session = sessionStorage.getItem('email');
          if (session) {
            setEmail(sessionStorage.getItem('email'));
           
          }          
      }
   
  }, []);

    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/admin/signout')
            console.log(response.data)
            sessionStorage.removeItem('email');
            setEmail(null);
            router.push('/signin');
          } catch (error) {
            console.error(error)
          }
    
  };

  return (
    <>
          {email !== null ? (
        <>
          <div>
     
          <a class="text-sky-600 pl-1 ">{email}</a>
          <button class=" pr-2 float-right" onClick={handleSignOut}>
          <Image class="" src="/log-out.png" alt="me" width="25" height="25" />
          </button>
      
           <Link class="font-mono pl-3 text-cyan-600 italic hover:text-cyan-300 " href="/admin">DashBoard</Link>
               
          </div>
     
            </>
      ) : (
        <div>
              <Link href="/signin">
          Sign in
        </Link>
             
        </div>
       
      )}
     
    </>
  );
}