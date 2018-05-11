import React from 'react';

import {
    Wrapper,
    Navbar,
    P
} from "react-stylux";

export default function Footer (){
        return (
            <Wrapper>
                <Navbar
                    navbarWidth="500px">
                    <a href="https://www.facebook.com/FoxDesignAgency/"  target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/Fox-Design-Agency" target="_blank" rel="noopener noreferrer"></a>
                </Navbar>
                <P box="2">Copyright &copy; 2018 -<a href="https://foxdesignagency.com" target="_blank" rel="noopener noreferrer">Fox Design Agency</a></P>
            </Wrapper>
        );
    }
