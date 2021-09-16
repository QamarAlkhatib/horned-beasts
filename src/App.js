import React from 'react';
import Header from './component/Header.js';
import Main from './component/Main.js';
import Footer from './component/Footer.js';
import data from './data.json'

import './App.css';

class App extends React.Component {

  constructor (props){
    super(props)
    this.state = ({
      dataFile: data
    })
  }
 
  

  render(){
    return (
      <div>
        <Header />
        <Main  dataSend={this.state.dataFile}/>
        <Footer />
      </div>
    );
  }
}

export default App;
