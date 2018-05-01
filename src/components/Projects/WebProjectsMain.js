import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import {
    Container,
    Holder,
    HR,
    H41,
    BulletList1,
    Image,
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
                </Holder>

                <HR />
                <Footer />
            </Container>
        </section>
    )
}