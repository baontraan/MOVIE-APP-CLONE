import React, { useEffect, useState } from "react";
import "./ListMovie.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CardMovie from "../../Global/CardMovie/CardMovie";

const ListMovie = () => {
  const [page, setPage] = useState(1);
  const [newMovie, setNewMovie] = useState([]);
  const callAPI = async (page) => {
    const res = await fetch(
      ` https://api.themoviedb.org/3/discover/movie?api_key=e9e9d8da18ae29fc430845952232787c&page=${page}`
    );
    const data = await res.json();
    page === 1
      ? setNewMovie(data.results)
      : setNewMovie((prev) => [...prev, ...data.results]);
  };
  useEffect(() => {
    callAPI(page);
  }, [page]);
  const handleShowMore = () => {
    setPage(page + 1);
  };
  return (
    <div className="bg-dark">
      <Container className="pb-5">
        <div className="heading text-center pt-5 mb-5 ">
          <h3 className="text-warning fs-5">ONLINE STREAMING</h3>
          <h2 className="text-light fs-1">List Movie</h2>
        </div>
        <Row>
          {newMovie &&
            newMovie.map((item) => (
              <Col xs={6} sm={6} md={3} lg={3}>
                <CardMovie
                  key={item.id}
                  img={item.poster_path}
                  title={item.original_title}
                  date={item.release_date}
                  vote={item.vote_average}
                  id={item.id}
                ></CardMovie>
              </Col>
            ))}
        </Row>
        <button className="show-more" onClick={handleShowMore}>
          <i class="fa-solid fa-play me-2"></i> SHOW MORE
        </button>
      </Container>
    </div>
  );
};

export default ListMovie;
