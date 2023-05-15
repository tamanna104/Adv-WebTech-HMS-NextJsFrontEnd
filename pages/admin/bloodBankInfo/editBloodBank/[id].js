import Dashlayout from "@/pages/components/dashLayout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import Footer from "@/pages/components/footer";
import Link from "next/link"
import Image from "next/image"
export default function EditBloodBank({item}) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
          quantity: item.quantity,
          availableBloodDonar: item.availableBloodDonar,
          dateOfRecentCollection: item.dateOfRecentCollection,
          expiredBloodBags: item.expiredBloodBags,
          
          //password: ""
          
        }
      });
      console.log(item.dateOfRecentCollection);
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log("data",data)
        const formData = new FormData();
        formData.append('quantity', data.quantity);
        formData.append('availableBloodDonar', data.availableBloodDonar);
        formData.append('dateOfRecentCollection', data.dateOfRecentCollection);
        formData.append('expiredBloodBags', data.expiredBloodBags);
        console.log(data.availableBloodDonar)
        // formData.append('password', data.password);
        console.log(formData);
        try {
          const response = await axios.put("https://adv-webtech-hms-nestjs-production.up.railway.app/bloodBank/updateBloodBank/"+item.id, formData);
          

            setSuccess('BloodBank edited successfully');
            //reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('BloodBank edit unsuccessfull ' + error.response.data.message);
        }
    };

    
    return (
      <>
      
      <Dashlayout title = "Edit BloodBank Info"/>
      <div class="pt-0 sm:ml-68 p-4 mb-2">
        <section className="text-gray-600 body-font mx-auto w-96">
        
          <div class="flex flex-col justify-center px-auto mx-auto">
          
              <div class="w-full bg-teal-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-800 md:text-2xl dark:text-white">Edit BloodBank Info</h1>
              
                    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#">
                      <div className="relative mb-4">
                              <label for="quantity" className="leading-7 text-mid text-gray-700">Quantity</label>
                                <input type="text" id="quantity" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register('quantity', { required: true })}/>
                                {errors.quantity &&
                                <p id="outlined_error_help"><span >This is required</span></p>
                                }
                        </div>
                      <div className="relative mb-4">
                              <label for="availableBloodDonar" className="leading-7 text-mid text-gray-700">Doner</label>
                                <input type="text" id="availableBloodDonar" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register('availableBloodDonar', { required: true })}/>
                                {errors.availableBloodDonar &&
                                <p id="outlined_error_help"><span >This is required</span></p>
                                }
                        </div>
                        
                        <div className="relative mb-4">
                              <label for="dateOfRecentCollection" className="leading-7 text-mid text-gray-700">Date Of Collection</label>
                                <input type="date" id="dateOfRecentCollection" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register('dateOfRecentCollection', { required: true })}/>
                                {errors.dateOfRecentCollection &&
                                <p id="outlined_error_help"><span >Date is required</span></p>
                                }
                        </div>
                        <div className="relative mb-4">
                              <label for="expiredBloodBags" className="leading-7 text-mid text-gray-700">Expired Blood Bags</label>
                                <input type="text" id="expiredBloodBags" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register('expiredBloodBags', { required: true })}/>
                                {errors.expiredBloodBags &&
                                <p id="outlined_error_help"><span >This is required</span></p>
                                }
                        </div> 
               
                        <div class="flex justify-center">
                          <a onClick={() => router.back()} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mr-2 rounded">
                            Go back
                          </a>
                          <button type="submit" className="text-white bg-fuchsia-500 border-0 py-1 px-6 focus:outline-none hover:bg-fuchsia-800 rounded text-lg">Submit</button> 
                      </div>
                      </form>
                      <p id="filled_success_help" class="mt-2 text-s text-blue-700 dark:text-green-400"><span> {success}</span></p>
                </div>
              </div>
              </div>
          </section>
        </div>
      </>
    )
  }
  export async function getServerSideProps(context) {
    const id=context.params.id;
   
       const response = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/bloodBank/getBloodBank/'+id);
       const item = await response.data;
      
   return { props: { item } }
}
