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
            arr: [], 
            index: 0
        }
        this.createDollars = this.createDollars.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
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
    nextSlide () {
        console.log("hello");
        if (this.state.index < 1) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    prevSlide() {
        console.log(this.state.index);
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
        }
    }


    render() {
        
        var style = {
            background: "white",
            marginTop: '420px',
            padding: '10px'
        }
        const fontStyle = {
            fontSize: 22,
            fontWeight: 'bold',
            lineHeight: 5,
            marginLeft: '15px'
        }

        var startingImage = this.state.index;
        var endingImage = this.state.index + 3;


        return (
            <div style = {style} className = "recComponent">
            <div id = 'title'><title>Recommendations</title></div>
            <div style = {fontStyle}>Top Rated Restaurants Nearby</div>
            <Grid fluid>
                <Row>
                <a className="carousel-control-prev" href="#recipeCarousel" onClick = {this.prevSlide}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                
                    {this.state.arr.slice(startingImage,endingImage).map(rec => (
                        
                        <Col xs = {6} md = {4}>
                        <div className = "heart"><i class="far fa-heart"></i></div>
                        <Image src = {rec.image}/>
                        <br></br>
                        <Description name = {rec.name} dollars = {this.createDollars(rec.dollars)} stars = {rec.stars}/>
                        <a className="carousel-control-next" href="#recipeCarousel" onClick = {this.nextSlide}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </Col>
                    ))}
                    
                </Row>
            </Grid>
            </div>
        )
    }
}

export default Recommendations;
