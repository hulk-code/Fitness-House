import { useEffect, useState } from "react";
import UseaxiosSecure from "../../Hook/UseAxiousSecure/UseaxiosSecure";
import ClassTable from "./ClassTable/ClassTable";
import { Link } from "react-router-dom";



const OurClasses = () => {
    const [routine, setRoutine] = useState([])
    const axiosSecure = UseaxiosSecure()
    useEffect(() => {
        axiosSecure.get('/routine')
            .then(res => {
                setRoutine(res.data)
            })
    }, [])
    return (
        <div>
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
          <Link to='/addclass'>  <button className="btn btn-outline btn-success w-9/12">add_class</button></Link>
        </div>
    );
};

export default OurClasses;