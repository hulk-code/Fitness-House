import { useQuery } from "@tanstack/react-query";
import UseaxiosUser from "../UseAxiousPublic/UseaxiosUser";


const UseFeaturedData = () => {
    const axiosPublic=UseaxiosUser()
       
    const {data: Featured = [], isPending: loading, refetch} = useQuery({
        queryKey: ['featured'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/featured');
            return res.data;
        }
    })

   
       
        return [Featured ,loading ,refetch]
    
};

export default UseFeaturedData;