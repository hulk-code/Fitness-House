
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../../Banner/Banner";
import Classes from "../../Classes/Classes";

import FeaturedSection from "../FeaturedSection/FeaturedSection";


const Home = () => {
   
    return (
        <div className="">
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <AboutUs></AboutUs>
            <Classes></Classes>
          

        </div>
    );
};

export default Home;