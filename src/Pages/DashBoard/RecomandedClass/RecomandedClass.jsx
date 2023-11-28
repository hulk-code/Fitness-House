import { useState } from "react";

import { useEffect } from "react";

import useAxiosPublic from "../../../Hook/UseAxiousPublic/UseAxiousPublic";
import Sectiontitle from "../../Home/SharedPage/SectionTitle/SectionTitle";
import RecoClass from "./RecoClass/RecoClass";


const RecomandedClass = () => {
    const [recommendedclass, setRecommendedClass] = useState([])
    const axiospublic=useAxiosPublic()
    useEffect(() => {
        axiospublic.get('/recommended')
            .then(res => {
                setRecommendedClass(res.data)
            })
    }, [])
    return (
        <div>
          <Sectiontitle heading='Recommended Classes'></Sectiontitle> 
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                recommendedclass.map( recoclass =><RecoClass key={recoclass._id} recoclass={recoclass}></RecoClass>)
            }
          </div>
        </div>
    );
};

export default RecomandedClass;