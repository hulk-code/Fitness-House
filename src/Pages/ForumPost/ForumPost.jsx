



// import './Product.css';





const ForumPost = ({product}) => {
    const{author , question , answer}=product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{author}</h2>
    <p>{question}</p>
    <p>{answer}</p>
    
  </div>
</div>
        </div>
    );
};

export default ForumPost;