import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Holder,
    P2,
    Navbar1,
    HR,
} from "react-stylux";

export default function StyluxFooter() {
    return (
        <footer>
            <Container>
                <Navbar1
                    navbarWidth='75%'>
                    <Link to="https://www.facebook.com/FoxDesignAgency/"></Link>
                    <Link to="https://github.com/Fox-Design-Agency/react-stylux"></Link>
                </Navbar1>
                <HR />
                <Holder
                    justifyBlock2="flex-start"
                    justifyBlock3="flex-start">
                    <Navbar1
                        direction="column"
                        padding="0 10px 0 0"
                        fontSize="0.7em">
                        Elements
                        <Link to="/containers">Containers</Link>
                        <Link to="/holders">Holders</Link>
                        <Link to="/blocks">Blocks</Link>
                    </Navbar1>
                </Holder>
                <HR />
                <P2>Copyright &copy; 2018 - <a href="https://foxdesignagency.com" target="_blank" rel="noopener noreferrer">Fox Design Agency</a></P2>
            </Container>
        </footer>
    )
}
