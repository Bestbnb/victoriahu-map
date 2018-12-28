import React from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import Image from './Image.jsx';
import Description from './Description.jsx';


class Recommendations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rec1: {},
            rec2: {},
            rec3: {},
            rec4: {}, 
            arr: []
        }
        this.createDollars = this.createDollars.bind(this);
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
            console.log(data);
            this.setState({
                rec1: data[0],
                rec2: data[1],
                rec3: data[2],
                rec4: data[3],
                arr: [data[0], data[1], data[2], data[3]]
            })
            console.log("RECOMMENDATIONS $$$$$$$$$$$$$$$$", this.state);
        })
    }

    createDollars(num) {
        let result = [];

        for (var i = 0; i < num; i++) {
            result.push('$')
        }
        return result;
    } 

    render() {
        
        var style = {
            background: "white",
            marginTop: '420px',
            padding: '10px'
        }
        return (
            <div style = {style}>
            <div id = 'title'><title>Recommendations</title></div>
            <div>Top Rated Restaurants Nearby</div>
            <Grid fluid>
                <Row>
                    {this.state.arr.map(rec => (
                        <Col xs = {6} md = {3}>
                        <Image src = {rec.image}/>
                        <br></br>
                        <Description name = {rec.name} dollars = {this.createDollars(rec.dollars)} stars = {rec.stars}/>
                        </Col>
                    ))}
                </Row>
            </Grid>
            </div>
        )
    }
}

export default Recommendations;
