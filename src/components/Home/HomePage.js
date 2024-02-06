/* eslint-disable no-unused-vars */
import Footer from "../common/Footer";
import HeroSection from "../common/HeroSection";
import Navbar from "../common/Navbar";
import AddsModel from "./Adds/AddsModel";
import AllStep from "./AllStep";
import Department from "./Department";
import Discover from "./Discover";
import OurExperts from "./Experts/OurExperts";
import Explore from "./Exploring/Explore";
import Money from "./Money/Money";
import NewArrivals from "./NewArrivals";
import SpecialOffer from "./SpecialOffer";
import AllItems from "./Ternding/AllItems";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <div className="px-7">
      <Navbar />
      <HeroSection />
      <Discover />
      <AllItems />
      {/* <Money /> */}
      <AllStep />
      <NewArrivals />
      <Explore />
      <SpecialOffer />
      <Department />
      <OurExperts />
      <Testimonial />
      <AddsModel />
      <Footer />
    </div>
  );
};

export default HomePage;
