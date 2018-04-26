import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import {
    Container,
    Holder,
    HR,
    H41,
    BulletList1,
    SquareImage,
    H42,

} from "react-stylux";

import comingSoon from "../../assets/placeholders/ComingSoon500Square.jpg";

import aristosPlaceholder from "../../assets/placeholders/aristosPlaceholder.jpg";
import reactStylux from "../../assets/projects/web/reactStyluxTOC_LG.jpg";
import ataraxyClothing from "../../assets/projects/web/AtaraxyClothingHomepage_LG.jpg";


export default function WebProjectMain() {

    return (
        <section>
            <Container>
                <Header />
                <HR />
                <H41>Web Projects</H41>
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
                </Holder>

                <HR />
                <Footer />
            </Container>
        </section>
    )
}