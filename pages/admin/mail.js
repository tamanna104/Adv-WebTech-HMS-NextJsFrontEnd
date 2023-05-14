import Dashlayout from "@/pages/components/dashLayout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function Mail() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('subject', data.subject);
        formData.append('text', data.text);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/admin/sendemail",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          

            setSuccess('Mail sent successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Mail sent unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <Dashlayout title = "Mail"/>
      <div class="p-4 ">
          <section className="text-gray-600 body-font mx-auto w-96">
              <div className="bg-teal-300 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
                <h1 className="text-blue-800 text-xl font-medium title-font mb-8" >Mail</h1>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#">
                    <div className="relative mb-4">
                            <label for="email" className="leading-7 text-mid text-gray-600" >Email: </label>
                                <input type="email" id="email" placeholder="name@company.com" className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""{...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}/>
                                {errors.email &&
                                (
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
                            <label for="subject" className="leading-7 text-mid text-gray-600" >Subject: </label>
                            <textarea id="subject"  rows="1" placeholder="Subject...." className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register('subject', { required: true })} />
                                {errors.subject &&
                                <p id="outlined_error_help"  class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Please Add Subject</span></p>
                                }
                    </div>
                    <div className="relative mb-4">
                            <label for="text" className="leading-7 text-mid text-gray-600" >Body: </label>
                            <textarea id="text"  rows="4" placeholder="write your mail here.." className="w-full bg-slate-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register('text', { required: true })} />
                                {errors.text &&
                                <p id="outlined_error_help"  class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Empty body</span></p>
                                }
                    </div>
                        
                            <button type="submit"className="text-white bg-fuchsia-500 border-0 py-1 px-6 focus:outline-none hover:bg-fuchsia-800 rounded text-lg">Send</button>
                </form>
                <p id="filled_success_help" class="mt-2 text-s text-blue-700 dark:text-green-400"><span> {success}</span></p>
                </div>
            </section>
            </div>

      </>
    )
  }