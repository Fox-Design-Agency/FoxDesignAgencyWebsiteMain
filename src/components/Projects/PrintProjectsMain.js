import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import {
    Wrapper,
    Holder,
    H,
    List,
    HR,
    Image,
} from "react-stylux";

// import comingSoon from "../../assets/placeholders/ComingSoon500Square.jpg";

import nightmarePoster from "../../assets/projects/print/nightmaresPoster.jpg";

export default function PrintProjectMain() {

    return (
        <section>
            <Wrapper>
                <Header />
                <Holder direction="column">
                    <HR />
                    <H>Print Projects</H>
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
                                <Link to="/projects/print/nightmare-poster"><H>Nightmare Poster</H></Link>
                                <List>
                                {"Project for a friend's play"}
                                {"Play was housed April 14th 2018"}
                                </List>
                            </Holder>

                        </Holder>
                    </Holder>
                </Holder>
                <HR />

                <Footer />
            </Wrapper>
        </section>
    )
}