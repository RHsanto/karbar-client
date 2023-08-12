import HeroSection from "../common/HeroSection";
import AllStep from "./AllStep";
import Department from "./Department";
import Discover from "./Discover";
import OurExperts from "./Experts/OurExperts";
import Explore from "./Exploring/Explore";
import Money from "./Money/Money";
import NewArrivals from "./NewArrivals";
import SpecialOffer from "./SpecialOffer";
import AllItems from "./Trending/AllItems";

const HomePage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <Discover />
      <NewArrivals />
      <AllStep />
      <Money />
      <Explore />
      <SpecialOffer />
      <AllItems />
      <Department />
      <OurExperts />
      {/* <Testimonial/> */}
      {/* <MyPage/> */}
    </div>
  );
};

export default HomePage;