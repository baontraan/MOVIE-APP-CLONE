import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./DetailMovie.css";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import UseFetch from "../../../UseFetch";
const DetailMovie = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  // const [trailerData, setTrailerData] = useState("");
  const { movieId } = useParams();
  // const [movieDetail, setMovieDetail] = useState([]);
  const movieDetail = UseFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9e9d8da18ae29fc430845952232787c`
  );
  const trailerData = UseFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e9e9d8da18ae29fc430845952232787c`
  );
  const findTrailer =
    trailerData.results &&
    trailerData.results.find((item) => item.type === "Trailer");
  // const getMovieDetail = async () => {
  //   const res = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9e9d8da18ae29fc430845952232787c`
  //   );
  //   const data = await res.json();
  //   setMovieDetail(data);
  // };

  // const getMovieTrailer = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e9e9d8da18ae29fc430845952232787c`
  //     );
  //     const data = await res.json;
  //     const filterTrailer = data.results.filter(
  //       (item) => item.type === "Trailer"
  //     );
  //     setTrailerData(filterTrailer);
  //   } catch (err) {
  //     alert("Error:", err);
  //   }
  // };

  // useEffect(() => {
  //   getMovieDetail();
  //   getMovieTrailer();
  // }, []);
  return (
    <div className="detail  bg-dark py-5 ">
      <Container>
        <Row>
          <Col className="mb-4" lg={3}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
              alt=""
            />
          </Col>
          <Col className="infoDetail" lg={9}>
            <h1>{movieDetail.original_title}</h1>
            <div class="yearPro d-flex align-items-center gap-2">
              <p class="year mb-0">{movieDetail.release_date}</p>
              <p class="kind">
                {movieDetail.genres
                  ? movieDetail.genres.map((genre) => genre.name).join(", ")
                  : ""}
              </p>
              <p class="time mb-0">
                <i class="fa-regular fa-clock text-warning"></i>{" "}
                {movieDetail.runtime}
              </p>
            </div>
            <div class="rate d-flex align-items-center">
              <p class="number-rate">{movieDetail.vote_average}</p>
              <p class="user">user score</p>
              <p class="playtrailer" onClick={() => setShowTrailer(true)}>
                <i class="fa-solid fa-play"></i> Play trailer
              </p>
            </div>
            <h3>Can You Bury Your Past?</h3>
            <h2>Overview</h2>
            <p class="overview">{movieDetail.overview}</p>
          </Col>
        </Row>
        <Modal
          show={showTrailer}
          onHide={() => setShowTrailer(false)}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{movieDetail.original_title} - Trailer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {findTrailer ? (
              <iframe
                width="100%"
                height="400px"
                src={`https://www.youtube.com/embed/${findTrailer.key}`}
                allowFullScreen
                title="Trailer"
              ></iframe>
            ) : (
              <p>No trailer available</p>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default DetailMovie;
