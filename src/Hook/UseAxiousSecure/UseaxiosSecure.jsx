import axios from "axios";

const axiosSecure=axios.create({
    baseURL:"http://localhost:5000"
})

const UseaxiosSecure = () => {
    return axiosSecure
    
};

export default UseaxiosSecure;