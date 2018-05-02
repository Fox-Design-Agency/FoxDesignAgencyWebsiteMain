import React from "react";
import { Link } from "react-router-dom"
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Container,
    Holder,
    H42,
    H32,
    HR,
    P1,
    Navbar1,
    BulletList1,
} from "react-stylux";

export default function StyluxHome() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <Holder
                    direction="column">
                    <Holder
                        block1="0.3"
                        alignBlock2="flex-start">
                        <Holder
                            direction="column">
                            <H42>Block Displays</H42>
                            <Navbar1 direction="column">
                                <Link to="/react-stylux/layout">Container</Link>
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
                            </Navbar1>
                        </Holder>
                        <Holder direction="column">
                            <H32>Current Version: 0.6.6</H32>
                            <H42>Latest Changes</H42>
                            <BulletList1 width="950px">
                                {"updates to default responsive Image sizes, first draft, not set"}
                                {"fix post 0.6.3 Button export"}
                                {"update to Button block state"}
                                {"update to Button block custom ability, defaults to flat type"}
                                {"Condensed Paragraph blocks to P, is not accurately displaying"}
                                {"review every blocks responsive behavior, verified H, P, A, HR, Image"}
                                {"review every block for className && Id , verified H, P, A, HR, Image"}
                                {"fixed typo in index.js file for 0.6.4"}
                                {"fixed missing variable in buttonFunctions"}
                            </BulletList1>
                        </Holder>
                    </Holder>
                    <HR />
                    <H32>Current Focus</H32>
                    <BulletList1 width="800px">
                        {"Getting all blocks to have some responsive behavior"}
                        {"Get a first draft on all blocks"}
                        {"Get as many blocks as possible condensed to switch variant on type"}
                        {"Build the foundation for a themeing ability through a Provider"}
                        {"Make sure all props are linked correctly and work"}
                        {"I'm not worried about making things look good right now, that will be a concern when I implement the themeing ability. Due to this, everything is going to look the same, but as long as it works, I'm happy. It is possible to change the default look, but that gets repetetive and anti DRY. I am making sure that every block does have a className and id prop as well to help with this."}
                    </BulletList1>
                    <HR />
                    <H32>Known Bugs</H32>
                    <P1>Too many...</P1>
                    <HR />
                    <H32>Want to Help?</H32>
                    <P1>Well... Right now you can't, but soon... soon you will be able to contribute and comment on changes.</P1>
                    <HR />
                    <H32>Acknowledgments</H32>
                    <BulletList1
                        width="1200px">
                        <a href="https://devmountain.com/" target="_blank" rel="noopener noreferrer">A Giant Thank you to Dev Mountain for teaching me to code good</a>
                        {"A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work"}
                        <a href="http://meyerweb.com/eric/tools/css/reset/" target="_blank" rel="noopener noreferrer">{"Credit to meyer for use of a reset file"}</a>
                        {"Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style object"}
                        <a href="http://daneden.me/animate" target="_blank" rel="noopener noreferrer">{"Massive credit for the animations to Daniel Eden - animate.css"}</a>
                        {"A Huge thanks to www.w3schools.com and their awesome tutorials, many first draft items were created with those"}
                    </BulletList1>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 