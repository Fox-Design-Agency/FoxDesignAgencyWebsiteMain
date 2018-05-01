import React from 'react';
import { Link } from 'react-router-dom';

import {
    Holder,
    Container,
    Navbar1,
    DropDownNav1,
    Brand1,
    HR,
    SubNavbar1,
} from 'react-stylux';

export default function StyluxHeader() {
    return (
        <header>
            <Container>
                <SubNavbar1
                    align="flex-end"
                    smDis="flex">
                    <Link to="/">Back to Fox Design Agency</Link>
                </SubNavbar1>
                <Holder
                    alignBlock1="flex-end"
                >
                    <Navbar1
                        fontVariant="small-caps"
                        navbarWidth='80%'
                        smDis='none'>
                        <Link to="/react-stylux">home</Link>
                        <DropDownNav1
                            background='white'>
                            components
                            <Link to="/react-stylux/layout">layout</Link>
                            <Link to="/react-stylux/blocks">blocks</Link>
                        </DropDownNav1>
                        <Link to="/react-stylux/documentation">documentation</Link>
                        <Link to="/react-stylux/changelog">changelog</Link>
                    </Navbar1>
                    <Navbar1
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
                    </Navbar1>
                </Holder>
                <HR />
            </Container>
        </header >
    )
}