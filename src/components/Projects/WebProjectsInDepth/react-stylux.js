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

import reactStylux from "../../../assets/projects/web/reactStyluxTOC_LG.jpg";

export default function reactStyluxView() {

    return (
        <section>
            <Header />
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        react-stylux
                    </H>
                    <Holder
                        direction="column">
                        <Holder>
                            <Image
                                type="square"
                                size='lg'>
                                {reactStylux}
                                {"The old table of contents for react-stylux"}
                            </Image>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                react-stylux
                                    </H>
                                <List>
                                {"Still under development"}
                                {"Component library with layout mechanic"}
                                {"Uses style object to style components through props"}
                                {"This web page was built with react-stylux to test capability"}

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