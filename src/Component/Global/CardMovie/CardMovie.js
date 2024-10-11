import React from "react";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  return (
    <div className="ms-3 mb-5">
      <Link
        to={`/detail-movie/${props.id}`}
        className="cardMovie text-decoration-none text-light "
      >
        <div className="thumb">
          <img
            className="rounded-4"
            src={`https://image.tmdb.org/t/p/w300${props.img}`}
            alt=""
          />
        </div>
        <h3 className="title fs-6 mt-2 mb-3">{props.title}</h3>
        <div className="number d-flex justify-content-between">
          <p className="day ">{props.date}</p>
          <p className="rate text-warning ">
            <i className="fa-solid fa-star "></i>
            {props.vote}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardMovie;
