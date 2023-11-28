
// import useAuth from "../../../Hook/UseAuth/UseAuth";
// import { useState } from "react";

// import { useEffect } from "react";
// import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";


// const UpdateProfile = () => {
   
//     const{user}=useAuth;
//     const [allUser ,setAllUser] = useState([])
//     const axiosSecure=UseaxiosSecure()
//     useEffect(() => {
//         axiosSecure.get('/users')
//             .then(res => {
//                 setAllUser(res.data)
//                 // console.log(res.data);
//             })
//     }, [])
//     const userData=allUser.find(users => users.email===user?.email)
//     console.log(userData);
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default UpdateProfile;
import useAuth from "../../../Hook/UseAuth/UseAuth";
import { useState, useEffect } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import Swal from "sweetalert2";

const UpdateProfile = () => {
    const { user } = useAuth();
    const [allUser, setAllUser] = useState([]);
    const axiosSecure = UseaxiosSecure();
    const [inputValue, setInputValue] = useState('');
console.log(inputValue);
    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                setAllUser(res.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const userData = allUser.find(userData => userData.email === user?.email);

    console.log(userData);

    const handleUserProfile= userData =>{
        
       
      axiosSecure.patch(`/users/${userData._id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount >0){
              
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title:`${userData.name} admin created`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
      
    }

    return (
        <div>
           
           <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
            
            <input   type="text" name='name' defaultValue={user.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input readOnly defaultValue={user.email}  type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button  onClick={() => handleUserProfile(userData)}  />update
           
          
        </div>
    );
};

export default UpdateProfile;
