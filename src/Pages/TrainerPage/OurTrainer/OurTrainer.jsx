import { useEffect, useState } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import Profile from "./Profile/Profile";
import { Helmet } from "react-helmet-async";



const OurTrainer = () => {
    const axiousSecure=UseaxiosSecure()
    const[trainerProfile,setTrainerProfile]=useState([])
    console.log(trainerProfile);
    useEffect(() => {
        axiousSecure.get('/instructorprofile')
            .then(res => {
                setTrainerProfile(res.data)
            })
    }, [])
    return (
        <div>
        <Helmet>
        <title>Vitality Vault || Trainer</title>
      </Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-3">
          {
            trainerProfile.map(profile =><Profile key={profile._id} profile={profile}></Profile>)
          }
        </div>
        </div>
    );
};

export default OurTrainer;