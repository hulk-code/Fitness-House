import { useState } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import { useEffect } from "react";


const AllPlan = () => {
    const[plans , setPlans]=useState([])
    const axiosSecure=UseaxiosSecure()
    useEffect(() => {
        axiosSecure.get('/bookings')
          .then(res => {
            setPlans(res.data)
          })
      }, []);
    return (
        <div>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Selected Plan</th>
      </tr>
    </thead>
    <tbody>
        {
            plans.map((plan ,index) =><tr key={plan._id}>
                <th>{index+1}</th>
                <td>{plan.userName}</td>
                <td>{plan.userEmail}</td>
                <td>{plan.plan}</td>
              </tr> )
        }
      {/* row 1 */}
      
    
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllPlan;