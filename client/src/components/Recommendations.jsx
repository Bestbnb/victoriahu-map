import React from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import Image from './Image.jsx';


class Recommendations extends React.Component {
    render() {
        var style = {
            background: "green"
        }
        return (
            <div>
            <div id = 'title'><title>Recommendations</title></div>
            <Grid fluid>
                <Row>
                    
                    <Col xs = {6} md = {3} style = {style}>
                    <Image src = {"https://images.offthebeatinbudapest.com/3/f/3/5/c/3f35cfc7f05686f0f70be66ae04376c2fe963992-krizia-restaurant-budapest-24.jpeg"}/>
                    <p></p>
                    House of Fettucine Alfredo
                    <p></p>
                    5 stars
                    </Col>
                    <Col xs = {6} md = {3} style = {style}>
                    <Image src = {'https://media-cdn.tripadvisor.com/media/photo-s/0b/55/bb/d2/taverna-trilussa.jpg'}/>
                    
                    testing
                    </Col>
                    <Col xs = {6} md = {3} style = {style}>
                    <Image src = {'https://assets.bonappetit.com/photos/57aced6df1c801a1038bc90d/master/w_1200,c_limit/pasta-alla-gricia1.jpg'}/>
                    I really enjoy pastries.
                    </Col>
                    <Col xs = {6} md = {3} style = {style}>
                    <Image src = {'https://media-cdn.tripadvisor.com/media/photo-s/0c/dd/8a/bb/antico-vinaio-via-dei.jpg'}/>
                    I really enjoy pastries.
                    </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}

export default Recommendations;
