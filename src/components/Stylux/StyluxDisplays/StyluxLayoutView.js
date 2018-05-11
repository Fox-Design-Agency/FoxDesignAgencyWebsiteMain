import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Wrapper,
    Holder,
    H,
    HR,
    Block2,
} from "react-stylux";

export default function StyluxBlocksView() {
    return (
       <Wrapper>
            <StyluxHeader />
            
                <Holder
                    direction="column">
                    <H>
                        Layout
                    </H>
                    <HR />
                    <Link to="/react-stylux/documentation/layout-wrapper">
                        <H>
                            Wrapper with one child
                        </H>
                    </Link>
                    <Wrapper>
                        <Block2 />
                    </Wrapper>
                    <Link to="/react-stylux/documentation/layout-holder">
                        <H>
                            Holder with one child
                        </H>
                    </Link>
                    <Holder>
                        <Block2 />
                    </Holder>
                    <H>
                        Holder nested inside of Wrapper with two children
                    </H>
                    <Wrapper>
                        <Holder>
                            <Block2 />
                            <Block2 />
                        </Holder>
                    </Wrapper>
                    <H>
                        Two column example
                    </H>
                    <Wrapper>
                        <Block2 />
                        <Holder alignBlock2="flex-start">
                            <Holder direction="column">
                                <Block2 />
                                <Block2 />
                                <Block2 />
                            </Holder>
                            <Holder direction="column">
                                <Block2 />
                                <Block2 />
                            </Holder>
                        </Holder>
                        <Block2 />
                    </Wrapper>
                    <HR />
                </Holder>
            
            <StyluxFooter />
       </Wrapper>
    )
}
