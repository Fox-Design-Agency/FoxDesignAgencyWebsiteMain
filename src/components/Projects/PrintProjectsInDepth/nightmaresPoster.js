import React from "react"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import {
    Wrapper,
    Holder,
    HR,
    H,
    P,
    A,
    Image,
    List,
} from "react-stylux"

import nightmarePoster from "../../../assets/projects/print/nightmaresPoster.jpg";

export default function NightmaresPosterView() {

    return (
        <section>
            <Header />
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        Nightmares Poster
                </H>
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
                                    <H margin="0 0 50px 0">
                                        Nightmares Poster
                                    </H>
                                    <List>
                                        {"Project for a friend's play"}
                                        {"Play was housed April 14th 2018"}

                                    </List>
                                </Holder>
                            </Holder>
                        <HR />
                    </Holder>

                    <Link to="/projects/print"><P>Back to Print Projects...</P></Link>
                </Holder>
                <HR height="300px" />
            </Wrapper>
            <Footer />
        </section>
    )
}