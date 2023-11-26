import { Link } from "react-router-dom";


const ClassTable = ({classtable}) => {
    const{_id,classname}=classtable;
    return (

    
        
        <tr>
           
        
         
        <Link to={`/classdetails/${_id}`}><th className="shadow-lg border p-3 "> <button className="btn btn-outline btn-warning">{classname}</button></th></Link>
       
      </tr>
    
        
    );
};

export default ClassTable;