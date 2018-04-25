import React from "react";
import {Link} from "react-router-dom";
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
                    <Link to="/react-stylux/documentation/carousel-1"><H34>
                        carousel 1
                    </H34></Link>
                    <Carousel1>
                    </Carousel1>
                    <Link to="/react-stylux/documentation/carousel-2"><H34>
                        carousel 2
                    </H34></Link>
                    <Carousel2>
                    </Carousel2>
                    <Link to="/react-stylux/documentation/carousel-3"><H34>
                        carousel 3
                    </H34></Link>
                    <Carousel3>
                    </Carousel3>
                    <Link to="/react-stylux/documentation/carousel-4"><H34>
                        carousel 4
                    </H34></Link>
                    <Carousel4>
                    </Carousel4>
                    <Link to="/react-stylux/documentation/carousel-5"><H34>
                        carousel 5
                    </H34></Link>
                    <Carousel5>
                    </Carousel5>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 