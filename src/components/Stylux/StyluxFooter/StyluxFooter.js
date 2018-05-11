import React from 'react';
import { Link } from 'react-router-dom';

import {
    Wrapper,
    Holder,
    P,
    Navbar,
    HR,
} from "react-stylux";

export default function StyluxFooter() {
    return (
            <Wrapper>
                <Navbar
                    navbarWidth='75%'>
                    <a href="https://www.facebook.com/FoxDesignAgency/"  target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/Fox-Design-Agency/react-stylux"  target="_blank" rel="noopener noreferrer"></a>
                </Navbar>
                <HR />
                <Holder
                    justifyBlock2="flex-start"
                    justifyBlock3="flex-start">
                    <Navbar
                        direction="column"
                        padding="0 10px 0 0"
                        fontSize="0.7em">
                       
                    </Navbar>
                </Holder>
                <HR />
                <P box="2">Copyright &copy; 2018 - <a href="https://foxdesignagency.com" target="_blank" rel="noopener noreferrer">Fox Design Agency</a></P>
            </Wrapper>
    )
}
