// import logo from './logo.svg';
import React , { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchImage from './components/searchImage';
import NewSearchImage from './components/NewSearchImage';
import Conditionalrender from './components/ConditionalRender';
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <NewSearchImage/>
        {/* <Conditionalrender/> */}
{/* 
        <Header/>
        <SearchImage/> */}
        
      </div>
    );
  }
  
}

export default App;
