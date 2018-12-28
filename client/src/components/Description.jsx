import React from "react";

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return(
            <div>
                {this.props.name}
                <br></br>
                {this.props.dollars}
                <br></br>
                {this.props.stars} stars
            </div>
            
        )
    }
}

export default Description;