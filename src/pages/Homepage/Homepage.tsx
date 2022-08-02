import React from "react";
import Layout from "../../components/Layout/Layout";
import HeroSlider from "./HeroSlider";
import SectionList from "./SectionList";
import Shop from "./Shop";

const Homepage = () => {
  return (
    <Layout>
      <SectionList />
      <HeroSlider />
      <Shop />
    </Layout>
  );
};

export default Homepage;
