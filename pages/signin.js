import { useState } from 'react'
import axios from 'axios'
import MyLayout from "./components/layout"
import { useRouter } from 'next/router';
import Footer from './components/footer';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://adv-webtech-hms-nestjs-production.up.railway.app/admin/signin', { email, password })
      // if(response.data &&response.data.message=="success" )
      if(response.data)
      {
        sessionStorage.setItem('email', email);
        console.log(response.data)
        router.push('/admin');

      }

      console.log("res: "+response.data)

      

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
  }

 

    return (
        <>
            <MyLayout title="Sign In" />
   
        <div class="p-24 ">
          <section className="text-gray-600 body-font mx-auto w-96">
            <form onSubmit={handleSubmit}>
      
              <div className="bg-teal-300 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
                <h1 className="text-blue-800 text-xl font-medium title-font mb-8">Sign In</h1>
                <div className="relative mb-4" >
                  <label for="full-name" className="leading-7 text-mid text-gray-600">Email </label>

                  <input type="email" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)}  />
              </div>
              <div className="relative mb-4">
                  <label for="password" className="leading-7 text-mid text-gray-600" >Password</label>
                  <input type="password" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={(e) => setPassword(e.target.value)}  />
              
              </div>
              <button type="submit" className="text-white bg-fuchsia-500 border-0 py-1 px-6 focus:outline-none hover:bg-fuchsia-800 rounded text-lg" >Sign In</button>
                    {error &&
                      <div>
                        
                        <p id="outlined_error_help" ><span >{error}</span></p>
                      </div>
                    }   
              </div>
            </form>      
          </section>

</div>
<Footer />
</>
  )
}