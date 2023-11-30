import { useQuery } from "@tanstack/react-query";
import UseaxiosSecure from "../../../Hook/UseAxiousSecure/UseaxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { FcViewDetails } from "react-icons/fc";
import { useState } from "react";

const AppliedTrainer = () => {
  const axiosSecure = UseaxiosSecure();
  const [user, setUsers] = useState([]);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/beatrainer");
      return res.data;
    },
  });
  const handleMaketrainer = (user) => {
    axiosSecure.patch(`/beatrainer/trainer/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        setUsers((prevUsers) =>
        prevUsers.filter((prevUser) => prevUser._id !== user._id)
      );
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} trainer created`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/beatrainer/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="w-full mx-auto">
        <h2 className="text-3xl ">Total user:{users.length}</h2>

        <div>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr className="divide-x divide-gray-200 dark:divide-gray-700">
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Details
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          role
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button
                              className="btn"
                              onClick={() =>
                                document
                                  .getElementById("my_modal_5")
                                  .showModal()
                              }
                            >
                              <FcViewDetails />
                            </button>
                            <dialog
                              id="my_modal_5"
                              className="modal modal-bottom sm:modal-middle"
                            >
                              <div className="modal-box">
                                <h3 className="font-bold text-lg">
                                  {user.name}
                                </h3>
                                <p className="py-4">{user.email}</p>
                                <p className="py-4">{user.category}</p>
                                <div className="modal-action">
                                  <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                  </form>
                                </div>
                              </div>
                            </dialog>
                          </td>

                          <td>
                            {user.role === "trainer" ? (
                              "trainer"
                            ) : (
                              <button
                                onClick={() => handleMaketrainer(user)}
                                className="btn btn-ghost btn-xs text-2xl"
                              >
                                <FaUser></FaUser>
                              </button>
                            )}
                          </td>
                          <td>
                            <button
                              onClick={() => handleDeleteUser(user)}
                              className="btn btn-ghost btn-lg"
                            >
                              <FaTrashAlt className="text-red-600"></FaTrashAlt>
                              Reject{" "}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedTrainer;
