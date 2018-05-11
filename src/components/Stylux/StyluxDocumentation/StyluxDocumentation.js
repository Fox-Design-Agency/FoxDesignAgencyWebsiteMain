import React from "react";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";
import DocumentaionNavigation from "./DocumentationNavigation"
import DocumentationRouter from "./DucmentationRouter";
import {
    Wrapper,
    Holder,
    H,
    Toggler,
    List
} from "react-stylux";

export default function StyluxDocumentation() {
    return (
        <Wrapper>
            <StyluxHeader />

            <H>Documentation</H>
            <Holder
                alignBlock1="flex-start"
                block1="0.25"
                alignBlock2="flex-start">
                <DocumentaionNavigation />
                <Holder
                    padding="20px"
                    direction="column"
                >
                    {DocumentationRouter}
                </Holder>
            </Holder>

            <StyluxFooter />
        </Wrapper>
    )
} 