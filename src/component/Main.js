import React from 'react';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from "./SelectedBeast";
class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            
            // DataFilterd: data,
            // horns:""
        };
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

   

    render() {
        return (
            <div>

                {this.props.dataSend.map((element, index) => {
                    return <HornedBeasts key={index} title={element.title} image_url={element.image_url} description={element.description} keyword={element.keyword} horns={element.horns} handleShow={this.handleShow} handleClose={this.handleClose} showModal={this.state.showModal} />

                })}
    
                




            </div>
        )
    }
}
export default Main;