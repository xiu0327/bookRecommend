import './App.css';
import React ,{ useState } from "react";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import BookTemplate from './component/BookTemplate';
import BookHead from './component/BookHead';
import BookList from './component/BookList';
import axios from "axios";
import Spinner from './component/Spin-1s-200px.gif';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

const LodingImg = styled.img`
    margin: 115px;
`;


function App() {

  const [input, setInput] = useState();
  const [result, setResult] = useState();
  const [state, setState] = useState(false);

  function getKeyword(e){
    setState(true);
    e.preventDefault();
    const getKeyword = async () => {
      await axios
        .get("http://54.180.36.227/lists/recommend/" + input)
        .then((response) => {
          setResult(response.data);
          setState(false);
          setInput("");
        })
        .catch((error) => {
          console.error(error);
        })
    }
    getKeyword();
  }

  function changeText(e){
    e.preventDefault();
    setInput(e.target.value);
    setState(false);
  }

  return (
    <>
      <GlobalStyle />
      <BookTemplate>
        <BookHead input={input} handleChange={changeText} handleSubmit = {getKeyword}/>
        {
          result
          ? <BookList result={result} /> : state ? <LodingImg src={Spinner} alt="로딩중" /> : null
        }
      </BookTemplate> 
    </>
  );
}

export default App;
