import React, { Component } from 'react';
import axios from 'axios';
import Movie from "./Movie";

class List extends Component {
    constructor(props) {
      super(props);
      // this.onMainBoolHandlerFalse = this.onMainBoolHandlerFalse.bind(this);
      // this.onDiv1Invisible = this.onDiv1Invisible.bind(this);
      this.onHandler = this.onHandler.bind(this); //넘겨받은 함수 바인드
      const {date} = this.props; //넘겨받은 date값 state로 지정
      this.state = {
        isSelect: true, //현재 로딩여부
        date: date, //App.js의 date값
        date2: "1234", //테스트용 date값
        inputdate : "", //임시저장 값
        movies: [], //영화리스트 저장
      }
      console.log("1. constructor Call");
    }
  
   isSelectHandlerTrue = () => {
    this.setState({isSelect: true });
    console.log("isSelectHandlerTrue Call");
  }
  
  isSelectHandlerFalse = () => {
    this.setState({isSelect: false });
    console.log("isSelectHandlerFalse Call");
  }

//   onMainBoolHandlerFalse () { //전달받은 mainBoolHandlerFalse 호출
//     const {mainBoolHandlerFalse} = this.props;
//     mainBoolHandlerFalse();
//     console.log("onMainBoolHandlerFalse 실행");
// }

  // onDiv1Invisible () { //전달받은 Div1Invisible 호출
  //   const {Div1Invisible} = this.props;
  //   Div1Invisible();
  //   console.log("onDiv1Invisible 실행");
  // }

  onHandler () {  //전달받은 mainBoolHandlerFalse, Div1Invisible 동시실행
    const {mainBoolHandlerFalse} = this.props;
    const {Div1Invisible} = this.props;
    mainBoolHandlerFalse();
    Div1Invisible();
    console.log("onHandler 함수 실행");
  }


   getMovies = async () => { //오픈API 값 받기
    console.log("getMovies Call")
    const {date} = this.state;
    const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f6075493e17d4525078a94b31ec0ef70&targetDt="+date;
    
     const {data: { 
      boxOfficeResult: 
       {dailyBoxOfficeList}
      }
    }
      = await axios.get(url);
     console.log(dailyBoxOfficeList)
     this.setState({ movies: dailyBoxOfficeList});
     //this.setState({ movies: dailyBoxOfficeList, isSelect: false });
    //  this.isSelectHandlerTrue();
     this.isSelectHandlerFalse();
     console.log("state 변경")
   }
  
   componentDidMount() {
     this.getMovies();
     console.log("4. componentDidMount Call")
   }
  //  {isLogin ? <MyPage userData = {userData} loginHandler={loginHandler}/> : <Login loginHandler={loginHandler}/>}

   render () {
    console.log("3. render Call")
     const {isSelect, movies, date, date2} = this.state;
     console.log("date값 : " + date);
     console.log("date2값 : " + date2);
     //div1
     return <div>  <div id='div1'>
      <h3>현재 date값 : [ {date} ]</h3>
      <button onClick={this.onHandler}>이전으로</button>
      {/* <p><button onClick={this.isSelectHandlerTrue}>isSelect true로 변경</button>  <button onClick={this.isSelectHandlerFalse}>isSelect false로 변경</button></p>  */}
      </div>
      { isSelect ? <div><h2>로딩중입니다.</h2> <p>Select.js의 현재 isSelect값 : false</p></div> : movies.map((movie) => {
       console.log(movie);
       return (
         <Movie
          key={movie.movieCd}
          moviecd={movie.movieCd}
          title={movie.movieNm}
          audiCnt={movie.audiCnt}
          rank={movie.rank}
          />
       )
     })}</div>;
   }
  }

export default List;