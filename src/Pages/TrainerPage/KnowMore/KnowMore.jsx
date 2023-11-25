import { Link, useLoaderData } from "react-router-dom";


const KnowMore = () => {
    const KnowMore=useLoaderData()
    const{availableTimeSlots}=KnowMore
    return (
        <div>
            <p>{availableTimeSlots}</p>
       <div className="mt-56">
       <Link  to='/beatrainer'>  <button className="btn btn-accent">Be_A_Trainer</button></Link>
       </div>
        </div>
    );
};

export default KnowMore;