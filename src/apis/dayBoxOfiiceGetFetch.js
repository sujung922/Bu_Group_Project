import { apiFetch } from "./common";

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = "9842809e1f66fa7e8f9cd5c44994b63d";

/**
 * 일별 박스오피스 - 한국
 * currentDay - yyyymmdd
 */
export const dayBoxOfficeKoreaGetFetch = (currentDay) =>
  apiFetch.get(
    `/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${currentDay}&itemPerPage=5&repNationCd=K`
  );

/**
 * 일별 박스오피스 - 외국
 * cureentDay - yyyymmdd
 */
export const dayBoxOfficeForeignGetFetch = (currentDay) =>
  apiFetch.get(
    `/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${currentDay}&itemPerPage=5&repNationCd=F`
  );
