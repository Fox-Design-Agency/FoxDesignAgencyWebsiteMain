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
                    <Navbar1
                        direction="column">
                        <Link to="/react-stylux/documentation/other-a">A</Link>
                    </Navbar1>
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Cards">
                    <Navbar1
                        direction="column">
                        <Link to="/react-stylux/documentation/card-1">Card1</Link>
                        <Link to="/react-stylux/documentation/card-2">Card2</Link>
                        <Link to="/react-stylux/documentation/card-3">Card3</Link>
                    </Navbar1>
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Togglers">
                    <Navbar1
                        direction="column">
                        <Link to="/react-stylux/documentation/toggler-1">Toggler1</Link>
                        <Link to="/react-stylux/documentation/toggler-2">Toggler2</Link>
                        <Link to="/react-stylux/documentation/toggler-3">Toggler3</Link>
                        <Link to="/react-stylux/documentation/toggler-4">Toggler4</Link>
                    </Navbar1>
                    <Toggler2
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Popups">
                        <Navbar1
                            direction="column">
                            <Link to="/react-stylux/documentation/toggler-popup-1">Popup1</Link>
                            <Link to="/react-stylux/documentation/toggler-popup-2">Popup2</Link>
                        </Navbar1>
                    </Toggler2>
                    <Toggler2
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Modals">
                        <Navbar1
                            direction="column">
                            <Link to="/react-stylux/documentation/toggler-modal-1">Modal1</Link>
                            <Link to="/react-stylux/documentation/toggler-modal-2">Modal2</Link>
                            <Link to="/react-stylux/documentation/toggler-modal-3">Modal3</Link>
                        </Navbar1>
                    </Toggler2>
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Forms">
                    <Navbar1 direction="column">
                        <Link to="/react-stylux/documentation/form-1">Form1</Link>
                    </Navbar1>
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Lists">
                    <Navbar1 direction="column">
                        <Link to="/react-stylux/documentation/numberlist-1">Numberlist1</Link>
                        <Link to="/react-stylux/documentation/numberlist-2">Numberlist2</Link>
                        <Link to="/react-stylux/documentation/numberlist-3">Numberlist3</Link>
                        <Link to="/react-stylux/documentation/bulletlist-1">Bulletlist1</Link>
                        <Link to="/react-stylux/documentation/bulletlist-2">Bulletlist2</Link>
                    </Navbar1>
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Carousels">
                    <Navbar1 direction="column">
                        <Link to="/react-stylux/documentation/carousel-1">Carousel1</Link>
                        <Link to="/react-stylux/documentation/carousel-2">Carousel2</Link>
                        <Link to="/react-stylux/documentation/carousel-3">Carousel3</Link>
                        <Link to="/react-stylux/documentation/carousel-4">Carousel4</Link>
                        <Link to="/react-stylux/documentation/carousel-5">Carousel5</Link>
                    </Navbar1>
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Navigation">
                    <Navbar1 direction="column">
                        <Link to="/react-stylux/documentation/navbar-1">Navbar1</Link>
                        <Link to="/react-stylux/documentation/navbar-2">Navbar2</Link>
                        <Link to="/react-stylux/documentation/subnavbar-1">Subnavbar1</Link>
                        <Link to="/react-stylux/documentation/dropdownnav-1">Dropdownnav1</Link>
                    </Navbar1>
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Images">
                    <Navbar1 direction="column">
                        <Link to="/react-stylux/documentation/circle-image">CircleImage</Link>
                        <Link to="/react-stylux/documentation/oval-image">OvalImage</Link>
                        <Link to="/react-stylux/documentation/rounded-image">RoundedImage</Link>
                        <Link to="/react-stylux/documentation/square-image">SquareImage</Link>
                        <Link to="/react-stylux/documentation/rounded-rectangle-image">RoundedRectangleImage</Link>
                        <Link to="/react-stylux/documentation/rectangle-image">RectangleImage</Link>
                        <Link to="/react-stylux/documentation/tall-rounded-rectangle-image">TallRoundedRectangleImage</Link>
                        <Link to="/react-stylux/documentation/tall-rectangle-image">TallRectangleImage</Link>
                        <Link to="/react-stylux/documentation/figure">Figure</Link>
                    </Navbar1>
                </Toggler2>
                <Toggler2
                    position="relative"
                    shadow="0"
                    width="200px"
                    buttonText="Buttons">
                    <Navbar1 direction="column">
                        <Link to="/react-stylux/documentation/flat-button">FlatButton</Link>
                        <Link to="/react-stylux/documentation/raised-button">RaisedButton</Link>
                        <Link to="/react-stylux/documentation/floating-button">FloatingButton</Link>
                        <Link to="/react-stylux/documentation/block-button">BlockButton</Link>
                        <Link to="/react-stylux/documentation/text-button">TextButton</Link>
                    </Navbar1>
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

                        <Toggler2
                            position="relative"
                            shadow="0"
                            width="200px"
                            buttonText="H4">
                            <Navbar1 direction="column">
                                <Link to="/react-stylux/documentation/h-4-1">H41</Link>
                                <Link to="/react-stylux/documentation/h-4-2">H42</Link>
                                <Link to="/react-stylux/documentation/h-4-3">H43</Link>
                                <Link to="/react-stylux/documentation/h-4-4">H44</Link>
                                <Link to="/react-stylux/documentation/h-4-5">H45</Link>
                            </Navbar1>

                        </Toggler2> <Toggler2
                            position="relative"
                            shadow="0"
                            width="200px"
                            buttonText="H3">
                            <Navbar1 direction="column">
                                <Link to="/react-stylux/documentation/h-3-1">H31</Link>
                                <Link to="/react-stylux/documentation/h-3-2">H32</Link>
                                <Link to="/react-stylux/documentation/h-3-3">H33</Link>
                                <Link to="/react-stylux/documentation/h-3-4">H34</Link>
                                <Link to="/react-stylux/documentation/h-3-5">H35</Link>
                            </Navbar1>

                        </Toggler2>
                        <Toggler2
                            position="relative"
                            shadow="0"
                            width="200px"
                            buttonText="H2">
                            <Navbar1 direction="column">
                                <Link to="/react-stylux/documentation/h-2-1">H21</Link>
                                <Link to="/react-stylux/documentation/h-2-2">H22</Link>
                                <Link to="/react-stylux/documentation/h-2-3">H23</Link>
                                <Link to="/react-stylux/documentation/h-2-4">H24</Link>
                                <Link to="/react-stylux/documentation/h-2-5">H25</Link>
                            </Navbar1>

                        </Toggler2>
                        <Toggler2
                            position="relative"
                            shadow="0"
                            width="200px"
                            buttonText="H1">
                            <Navbar1 direction="column">
                                <Link to="/react-stylux/documentation/h-1-1">H11</Link>
                                <Link to="/react-stylux/documentation/h-1-2">H12</Link>
                                <Link to="/react-stylux/documentation/h-1-3">H13</Link>
                                <Link to="/react-stylux/documentation/h-1-4">H14</Link>
                                <Link to="/react-stylux/documentation/h-1-5">H15</Link>
                            </Navbar1>

                        </Toggler2>
                    </Toggler2>
                    <Toggler2
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Paragraphs">
                        <Navbar1
                            direction="column">
                            <Link to="/react-stylux/documentation/p-1">P1</Link>
                            <Link to="/react-stylux/documentation/p-2">P2</Link>
                            <Link to="/react-stylux/documentation/p-3">P3</Link>
                            <Link to="/react-stylux/documentation/p-4">P4</Link>
                            <Link to="/react-stylux/documentation/p-5">P5</Link>
                        </Navbar1>
                    </Toggler2>
                    <Toggler2
                        position="relative"
                        shadow="0"
                        width="200px"
                        buttonText="Pull Quotes">
                        <Navbar1
                            direction="column">
                            <Link to="/react-stylux/documentation/plq-1">PLQ1</Link>
                            <Link to="/react-stylux/documentation/plq-2">PLQ2</Link>
                        </Navbar1>
                    </Toggler2>

                </Toggler2>

            </Toggler2>

        </Holder>

    )
} 