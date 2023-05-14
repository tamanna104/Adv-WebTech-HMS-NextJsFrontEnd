import Dashlayout from "@/pages/components/dashLayout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddHospital() {
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
        formData.append('address', data.address);
        formData.append('helpline', data.helpline);
        formData.append('email', data.email);
        formData.append('ambulanceNumber', data.ambulanceNumber);
        formData.append('admin', data.admin);
        formData.append('bloodBank', data.bloodBank);
        console.log(formData);
        try {
            const response = await axios.post("https://adv-webtech-hms-nestjs-production.up.railway.app/hospital/insertHospital",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          

            setSuccess('Hospital added successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Hospital add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <Dashlayout title = "Hospitals"/>
              <h1>
                  Add Hospital
                                </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#">
              <div>
                      <label for="name" >Name</label>
                        <input type="text" id="name" placeholder="name" required=""{...register('name', { required: true })}/>
                        {errors.name &&
                        <p id="outlined_error_help"><span >Name is required</span></p>
                        }
                </div>
                <div>
                      <label for="address" >Address</label>
                      <textarea id="address"  rows="4" placeholder="Full Adress here...." {...register('address', { required: true })} />
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
                        <input type="email" id="email" placeholder="name@company.com" required=""
                                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                                        />
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
                        <input type="text" id="ambulanceNumber" placeholder="ambulanceNumber" required=""{...register('ambulanceNumber', { required: true })}/>
                        {errors.ambulanceNumber &&
                        <p id="outlined_error_help"><span >Ambulance Number is required</span></p>
                        }
                </div>
                <div>
                      <label for="admin" >Admin</label>
                        <input type="text" id="admin" placeholder="admin" required=""{...register('admin', { required: true })}/>
                        {errors.admin &&
                        <p id="outlined_error_help"><span >admin is required</span></p>
                        }
                </div>
                <div>
                      <label for="bloodBank" >bloodBank No</label>
                        <input type="text" id="bloodBank" placeholder="bloodBank" required=""{...register('bloodBank', { required: true })}/>
                        {errors.bloodBank &&
                        <p id="outlined_error_help"><span >bloodBank no is required</span></p>
                        }
                </div>
                 
                
                          <button type="submit">Submit</button>
              </form>
      </>
    )
  }