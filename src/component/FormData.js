import React from "react";
import { Form , Button} from 'react-bootstrap/'

class FormData extends React.Component{

    render(){
        return(

            <>
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
        </>


        )
    }
}

export default FormData;