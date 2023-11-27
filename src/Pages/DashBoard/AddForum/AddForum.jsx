import { useForm } from "react-hook-form";

import { FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import Sectiontitle from "../../Home/SharedPage/SectionTitle/SectionTitle";





const AddForum = () => {
    const { register, handleSubmit, reset } = useForm();
   
    const axiosSecure = UseaxiosSecure();
   
    const onSubmit = async (data) => {
        console.log(data)
        
       
       
         
            const postInfo = {
                question: data.question,
                answer: data.answer,
                
                author:data.author,
             
            
            }
            // 
            const menuRes = await axiosSecure.post('/posts', postInfo);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the class.`,
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
                            <span className="label-text">Author Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="AuthorName"
                            {...register('author', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Question</span>
                        </label>
                        <input
                            type="text"
                           
                           
                            placeholder="Question"
                            {...register('question', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>


                    
                    
                  
                    <div >
                        
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Answer</span>
                        </label>
                        <textarea  {...register('answer')} className="textarea textarea-bordered h-24" placeholder="Answer"></textarea>
                    </div>

                    </div>
                  
                    <button className="btn">
                        Add forum<FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddForum;




