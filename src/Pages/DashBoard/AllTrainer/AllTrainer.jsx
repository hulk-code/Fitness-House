import { useEffect, useState } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import Sectiontitle from "../../Home/SharedPage/SectionTitle/SectionTitle";
import {   Link } from 'react-router-dom';


const AllTrainer = () => {
    const [profiles, setProfiles] = useState([])
    const axiosSecure = UseaxiosSecure()
  

    const calculateTotalPay = (profile) => {
        return profile.salary * profile.workingmonth;
    };
    
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
                                        profiles.map(profile => <tr key={profile._id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={profile.profileImage} />
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{profile.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{profile.workingmonth}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{profile.salary}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"> {calculateTotalPay(profile)}</td>

                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <Link to={`/payment/${profile._id}/${calculateTotalPay(profile)}`} className="btn btn-circle">
                Pay
              </Link>


                                            </td>
                                        </tr>)
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