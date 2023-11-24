// /* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Sectiontitle from "../SharedPage/SectionTitle/SectionTitle";

import FeaturedCard from "./FeaturedCard";
import axios from "axios";



const FeaturedSection = () => {
  const[featured ,setfeatured]=useState([])
  const url=`http://localhost:5000/featured`
  useEffect( () =>{
    axios.get(url)
    .then(res =>{
        setfeatured(res.data)
    })
  },[url])
     
    return (
        <div>
            <Sectiontitle heading='Our Featured Items' ></Sectiontitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  items-center w-9/12 mx-auto">
             
    
                {
                featured.map(item => <FeaturedCard key={item.category} item={item}></FeaturedCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedSection;

