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

import nightmarePoster from "../../../assets/projects/print/nightmaresPoster.jpg";

export default function NightmaresPosterView() {

    return (
        <section>
            <Header />
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        Nightmares Poster
                </H31>
                    <Holder
                        direction="column">
                            <Holder>
                                <Image
                                    type="square"
                                    size='lg'>
                                    {nightmarePoster}
                                    {"The homepage for 2 lies and 1 truth"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Nightmares Poster
                                    </H42>
                                    <BulletList1>
                                        {"Project for a friend's play"}
                                        {"Play was housed April 14th 2018"}

                                    </BulletList1>
                                </Holder>
                            </Holder>
                        <HR />
                    </Holder>

                    <Link to="/projects/print"><P1>Back to Print Projects...</P1></Link>
                </Holder>
                <HR height="300px" />
            </Container>
            <Footer />
        </section>
    )
}