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

import aristosPlaceholder from "../../../assets/placeholders/aristosPlaceholder.jpg";

export default function AristosView() {

    return (
        <section>
            <Header />
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        Aristos Project
                    </H>
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
                                <H margin="0 0 50px 0">
                                    Aristos Project
                                    </H>
                                <List>
                                    {"In initial development stages"}
                                    {"CMS and Website builder built in Golang"}
                                    {"All pages set up with HTTPS through Let's Encrypt"}
                                    {"Multiple encoders and decoders built for many file types"}
                                    {"Working on full AWS integration"}

                                </List>
                            </Holder>
                        </Holder>
                        <HR />
                    </Holder>

                    <Link to="/projects/web"><P>Back to Web Projects...</P></Link>
                </Holder>
                <HR height="300px" />
            </Wrapper>
            <Footer />
        </section>
    )
}