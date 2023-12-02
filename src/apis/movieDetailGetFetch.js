import { apiFetch } from "./common";

const apiKey = process.env.REACT_APP_API_KEY;

/**
 * 영화 상세 조회
 * 영화 리스트 뿌려줄 때 받은 api 데이터 중 movieCd를 파라미터로 받음
 *
 * 파라미터
 * ex)
 * - movieCd: 201293 (number | string)
 */
export const movieDetailGetFetch = (movieCd) =>
  apiFetch.get(`/movie/searchMovieInfo.json?key=${apiKey}&movieCd=${movieCd}`);
