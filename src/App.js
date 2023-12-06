import React, { Component } from 'react';
import List from "./List";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainBool: false, //List 컴포넌트 출력여부 결정
            date: "20120101", //date
            inputdate: "", //임시 state변수
        }
        console.log("1. constructor Call");
    };

    mainBoolHandlerTrue = () => { //mainBool값 True로 변경
        this.setState({ mainBool: true });
        console.log("mainBoolHandlerTrue Call")
    };

    mainBoolHandlerFalse = () => { //mainBool값 False로 변경
        this.setState({ mainBool: false });
        console.log("mainBoolHandlerFalse Call")
    };

    onChangeValue = (e) => { //Input값 inputdate에 할당
        this.setState({
            inputdate: e.target.value,
        });
        console.log("onChangeValue 실행");
        console.log(this.state.inputdate);
    };

    setDate = () => { //date값 변경
        this.state.inputdate === "" ? this.setState({ date: "20120101" }) : this.setState({ date: this.state.inputdate }); //input이 비어있는 경우 default값 20120101로 date 설정
        console.log("setDate 실행");
        console.log("inputdate :" + this.state.inputdate);
        console.log("date :" + this.state.date);
    };

    Div1Invisible = () => { //Div1 숨기기
        const div = document.getElementById('div1');
        // div.remove();
        if (div.style.display === 'none') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    }

    Search = () => { //순위 조회 시 함수 동시실행
        this.setDate();
        this.mainBoolHandlerTrue();
        this.Div1Invisible();
    }

    render() {
        console.log("3. render Call")
        const { mainBool, date } = this.state;
        return (
            <div align='center'>
                <div id='div1'>
                    <p> 입력된 date : [ {date} ]</p>
                    <p><input id="Cdate" name="Cdate" placeholder="date값 입력 ex)20120101" onChange={this.onChangeValue} /> </p>
                    <button onClick={this.Search}>박스오피스 순위 보기</button></div><hr />
                {mainBool ? <List date={date} mainBoolHandlerFalse={this.mainBoolHandlerFalse} Div1Invisible={this.Div1Invisible} /> :
                    <div><h1> App.js </h1> <h3> 상단에 date값을 변경하고 박스오피스 순위를 불러오세요. ex) 20221225 </h3>
                    <p> (Input값 없이 순위 조회 시 default값 20120101 설정) </p></div>}
            </div>
        );
    }
}

export default App;