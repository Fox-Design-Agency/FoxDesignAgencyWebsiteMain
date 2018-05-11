import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    Holder,
    H,
    P,
    HR,
    Hero,
    Carousel,
} from "react-stylux";

export default function StyluxCarouselBlocksViews() {
    return (
        <Wrapper>
            <StyluxHeader />

            <BlocksSubNavBar />
            <H>Carousel Blocks</H>
            <Holder direction="column">
                <Link to="/react-stylux/documentation/carousel"><H>
                    carousel box="1"
                    </H></Link>
                <Carousel box="1">
                </Carousel>
                <Link to="/react-stylux/documentation/carousel"><H>
                    carousel 2 default &&  box="1"
                    </H></Link>
                <Carousel box="2">
                </Carousel>
                <Link to="/react-stylux/documentation/carousel"><H>
                    carousel 3  box="3"
                    </H></Link>
                <Carousel box="3">
                </Carousel>
                <Link to="/react-stylux/documentation/carousel"><H>
                    carousel 4  box="4"
                    </H></Link>
                <Carousel box="4">
                </Carousel>
                <Link to="/react-stylux/documentation/carousel"><H>
                    carousel 5  box="5"
                    </H></Link>
                <Carousel box="5">
                </Carousel>
            </Holder>
            <HR />

            <StyluxFooter />
        </Wrapper>
    )
} 