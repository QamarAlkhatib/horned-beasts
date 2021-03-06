import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './css/Cards.css'
import SelectedBeast from './SelectedBeast.js'

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfTimes: 0,
            showModal: false,
        };
    }


    addOne = () => {
        this.setState({
            numOfTimes: this.state.numOfTimes + 1
        })
    }

    handleShow = () => {
        this.setState({
            showModal: true,

        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>

                <Card className='cards' style={{ width: '18rem', margin: "8px", float: "left" }}>
                    <Card.Img onClick={this.handleShow} src={this.props.image_url} alt={this.props.keyword} title={this.props.horns} variant="top" />
                    <Card.Body>
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
                    title={this.props.title} s
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
