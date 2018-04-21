import React from "react";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H21,
    H22,
    H34,
    P2,
    HR,
    Hero1,
    Hero2,
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
} from "react-stylux";

export default function StyluxCarouselBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Carousel Blocks</H22>
                <Holder direction="column">
                    <H34>
                        carousel 1
                </H34>
                    <Carousel1>
                    </Carousel1>
                    <H34>
                        carousel 2
                </H34>
                    <Carousel2>
                    </Carousel2>
                    <H34>
                        carousel 3
                </H34>
                    <Carousel3>
                    </Carousel3>
                    <H34>
                        carousel 4
                </H34>
                    <Carousel4>
                    </Carousel4>
                    <H34>
                        carousel 5
                </H34>
                    <Carousel5>
                    </Carousel5>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 