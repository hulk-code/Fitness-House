


import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import './LoginPage.css'
import useAuth from '../../../Hook/UseAuth/UseAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    
   
    const { logIn } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

   

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
           <div className="hero min-h-screen " style={{ backgroundImage: 'url("https://i.ibb.co/hcNkC4Z/app-development-concept-with-flat-deisng-23-2147852845.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-content  ">
                    <div className="">
                        <h1 className="text-5xl font-bold text-orange-300">Login now!</h1>
                       
                    </div>
                    <div className="card  lg:w-full shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                           
                            <div className="form-control mt-6">
                               
                                <input  className="btn btn-primary text-md font-bold" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='px-6 text-slate-950 font-bold text-xl'><small>New Here? <Link to="/register">Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;