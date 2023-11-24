import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "../ClassCard/ClassCard";
import Sectiontitle from "../Home/SharedPage/SectionTitle/SectionTitle";


const Classes = () => {
    const[classes ,setClasses]=useState([])
    const url=`http://localhost:5000/classes`
    useEffect( () =>{
      axios.get(url)
      .then(res =>{
          setClasses(res.data)
      })
    },[url])
    return (
       
        <div className="bg-slate-300 py-5">
          
           <Sectiontitle  heading="Our Classes"></Sectiontitle>
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-9/12 mx-auto  ">
            {
                classes.map(item => <ClassCard key={item._id} item={item}></ClassCard>)
                }
        </div>
        </div>
    );
};

export default Classes;