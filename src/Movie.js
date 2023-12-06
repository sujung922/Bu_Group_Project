import React, { useState } from "react";
import PropTypes from 'prop-types';
import Info from "./Info";
import Main from "./pages/Main/Main";
import MovieDetails from "./MovieDetail";

function Movie({ moviecd, title, audiCnt, rank }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  return (
    <div>
      <h2>영화제목: {title} {moviecd}</h2>
      <h4>관객수: {audiCnt}, 일간 박스오피스 랭킹: {rank}</h4>
      <button onClick={handleShowDetails}>상세정보</button>

      {showDetails ? (
        <MovieDetails movieId={moviecd} />
      ) : (
        <Main moviecd2={moviecd} />
      )}
    </div>
  );
}

export default Movie;
