
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../../Banner/Banner";
import Classes from "../../Classes/Classes";
import ClientReview from "../../ClientReview/ClientReview";
import Posts from "../../Posts/Posts";

import FeaturedSection from "../FeaturedSection/FeaturedSection";
import SubscribeNow from "../SubscribeNow/SubscribeNow";


const Home = () => {
   
    return (
        <div className="">
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <AboutUs></AboutUs>
            <Classes></Classes>
          <ClientReview></ClientReview>
          <Posts></Posts>
          <SubscribeNow></SubscribeNow>

        </div>
    );
};

export default Home;