import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const apiFetch = axios.create({ //인스턴스 생성때문에 create 사용 
  baseURL, //host, api의 경로, 영화데이터를 제공하는 호스트
  headers: {
    "Content-type": "applicatoin/json", //
  },
});
