import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth/UseAuth";


const PrivateRoute = ({children}) => {
     const {user ,loading}=useAuth()
     const location=useLocation();
     console.log(loading);
     
     if(loading){
        return <progress className="progress w-56"></progress>
     }
     console.log(user);
     if(user?.email){
        return children ;
        
    }

    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default PrivateRoute;