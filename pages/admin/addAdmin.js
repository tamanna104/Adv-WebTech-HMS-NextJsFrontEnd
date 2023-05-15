import Dashlayout from "@/pages/components/dashLayout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import Footer from "../components/footer"
import Link from "next/link"
import Image from "next/image"
export default function AddAdmin() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const validateFile = (value) => {
        const file = value[0];
        const allowedtypes = ["image/jpg", "image/png"];

        if (!allowedtypes.includes(file.type)){
            return false;
        }
        }

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('age', data.age);
        formData.append('gender', data.gender);
        formData.append('address', data.address);
        formData.append('email', data.email);
        formData.append('contactNo', data.contactNo);
        formData.append('password', data.password);
        formData.append('file', data.file[0]);
        console.log(formData);
        try {
            const response = await axios.post("https://adv-webtech-hms-nestjs-production.up.railway.app/admin/signup",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          

            setSuccess('Admin add successfully');
            router.push('/admin/viewAdmins');
            // reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Admin add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <Dashlayout title = "Admins"/>
      <div class="pt-0 sm:ml-68 p-4 mb-20">
        <section className="text-gray-600 body-font mx-auto w-96">
        
          <div class="flex flex-col justify-center px-auto mx-auto">
          
              <div class="w-full bg-teal-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

              <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-800 md:text-2xl dark:text-white">Add Admin User</h1>
             <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#">
              <div className="relative mb-4">
                      <label for="name" className="leading-7 text-mid text-gray-700" >Name</label>
                        <input type="text" id="name" placeholder="name" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""{...register('name', { required: true, pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/})}/>
                        {errors.name && (
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
                        <input type="text" id="age" placeholder="age" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""{...register('age', { required: true , min:20})}/>
                        {errors.age &&  (
                              <p>
                                  {errors.age.type === 'required'
                                      ?
                                      <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Age is required*</span></p>
  
                                      :
                                      <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Younger than 20 is not accepted*</span></p>
                                  }
                              </p>
                          )
                        }
                </div>
                <div className="relative mb-4">
                      <label for="password" className="leading-7 text-mid text-gray-700" >Password</label>
                        <input
                        type="password"
                        id="password" placeholder="••••••••" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""
                        {...register('password', { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/ })}
                        />
                        {errors.password && (
                        <p>
                            {errors.password.type === 'required'
                                ?
                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Password is required</span></p>
                                :
                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Minimum 6 characters, at least 1 letter, number and special character</span></p>

                            }
                        </p>
                    )}
                  </div>
                <div className="relative mb-4">
                      <label for="gender" className="leading-7 text-mid text-gray-700" >Gender</label>
                        <input type="text" id="gender" placeholder="gender" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""{...register('gender', { required: true, pattern: /^(?:Male|Female|Other)$/ })}/>
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
                    <textarea id="address"  rows="2" placeholder="Full Adress here...." className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register('address', { required: true })} />
                </div>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-mid text-gray-700" >Email</label>
                        <input type="email" id="email" placeholder="name@company.com" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""
                                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}/>
                        {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                ?
                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Email is required</span></p>

                                :
                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Invalid email address</span></p>
                            }
                        </p>
                    )}
                  </div>
                  <div className="relative mb-4">
                      <label for="contactNo" className="leading-7 text-mid text-gray-700" >Contact</label>
                        <input
                            type="text"
                            id="contactNo" placeholder="+880 1" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""
                            {...register('contactNo', { required: true, pattern:/^(?:\+88|88)?(01[3-9]\d{8})$/ })}/>
                            {errors.contactNo && (
                            <p>
                                {errors.contactNo.type === 'required'
                                        ?
                                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Conatct is required</span></p>
                                    :
                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Contact pattern must be in 01XXX NNNNNN</span></p>

                                    }
                            </p>
                    )}
                  </div>
                <div className="relative mb-4">
                   
                    <label for="file" className="leading-7 text-mid text-gray-700">Upload file</label>
                    <input type="file" id="file" 
                    {...register('file', { required: true, validate: validateFile })}
                    />
                    {errors.myfile && 
                    <p>
                    {errors.myfile.type === 'required'
                         ?
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">file is required</span></p>
                        :
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">invalid file</span></p>
                    }
                    </p>}      
                </div>
                <div class="flex justify-center">
                    <a onClick={() => router.back()} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mr-2 rounded">
                      Go back
                    </a>
                    <button type="submit" className="text-white bg-fuchsia-500 border-0 py-1 px-6 focus:outline-none hover:bg-fuchsia-800 rounded text-lg">Submit</button> 
                </div>
                          {/* <button type="submit">Submit</button> */}
            </form>
              </div>
            </div>
            </div>
        </section>
        </div>

      </>
    )
  }