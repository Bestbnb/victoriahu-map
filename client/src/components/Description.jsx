import React from "react";

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        var starStyle = {
            width: this.props.stars/5 * 100
        }
        return(
            <div>
                {this.props.name}
                <br></br>
                {this.props.dollars}
                <br></br>
                <div className="star-ratings-css">
                    <div className="star-ratings-css-top" style={starStyle}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>
            </div>
            
        )
    }
}

export default Description;