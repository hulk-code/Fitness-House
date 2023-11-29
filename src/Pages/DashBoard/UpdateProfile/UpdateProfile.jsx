import useAuth from "../../../Hook/UseAuth/UseAuth";
import { useState, useEffect } from "react";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user } = useAuth();
  const [allUser, setAllUser] = useState([]);
  const axiosSecure = UseaxiosSecure();
  const [inputValue, setInputValue] = useState('');

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

  const handleUserProfile = () => {
    // Update the user information with the new name
    const updatedUserData = { ...userData, name: inputValue };
  
    axiosSecure.put(`/users/${userData._id}`, { newName: inputValue })
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          // Display a success message using SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'User profile updated successfully!',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error updating user profile',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => {
        console.error(error);
        // Display an error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error updating user profile',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        readOnly
        defaultValue={user.email}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button
        className="btn btn-secondary"
        onClick={handleUserProfile}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateProfile;
