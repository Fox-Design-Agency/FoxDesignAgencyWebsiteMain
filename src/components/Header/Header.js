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
                block2="6"
                justifyBlock2="flex-end">
                <Link to="/">
                    <Brand>
                        {foxtail}
                    </Brand>
                </Link>
                <Navbar
                    box="2"
                    totalWidth="800px"
                    fontVariant="small-caps"
                    count="5">
                    <Link to="/">home</Link>
                    <Link to="/react-stylux">stylux</Link>
                    <Link to="/aristos">aristos</Link>
                    <Link to="/projects">projects</Link>
                    <Link to="/about">about</Link>
                    <Link to="/">contact</Link>
                    <Link to="/">hjome</Link>
                    <Link to="/react-stylux">stylux</Link>
                    <Link to="/aristos">aristos</Link>
                    <Link to="/projects">projects</Link>
                    <Link to="/about">about</Link>
                    <Link to="/">contact</Link>
                </Navbar>
            </Holder>
        </Wrapper>
    );
}
