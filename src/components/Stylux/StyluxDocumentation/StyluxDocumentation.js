import React from "react";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";
import DocumentaionNavigation from "./DocumentationNavigation"
import DocumentationRouter from "./DucmentationRouter";
import {
    Container,
    Holder,
    H22,
    P1,
    Toggler2,
    BulletList1
} from "react-stylux";

export default function StyluxDocumentation() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <H22>Documentation</H22>
                <Holder
                    alignBlock1="flex-start"
                    block1="0.25"
                    alignBlock2="flex-start">
                    <DocumentaionNavigation />
                    <Holder
                        padding= "20px"
                        direction="column"
                            >
                        {DocumentationRouter}
                    </Holder>
                </Holder>
            </Container>
            <StyluxFooter />
        </section>
    )
} 