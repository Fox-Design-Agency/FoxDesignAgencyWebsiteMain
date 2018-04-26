import React from "react";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Container,
    H42,
    HR,
} from "react-stylux";

export default function StyluxHome() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <H42>Under Construction and Stuff</H42>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 