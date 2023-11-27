import { useEffect, useState } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";


const SeeAllSubscriber = () => {
    const [subscribers, setSubsCriber] = useState([])
    const axiosSecure=UseaxiosSecure()
    useEffect(() => {
        axiosSecure.get('/subscriber')
            .then(res => {
                setSubsCriber(res.data)
            })
    }, [])
    return (
        <div>
            <p className="text-3xl font-bold">All_Subscriber{subscribers.length}</p>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        
      </tr>
    </thead>
    <tbody className="text-xl font-bold">
      
        {
            subscribers.map((subscriber ,index) =>  <tr key={subscriber._id}>
                <th>{index+1}</th>
                <td>{subscriber.name}</td>
                <td>{subscriber.email}</td>
               
              </tr>)
        }
    
     
     
      
      
    </tbody>
  </table>
</div>
             
        </div>
    );
};

export default SeeAllSubscriber;