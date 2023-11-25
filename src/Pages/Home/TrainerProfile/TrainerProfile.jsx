import { useEffect, useState } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import Sectiontitle from "../SharedPage/SectionTitle/SectionTitle";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const TrainerProfile = () => {
    const [profiles, setProfiles] = useState([])
    const axiosSecure=UseaxiosSecure()
    useEffect(() => {
        axiosSecure.get('/profile')
            .then(res => {
                setProfiles(res.data)
            })
    }, [])
    useEffect(() => {
        AOS.init({
            duration: 1000, 
          });
      }, []);
    return (
        <>
        <Sectiontitle heading='Trainers Profile'></Sectiontitle>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-10"  >
           {
            profiles.map(profile =><>
            <div className="card w-9/12 mx-auto  bg-base-100 shadow-xl h-4/6 "  data-aos="flip-up">
  <figure><img  src={profile.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{profile.name}</h2>
    <h1>{profile.achievement}</h1>
    <h1>{profile.expertise}</h1>
    
  </div>
</div>
            </>)
           }
        </div></>
    );
};

export default TrainerProfile;