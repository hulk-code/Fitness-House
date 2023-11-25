import { FaFacebookSquare,FaTwitterSquare } from "react-icons/fa";

const Profile = ({profile}) => {
    const { _id,name,profileImage,yearsOfExperience,socialIcons,availableTimeSlots}=profile;
    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl lg:mt-[300px]">
  <figure><img className="h-[300px]" src={profileImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
     <div className="flex">
     <p className="text-lg font-medium">Experience:{yearsOfExperience} Year</p>
    <p className="flex text-4xl"> <FaFacebookSquare></FaFacebookSquare> <FaTwitterSquare></FaTwitterSquare></p>
     </div>
    <div className="card-actions justify-end">
      <button onClick={`/knowmore/${_id}`} className="btn btn-primary">Know More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;