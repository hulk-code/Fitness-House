import { useEffect, useState } from "react";
import UseaxiosSecure from "../../Hook/UseAxiousSecure/UseaxiosSecure";
import ClassTable from "./ClassTable/ClassTable";
import { Link } from "react-router-dom";
import UseAdmin from "../../Hook/UseAdmin/UseAdmin";
import UserTrainer from "../../Hook/Usetrainer/UserTrainer";
import { Helmet } from "react-helmet-async";



const OurClasses = () => {
    const [routine, setRoutine] = useState([])
    const axiosSecure = UseaxiosSecure()
    const[isAdmin]=UseAdmin()
    const[isTrainer]=UserTrainer()

    useEffect(() => {
        axiosSecure.get('/routine')
            .then(res => {
                setRoutine(res.data)
            })
    }, [])
    return (
        <div>
            <Helmet>
        <title>Vitality Vault || Classes</title>
      </Helmet>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */} 
                   
                    <tbody>
                        <div className="grid grid-cols-4 mt-36">
                            {
                                routine.map(classtable => <ClassTable key={classtable._id} classtable={classtable}></ClassTable>)
                            }
                        </div>

                    </tbody>
                </table>
            </div>
            {(isAdmin || isTrainer )&& (
                <Link to='/addclass'>
                    <button className="btn btn-outline btn-success w-9/12">add_class</button>
                </Link>
            )}
        </div>
    );
};

export default OurClasses;