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
                    box="2"
                    fontVariant="small-caps"
                   totalWidth='80%'
                    smDis='none'>
                    <Link to="/aristos">home</Link>
                    <Link to="/aristos/documentation">documentation</Link>
                    <Link to="/aristos/changelog">changelog</Link>
                </Navbar>
                <Navbar
                    box="1"
                    totalWidth="200px"
                    align="flex-end"
                    count='3'>
                    <a href="https://www.facebook.com/FoxDesignAgency/" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/Fox-Design-Agency/Aristos-CMS-node" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/Fox-Design-Agency/Aristos-CMS-Themes-ejs" target="_blank" rel="noopener noreferrer"></a>
                    <Link to="/aristos">home</Link>
                    <Link to="/aristos/documentation">documentation</Link>
                    <Link to="/aristos/changelog">changelog</Link>
                    <a href="https://www.facebook.com/FoxDesignAgency/" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/Fox-Design-Agency/Aristos-CMS-node" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/Fox-Design-Agency/Aristos-CMS-Themes-ejs" target="_blank" rel="noopener noreferrer"></a>
                </Navbar>
            </Holder>
            <HR />
        </Wrapper>
    )
}