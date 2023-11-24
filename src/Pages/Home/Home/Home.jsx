
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../../Banner/Banner";
import Classes from "../../Classes/Classes";
import ClientReview from "../../ClientReview/ClientReview";
import Posts from "../../Posts/Posts";

import FeaturedSection from "../FeaturedSection/FeaturedSection";


const Home = () => {
   
    return (
        <div className="">
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <AboutUs></AboutUs>
            <Classes></Classes>
          <ClientReview></ClientReview>
          <Posts></Posts>

        </div>
    );
};

export default Home;