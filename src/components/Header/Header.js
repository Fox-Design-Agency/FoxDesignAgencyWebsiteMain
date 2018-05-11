import React from 'react';
import { Link } from "react-router-dom";

import {
    Wrapper,
    Holder,
    Navbar,
    Brand
} from "react-stylux";

import foxtail from "../../assets/logo/foxtail2-1.svg";

export default function Header() {
    return (
        <Wrapper>
            <Holder
                block2="6">
                <Link to="/">
                    <Brand>
                        {foxtail}
                    </Brand>
                </Link>
                <Navbar
                    navbarWidth="800px"
                    align="flex-end">
                    <Link to="/">Home</Link>
                    <Link to="/react-stylux">Stylux</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">Contact</Link>
                </Navbar>
            </Holder>
        </Wrapper>
    );
}
