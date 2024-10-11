import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import CardMovie from "../../../Global/CardMovie/CardMovie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../../../UseFetch";
import "./ListMovie.css";
const ListMovie = (props) => {
  const listMovie = useFetch(props.apiLink);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Kích thước màn hình từ 1200px trở xuống
        settings: {
          slidesToShow: 6, // Hiển thị 4 slide
        },
      },
      {
        breakpoint: 992, // Kích thước màn hình từ 992px trở xuống
        settings: {
          slidesToShow: 3, // Hiển thị 3 slide
        },
      },

      {
        breakpoint: 576, // Kích thước màn hình từ 576px trở xuống
        settings: {
          slidesToShow: 2, // Hiển thị 1 slide
        },
      },
    ],
  };
  return (
    <Container>
      <div className="heading text-center">
        <h3 className="fs-5 text-warning pt-5 mb-2">ONLINE STREAMING</h3>
        <h2 className="fs-1 text-light mb-5">{props.title}</h2>
      </div>

      <Slider {...settings}>
        {listMovie.results &&
          listMovie.results.map((item, index) => (
            <CardMovie
              key={item.id}
              img={item.poster_path}
              title={item.original_title}
              vote={item.vote_average}
              date={item.release_date}
              id={item.id}
            ></CardMovie>
          ))}
      </Slider>
    </Container>
  );
};

export default ListMovie;
