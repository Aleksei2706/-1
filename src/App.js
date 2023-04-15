import React from 'react';
import Auth from "./components/Auth/Auth"
import QuizCreator from './components/QuizCreator/QuizCreator';
import Home from './components/Home/Home';
import "./App.css"
import Btn from './btn/btn';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route, Link} from 'react-router-dom';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import LoginPage from './components/LoginPage/LoginPage';
// import Registration from './components/Registration/Registration';


const App = () => {
  const dispatch = useDispatch()
  const cash = useSelector ( state => state.cash.cash)


  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }
  return (
      <div className={'app'}>
        <div style ={{fontSize:"3rem"}}>{cash}</div>
        <div style={{display: "flex"}}>
          <button onClick={()=> addCash(Number(prompt()))}>Пополнить счет</button>
          <button onClick={()=> getCash(Number(prompt()))}>Снять со счета</button>
        </div>
      </div>
  );
  }
  
  export default App;
  
  
  