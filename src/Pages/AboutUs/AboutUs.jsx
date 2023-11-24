

import Sectiontitle from '../Home/SharedPage/SectionTitle/SectionTitle';
import './AboutUs.css';


const AboutUs = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <Sectiontitle  heading="About US" ></Sectiontitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src='https://i.ibb.co/2FcMHvf/pexels-victor-freitas-2261477.jpg' alt="" />
                </div>
                <div className="md:ml-10">
                    
                    <p>Welcome to <span className='text-amber-300 font-bold'>Vitality Vault</span>, where fitness meets lifestyle excellence.
At <span className='text-amber-300 font-bold'>Vitality Vault</span>, we're committed to helping you achieve your fitness goals and beyond.
Our state-of-the-art facility offers a wide range of cutting-edge equipment for a personalized workout experience.
Join our supportive community at  <span className='text-amber-300 font-bold'>Vitality Vault</span> and embark on a journey to a healthier, stronger you.
Our certified trainers are here to guide and motivate you every step of the way.
Discover a variety of fitness classes catering to all levels, from beginners to advanced athletes.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;