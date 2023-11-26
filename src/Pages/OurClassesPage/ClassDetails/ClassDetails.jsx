
import { Link, useLoaderData } from "react-router-dom";


const ClassDetails = () => {
    const classdetail=useLoaderData()
    console.log(classdetail);
    const{classname ,classdetails,time}=classdetail;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body lg:mt-36">
    <h2 className="card-title">{classname}</h2>
    <p>{classdetails}</p>
    <p>{time}</p>
    <div className="card-actions justify-end">
     <Link to='/trainer'> <button className="btn btn-primary">Trainer_page</button></Link>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default ClassDetails;