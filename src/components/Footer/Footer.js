import React from 'react';

import {
    Container,
    Navbar1,
    P4
} from "react-stylux";

export default function Footer (){
        return (
            <Container>
                <Navbar1
                    navbarWidth="500px">
                    <a href="https://www.facebook.com/FoxDesignAgency/"  target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/Fox-Design-Agency" target="_blank" rel="noopener noreferrer"></a>
                </Navbar1>
                <P4>Copyright &copy; 2018 <a href="https://foxdesignagency.com" target="_blank" rel="noopener noreferrer">Fox Design Agency</a></P4>
            </Container>
        );
    }
