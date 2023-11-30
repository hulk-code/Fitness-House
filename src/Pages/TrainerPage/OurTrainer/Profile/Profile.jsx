import { FaFacebookSquare,FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = ({profile}) => {
    const { _id,name,profileImage,yearsOfExperience}=profile;
    console.log(profile);
    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl lg:mt-[300px]">
            <figure>
                    <img
                        src={profileImage}
                        alt="Profile"
                        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
     <div className="flex">
     <p className="text-lg font-medium">Experience:{yearsOfExperience} Year</p>
    <p className="flex text-4xl"> <FaFacebookSquare></FaFacebookSquare> <FaTwitterSquare></FaTwitterSquare></p>
     </div>
    <div className="card-actions justify-end">
     <Link to={`/knowmore/${_id}`}> <button className="btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded">
Know More
</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;