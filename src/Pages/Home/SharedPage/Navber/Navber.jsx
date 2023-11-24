import { NavLink } from "react-router-dom";

// Home page.
// 3. Gallery page.
// 4. Trainer Page.
// 5. Classes page.
// 6. Dashboard.
// 7. Community/Forums page.

const Navber = () => {
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/galery'> Gallery</NavLink></li>
        <li><NavLink to='/trainer'>Trainer</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li><NavLink to='/forums'>Forums</NavLink></li>
    </>
    return (
        <div>

            <div className="navbar fixed z-10 bg-opacity-30 lg:h-[100px] bg-black text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                   
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/7NXm26S/gym.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>

        </div>
    );
};

export default Navber;
