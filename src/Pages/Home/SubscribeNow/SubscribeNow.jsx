import axios from "axios";
import Sectiontitle from "../SharedPage/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import Swal from "sweetalert2";

const SubscribeNow = () => {
    const axiosSecure=UseaxiosSecure()
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        axiosSecure.post('/Subscriber', data)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
    }
    return (
        <div className="w-1/2 mx-auto">
            <Sectiontitle heading='Join Us'></Sectiontitle>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Don't miss new posts!
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Subscribe to daisyUI newsletter to get updates on new posts.

                        You will only receive an email when a new post is published. No spam. No ads.
                    </p>
                    <div >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text"  {...register("name")} className="py-3 mb-3 px-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Your Name" />
                            <input type="email"  {...register("email", { required: true })} className="py-3 px-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Your Email" />
                            <button className="btn mt-2">Subscription</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeNow;