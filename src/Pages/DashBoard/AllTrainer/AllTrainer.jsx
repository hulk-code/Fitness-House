import { useEffect, useState } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";

import AllTrainerCard from "./AllTrainerCard/AllTrainerCard";
import Sectiontitle from "../../Home/SharedPage/SectionTitle/SectionTitle";


const AllTrainer = () => {
    const [profiles, setProfiles] = useState([])
    const axiosSecure = UseaxiosSecure()
  

    // const calculateTotalPay = (profile) => {
    //     return profile.salary * profile.workingmonth;
    // };
    
    useEffect(() => {
        axiosSecure.get('/instructorprofile')
            .then(res => {
                setProfiles(res.data)
            })
    }, [])
    
    return (
        <div>

            <Sectiontitle heading='Pay Salary'></Sectiontitle>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"></th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Working Month</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Salary</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Total-Pay</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        profiles.map(profile => <AllTrainerCard key={profile._id} profile={profile}></AllTrainerCard>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTrainer;