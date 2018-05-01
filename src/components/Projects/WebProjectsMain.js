import React from "react";
import {Link} from "react-router-dom"
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
                        <Link to="/projects/web/aristos">
                            <Image
                                type="square"
                                size="lg">
                                {aristosPlaceholder}
                            </Image>
                        </Link>
                        <Holder direction="column">

                            <Link to="/projects/web/aristos"><H42>Aristos Project</H42></Link>
                            <BulletList1>
                                {"In initial development stages"}
                                {"CMS and Website builder built in Golang"}
                                {"All pages set up with HTTPS through Let's Encrypt"}
                                {"Multiple encoders and decoders built for many file types"}
                                {"Working on full AWS integration"}
                            </BulletList1>
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
                            <Link to="/projects/web/react-stylux"><H42>react-stylux</H42></Link>
                            <BulletList1>
                                {"Still under development"}
                                {"Component library with layout mechanic"}
                                {"Uses style object to style components through props"}
                                {"This web page was built with react-stylux to test capability"}
                            </BulletList1>
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
                            <Link to="/projects/web/ataraxy-clothing"><H42>Ataraxy Clothing</H42></Link>
                            <BulletList1>
                                {"Won most technical award during personal project presentations"}
                                {"Designed a component library (react-stylux) to build this project"}
                                {"This is a full-stack application with complete stripe integration"}
                            </BulletList1>
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
                            <Link to="/projects/web/foxchrisrealthe"><H42>FoxChrisRealThe</H42></Link>
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