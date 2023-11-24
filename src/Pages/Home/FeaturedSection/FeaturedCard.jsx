import { motion } from "framer-motion"

const FeaturedCard = ({item}) => {
    const{category , description ,img}=item;
    return (
        <div>
            <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold text-2xl">
    {category}
     
    </h2>
    <p>{description}</p>
    
  </div>
</div>
</motion.button>
        </div>
    );
};

export default FeaturedCard;