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
                        <H>Current Version: 0.7.26</H>
                        <H>Latest Changes</H>
                        <List width="950px">
                        {"Got rid of nestingstyles and rebuilt everything to use react-responsive"}
                        {"Fixed wrapper && Holder keys"}
                        {"Starting to add theme and fonts implementation through context"}
                        {"Theme and fonts work through the wrapper, a wrapper can inherit from another wrapper but that inheritence does not flow through the wrapper like a holder"}
                        {"box and vars switch statements being added to every block"}
                        {"The entire library has basically been rebuilt, so there are still a lot of errors that are being worked out"}
                        {"Very close to a full beta release, contributions system and forms being worked on."}
                            
                        </List>
                    </Holder>
                </Holder>
                <HR />
                <H>Current Focus</H>
                <List width="800px">
                    {"Getting all blocks to have some responsive behavior"}
                    {"Get a first draft on all blocks"}
                    {"Get as many blocks as possible working with vars through box declaration"}
                    {"Adding more themes and correctly attaching the flow to all blocks"}
                    {"Make sure all props are linked correctly and work"}
                    {"I'm still not real worried about things looking good, just that the theme system flows color to everything."}
                </List>
                <HR />
                <H>Known Bugs</H>
                <P>This section will be filled out when the library moves into Beta on a stable release</P>
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