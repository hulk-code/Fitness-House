import { Button } from '@mui/material';
import styled from 'styled-components';
import './Banner.css'
import { Link } from 'react-router-dom';
const GradientButton = styled(Button)`
  && {
    background: linear-gradient(90deg, #FF6347 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.3s ease-in-out;

    color: white;
    padding: 15px 40px; /* Adjust padding as needed */
    border-radius: 5px; /* Adjust border-radius as needed */

    &:hover {
      background-position: left bottom;
    }
  }
`;

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]" >
            <div id="slide1" className="carousel-item relative w-full">
                <div className="title">
                    <h2 className='font-poppin text-5xl font-extrabold mb-2'>Looks For Our Classes</h2>
                    <GradientButton  variant="outlined" color="secondary">
                       <Link to='/'>Class</Link>
                    </GradientButton>

                </div>
                <img src="https://i.ibb.co/SBChZcW/pexels-victor-freitas-841130.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/7NnKRsT/pexels-pixabay-414029.jpg" className="w-full" />
                <div className="title">
                <h2 className='font-poppin text-5xl font-extrabold mb-2'>Looks For Our Classes</h2>
                    <GradientButton  variant="outlined" color="secondary">
                       <Link to='/'>Class</Link>
                    </GradientButton>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/r4Rkrvd/pexels-binyamin-mellish-116077.jpg" className="w-full" />
                <div className="title">
                <h2 className='font-poppin text-5xl font-extrabold mb-2'>Looks For Our Classes</h2>
                    <GradientButton  variant="outlined" color="secondary">
                       <Link to='/'>Class</Link>
                    </GradientButton>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/mBsRnLS/pexels-lukas-669584.jpg" className="w-full" />
                <div className="title">
                <h2 className='font-poppin text-5xl font-extrabold mb-2'>Looks For Our Classes</h2>
                    <GradientButton  variant="outlined" color="secondary">
                       <Link to='/'>Class</Link>
                    </GradientButton>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
