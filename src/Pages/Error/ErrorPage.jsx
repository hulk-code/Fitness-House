


const ErrorPage = () => {
  const containerStyle = {
    background: 'url("https://i.ibb.co/9pKSLw5/errorzym.jpg")', // Replace with the actual URL of your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height to cover the entire viewport
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '4rem' }}>404 Not Found</h1>
    </div>
  );
};

export default ErrorPage;
