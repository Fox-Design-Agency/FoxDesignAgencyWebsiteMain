import React from "react";
import { Link } from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
    Container,
    Holder,
    H41,
    Image,
    H42,
    HR,
    P1,
    BulletList1,
} from "react-stylux";

import comingSoon from "../../assets/placeholders/ComingSoon500Square.jpg";

import aristosPlaceholder from "../../assets/placeholders/aristosPlaceholder.jpg";
import reactStylux from "../../assets/projects/web/reactStyluxTOC_LG.jpg";
import ataraxyClothing from "../../assets/projects/web/AtaraxyClothingHomepage_LG.jpg";

import nightmarePoster from "../../assets/projects/print/nightmaresPoster.jpg";

export default function Projects() {

    return (
        <section>
            <Container>
                <Header />
                <HR />
                <Link to="/projects/web"><H41>Web Projects</H41></Link>
                <HR />
                <Holder direction="column">
                    <Holder>
                        <Image
                            type="square"
                            size="lg">
                            {aristosPlaceholder}
                        </Image>
                        <Holder direction="column">

                            <H42>Aristos Project</H42>
                            <BulletList1>
                                {""}
                            </BulletList1>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <Image
                            type="square"
                            size="lg">
                            {reactStylux}
                        </Image>
                        <Holder direction="column">
                            <H42>react-stylux</H42>
                            <BulletList1>
                                {""}
                            </BulletList1>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <Image
                            type="square"
                            size="lg">
                            {ataraxyClothing}
                        </Image>
                        <Holder direction="column">
                            <H42>Ataraxy Clothing</H42>
                            <BulletList1>
                                {""}
                            </BulletList1>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <Image
                            type="square"
                            size="lg">
                            {comingSoon}
                        </Image>
                        <Holder direction="column">
                            <H42>FoxChrisRealThe</H42>
                            <BulletList1>
                                {""}
                            </BulletList1>
                        </Holder>

                    </Holder>
                    <Link to="/projects/web"><P1>More Web Projects...</P1></Link>
                    <HR />
                </Holder>

                <Link to="/projects/print"><H41>Print Projects</H41></Link>
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
                    <Link to="/projects/print"><P1>More Print Projects...</P1></Link>
                    <HR />

                </Holder>
                <Footer />
            </Container>
        </section>
    )
}