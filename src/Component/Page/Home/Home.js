import React from "react";
import Banner from "./Banner/Banner";
import ListMovie from "./ListMovie/ListMovie";

const Home = () => {
  const arrMovie = [
    {
      title: "Now Playing Movie",
      apiLink:
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&page=1",
    },
    {
      title: "Up Coming Movie",
      apiLink:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&page=1 ",
    },
    {
      title: "Top Rated Movie",
      apiLink:
        "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&page=1",
    },
  ];
  return (
    <div className="bg-dark">
      <Banner></Banner>
      {arrMovie.map((item, index) => (
        <ListMovie
          key={item.id}
          apiLink={item.apiLink}
          title={item.title}
          id={item.id}
        ></ListMovie>
      ))}
    </div>
  );
};

export default Home;
