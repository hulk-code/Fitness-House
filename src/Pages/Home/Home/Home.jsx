
import { Helmet } from "react-helmet-async";
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../../Banner/Banner";
import Classes from "../../Classes/Classes";
import ClientReview from "../../ClientReview/ClientReview";
import Posts from "../../Posts/Posts";

import FeaturedSection from "../FeaturedSection/FeaturedSection";
import SubscribeNow from "../SubscribeNow/SubscribeNow";
import TrainerProfile from "../TrainerProfile/TrainerProfile";


const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Vitality Vault || Home</title>
      </Helmet>

      <Banner></Banner>
      <FeaturedSection></FeaturedSection>
      <AboutUs></AboutUs>
      <Classes></Classes>
      <ClientReview></ClientReview>
      <Posts></Posts>
      <SubscribeNow></SubscribeNow>
      <TrainerProfile></TrainerProfile>
    </div>
  );
};

export default Home;
