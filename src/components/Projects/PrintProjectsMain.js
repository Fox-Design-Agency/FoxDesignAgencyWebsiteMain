import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import {
    Container,
    Holder,
    H42,
    BulletList1,
    H41,
    HR,
    Image,
} from "react-stylux";

// import comingSoon from "../../assets/placeholders/ComingSoon500Square.jpg";

import nightmarePoster from "../../assets/projects/print/nightmaresPoster.jpg";

export default function PrintProjectMain() {

    return (
        <section>
            <Container>
                <Header />
                <Holder direction="column">
                    <HR />
                    <H41>Print Projects</H41>
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
                                <Link to="/projects/print/nightmare-poster"><H42>Nightmare Poster</H42></Link>
                                <BulletList1>
                                {"Project for a friend's play"}
                                {"Play was housed April 14th 2018"}
                                </BulletList1>
                            </Holder>

                        </Holder>
                    </Holder>
                </Holder>
                <HR />

                <Footer />
            </Container>
        </section>
    )
}