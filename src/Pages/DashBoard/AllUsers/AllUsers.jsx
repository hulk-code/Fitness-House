
import { useQuery } from "@tanstack/react-query";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";



const AllUsers = () => {
    const axiosSecure=UseaxiosSecure()
    // const {data : users=[]}=useQuery({
    //     queryKey:['users'],
    //     queryFn:async () =>{
    //         const res=await axiosSecure.get('/users');
    //         return res.data
    //     }
    // })
    const{data : users=[] ,refetch}=useQuery({
        queryKey:['users'],
        queryFn:async () =>{
            const res= await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleMakeUser=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount >0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:`${user.name} admin created`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
     }
    return (
        <div>
            <div className="w-full mx-auto">
                
                <h2 className="text-3xl ">Total user:{users.length}</h2>

                <div>
                <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr className="divide-x divide-gray-200 dark:divide-gray-700">
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">role</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {
                users.map(user =><tr key={user._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                    <td>
       { user.role ==='admin' ?'admin' :
       
       <button onClick={() => handleMakeUser(user)} className="btn btn-ghost btn-xs text-2xl"><FaUser></FaUser></button>}
        </td>
       
                  </tr> )
            }
            

            

           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
                    
                </div>
            </div>
        </div>
    );
};

export default AllUsers;