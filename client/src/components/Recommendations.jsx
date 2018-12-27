import React from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import Image from './Image.jsx';


class Recommendations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            dollar: 0,
            lat: '',
            lng: '', 
            stars: null,
            url: '',
        }
    }

    componentDidMount() {
        var myHeaders = new Headers();
        console.log("mounted");
        fetch('/recommendations', 
         { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }
               )
        .then(function(response) {
            return response.json();
        })
        .then((data) => {
            console.log(data[0]);
            this.setState({
                name: data[0].name,
                image: data[0].image,
                dollar: data[0].dollar,
                lat: data[0].lat,
                lng: data[0].lng,
                stars: data[0].stars,
                url: data[0].url
            })
            console.log("RECOMMENDATIONS $$$$$$$$$$$$$$$$", this.state);
        })
    }

    render() {
        var style = {
            background: "white",
            marginTop: '420px',
        }
        return (
            <div style = {style}>
            <div id = 'title'><title>Recommendations</title></div>
            <div>Top Rated Restaurants Nearby</div>
            <Grid fluid>
                <Row>
                    
                    <Col xs = {6} md = {3}>
                    <Image src = {"https://images.offthebeatinbudapest.com/3/f/3/5/c/3f35cfc7f05686f0f70be66ae04376c2fe963992-krizia-restaurant-budapest-24.jpeg"}/>
                    <p></p>
                    House of Fettucine Alfredo
                    <p></p>
                    $$
                    <p></p>
                    5 stars
                    </Col>
                    <Col xs = {6} md = {3}>
                    <Image src = {'https://media-cdn.tripadvisor.com/media/photo-s/0b/55/bb/d2/taverna-trilussa.jpg'}/>
                    <p></p>
                    House of Fettucine Alfredo
                    <p></p>
                    $$
                    <p></p>
                    5 stars
                    </Col>
                    <Col xs = {6} md = {3}>
                    <Image src = {'https://assets.bonappetit.com/photos/57aced6df1c801a1038bc90d/master/w_1200,c_limit/pasta-alla-gricia1.jpg'}/>
                    <p></p>
                    House of Fettucine Alfredo
                    <p></p>
                    $$
                    <p></p>
                    5 stars
                    </Col>
                    <Col xs = {6} md = {3}>
                    <Image src = {'https://media-cdn.tripadvisor.com/media/photo-s/0c/dd/8a/bb/antico-vinaio-via-dei.jpg'}/>
                    <p></p>
                    House of Fettucine Alfredo
                    <p></p>
                    $$
                    <p></p>
                    5 stars
                    </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}

export default Recommendations;
