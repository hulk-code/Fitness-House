import { useState } from "react";

import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";

import { useEffect } from "react";
import useAuth from "../../../Hook/UseAuth/UseAuth";


const UserActivity = () => {
    const[activity, setActivity]=useState([])
    const axiosSecure=UseaxiosSecure()
    
   const{user}=useAuth()
    console.log(user);
   
    useEffect(() => {
        axiosSecure.get(`/bookings/${user?.email}`)
            .then(res => {
                setActivity(res.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);
    

    console.log(activity );
    return (
        <div>
            {
                activity?.map(user => <>
                 <p> Name: {user?.userName}</p>
        <p>
           Email: {user.userEmail}
        </p>
        <p>
            My Booked class:{user.slot}</p>
        <p>
            My paid plan:{user.plan}</p>
                </>)
            }
       
        </div>
    );
};

export default UserActivity;