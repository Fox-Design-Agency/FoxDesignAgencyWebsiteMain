import React from "react";
import { Link } from "react-router-dom"
import {
    Container,
    Holder,
    H22,
    Toggler2,
    Navbar1,
} from "react-stylux";

export default function StyluxDocumentation() {
    return (
        <Holder direction="column">
            <Toggler2
                buttonText="How to Use"
                position="relative"
                shadow="0"
                width="200px">
                <Navbar1
                    direction="column">
                    <Link to="/react-stylux/documentation/introduction">Introduction</Link>
                    <Link to="/react-stylux/documentation/getting-started">Getting Started</Link>
                    <Link to="/react-stylux/documentation/whats-included">What's Included</Link>
                    <Link to="/react-stylux/documentation/step-by-step">Step by Step</Link>
                    <Link to="/react-stylux/documentation/animation-notes">Animation Notes</Link>
                    <Link to="/react-stylux/documentation/responsive-notes">Responsive Notes</Link>
                </Navbar1>
            </Toggler2>
            <Toggler2
                position="relative"
                shadow="0"
                width="200px"
                buttonText="Layout">
                <Navbar1
                    direction="column">
                    <Link to="/react-stylux/documentation/layout-container">Container</Link>
                    <Link to="/react-stylux/documentation/layout-holder">Holder</Link>
                    <Link to="/react-stylux/documentation/layout-hr">HR</Link>
                </Navbar1>
            </Toggler2>
            <Toggler2
                position="relative"
                shadow="0"
                width="200px"
                buttonText="Blocks">
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Other">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Cards">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Togglers">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Forms">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Lists">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Carousels">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Navigation">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Images">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Buttons">
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Text">
                    <Toggler2
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Headings">
                        <Navbar1
                            direction="column">
                        </Navbar1>

                    </Toggler2>
                    <Toggler2
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Paragraphs">
                        <Navbar1
                            direction="column">
                        </Navbar1>
                    </Toggler2>
                    <Toggler2
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Pull Quotes">
                        <Navbar1
                            direction="column">
                        </Navbar1>
                    </Toggler2>

                </Toggler2>

            </Toggler2>

        </Holder>

    )
} 