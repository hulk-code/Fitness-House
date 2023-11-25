
const GalleryTitle = () => {
    return (
      <div className="mb-5" style={{ 
        backgroundImage: "url('https://i.ibb.co/rZKVMy4/pexels-victor-freitas-949131.jpg')", 
        height: '500px', 
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <p className="text-4xl font-bold text-yellow-300">See Photo Collection Of Our Gym</p>
      </div>
    );
  };
  
  export default GalleryTitle;