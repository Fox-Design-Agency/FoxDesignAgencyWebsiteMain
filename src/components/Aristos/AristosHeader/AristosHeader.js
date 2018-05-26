import React from 'react';
import { Link } from 'react-router-dom';

import {
    Holder,
    Wrapper,
    Navbar,
    DropDownNav,
    Brand,
    HR,
    SubNavbar,
} from 'react-stylux';

export default function AristosHeader() {
    return (
            <Wrapper>
                <SubNavbar
                    align="flex-end"
                    smDis="flex">
                    <Link to="/">Back to Fox Design Agency</Link>
                </SubNavbar>
                <Holder
                    alignBlock1="flex-end"
                >
                    <Navbar
                        block="1"
                        fontVariant="small-caps"
                        navbarWidth='80%'
                        smDis='none'>
                        <Link to="/react-stylux">home</Link>
                        <DropDownNav
                            background='white'>
                            components
                            <Link to="/react-stylux/layout">layout</Link>
                            <Link to="/react-stylux/blocks">blocks</Link>
                        </DropDownNav>
                        <Link to="/react-stylux/documentation">documentation</Link>
                        <Link to="/react-stylux/changelog">changelog</Link>
                    </Navbar>
                    <Navbar
                        block="1"
                        navbarWidth="50%"
                        align="flex-end"
                        count='2'>
                        <a href="https://www.facebook.com/FoxDesignAgency/" target="_blank" rel="noopener noreferrer"></a>
                        <a href="https://github.com/Fox-Design-Agency/react-stylux" target="_blank" rel="noopener noreferrer"></a>
                        <Link to="/react-stylux">home</Link>
                        <Link to="/react-stylux">layout</Link>
                        <Link to="/blocks">blocks</Link>
                        <Link to="/documentation">documentation</Link>
                        <Link to="/react-stylux/changelog">changelog</Link>
                        <a href="https://www.facebook.com/FoxDesignAgency/" target="_blank" rel="noopener noreferrer"></a>
                        <a href="https://github.com/Fox-Design-Agency/react-stylux" target="_blank" rel="noopener noreferrer"></a>
                    </Navbar>
                </Holder>
                <HR />
            </Wrapper>
    )
}