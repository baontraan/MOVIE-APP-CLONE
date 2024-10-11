import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner_1 from "../../../../assets/banner_1.png";
import Banner_2 from "../../../../assets/banner_2.png";
const Banner = () => {
  return (
    <div>
      <Carousel className="mb-2">
        <Carousel.Item interval={2000}>
          <img src={Banner_1} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={Banner_2} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
