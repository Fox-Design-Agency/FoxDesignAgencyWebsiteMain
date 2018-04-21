import React from "react";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Container,
    H22,
} from "react-stylux";

export default function StyluxDocumentation() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <H22>Documentation</H22>
            </Container>
            <StyluxFooter />
        </section>
    )
} 