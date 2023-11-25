import { useParams } from "react-router-dom";


const ReadMore = () => {
    const{id}=useParams()
    console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default ReadMore;