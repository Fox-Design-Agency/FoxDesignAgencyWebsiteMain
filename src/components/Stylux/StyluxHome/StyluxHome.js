import React from "react";
import { Link } from "react-router-dom"
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Wrapper,
    Holder,
    H,
    HR,
    P,
    Navbar,
    List,
} from "react-stylux";

export default function StyluxHome() {
    return (
        <Wrapper>
            <StyluxHeader />

            <Holder
                direction="column">
                <Holder
                    block1="0.3"
                    alignBlock2="flex-start">
                    <Holder
                        direction="column">
                        <H>Block Displays</H>
                        <Navbar direction="column">
                            <Link to="/react-stylux/layout">Wrapper</Link>
                            <Link to="/react-stylux/layout">Holder</Link>
                            <Link to="/react-stylux/blocks/headingviews">Headers</Link>
                            <Link to="/react-stylux/blocks/paragraphviews">Paragraphs</Link>
                            <Link to="/react-stylux/blocks/buttonviews">Buttons</Link>
                            <Link to="/react-stylux/blocks/imageviews">Images</Link>
                            <Link to="/react-stylux/blocks/listviews">Lists</Link>
                            <Link to="/react-stylux/blocks/cardviews">Cards</Link>
                            <Link to="/react-stylux/blocks/navbarviews">Navbars</Link>
                            <Link to="/react-stylux/blocks/carouselviews">Carousels</Link>
                            <Link to="/react-stylux/blocks/togglersviews">Togglers</Link>
                            <Link to="/react-stylux/blocks/tableviews">Table</Link>
                            <Link to="/react-stylux/blocks/formviews">Form</Link>
                        </Navbar>
                    </Holder>
                    <Holder direction="column">
                        <H>Current Version: 0.7.11</H>
                        <H>Latest Changes</H>
                        <List width="950px">
                            {"The entire library has basically been rebuilt in 0.7.6 && 0.7.11"}
                            {"Fixed Modal Export"}
                            {"rebuilt Image, needs image responsive size work."}
                            {"rebuilt Button"}
                            {"rebuilt P"}
                            {"rebuilt PLQ"}
                            {"rebuilt Hero"}
                            {"rebuilt Brand"}
                            {"rebuilt Carousel"}
                            {"rebuilt List"}
                            {"rebuilt Table"}
                            {"rebuilt Modal"}
                            {"rebuilt Toggler"}
                            {"got rid of setting toggle text on props for modal and toggler, the first child now toggles the modal or toggler box 1 & 2. This should allow these two items to wrap other components."}
                            {"rebuilt H, needs mad amount of more work for font sizes and actual variations."}
                            
                        </List>
                    </Holder>
                </Holder>
                <HR />
                <H>Current Focus</H>
                <List width="800px">
                    {"Getting all blocks to have some responsive behavior"}
                    {"Get a first draft on all blocks"}
                    {"Get as many blocks as possible condensed to switch variant on type"}
                    {"Build the foundation for a themeing ability through a Provider"}
                    {"Make sure all props are linked correctly and work"}
                    {"I'm not worried about making things look good right now, that will be a concern when I implement the themeing ability. Due to this, everything is going to look the same, but as long as it works, I'm happy. It is possible to change the default look, but that gets repetetive and anti DRY. I am making sure that every block does have a className and id prop as well to help with this."}
                </List>
                <HR />
                <H>Known Bugs</H>
                <P>Too many...</P>
                <HR />
                <H>Want to Help?</H>
                <P>Well... Right now you can't, but soon... soon you will be able to contribute and comment on changes.</P>
                <HR />
                <H>Acknowledgments</H>
                <List
                    width="1200px">
                    <a href="https://devmountain.com/" target="_blank" rel="noopener noreferrer">A Giant Thank you to Dev Mountain for teaching me to code good</a>
                    {"A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work"}
                    <a href="http://meyerweb.com/eric/tools/css/reset/" target="_blank" rel="noopener noreferrer">{"Credit to meyer for use of a reset file"}</a>
                    {"Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style object"}
                    <a href="http://daneden.me/animate" target="_blank" rel="noopener noreferrer">{"Massive credit for the animations to Daniel Eden - animate.css"}</a>
                    {"A Huge thanks to www.w3schools.com and their awesome tutorials, many first draft items were created with those"}
                </List>
            </Holder>
            <HR />

            <StyluxFooter />
        </Wrapper>
    )
} 