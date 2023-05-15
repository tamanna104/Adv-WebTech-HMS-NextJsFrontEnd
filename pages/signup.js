import Mylayout from "./components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import Footer from "./components/footer";
import Link from "next/link"
import Image from "next/image"
export default function SignUp() {
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
          

            setSuccess('signed up successfully');
            router.push('/signin');

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('sign up unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <Mylayout title = "Signup"/>
      <div class="py-40 sm:ml-68 p-4 mb-20">
      <section className="text-gray-600 body-font mx-auto w-96">
      
       <div class="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
      
        <div class="w-full bg-teal-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-800 md:text-2xl dark:text-white">
                    Sign Up
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#">

              <div className="relative mb-4">
                      <label for="name" className="leading-7 text-mid text-gray-700" >Name</label>
                        <input type="text" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="name" placeholder="name" required=""{...register('name', { required: true, pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/})}/>
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
                      <label for="age" class="leading-7 text-mid text-gray-700"  >Age</label>
                        <input type="text" id="age" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="age" required=""{...register('age', { required: true, min:20 })}/>
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
                      <label for="password"class="leading-7 text-mid text-gray-700" >Password</label>
                        <input
                        type="password"
                        id="password" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="••••••••" required=""
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
                      <label for="gender" >Gender</label>
                        <input type="text" id="gender" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="gender" required=""{...register('gender', { required: true, pattern: /^(?:Male|Female|Other)$/ })}/>
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
                 
                    <label for="address" >Address</label>
                    <textarea id="address"  rows="2" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Full Adress here...." {...register('address', { required: true })} />
                </div>
                <div className="relative mb-4">
                    <label for="email" >Your email</label>
                        <input type="email" id="email" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="name@company.com" required=""
                                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} />
                        {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                ?
                                <p id="outlined_error_help" ><span class="font-medium">Email is required</span></p>

                                :
                                <p id="outlined_error_help" ><span class="font-medium">Invalid email address</span></p>
                            }
                        </p>
                    )}
                  </div>
                  <div className="relative mb-4">
                      <label for="contactNo" >Contact</label>
                        <input
                        type="text"
                        id="contactNo" class="w-full bg-slate-100 rounded border border-gray-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Contact" required=""
                        {...register('contactNo', { required: true, pattern:/^(?:\+88|88)?(01[3-9]\d{8})$/ })}/>
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
                  

                  
                <div className="relative mb-4">
                   
                    <label for="file" >Upload file</label>
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
                </div>
                          <button type="submit" className="text-white bg-fuchsia-500 border-0 py-1 px-6 focus:outline-none hover:bg-fuchsia-800 rounded text-lg" >Submit</button>
              </form>
              <p id="filled_success_help"><span class="font-medium" > {success}</span></p>

                </div>
            </div>
        </div>
      
            


        </section>
        

      </div>
      <Footer/>
      </>
    )
  }