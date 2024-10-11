import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import UseFetch from "../../../UseFetch";
import CardMovie from "../../Global/CardMovie/CardMovie";
const SearchMovie = () => {
  const { slug: keysearch } = useParams();
  const navigate = useNavigate();
  const listMovie = UseFetch(
    ` https://api.themoviedb.org/3/search/movie?api_key=e9e9d8da18ae29fc430845952232787c&query=${keysearch}&page=1`
  );
  console.log(listMovie);
  useEffect(() => {
    if (listMovie.results && listMovie.results.length === 0) {
      navigate("/*");
    }
  }, [listMovie, navigate]);
  return (
    <div className="bg-dark">
      <Container>
        <div className="headline text-center">
          <h3>ONLINE STREAMING</h3>
          <h3>Search key: {keysearch}</h3>
        </div>
        <Row>
          {listMovie.results &&
            listMovie.results.map((item) => (
              <Col xs={6} sm={6} md={6} lg={3}>
                <CardMovie
                  key={item.id}
                  id={item.id}
                  img={item.poster_path}
                  title={item.title}
                  date={item.release_date}
                  vote={item.vote_average}
                ></CardMovie>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default SearchMovie;
