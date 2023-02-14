import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
function App() {
  return (
  <>
  <Routes>
    <Route exact path='/' element={< Home />}></Route>     
</Routes>  
  
  
  </>
  );
}

export default App;
