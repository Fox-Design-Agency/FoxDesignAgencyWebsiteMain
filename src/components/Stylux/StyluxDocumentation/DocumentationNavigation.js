import React from "react";
import { Link } from "react-router-dom"
import {
    Wrapper,
    Holder,
    Toggler,
    Navbar,
} from "react-stylux";

export default function StyluxDocumentation() {
    return (
        <Wrapper>
            <Holder direction="column">
                <Toggler
                    buttonText="How to Use"
                    position="relative"
                    shadow="0"
                    width="200px">
                    <Navbar
                        direction="column">
                        <Link to="/react-stylux/documentation/introduction">Introduction</Link>
                        <Link to="/react-stylux/documentation/getting-started">Getting Started</Link>
                        <Link to="/react-stylux/documentation/whats-included">What's Included</Link>
                        <Link to="/react-stylux/documentation/step-by-step">Step by Step</Link>
                        <Link to="/react-stylux/documentation/animation-notes">Animation Notes</Link>
                        <Link to="/react-stylux/documentation/responsive-notes">Responsive Notes</Link>
                    </Navbar>
                </Toggler>
                <Toggler
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Layout">
                    <Navbar
                        direction="column">
                        <Link to="/react-stylux/documentation/layout-wrapper">Wrapper</Link>
                        <Link to="/react-stylux/documentation/layout-holder">Holder</Link>
                        <Link to="/react-stylux/documentation/layout-hr">HR</Link>
                    </Navbar>
                </Toggler>
                <Toggler
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Blocks">
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Other">
                        <Navbar
                            direction="column">
                            <Link to="/react-stylux/documentation/other-a">A</Link>
                        </Navbar>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Cards">
                        <Navbar
                            direction="column">
                            <Link to="/react-stylux/documentation/card">Card</Link>
                        </Navbar>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Togglers">
                        <Navbar
                            direction="column">
                            <Link to="/react-stylux/documentation/toggler">Toggler1</Link>
                        </Navbar>
                        <Toggler
                            position="relative"
                            shadow="0"
                            width="200px"
                            buttonText="Popups">
                            <Navbar
                                direction="column">
                                <Link to="/react-stylux/documentation/toggler-popup">Popup1</Link>
                            </Navbar>
                        </Toggler>
                        <Toggler
                            position="relative"
                            shadow="0"
                            width="200px"
                            buttonText="Modals">
                            <Navbar
                                direction="column">
                                <Link to="/react-stylux/documentation/toggler-modal">Modal1</Link>
                            </Navbar>
                        </Toggler>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Forms">
                        <Navbar direction="column">
                            <Link to="/react-stylux/documentation/form">Form1</Link>
                        </Navbar>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Lists">
                        <Navbar direction="column">
                            <Link to="/react-stylux/documentation/list">List</Link>
                        </Navbar>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Carousels">
                        <Navbar direction="column">
                            <Link to="/react-stylux/documentation/carousel">Carousel1</Link>
                        </Navbar>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Navigation">
                        <Navbar direction="column">
                            <Link to="/react-stylux/documentation/navbar">Navbar</Link>
                            <Link to="/react-stylux/documentation/subnavbar">SubNavbar</Link>
                            <Link to="/react-stylux/documentation/dropdownnav">Dropdownnav1</Link>
                        </Navbar>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Images">
                        <Navbar direction="column">
                            <Link to="/react-stylux/documentation/image">Image</Link>
                            <Link to="/react-stylux/documentation/figure">Figure</Link>
                        </Navbar>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Buttons">
                        <Navbar direction="column">
                            <Link to="/react-stylux/documentation/button">Button</Link>
                        </Navbar>
                    </Toggler>
                    <Toggler
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Text">
                        <Toggler
                            position="relative"
                            shadow="0"
                            width="200px"
                            buttonText="Headings">

                            <Toggler
                                position="relative"
                                shadow="0"
                                width="200px"
                                buttonText="H4">
                                <Navbar direction="column">
                                    <Link to="/react-stylux/documentation/h">H41</Link>
                                </Navbar>
                            </Toggler>

                        </Toggler>
                    </Toggler>
                    <Navbar direction="column">
                        <Link to="/react-stylux/documentation/p">P</Link>
                        <Link to="/react-stylux/documentation/plq">PLQ</Link>
                    </Navbar>

                </Toggler>

            </Holder >
        </Wrapper >
    )
} 