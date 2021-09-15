import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/'
import './css/Cards.css'
import SelectedBeast from './SelectedBeast.js'
import FormData from "./FormData.js";
import data from './data.json';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfTimes: 0,
            showModal: false,
            DataFilterd: data,
            horns:""
        };
    }

    // function for adding one when the user click on the imgs

    addOne = () => {
        this.setState({
            numOfTimes: this.state.numOfTimes + 1
        })
    }

    // function for open modal

    handleShow = () => {
        this.setState({
            showModal: true,

        })
    }
    // function for Close modal

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    filterDataHorns = () =>{
        let arrayData = data.filter((val) => val.horns === parseInt(this.state.horns))
        this.setState({
            DataFilterd: arrayData
            
        })
    }

    hornsFun = (event) =>{
        event.preventDefault();
        this.setState({
            horns: event.target.value
        })
    }



    render() {
        return (
            <div>
              
              {/* <>
               <Form style={{ marginBottom: "60px" }} >
                <Form.Label >How Many Horns? 🦌</Form.Label>
                <Form.Control  >
                <Form.Select  onChange={this.props.hornsFun} name="horns" aria-label="Default select example">
                    <option value="All">All</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                    <option value="Wow">Wow...</option>
                </Form.Select>
                </Form.Control>
                <Button variant="dark"  onClick={this.props.filterDataHorns}></Button>

              
            </Form >
              
              </> */}
             
                <Card className='cards' style={{ width: '18rem' }}>
                    <Card.Img onClick={this.handleShow} src={this.props.image_url} alt={this.props.keyword} title={this.props.horns} variant="top" />
                    <Card.Body >
                        <Card.Title>{this.props.title}</Card.Title>
                        ♥️ {this.state.numOfTimes}
                        <Card.Text className='text'>
                            <br></br>
                            {this.props.description}
                            <br></br>
                            Horns: {this.props.horns} 🦌
                        </Card.Text>
                        <Button onClick={this.addOne} variant="primary">Vote</Button>
                    </Card.Body>
                </Card>


                <SelectedBeast
                    handleClose={this.handleClose}
                    show={this.state.showModal}
                    title={this.props.title}
                    image_url={this.props.image_url}
                    description={this.props.description}
                    favtime={this.state.numOfTimes}
                    keyword={this.props.keyword}
                    horns={this.props.horns}
                />
                             
            </div>

        )
    }
}

export default HornedBeasts;