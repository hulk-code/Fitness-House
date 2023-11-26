



// import './Product.css';



import  { useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import useAuth from '../../Hook/UseAuth/UseAuth';

const ForumPost = ({ product }) => {
    const {user}=useAuth()
  const { author, question, answer } = product;

  // State variables for likes and dislikes
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Function to handle like button click
  const handleLikeClick = () => {
   if(user){
    setLikes((prevLikes) => prevLikes + 1);
   }
  };

  // Function to handle dislike button click
  const handleDislikeClick = () => {
   if(user){
    setDislikes((prevDislikes) => prevDislikes + 1);
   }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{author}</h2>
          <p>{question}</p>
          <p>{answer}</p>

          {/* Like and dislike buttons */}
          <div className='flex'>
            <button className='flex' onClick={handleLikeClick}><AiFillLike></AiFillLike> ({likes})</button>
            <button className='flex ' onClick={handleDislikeClick}><AiFillDislike className='text-lg'></AiFillDislike> ({dislikes})</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;