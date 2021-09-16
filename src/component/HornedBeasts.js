import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/'
import './css/Cards.css'
import SelectedBeast from './SelectedBeast';

class HornedBeasts extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            numOfTimes: 0,
         };
    }
    addOne = () => {
        this.setState({
            numOfTimes: this.state.numOfTimes + 1
        })
    }
       render() {
        return (
            <div>
           
                <Card className='cards' style={{ width: '18rem', margin:'8px', float:'left' }}>
                    <Card.Img onClick={this.props.handleShow} src={this.props.image_url} alt={this.props.keyword} title={this.props.horns} variant="top" />
                    <Card.Body >
                        <Card.Title>{this.title}</Card.Title>
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
                    handleClose={this.props.handleClose}
                    show={this.props.showModal}
                    title={this.props.title}
                    image_url={this.props.image_url}
                    description={this.props.description}
                    favtime={this.props.numOfTimes}
                    keyword={this.props.keyword}
                    horns={this.props.horns}
                />
                
                       
            </div>

        )
    }
}

export default HornedBeasts;