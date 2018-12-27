import React from "react";
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import MapContainer from './MapContainer.jsx';
import Recommendations from './Recommendations.jsx';
// import Montserrat from './../../../fonts/Montserrat-Regular.ttf'

const GlobalStyles = createGlobalStyle`

    @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
    
    body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    }
    
    h1 {
    font-family: Roboto;
    }
`;
// src: url('${Montserrat}') format('truetype');


const StyledApp = styled.div`
    font-family: Montserrat,
    color: red
`;


class App extends React.Component {
    render() {
        return (
            <StyledApp>
                <MapContainer/>
                <Recommendations />
            </StyledApp>
            
        )
    }
}


StyledApp.displayName = 'StyledApp';
export default App;