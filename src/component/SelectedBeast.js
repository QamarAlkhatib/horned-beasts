import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {


    render() {

        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title} 🦄 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: "#424242", color: "white" }}>

                        <img
                            src={this.props.image_url}
                            style={{ width: "80%", margin: "10px auto" }}
                        />
                        <hr></hr>
                        ℹ️ <strong>Description: </strong>{this.props.description}
                        <br></br>
                        🗝️<strong>Keyword: </strong>  {this.props.keyword}
                        <br></br>
                        🦌 <strong>Horns: </strong> {this.props.horns}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            See Another Unicorn
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    };

}

export default SelectedBeast;
