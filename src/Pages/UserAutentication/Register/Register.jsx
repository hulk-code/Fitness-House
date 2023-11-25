

import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'aos/dist/aos.css'; 
import AOS from 'aos';






const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
  
    const [error, setError] = useState('');
    const [success, setSuccess] = useState("")
    const location=useLocation();
      const nevigate=useNavigate();
    useEffect(() => {
      AOS.init({
          duration: 1000, 
        });
    }, []);
  
  
  return (
    <div>
     
      <div className="hero min-h-screen bg-slate-300 md:bg-[url('https://i.ibb.co/2KLRVCT/regibg.png')]" data-aos="fade-up">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Here!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  ">
            <form className="card-body"  onSubmit={handleRegister}>
               
              <div className="md:flex gap-5 font-bold">
              <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="displayName" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
              </div>
              </div>

              <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  <p className='text-red-500'>  {error}</p>
                 
                </label>
              </div>
              </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className=" m-auto font-medium p-3 text-lg text-orange-400">have an account?<Link to='/login' className="text-green-500">Login</Link></p>
            
            <p className='text-green-500 mx-auto'> {success}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;