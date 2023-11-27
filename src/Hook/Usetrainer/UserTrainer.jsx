import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/UseAuth";
import UseaxiosSecure from "../UseAxiousSecure/UseaxiosSecure";


const UserTrainer = () => {
    const {user ,loading}=useAuth();
    const axiosScure=UseaxiosSecure()
    const{ data :isTrainer ,isLoading:trainerLoading  }=useQuery({
        queryKey:[user?.email,"isTrainer"],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async ()=>{
            console.log('asking for user' ,user);
            const res=await axiosScure.get(`/beatrainer/trainer/${user?.email}`)
            console.log(res.data);
            return res.data?.trainer;
        }
    })
    return [isTrainer ,trainerLoading]
};

export default UserTrainer ;

