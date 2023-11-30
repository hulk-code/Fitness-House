import { useState } from "react";

import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import './UserActivity.css'
import { useEffect } from "react";
import useAuth from "../../../Hook/UseAuth/UseAuth";

const UserActivity = () => {
  const [activity, setActivity] = useState([]);
  const axiosSecure = UseaxiosSecure();

  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    axiosSecure
      .get(`/bookings/${user?.email}`)
      .then((res) => {
        setActivity(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  console.log(activity);
  return (
    <div className="flex justify-center">
      {activity?.map((user) => (
        <>
          <div className="user-card ">
      <div className="card-content">
        <p className="card-text ">Name: {user?.userName}</p>
        <p className="card-text">Email: {user.userEmail}</p>
        <p className="card-text">My Booked class: {user.slot}</p>
        <p className="card-text">My paid plan: {user.plan}</p>
      </div>
    </div>
        </>
      ))}
    </div>
  );
};

export default UserActivity;
