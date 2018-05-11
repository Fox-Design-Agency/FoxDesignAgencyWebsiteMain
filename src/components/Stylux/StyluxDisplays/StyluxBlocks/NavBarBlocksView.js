import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    Holder,
    H,
    HR,
    Navbar,
    SubNavbar,
    Brand,
    DropDownNav,
} from "react-stylux";

export default function StyluxNavbarBlocksViews() {
    return (
        <Wrapper>
            <StyluxHeader />

            <BlocksSubNavBar />
            <H>Navbar Blocks</H>
            <Holder direction="column">
                <Link to="/react-stylux/documentation/navbar"><H>
                    Navbar default && box="1"
                    </H></Link>
                <Navbar>
                    <Link to="/blocks/navbarviews">item1</Link>
                    <Link to="/blocks/navbarviews">item2</Link>
                    <Link to="/blocks/navbarviews">item3</Link>
                    <Link to="/blocks/navbarviews">item4</Link>
                    <Link to="/blocks/navbarviews">item5</Link>
                </Navbar>
                <Link to="/react-stylux/documentation/navbar"><H>
                    Navbar default && box="1"
                    </H></Link>
                <Navbar
                    height='100px'
                    padding='0 7%'
                    navbarWidth='20%'
                    align="flex-end"
                >
                    <Link to="twitter.com"></Link>
                    <Link to="facebook.com"></Link>
                    <Link to="linkedin.com"></Link>
                    <Link to="dribbble.com"></Link>
                    <Link to="youtube.com"></Link>
                </Navbar>
                <Link to="/react-stylux/documentation/navbar"><H>
                    Navbar default && box="1"
                    </H></Link>
                <Navbar
                    direction="column"
                    columnAlign='flex-start'
                    padding="0 0 0 7%"
                >
                    <Link to="/blocks/navbarviews">item1</Link>
                    <Link to="/blocks/navbarviews">item2</Link>
                    <Link to="/blocks/navbarviews">item3</Link>
                    <Link to="/blocks/navbarviews">item4</Link>
                    <Link to="/blocks/navbarviews">item5</Link>
                </Navbar>
            </Holder>
            <Holder direction="column">
                <H>
                    Sub Navbars
                </H>
                <Link to="/react-stylux/documentation/subnavbar"><H>
                    Sub Navbar default && box="1"
                </H></Link>
                <SubNavbar
                    padding="0 0 0 5%"
                    zIndex='250'>
                    <Link to="/blocks/navbarviews">item1</Link>
                    <Link to="/blocks/navbarviews">item2</Link>
                    <Link to="/blocks/navbarviews">item3</Link>
                    <Link to="/blocks/navbarviews">item4</Link>
                    <Link to="/blocks/navbarviews">item5</Link>
                </SubNavbar>
                <H>
                    Brand Stuff
                </H>
                <H>
                    Brand box="1"
                </H>
                <Brand>
                    {}
                    Stylux
                </Brand>
                <H>
                    Brand default && box="2"
                </H>
                <Brand>
                    {}
                </Brand>
                <H>
                    Brand box="3"
                </H>
                <Brand>
                    {}
                </Brand>
                <H>
                    Brand box="4"
                </H>
                <Brand>
                    {}
                </Brand>
                <H>
                    Brand box="5"
                </H>
                <H>
                    DropDown Navigation
                </H>
                <Link to="/react-stylux/documentation/dropdownnav"><H>
                    DropDown Navigation 1
                </H></Link>
                <Navbar>
                    <DropDownNav>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav>
                    <DropDownNav>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav>
                    <DropDownNav>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav>
                    <DropDownNav>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <DropDownNav
                            background="white">
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </DropDownNav>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav>
                    <DropDownNav>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav>
                </Navbar>
                <H>
                    DropDown Navigation 2
                </H>
                <Link to="/react-stylux/documentation/dropdownnav"><H>
                    DropDown Navigation 3
                </H></Link>
                <Navbar>
                    <DropDownNav
                        background="white">
                        <Link to="">item 0</Link>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                    </DropDownNav>
                    <DropDownNav
                        background="white">
                        <Link to="">item 0</Link>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                    </DropDownNav>
                    <DropDownNav
                        background="white">
                        <Link to="">item 0</Link>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                        <Navbar
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar>
                    </DropDownNav>
                </Navbar>
                <H>
                    DropDown Navigation 4
                </H>

                <Link to="/react-stylux/documentation/dropdownnav"><H>
                    DropDown Navigation 5
                </H></Link>
                <Navbar
                    direction="column">
                    <DropDownNav
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav>
                    <DropDownNav
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav>
                    <DropDownNav
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav>
                    <DropDownNav
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav>
                    <DropDownNav
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav>
                </Navbar>
            </Holder>
            <HR />

            <StyluxFooter />
        </Wrapper>
    )
} 