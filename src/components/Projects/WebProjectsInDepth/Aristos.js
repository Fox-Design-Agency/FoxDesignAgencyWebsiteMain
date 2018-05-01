import React from "react"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import {
    Container,
    Holder,
    HR,
    H31,
    P1,
    A,
    Image,
    H42,
    BulletList1,
} from "react-stylux"

import aristosPlaceholder from "../../../assets/placeholders/aristosPlaceholder.jpg";

export default function AristosView() {

    return (
        <section>
            <Header />
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        Aristos Project
                    </H31>
                    <Holder
                        direction="column">
                        <Holder>
                            <Image
                                type="square"
                                size='lg'>
                                {aristosPlaceholder}
                                {"The homepage for 2 lies and 1 truth"}
                            </Image>
                            <Holder
                                direction="column">
                                <H42 margin="0 0 50px 0">
                                    Aristos Project
                                    </H42>
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
                    </Holder>

                    <Link to="/projects/web"><P1>Back to Web Projects...</P1></Link>
                </Holder>
                <HR height="300px" />
            </Container>
            <Footer />
        </section>
    )
}