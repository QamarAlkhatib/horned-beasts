import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button' 
import Emoji from './Emoji.js'
import './css/Cards.css'

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfTimes: 0
        }
    }

    // function for adding one when the user click on the imgs

    addOne = () => {
        this.setState({
            numOfTimes: this.state.numOfTimes + 1
        })
    }

    render() {
        return (
            <div>
                
                <Card className ='cards' style={{width:'18rem'} }>
                    <Card.Img  onClick={this.addOne} src={this.props.image_url} alt={this.props.keyword} title={this.props.horns} variant="top" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Emoji symbol="❤️ "/> 
                        {this.state.numOfTimes}  favorited
                        
                        <Card.Text className='text'>
                        {this.props.description} {this.props.numOfTimes} 
                        </Card.Text>
                        <Button  onClick={this.addOne} variant="primary">Vote</Button>
                    </Card.Body>
               
                    
                </Card>
                {/* <h2>{this.props.title}</h2>
                <p>{this.state.numOfTimes}</p>
                <img onClick={this.addOne} src={this.props.image_url} alt={this.props.keyword} title={this.props.horns} />
                <p>{this.props.description} numer of times: {this.props.numOfTimes}</p>
                <hr></hr> */}
            </div>
        )
    }
}

export default HornedBeasts;