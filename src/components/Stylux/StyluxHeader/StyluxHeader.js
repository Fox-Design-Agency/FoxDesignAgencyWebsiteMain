import React from 'react';
import { Link } from 'react-router-dom';

import {
    Holder,
    Container,
    NavBar1,
    DropDownNav1,
    Brand1,
    HR,
    SubNavBar1,
} from 'react-stylux';

export default function StyluxHeader() {
    return (
        <header>
            <Container>
                <SubNavBar1
                    align="flex-end"
                    smDis="flex">
                    <Link to="/">Back to Fox Design Agency</Link>
                </SubNavBar1>
                <Holder
                    alignBlock1="flex-end"
                >
                    <NavBar1
                        fontVariant="small-caps"
                        navbarWidth='80%'
                        smDis='none'>
                        <Link to="/react-stylux">home</Link>
                    <DropDownNav1
                        background='white'>
                        components
                            <Link to="/react-stylux">containers</Link>
                        <Link to="/react-stylux">holders</Link>
                        <Link to="/react-stylux/blocks">blocks</Link>
                    </DropDownNav1>
                    <Link to="/react-stylux/documentation">documentation</Link>
                    </NavBar1>
                <NavBar1
                    navbarWidth="50%"
                    align="flex-end"
                    count='2'>
                    <Link to="https://www.facebook.com/FoxDesignAgency/"></Link>
                    <Link to="https://github.com/Fox-Design-Agency/react-stylux"></Link>
                    <Link to="/react-stylux">home</Link>
                    <Link to="/containers">containers</Link>
                    <Link to="/holders">holders</Link>
                    <Link to="/blocks">blocks</Link>
                    <Link to="/documentation">documentation</Link>
                    <Link to="https://www.facebook.com/FoxDesignAgency/"></Link>
                    <Link to="https://github.com/Fox-Design-Agency/react-stylux"></Link>
                </NavBar1>
                </Holder>
            <HR />
            </Container>
        </header >
    )
}