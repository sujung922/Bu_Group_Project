import React, { useState } from "react";
import PropTypes from 'prop-types';
import Info from "./Info";
import Main from "./pages/Main/Main";
import Tes from "./pages/Main/test";
import MovieDetails from "./MovieDetail";

function Movie({moviecd, title, audiCnt, rank}) {
    const [test, settest] = useState(true);
    //moviecd 지워도 될듯
    return <div>
        <h2>영화제목 : {title} {moviecd} </h2> 
        <h4> 관객수 : {audiCnt}, 일간 박스오피스 랭킹 : {rank}<br></br><br></br></h4>
        <button onClick={() => settest(false)}> 상세정보 </button>


        { test ? <div> test값 true </div> : <Main moviecd2={moviecd}/> }
    </div>;
};


Movie.propTypes = {
    title: PropTypes.string.isRequired
};

export default Movie;