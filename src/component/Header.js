import React from "react";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Header extends React.Component {

    render() {
        return (
            // <div>
            // <h1>Horned Beasts</h1>

            // </div>
            <Card>
                <Card.Header>Horned Beasts</Card.Header>
                <Card.Body>
                    <Card.Title>Horned Beasts Images</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">See more</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Header;