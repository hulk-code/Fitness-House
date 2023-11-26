import { useForm } from "react-hook-form";

import { FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import Sectiontitle from "../../Home/SharedPage/SectionTitle/SectionTitle";





const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
   
    const axiosSecure = UseaxiosSecure();
   
    const onSubmit = async (data) => {
        console.log(data)
        
       
       
         
            const userInfo = {
                classname: data.classname,
                classdetails: data.email,
                
                time: parseFloat(data.time),
             
            
            }
            // 
            const menuRes = await axiosSecure.post('/routine', userInfo);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        
       
    };

    return (
        <div>
           <Sectiontitle></Sectiontitle>
           <div className="w-9/12 mx-auto shadow-lg bg-slate-400">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="ClassName"
                            {...register('classname', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Class Details</span>
                        </label>
                        <input
                            type="text"
                           
                           
                            placeholder="Details"
                            {...register('details', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>


                    
                    
                  
                    <div >
                        
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Time"
                                {...register('time', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        
                       
                    </div>
                  
                    <button className="btn">
                        Add Class<FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;


