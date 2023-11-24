// /* eslint-disable react/prop-types */
import Sectiontitle from "../SharedPage/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
    const [cardData ,setFeatuedData]=useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data=>{
            setFeatuedData(data);
        })
      
    },[])
    return (
        <div>
            <Sectiontitle heading='Our Featured Items' ></Sectiontitle>
            <div className="grid grid-cols-3">
             
    
                {
                    cardData.map(item => <FeaturedCard key={item.category} item={item}></FeaturedCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedSection;

