import Dashlayout from "@/pages/components/dashLayout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import Image from "next/image"
import Footer from "@/pages/components/footer";
export default function EditAdmin({item}) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
          name: item.name,
          age: item.age,
          gender: item.gender,
          address: item.address,
          email: item.email,
          contactNo: item.contactNo,
          //password: ""
        }
      });
    const validateFile = (value) => {
        const file = value[0];
        const allowedtypes = ["image/jpg", "image/png"];

        if (!allowedtypes.includes(file.type)){
            return false;
        }
        }
        
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log("data",data)
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('age', data.age);
        formData.append('gender', data.gender);
        formData.append('address', data.address);
        formData.append('email', data.email);
        formData.append('contactNo', data.contactNo);
        // formData.append('password', data.password);
        console.log(formData);
        try {
          const response = await axios.put("http://adv-webtech-hms-nestjs-production.up.railway.app/admin/updateAdmin/"+item.id, formData);
          
            setSuccess('Admin edited successfully');
            //reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Admin edit unsuccessfull ' + error.response.data.message);
        }
    };

    
    return (
      <>
      
      <Dashlayout title = "Edit Admin Info"/>
      <div class="pt-0 sm:ml-68">
        <section className="text-gray-600 body-font mx-auto w-96">
        
          <div class="flex flex-col justify-center px-auto mx-auto">
          
              <div class="w-full bg-teal-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                  <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-800 md:text-2xl dark:text-white"> Edit Admin Info</h1>
          
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#">
                  <div className="relative mb-4">
                          <label for="name" className="leading-7 text-mid text-gray-700" >Name</label>
                            <input type="text" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register('name', { required: true,  pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/ })}/>
                            {errors.name &&
                            (
                              <p>
                                  {errors.name.type === 'required'
                                      ?
                                      <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Name is required*</span></p>
  
                                      :
                                      <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">username must contain a number*</span></p>
                                  }
                              </p>
                              )
                            }
                    </div>
                    <div className="relative mb-4">
                          <label for="age" className="leading-7 text-mid text-gray-700" >Age</label>
                            <input type="text" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="age" {...register('age', { required: true, min:20 })}/>
                            {errors.age &&
                             (
                              <p>
                                  {errors.age.type === 'required'
                                      ?
                                      <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Age is required*</span></p>
  
                                      :
                                      <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Younger than 20 is not accepted*</span></p>
                                  }
                              </p>
                          )}
                    </div>
                    <div className="relative mb-4">
                          <label for="gender" className="leading-7 text-mid text-gray-700" >Gender</label>
                            <input type="text" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="gender" {...register('gender', { required: true , pattern: /^(?:Male|Female|Other)$/})}/>
                            {errors.gender &&
                             (
                              <p>
                                  {errors.gender.type === 'required'
                                      ?
                                      <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Gender is required*</span></p>
  
                                      :
                                      <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Male/Female/Other*</span></p>
                                  }
                              </p>
                          )}
                    </div>
                    <div className="relative mb-4">
                    
                        <label for="address" className="leading-7 text-mid text-gray-700" >Address</label>
                        <textarea id="address" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" rows="2" {...register('address', { required: true })} />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-mid text-gray-700" >Email</label>
                            <input type="email" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="email" {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}/>
                             {errors.email && (
                            <p>
                                {errors.email.type === 'required'
                                    ?
                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Email is required*</span></p>

                                    :
                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Invalid email address*</span></p>
                                }
                            </p>
                        )}
                      </div>
                      <div className="relative mb-4">
                          <label for="contactNo" className="leading-7 text-mid text-gray-700" >Contact</label>
                            <input
                            type="text" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="contactNo" {...register('contactNo', { required: true, pattern:/^(?:\+88|88)?(01[3-9]\d{8})$/ })}
                            />
                            {errors.contactNo && (
                            <p>
                                {errors.contactNo.type === 'required'
                                  ?
                                  <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">conatct is required*</span></p>
                                  :
                                  <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Contact pattern must be in 01XXX NNNNNN*</span></p>

                                }
                            </p>
                        )}
                      </div>
                    

                      
                    {/* <div>
                      
                        <label for="file">Upload file</label>
                        <input type="file" id="file"
                        {...register('file', { required: true, validate: validateFile })}
                        />
                        {errors.myfile && 
                                            <p>
                                            {errors.myfile.type === 'required'
                                                                            ?
                        <p id="outlined_error_help" ><span>file is required</span></p>
                                                                            :
                                                                            
                        <p id="outlined_error_help" ><span>invalid file</span></p>
                                }
                                        </p>}      
                    </div> */}
               
                  {/* <button type="submit" className="text-white bg-fuchsia-500 border-0 py-1 px-6 focus:outline-none hover:bg-fuchsia-800 rounded text-lg">Submit</button> */}
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
        <Footer />
              
      </>
    )
  }
  export async function getServerSideProps(context) {
    const id=context.params.id;
   
       const response = await axios.get('http://adv-webtech-hms-nestjs-production.up.railway.app/admin/getAdmin/'+id);
       const item = await response.data;
      
   return { props: { item } }
}
