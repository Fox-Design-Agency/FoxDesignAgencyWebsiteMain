import React from 'react';
import { Link } from "react-router-dom";

import {
    Container,
    Holder,
    NavBar1,
    P4,
    Brand2
} from "react-stylux";

import foxtail from "../../assets/logo/foxtail2-1.svg";

export default function Header() {
    return (
        <Container>
            <Holder
                block2="6">
                <Link to="/">
                    <Brand2>
                        {foxtail}
                    </Brand2>
                </Link>
                <NavBar1
                    navbarWidth="800px"
                    align="flex-end">
                    <Link to="/">Home</Link>
                    <Link to="/react-stylux">Stylux</Link>
                    <Link to="/">Projects</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                </NavBar1>
            </Holder>
        </Container>
    );
}
