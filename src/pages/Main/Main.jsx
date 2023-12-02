import { useState, useLayoutEffect } from "react";
import dayjs from "dayjs";
import React from 'react';

import {
  dayBoxOfficeKoreaGetFetch,
  dayBoxOfficeForeignGetFetch,
} from "../../apis/dayBoxOfiiceGetFetch";
import { movieListGetFetch } from "../../apis/movieListGetFetch";
import { movieDetailGetFetch } from "../../apis/movieDetailGetFetch";

const Main = (props) => {
  const [curPage, setCurPage] = useState(1); //후에 페이지네이션 처리용 상태 변수
  const [releaseYear, setReleaseYear] = useState(2022); // 2022, 2023년 영화리스트 바꿔서 가져올 때 상태변수
  const [moviecd2, setmoviecd2] = useState(props.moviecd2);

  const [movieList, setMovieList] = useState([]);

  const handleDetailMove = async (movieCd) => {
    try {
      const detailRes = await movieDetailGetFetch(movieCd);
      console.log("버튼 누를시, 영화 상세정보", detailRes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleYearChange = (year) => {
    setReleaseYear(year);
  };

  const handlePageChange = (page) => {
    setCurPage(page);
  };

  useLayoutEffect(() => {
    const currentDay = dayjs(new Date()).format("YYYYMMDD");

    const call = async () => {
      try {
        const koreaRes = await dayBoxOfficeKoreaGetFetch(currentDay);
        const foreignRes = await dayBoxOfficeForeignGetFetch(currentDay);
        const listRes = await movieListGetFetch(curPage, releaseYear);

        const { movieListResult } = listRes.data;
        setMovieList(movieListResult.movieList);

        console.log("한국 일일박스오피스", koreaRes);
        console.log("외국 일일박스오피스", foreignRes);
        console.log("영화 리스트 조회", listRes);
      } catch (error) {
        console.error(error);
      }
    };

    call();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//   return (
//     <div>
//       {movieList?.map((movie) => (
//         <button
//           key={movie.movieCd}
//           onClick={() => handleDetailMove(movie.movieCd)}
//         >
//           {movie.movieCd}
//         </button>
//       ))}

//       <div style={{ textAlign: "center" }}>
//         {[2022, 2023].map((year) => (
//           <button key={year} onClick={() => handleYearChange(year)}>
//             {year}년
//           </button>
//         ))}
//       </div>

//       <div style={{ textAlign: "center" }}>
//         {[1, 2, 3, 4, 5].map((page) => (
//           <button key={page} onClick={() => handlePageChange(page)}>
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

//여기다가 상세버튼 받을 수 있게 만드나욤 ;;? 넘 졸려용 ;;
 };

export default Main;
