import React, { Component } from 'react';

import {
    Container,
    H23,
    Brand3,
    NavBar1,
    P4
} from "react-stylux";

import foxtail from "./assets/logo/foxtail2-1.svg";

class App extends Component {
    render() {
        return (
            <Container>
                <H23>Coming Soon...</H23>
                <Brand3
                    size="lg">
                    {foxtail}
                </Brand3>
                <NavBar1>
                    <a href="https://www.facebook.com/FoxDesignAgency/"></a>
                    <a href="https://github.com/Fox-Design-Agency"></a>
                </NavBar1>
                <P4>Copyright &copy; 2018 <a href="https://foxdesignagency.com">Fox Design Agency</a></P4>
            </Container>
        );
    }
}

export default App;
