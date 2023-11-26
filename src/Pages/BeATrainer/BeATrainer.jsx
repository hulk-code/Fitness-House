import { useForm } from "react-hook-form";

import { FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/UseAxiousPublic/UseAxiousPublic";
import UseaxiosSecure from "../../Hook/UseAxiousSecure/UseaxiosSecure";
import Sectiontitle from "../Home/SharedPage/SectionTitle/SectionTitle";
import useAuth from "../../Hook/UseAuth/UseAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeATrainer = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = UseaxiosSecure();
    const {user}=useAuth();
    const onSubmit = async (data) => {
        console.log(data)
        
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
         
            const userInfo = {
                name: data.name,
                email: data.email,
                category: data.category,
                age: parseFloat(data.age),
                weelslot: parseFloat(data.week),
                dayslot: parseFloat(data.day),
               
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/beatrainer', userInfo);
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
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div>
           <Sectiontitle></Sectiontitle>
           <div className="w-9/12 mx-auto shadow-lg bg-slate-400">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Full Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            readOnly
                            defaultValue={user?.email}
                            placeholder="Recipe Name"
                            {...register('email', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>


                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select  defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="weightLosstrainer">Weight Loss Trainer</option>
                                <option value="Fitnesstrainer">Cardiovascular Fitness Trainer</option>
                                <option value="bodybildertrainer">Bodybuilding Traine</option>
                                <option value="funcionaltrainer">Functional Fitness Trainer</option>
                                <option value="nutritiontrainer">Nutrition and Wellness Coach</option>
                            </select>
                        </div>

                        {/* age */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input
                                type="number"
                                placeholder="age"
                                {...register('age', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="flex gap-6">
                        {/* time week */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Week</span>
                            </label>
                            <input
                                type="number"
                                placeholder="week"
                                {...register('week', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        {/*timme day */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Day</span>
                            </label>
                            <input
                                type="number"
                                placeholder="day"
                                {...register('day', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* details */}
                    <div className="flex gap-6">
                        {/* time week */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Experience</span>
                            </label>
                            <input
                                type="number"
                                placeholder="experience"
                                {...register('experience', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        
                       
                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BeATrainer;

