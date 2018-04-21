import React from "react";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Container,
    H11,
    HR,
} from "react-stylux";

export default function StyluxHome() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <H11>Home</H11>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 