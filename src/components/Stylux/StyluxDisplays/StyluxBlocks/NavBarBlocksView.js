import React from "react";
import {Link} from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H21,
    H22,
    H34,
    HR,
    Navbar1,
    Navbar2,
    SubNavbar1,
    SubNavbar2,
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    DropDownNav1,
    DropDownNav3,
    DropDownNav5,
} from "react-stylux";

export default function StyluxNavbarBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Navbar Blocks</H22>
                <Holder direction="column">
                    <H34>
                        Navbar1
                    </H34>
                    <Navbar1>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar1>
                    <H34>
                        Navbar1
                    </H34>
                    <Navbar1
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
                    </Navbar1>
                    <H34>
                        Navbar1
                    </H34>
                    <Navbar1
                        direction="column"
                        columnAlign='flex-start'
                        padding="0 0 0 7%"
                    >
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar1>
                    </Holder>
                <Holder
                    direction='column'
                    height="600px">
                    <H34>
                        Navbar2
                    </H34>
                    <Navbar2>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Shop</a>
                        <a href="#">Contact</a>
                        <a href="#">Contact</a>
                        <a href="#">Contact</a>

                        <a href="#">Contact</a>
                    </Navbar2>
                </Holder>
                <Holder direction="column">
                <H21>
                    Sub Navbars
                </H21>
                <H34>
                    Sub Navbar1
                </H34>
                <SubNavbar1
                    padding="0 0 0 5%"
                    zIndex='250'>
                    <Link to="/blocks/navbarviews">item1</Link>
                    <Link to="/blocks/navbarviews">item2</Link>
                    <Link to="/blocks/navbarviews">item3</Link>
                    <Link to="/blocks/navbarviews">item4</Link>
                    <Link to="/blocks/navbarviews">item5</Link>
                </SubNavbar1>
                <H21>
                    Brand Stuff
                </H21>
                <H34>
                    Brand1
                </H34>
                <Brand1>
                    {}
                    Stylux
                </Brand1>
                <H34>
                    Brand2
                </H34>
                <Brand2>
                    {}
                </Brand2>
                <H34>
                    Brand3
                </H34>
                <Brand3>
                    {}
                </Brand3>
                <H34>
                    Brand4
                </H34>
                <Brand3>
                    {}
                </Brand3>
                <H34>
                    Brand5
                </H34>
                <H21>
                    DropDown Navigation
                </H21>
                <H34>
                    DropDown Navigation 1
                </H34>
                <Navbar1>
                    <DropDownNav1>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav1>
                    <DropDownNav1>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav1>
                    <DropDownNav1>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav1>
                    <DropDownNav1>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <DropDownNav5
                            background="white">
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </DropDownNav5>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav1>
                    <DropDownNav1>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </DropDownNav1>
                </Navbar1>
                <H34>
                    DropDown Navigation 2
                </H34>
                <H34>
                    DropDown Navigation 3
                </H34>
                <Navbar1>
                    <DropDownNav3
                        background="white">
                        <Link to="">item 0</Link>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                    </DropDownNav3>
                    <DropDownNav3
                        background="white">
                        <Link to="">item 0</Link>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                    </DropDownNav3>
                    <DropDownNav3
                        background="white">
                        <Link to="">item 0</Link>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                        <Navbar1
                            direction="column">
                            <Link to="">Item 1</Link>
                            <Link to="">Item 2</Link>
                            <Link to="">Item 3</Link>
                        </Navbar1>
                    </DropDownNav3>
                </Navbar1>
                <H34>
                    DropDown Navigation 4
                </H34>

                <H34>
                    DropDown Navigation 5
                </H34>
                <Navbar1
                    direction="column">
                    <DropDownNav5
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav5>
                    <DropDownNav5
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav5>
                    <DropDownNav5
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav5>
                    <DropDownNav5
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav5>
                    <DropDownNav5
                        background="white">
                        <Link to="">Item 1</Link>
                        <Link to="">Item 2</Link>
                        <Link to="">Item 3</Link>
                        <Link to="">Item 4</Link>
                        <Link to="">Item 5</Link>
                    </DropDownNav5>
                </Navbar1>
            </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 