import Dashlayout from "@/pages/components/dashLayout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import Image from "next/image"
export default function EditHospital({item}) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
          name: item.name,
          address: item.address,
          helpline: item.helpline,
          email: item.email,
          ambulanceNumber: item.ambulanceNumber,
          //password: ""
        }
      });
        
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log("data",data)
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('helpline', data.helpline);
        formData.append('email', data.email);
        formData.append('ambulanceNumber', data.ambulanceNumber);
        // formData.append('password', data.password);
        console.log(formData);
        try {
          const response = await axios.put("http://localhost:3000/hospital/updateHospital/"+item.id, formData);
          

            setSuccess('Hospital edited successfully');
            //reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Hospital edit unsuccessfull ' + error.response.data.message);
        }
    };

    
    return (
      <>
      
      <Dashlayout title = "Edit Hospital Info"/>
              <h1>
              Edit Hospital Info
                                </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#">
              <div>
                      <label for="name" >Name</label>
                        <input type="text" {...register('name', { required: true })}/>
                        {errors.name &&
                        <p id="outlined_error_help"><span >Name is required</span></p>
                        }
                </div>
                <div>
                 
                 <label for="address" >Address</label>
                 <textarea id="address" rows="4" {...register('address', { required: true })} />
                </div>
                <div>
                      <label for="helpline" >Helpline</label>
                        <input
                        type="text"
                        id="helpline" placeholder="helpline" required=""
                        {...register('helpline', { required: true, minLength: 3, maxLength: 3 })}
                        />
                        {errors.helpline && (
                        <p>
                            {errors.helpline.type === 'required'
                                ?
                                <p id="outlined_error_help" ><span>helpline is required</span></p>
                                :
                                <p id="outlined_error_help" ><span>Invalid helpline pattern. should be 3 degits</span></p>
                             }
                        </p>
                    )}
                </div>
                <div>
                    <label for="email" >Your email</label>
                        <input type="email" id="email" {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}/>
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
                  <div>
                      <label for="ambulanceNumber" >Ambulance Number</label>
                        <input type="text" id="ambulanceNumber" {...register('ambulanceNumber', { required: true })}/>
                        {errors.ambulanceNumber &&
                        <p id="outlined_error_help"><span >Ambulance Number is required</span></p>
                        }
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
               
                          <button type="submit">Submit</button>&nbsp;&nbsp;&nbsp;
                          <button type="button" onClick={() => router.back()}>
                           go back
                            </button>
              </form>
      </>
    )
  }
  export async function getServerSideProps(context) {
    const id=context.params.id;
   
       const response = await axios.get('http://localhost:3000/hospital/getHospital/'+id);
       const item = await response.data;
      
   return { props: { item } }
}
