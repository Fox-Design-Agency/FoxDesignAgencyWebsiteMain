import React from "react";
import { Link } from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
    Container,
    Holder,
    H41,
    SquareImage,
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
                        <SquareImage
                            size="lg">
                            {aristosPlaceholder}
                        </SquareImage>
                        <Holder direction="column">

                            <H42>Aristos Project</H42>
                            <BulletList1>
                                {""}
                            </BulletList1>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <SquareImage
                            size="lg">
                            {reactStylux}
                        </SquareImage>
                        <Holder direction="column">
                            <H42>react-stylux</H42>
                            <BulletList1>
                                {""}
                            </BulletList1>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <SquareImage
                            size="lg">
                            {ataraxyClothing}
                        </SquareImage>
                        <Holder direction="column">
                            <H42>Ataraxy Clothing</H42>
                            <BulletList1>
                                {""}
                            </BulletList1>
                        </Holder>

                    </Holder>
                    <HR />
                    <Holder>
                        <SquareImage
                            size="lg">
                            {comingSoon}
                        </SquareImage>
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
                        <SquareImage
                            size="lg">
                            {nightmarePoster}
                        </SquareImage>
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