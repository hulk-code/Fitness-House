// import { NavLink, Outlet } from "react-router-dom";
// import UseAdmin from "../../../Hook/UseAdmin/UseAdmin";
// import UserTrainer from "../../../Hook/Usetrainer/UserTrainer";


// const DashBoard = () => {
//     const[isAdmin]=UseAdmin()
//     const[isTrainer]=UserTrainer()
    
//     return (
//         <div className="flex">
//             <div className="w-64  min-h-screen bg-orange-400">
//                 <ul className="menu p-4 text-lg font-bold ">
//                     {
//                         isAdmin? <>
//                         <li className="mb-3">
//                         <NavLink to='/dashboard/Adminhome'>Admin Home</NavLink>
//                         </li>
//                         <li className="mb-3">
//                         <NavLink to='/dashboard/allusers'>All_User</NavLink>
//                         </li>
//                     <li className="mb-3">
//                         <NavLink to='/dashboard/seesubscriber'>All Subscriber</NavLink>
//                         </li>
//                     <li className="mb-3">
//                         <NavLink to='/dashboard/alltrainer'>All Trainer</NavLink>
//                         </li>
//                     <li className="mb-3">
//                         <NavLink to='/dashboard/appliedtrainer'>Applied Trainer</NavLink>
//                         </li>
//                     <li className="mb-3">
//                         <NavLink to='/dashboard/addforum'>Add Forum</NavLink>
//                         </li>
//                     <li className="mb-3">
//                         <NavLink to='/dashboard/allPlan'>All Plan</NavLink>
//                         </li>
//                     <li className="mb-3">
//                         <NavLink to='/dashboard/balance'>balance</NavLink>
//                         </li>
//                         </>
//                         :
//                         isTrainer ?<>
//                         <li className="mb-3">
//                         <NavLink to='/dashboard/trainerhome'>Trainer Home</NavLink>
//                         </li>
//                         <li className="mb-3">
//                         <NavLink to='/dashboard/addforum'>Add Forum</NavLink>
//                         </li>
//                         </>
//                         :
//                         <>
//                         <li className="mb-3">
//                         <NavLink to='/dashboard/userhome'>User Home</NavLink>
//                         </li>
//                         <li className="mb-3">
//                         <NavLink to='/dashboard/activity'>Daily Activity</NavLink>
//                         </li>
//                         <li className="mb-3">
//                         <NavLink to='/dashboard/updateprofile'>Update Profile</NavLink>
//                         </li>
//                         <li className="mb-3">
//                         <NavLink to='/dashboard/Recommendedclasses'>Recommended Classes</NavLink>
//                         </li>
                   
//                         </>
//                     }

//                         <div className="divider"></div>
//                         <li className="mb-3">
//                         <NavLink to='/'>Home</NavLink>
//                         </li>
//                 </ul>

//             </div>
//             <div className="flex-1">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default DashBoard;
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../../Hook/UseAdmin/UseAdmin";
import UserTrainer from "../../../Hook/Usetrainer/UserTrainer";
import "./Dashboard.css"; // Import your custom styles
import { Helmet } from "react-helmet-async";


const DashBoard = () => {
    const [isAdmin] = UseAdmin();
    const [isTrainer] = UserTrainer();

    return (
        <div className="flex">
            <Helmet>
        <title>Vitality Vault || DashBoard</title>
      </Helmet>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-lg font-bold">
                    {isAdmin ? (
                        <>
                            <li className="menu-item">
                                <NavLink to="/dashboard/Adminhome" className="menu-link">Admin Home</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/allusers" className="menu-link">All Users</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/seesubscriber" className="menu-link">All Subscribers</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/alltrainer" className="menu-link">All Trainers</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/appliedtrainer" className="menu-link">Applied Trainers</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/addforum" className="menu-link">Add Forum</NavLink>
                            </li>
                            {/* <li className="menu-item">
                                <NavLink to="/dashboard/allPlan" className="menu-link">All Plans</NavLink>
                            </li> */}
                            <li className="menu-item">
                                <NavLink to="/dashboard/balance" className="menu-link">Balance</NavLink>
                            </li>
                        </>
                    ) : isTrainer ? (
                        <>
                            <li className="menu-item">
                                <NavLink to="/dashboard/trainerhome" className="menu-link">Trainer Home</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/addforum" className="menu-link">Add Forum</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/allPlan" className="menu-link">All Plans</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="menu-item">
                                <NavLink to="/dashboard/userhome" className="menu-link">User Home</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/activity" className="menu-link">Daily Activity</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/updateprofile" className="menu-link">Update Profile</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/dashboard/Recommendedclasses" className="menu-link">Recommended Classes</NavLink>
                            </li>
                        </>
                    )}

                    <li className="divider"></li>
                    <li className="menu-item">
                        <NavLink to="/" className="menu-link">Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;
