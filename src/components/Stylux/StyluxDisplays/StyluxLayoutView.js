import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Container,
    Holder,
    H22,
    H34,
    HR,
    Block2,
} from "react-stylux";

export default function StyluxBlocksView() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <Holder
                    direction="column">
                    <H22>
                        Layout
                    </H22>
                    <HR />
                    <Link to="/react-stylux/documentation/layout-container">
                        <H34>
                            Container with one child
                    </H34>
                    </Link>
                    <Container>
                        <Block2 />
                    </Container>
                    <Link to="/react-stylux/documentation/layout-holder">
                        <H34>
                            Holder with one child
                        </H34>
                    </Link>
                    <Holder>
                        <Block2 />
                    </Holder>
                    <H34>
                        Holder nested inside of container with two children
                    </H34>
                    <Container>
                        <Holder>
                            <Block2 />
                            <Block2 />
                        </Holder>
                    </Container>
                    <H34>
                        Two column example
                    </H34>
                    <Container>
                        <Block2 />
                        <Holder alignBlock2="flex-start">
                            <Holder direction="column">
                                <Block2 />
                                <Block2 />
                                <Block2 />
                            </Holder>
                            <Holder direction="column">
                                <Block2 />
                                <Block2 />
                            </Holder>
                        </Holder>
                        <Block2 />
                    </Container>
                    <HR />
                </Holder>
            </Container>
            <StyluxFooter />
        </section>
    )
}
