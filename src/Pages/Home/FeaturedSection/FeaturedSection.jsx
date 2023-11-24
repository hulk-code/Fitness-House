// /* eslint-disable react/prop-types */
import Sectiontitle from "../SharedPage/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const FeaturedSection = () => {
    const [cardData ,setFeatuedData]=useState([])
     useEffect( () =>{
       
      
    },[])
    return (
        <div>
            <Sectiontitle heading='Our Featured Items' ></Sectiontitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  items-center w-9/12 mx-auto">
             
    
                {
                    cardData.map(item => <FeaturedCard key={item.category} item={item}></FeaturedCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedSection;

