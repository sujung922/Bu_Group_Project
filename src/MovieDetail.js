import React, { useState, useEffect } from "react";
import { movieDetailGetFetch } from "./apis/movieDetailGetFetch";

const Detail = ({ movieId }) => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const {
          data: {
            movieInfoResult: { movieInfo },
          },
        } = await movieDetailGetFetch(movieId);

        setInfo({ ...movieInfo });
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  const {
    actors,
    audits,
    directors,
    genres,
    movieNm,
    movieNmEn,
    prdtStatNm,
    openDt,
    typeNm,
  } = info;

  return loading ? (
    <div>로딩중입니다..</div>
  ) : (
    <div>
      <div>
        {/* <h1>
          {movieNm} ({movieNmEn})
        </h1> */}
        <div>
          <div>감독</div>
          <div>
            {directors?.map((director, i) => (
              <span key={i}>{director.peopleNm}<br /></span>
            ))}
          </div>
        </div>
        <div>
          {audits?.map((rule) => rule.watchGradeNm)}
        </div>
          <div>
            {openDt && (
              <>
                {openDt.substring(0, 4)}년 {openDt.substring(4, 6)}월 {openDt.substring(6, 8)}일 {prdtStatNm}
              </>
            )}
          </div>

      </div>

      <div>
        <div>장르</div>
        <div>
          {genres?.map((genre, i) => (
            <div key={i}>{genre.genreNm}</div>
          ))}
        </div>
      </div>

      <div>
        배우들
        <ul style={{ listStyle: "none" }}>
          {actors?.map((actor, i) => (
            <li key={i}>
              <div>
                이름: {actor.peopleNm} 배역: {actor.cast}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>영화 유형: {typeNm}</div>
    </div>
  );
};

export default Detail;