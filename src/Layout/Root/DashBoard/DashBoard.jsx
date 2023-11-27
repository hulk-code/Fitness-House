import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    const isAdmin=true;
    const isTrainer=true
    return (
        <div className="flex">
            <div className="w-64  min-h-screen bg-orange-400">
                <ul className="menu p-4 text-lg font-bold ">
                    {
                        isAdmin?<>
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
                        <NavLink to='/dashboard/balance'>balance</NavLink>
                        </li>
                        </>
                        :
                        isTrainer?
                        <>
                        <li className="mb-3">
                        <NavLink to='/dashboard/trainer home'>Trainer Home</NavLink>
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
                        <NavLink to='/dashboard/balance'>balance</NavLink>
                        </li>
                        </>
                        :
                        <>
                        <li className="mb-3">
                        <NavLink to='/dashboard/userhome'>User Home</NavLink>
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