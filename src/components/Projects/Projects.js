import React from "react";
import { Link } from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
    Wrapper,
    Holder,
    H,
    Image,
    HR,
    P,
    List,
} from "react-stylux";

import comingSoon from "../../assets/placeholders/ComingSoon500Square.jpg";

import aristosPlaceholder from "../../assets/placeholders/aristosPlaceholder.jpg";
import reactStylux from "../../assets/projects/web/reactStyluxTOC_LG.jpg";
import ataraxyClothing from "../../assets/projects/web/AtaraxyClothingHomepage_LG.jpg";

import nightmarePoster from "../../assets/projects/print/nightmaresPoster.jpg";

export default function Projects() {

    return (
        <section>
            <Wrapper>
                <Header />
                <HR />
                <Link to="/projects/web"><H>Web Projects</H></Link>
                <HR />
                <Holder direction="column">
                    <Holder>
                        <Link to="/projects/web/aristos">
                            <Image
                                type="square"
                                size="lg">
                                {aristosPlaceholder}
                            </Image>
                        </Link>
                        <Holder direction="column">

                            <Link to="/projects/web/aristos"><H>Aristos Project</H></Link>
                            <List>
                                {"In Alpha development stages"}
                                {"CMS and Website builder built in Nodejs"}
                                {"Working on support for more template types"}
                            </List>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <Link to="/projects/web/react-stylux">
                            <Image
                                type="square"
                                size="lg">
                                {reactStylux}
                            </Image>
                        </Link>
                        <Holder direction="column">
                            <Link to="/projects/web/react-stylux"><H>react-stylux</H></Link>
                            <List>
                                {"Still under development"}
                                {"Component library with layout mechanic"}
                                {"Uses style object to style components through props"}
                                {"This web page was built with react-stylux to test capability"}
                            </List>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <Link to="/projects/web/ataraxy-clothing">
                            <Image
                                type="square"
                                size="lg">
                                {ataraxyClothing}
                            </Image>
                        </Link>
                        <Holder direction="column">
                            <Link to="/projects/web/ataraxy-clothing"><H>Ataraxy Clothing</H></Link>
                            <List>
                                {"Won most technical award during personal project presentations"}
                                {"Designed a component library (react-stylux) to build this project"}
                                {"This is a full-stack application with complete stripe integration"}
                            </List>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <Link to="/projects/web/foxchrisrealthe">
                            <Image
                                type="square"
                                size="lg">
                                {comingSoon}
                            </Image>
                        </Link>
                        <Holder direction="column">
                            <Link to="/projects/web/foxchrisrealthe"><H>FoxChrisRealThe</H></Link>
                            <List>
                                {""}
                            </List>
                        </Holder>

                    </Holder>
                    <Link to="/projects/web"><P>More Web Projects...</P></Link>
                    <HR />
                </Holder>

                <Link to="/projects/print"><H>Print Projects</H></Link>
                <HR />
                <Holder direction="column">
                    <Holder>
                        <Link to="/projects/print/nightmare-poster">
                            <Image
                                type="square"
                                size="lg">
                                {nightmarePoster}
                            </Image>
                        </Link>
                        <Holder direction="column">
                            <Link to="/projects/print/nightmare-poster">
                                <H>Nightmare Poster</H>
                            </Link>
                            <List>
                                {"Project for a friend's play"}
                                {"Play was housed April 14th 2018"}
                            </List>
                        </Holder>

                    </Holder>
                    <Link to="/projects/print"><P>More Print Projects...</P></Link>
                    <HR />

                </Holder>
                <Footer />
            </Wrapper>
        </section>
    )
}