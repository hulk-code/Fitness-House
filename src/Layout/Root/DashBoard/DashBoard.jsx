import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../../Hook/UseAdmin/UseAdmin";
import UserTrainer from "../../../Hook/Usetrainer/UserTrainer";


const DashBoard = () => {
    const[isAdmin]=UseAdmin()
    const[isTrainer]=UserTrainer()
    
    return (
        <div className="flex">
            <div className="w-64  min-h-screen bg-orange-400">
                <ul className="menu p-4 text-lg font-bold ">
                    {
                        isAdmin? <>
                        <li className="mb-3">
                        <NavLink to='/dashboard/Adminhome'>Admin Home</NavLink>
                        </li>
                        <li className="mb-3">
                        <NavLink to='/dashboard/allusers'>All_User</NavLink>
                        </li>
                    <li className="mb-3">
                        <NavLink to='/dashboard/seesubscriber'>All Subscriber</NavLink>
                        </li>
                    <li className="mb-3">
                        <NavLink to='/dashboard/alltrainer'>All Trainer</NavLink>
                        </li>
                    <li className="mb-3">
                        <NavLink to='/dashboard/appliedtrainer'>Applied Trainer</NavLink>
                        </li>
                    <li className="mb-3">
                        <NavLink to='/dashboard/addforum'>Add Forum</NavLink>
                        </li>
                    <li className="mb-3">
                        <NavLink to='/dashboard/allPlan'>All Plan</NavLink>
                        </li>
                    <li className="mb-3">
                        <NavLink to='/dashboard/balance'>balance</NavLink>
                        </li>
                        </>
                        :
                        isTrainer ?<>
                        <li className="mb-3">
                        <NavLink to='/dashboard/trainerhome'>Trainer Home</NavLink>
                        </li>
                        <li className="mb-3">
                        <NavLink to='/dashboard/addforum'>Add Forum</NavLink>
                        </li>
                        </>
                        :
                        <>
                        <li className="mb-3">
                        <NavLink to='/dashboard/userhome'>User Home</NavLink>
                        </li>
                        <li className="mb-3">
                        <NavLink to='/dashboard/activity'>Daily Activity</NavLink>
                        </li>
                        <li className="mb-3">
                        <NavLink to='/dashboard/updateprofile'>Update Profile</NavLink>
                        </li>
                        <li className="mb-3">
                        <NavLink to='/dashboard/Recommendedclasses'>Recommended Classes</NavLink>
                        </li>
                   
                        </>
                    }

                        <div className="divider"></div>
                        <li className="mb-3">
                        <NavLink to='/'>Home</NavLink>
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