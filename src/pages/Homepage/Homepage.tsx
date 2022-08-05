import React from "react";
import Layout from "../../components/Layout/Layout";
import HeroSlider from "./HeroSlider";
import Sales from "./Sales";
import SectionList from "./SectionList";
import Shop from "./Shop";

const Homepage = () => {
  return (
    <Layout>
      <SectionList />
      <HeroSlider />
      <Shop />
      <Sales />
    </Layout>
  );
};

export default Homepage;
