import { useState, useEffect } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";

const AllPlan = () => {
  const [plans, setPlans] = useState([]);
  const axiosSecure = UseaxiosSecure();

  useEffect(() => {
    axiosSecure.get("/bookings").then((res) => {
      setPlans(res.data);
    });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse">
        {/* head */}
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">User Name</th>
            <th className="border p-2">User Email</th>
            <th className="border p-2">Selected Plan</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={plan._id} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{plan.userName}</td>
              <td className="border p-2">{plan.userEmail}</td>
              <td className="border p-2">{plan.plan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlan;
