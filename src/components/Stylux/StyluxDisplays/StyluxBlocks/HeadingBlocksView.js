import React from "react";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H11,
    H12,
    H13,
    H14,
    H15,
    H21,
    H22,
    H23,
    H24,
    H25,
    H31,
    H32,
    H33,
    H34,
    H35,
    H41,
    H42,
    H43,
    H44,
    H45,
    HR,
} from "react-stylux";

export default function StyluxHeadingBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Heading Blocks</H22>
                <Holder
                    direction="column">
                    <H21>
                        Default: Sans-serif
            </H21>
                    <HR />
                    <H34>
                        main headings
            </H34>
                    <HR />
                    <H11>
                        H11
            </H11>
                    <H12>
                        H12
            </H12>
                    <H13>
                        H13
                </H13>
                    <H14>
                        H14
                </H14>
                    <H15>
                        H15
                </H15>
                </Holder>
                <Holder direction="column">
                    <HR />
                    <H34>
                        heading
            </H34>
                    <HR />
                    <H21>
                        H21
            </H21>
                    <H22>
                        H22
            </H22>
                    <H23>
                        H23
            </H23>
                    <H24>
                        H24
            </H24>
                    <H25>
                        H25
            </H25>
                </Holder>
                <Holder
                    direction="column">
                    <HR />
                    <H34>
                        subheadings
            </H34>
                    <HR />
                    <H31>
                        H31
            </H31>
                    <H32>
                        H32
            </H32>
                    <H33>
                        H33
            </H33>
                    <H34>
                        H34
            </H34>
                    <H35>
                        H35
            </H35>
                </Holder>
                <Holder
                    direction="column">
                    <HR />
                    <H34>
                        secondary subheadings
            </H34>
                    <HR />
                    <H41>
                        H41
            </H41>
                    <H42>
                        H42
            </H42>
                    <H43>
                        H43
            </H43>
                    <H44>
                        H44
            </H44>
                    <H45>
                        H45
            </H45>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 