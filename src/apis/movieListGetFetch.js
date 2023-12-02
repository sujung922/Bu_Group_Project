import { apiFetch } from "./common";

const apiKey = process.env.REACT_APP_API_KEY;

/**
 * 영화목록 조회 - 10개씩
 * - 첫페이지: page:1
 * - 2022년도 부터 2023년도 파라미터로 넣기
 *
 * 파라미터
 * - page: 1 (초기값 1)
 * - releaseYear: 2020 (초기값 2022)
 */
export const movieListGetFetch = (page = 1, releaseYear = 2022) =>
  apiFetch.get(
    `/movie/searchMovieList.json?key=${apiKey}&curPage=${page}&itemPerPage=20&openStartDt=${releaseYear}&openEndDt=${releaseYear}`
  );
