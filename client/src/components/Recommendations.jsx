import React from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';


class Recommendations extends React.Component {
    render() {
        var style = {
            background: "green"
        }
        return (
            <Grid fluid>
                <Row>
                    <Col xs = {6} md = {3} style = {style}>
                    <img src="https://images.offthebeatinbudapest.com/3/f/3/5/c/3f35cfc7f05686f0f70be66ae04376c2fe963992-krizia-restaurant-budapest-24.jpeg"></img>
                    <p></p>
                    House of Fettucine Alfredo
                    <p></p>
                    5 stars
                    </Col>
                    <Col xs = {6} md = {3} style = {style}>
                    testing
                    </Col>
                    <Col xs = {6} md = {3} style = {style}>
                    I really enjoy pastries.
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Recommendations;
