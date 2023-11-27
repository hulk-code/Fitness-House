
import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/UseAuth";
import UseaxiosSecure from "../UseAxiousSecure/UseaxiosSecure";


const UseAdmin = () => {
    const {user ,loading}=useAuth();
    const axiosScure=UseaxiosSecure()
    const{ data :isAdmin ,isLoading:adminLoading  }=useQuery({
        queryKey:[user?.email,"isAdmin"],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async ()=>{
            console.log('asking for user' ,user);
            const res=await axiosScure.get(`users/admin/${user?.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin ,adminLoading]
};

export default UseAdmin;
//