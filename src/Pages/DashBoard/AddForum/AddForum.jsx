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
           <Sectiontitle heading='Add Post'></Sectiontitle>
           <div className="w-9/12 mx-auto shadow-lg bg-slate-400 p-8">
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-6">
      <label className="block text-white text-sm font-bold mb-2">
        Author Name
      </label>
      <input
        type="text"
        placeholder="Author Name"
        {...register('author', { required: true })}
        required
        className="input input-bordered w-full"
      />
    </div>
    <div className="mb-6">
      <label className="block text-white text-sm font-bold mb-2">
        Question
      </label>
      <input
        type="text"
        placeholder="Question"
        {...register('question', { required: true })}
        required
        className="input input-bordered w-full"
      />
    </div>
    <div className="mb-6">
      <label className="block text-white text-sm font-bold mb-2">
        Answer
      </label>
      <textarea
        {...register('answer')}
        className="textarea textarea-bordered h-24 w-full"
        placeholder="Answer"
      ></textarea>
    </div>
    <button className="btn bg-blue-500 text-white">
      Add Forum
      <FaUtensils className="inline-block ml-2" />
    </button>
  </form>
</div>
        </div>
    );
};

export default AddForum;




