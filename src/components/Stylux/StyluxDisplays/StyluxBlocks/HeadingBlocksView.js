import React from "react";
import { Link } from "react-router-dom"
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
    HR, BulletList1
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
                    <HR />
                    <Holder direction="column">
                        <H34> Sizes</H34>
                        <H42>large size:</H42>
                        <BulletList1 width="1200px">
                            1: Base Version - 1.333 * 1.618ish
                            2: Smaller Version - num/1.2ish
                            3: Larger Version - num * 1.2ish
                            4: Light Gray Base Version
                            5: Open (Possible outline version)
                    </BulletList1>
                        <H42>medium size:</H42>
                        <BulletList1 width="1200px">
                            1: Base Version - 1.333 * 1.618ish
                            2: Smaller Version - num/1.2ish
                            3: Larger Version - num * 1.2ish
                            4: Light Gray Base Version
                            5: Open (Possible outline version)
                    </BulletList1>
                        <H42>small size:</H42>
                        <BulletList1 width="1200px">
                            1: Base Version - 1.333 * 1.618ish
                             2: Smaller Version - num/1.2ish
                             3: Larger Version - num * 1.2ish
                             4: Light Gray Base Version
                             5: Open (Possible outline version)
                    </BulletList1>
                    </Holder>
                    <HR />
                    <H34>
                        main headings
                    </H34>
                    <HR />
                    <Link to="/react-stylux/documentation/h-1-1"><H11>
                        H11
                    </H11></Link>
                    <Link to="/react-stylux/documentation/h-1-2"><H12>
                        H12
                    </H12></Link>
                    <Link to="/react-stylux/documentation/h-1-3"><H13>
                        H13
                </H13></Link>
                    <Link to="/react-stylux/documentation/h-1-4"><H14>
                        H14
                </H14></Link>
                    <Link to="/react-stylux/documentation/h-1-5"><H15>
                        H15
                </H15></Link>
                </Holder>
                <Holder direction="column">
                    <HR />
                    <H34>
                        heading
                    </H34>
                    <HR />
                    <Link to="/react-stylux/documentation/h-2-1"><H21>
                        H21
                    </H21></Link>
                    <Link to="/react-stylux/documentation/h-2-2"><H22>
                        H22
                    </H22></Link>
                    <Link to="/react-stylux/documentation/h-2-3"><H23>
                        H23
                    </H23></Link>
                    <Link to="/react-stylux/documentation/h-2-4"><H24>
                        H24
                    </H24></Link>
                    <Link to="/react-stylux/documentation/h-2-5"><H25>
                        H25
                    </H25></Link>
                </Holder>
                <Holder
                    direction="column">
                    <HR />
                    <H34>
                        subheadings
                    </H34>
                    <HR />
                    <Link to="/react-stylux/documentation/h-3-1"><H31>
                        H31
                    </H31></Link>
                    <Link to="/react-stylux/documentation/h-3-2"><H32>
                        H32
                    </H32></Link>
                    <Link to="/react-stylux/documentation/h-3-3"><H33>
                        H33
                    </H33></Link>
                    <Link to="/react-stylux/documentation/h-3-4"><H34>
                        H34
                    </H34></Link>
                    <Link to="/react-stylux/documentation/h-3-5"><H35>
                        H35
                    </H35></Link>
                </Holder>
                <Holder
                    direction="column">
                    <HR />
                    <H34>
                        secondary subheadings
                    </H34>
                    <HR />
                    <Link to="/react-stylux/documentation/h-3-1"><H41>
                        H41
                    </H41></Link>
                    <Link to="/react-stylux/documentation/h-3-2"><H42>
                        H42
                    </H42></Link>
                    <Link to="/react-stylux/documentation/h-3-3"><H43>
                        H43
                    </H43></Link>
                    <Link to="/react-stylux/documentation/h-3-4"><H44>
                        H44
                    </H44></Link>
                    <Link to="/react-stylux/documentation/h-3-5"><H45>
                        H45
                    </H45></Link>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 