import React from "react";
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
                            <Image
                                type="square"
                                size="lg">
                                {nightmarePoster}
                            </Image>
                            <Holder direction="column">
                                <H42>Nightmare Poster</H42>
                                <BulletList1>
                                    {""}
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