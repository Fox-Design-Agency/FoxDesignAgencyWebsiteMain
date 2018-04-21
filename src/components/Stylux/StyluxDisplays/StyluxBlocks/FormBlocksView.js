import React from "react";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    H22,
    HR,
} from "react-stylux";

export default function StyluxFormBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Form Blocks</H22>

                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 