import { Link } from "react-router-dom";


const PostDetails = ({ blog }) => {
    const { _id, title, newsContent } = blog;
    return (
        <div>
            <> <div className="space-y-5 md:space-y-8">
                <div className=" p-6">
                    <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>


                    <div>

                        {
                            newsContent.length > 200 ? <p className="text-lg text-gray-800">{newsContent.slice(0, 200)}<Link className="text-red-700" to={`/readmore/${_id}`}>Read More...</Link> </p>
                                : <p className="text-lg text-gray-800">{newsContent}</p>
                        }
                    </div>






                </div>

















            </div></>
        </div>
    );
};

export default PostDetails;