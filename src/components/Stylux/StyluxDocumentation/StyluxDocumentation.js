import React from "react";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Container,
    H11,
} from "react-stylux";

export default function StyluxDocumentation() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <H11>Documentation</H11>
            </Container>
            <StyluxFooter />
        </section>
    )
} 