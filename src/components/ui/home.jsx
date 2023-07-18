import React from "react";
import Basic_tile from "../core/basic_tile";
import CarouselTile from "../core/carousel_tile";
import HomeInfo from "./homeInfo.js";
import CarouselImages from "../core/carouselInfo.js";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import GoogleMaps from "../core/google_maps";
import HomePageBanner from "../core/home_page_banner";

function Home() {
  function Add_item(item) {
    return (
      <Basic_tile
        Id={item.Id}
        Heading={item.Heading}
        Text={item.Text}
        Link={item.Link}
        Image={item.Image}
      />
    );
  }

  function Add_img(item) {
    return (
      <CarouselTile
        Id={item.Id}
        Image1={item.Image1}
        Image2={item.Image2}
        Image3={item.Image3}
      />
    );
  }

  return (
    <>
      <div>
        {CarouselImages.map(Add_img)}
        {HomeInfo.map(Add_item)}
      </div>

      {/* banner here */}
      <HomePageBanner />

      <GoogleMaps />
    </>
  );
}

export default Home;
