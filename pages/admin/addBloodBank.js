import Dashlayout from "@/pages/components/dashLayout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddBloodBank() {
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
        formData.append('availableBloodDonar', data.availableBloodDonar);
        formData.append('quantity', data.quantity);
        formData.append('dateOfRecentCollection', data.dateOfRecentCollection);
        formData.append('expiredBloodBags', data.expiredBloodBags);
        console.log(data.dateOfRecentCollection);
        console.log(formData);
        try {
            const response = await axios.post("http://adv-webtech-hms-nestjs-production.up.railway.app/bloodBank/insertBloodBank",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          

            setSuccess('Blood Bank add successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Blood Bank add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <Dashlayout title = "Add Blood Bank"/>
              <h1>
                  Add Blood Bank
                                </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#">
            <div>
                      <label for="quantity" >Quantity</label>
                        <input type="text" id="quantity" placeholder="Quantity" required=""{...register('quantity', { required: true })}/>
                        {errors.quantity &&
                        <p id="outlined_error_help"><span >This is required</span></p>
                        }
                </div>
              <div>
                      <label for="availableBloodDonar" >Doner</label>
                        <input type="text" id="availableBloodDonar" placeholder="Available Blood Doner" required=""{...register('availableBloodDonar', { required: true })}/>
                        {errors.availableBloodDonar &&
                        <p id="outlined_error_help"><span >This is required</span></p>
                        }
                </div>
                
                <div>
                      <label for="dateOfRecentCollection" >Date Of Collection</label>
                        <input type="date" id="dateOfRecentCollection"{...register('dateOfRecentCollection', { required: true })}/>
                        {errors.dateOfRecentCollection &&
                        <p id="outlined_error_help"><span >Date is required</span></p>
                        }
                </div>
                <div>
                      <label for="expiredBloodBags" >Expired Blood Bags</label>
                        <input type="text" id="expiredBloodBags" placeholder="Bag Number" required=""{...register('expiredBloodBags', { required: true })}/>
                        {errors.expiredBloodBags &&
                        <p id="outlined_error_help"><span >This is required</span></p>
                        }
                </div> 
                
                
                    <button type="submit">Submit</button>
              </form>
      </>
    )
  }