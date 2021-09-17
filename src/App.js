import React from "react";
import Header from './component/Header.js';
import Main from "./component/Main.js";
import Footer from "./component/Footer.js";
import data from './data.json'
import { Form } from 'react-bootstrap/'
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataToSend: data,
      horns: 0,
    };
  }


  filterDataHorns = (hornsValue) => {

    let HornsData = data.filter(element => {
      if (hornsValue === 0) {
        return element;
      }

      else {
        if (element.horns === hornsValue ? true : false) {
          return true;

        }
      }
    });
    return HornsData;
  }


  eventHandler = (event) => {
    event.preventDefault();

    this.setState({
      horns: event.target.value,
      dataToSend: this.filterDataHorns(Number(event.target.value))

    })
  }

  render() {
    return (
      <div>
        <Header />

        <>
          <Form style={{ marginBottom: "60px", fontSize: "20px", border: "1px solid black",backgroundColor: "#D1C4E9", height: "120px", marginLeft: "30px", marginRight: "100px", width: "750px" }}>
            <Form.Label >How Many Horns? 🦌</Form.Label>
            <Form.Select name="horns" onChange={this.eventHandler} aria-label="Default select example">
              <option value="0">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow</option>
            </Form.Select>
          </Form>
        </>

        <Main dataToSend={this.state.dataToSend} />
        <Footer />
      </div>
    );
  }
}
export default App;
