import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div>
            <div className="w-64  min-h-screen bg-orange-400">
                <ul className="menu p-4 text-lg font-bold ">
                    <li className="mb-3">
                        <NavLink to='/dashboard/Adminhome'>Admin Home</NavLink>
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
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;