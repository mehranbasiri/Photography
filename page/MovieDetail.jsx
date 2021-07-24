import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MovieState from "../movieState";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const MovieDetail = () => {
  const history = useHistory();

  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <motion.div
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          className="Details"
        >
          <div className="HeadLine">
            <h1>{movie.title}</h1>

            <img src={movie.mainImg} alt="movie" />
          </div>
          <div className="Awards">
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </div>
          <div className="ImageDisplay">
            <img src={movie.secondImg} alt="secondImg" />
          </div>
        </motion.div>
      )}
    </>
  );
};
const Award = ({ title, description }) => {
  return (
    <div className="AwardStyle">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};
export default MovieDetail;
