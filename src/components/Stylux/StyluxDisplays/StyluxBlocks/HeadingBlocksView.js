import React from "react";
import { Link } from "react-router-dom"
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    Holder,
    H,
    HR, 
    List
} from "react-stylux";

export default function StyluxHeadingBlocksViews() {
    return (
        <Wrapper>
            <StyluxHeader />
           
                <BlocksSubNavBar />
                <H>Heading Blocks</H>
                <Holder
                    direction="column">
                    <HR /><H> Sizes</H>
                    <Holder>
                        <Holder direction="column">
                            <H>large size:</H>
                            <List width="350px">
                                {"1: Base Version - 1.333 * 1.618ish"}
                                {"2: Smaller Version - num/1.2ish"}
                                {"3: Larger Version - num * 1.2ish"}
                                {"4: Light Gray Base Version"}
                                {"5: Open (Possible outline version)"}
                            </List>
                        </Holder>
                        <Holder direction="column">
                            <H>medium size (Not set):</H>
                            <List width="350px">
                                {"1: Base Version - 1.333 * 1.618ish"}
                                {"2: Smaller Version - num/1.2ish"}
                                {"3: Larger Version - num * 1.2ish"}
                                {"4: Light Gray Base Version"}
                                {"5: Open (Possible outline version)"}
                            </List>
                        </Holder>
                        <Holder direction="column">
                            <H>small size (Not set):</H>
                            <List width="350px">
                                {"1: Base Version - 1.333 * 1.618ish"}
                                {"2: Smaller Version - num/1.2ish"}
                                {"3: Larger Version - num * 1.2ish"}
                                {"4: Light Gray Base Version"}
                                {"5: Open (Possible outline version)"}
                            </List>
                        </Holder>
                    </Holder>
                    <HR />
                    <H>
                        main headings
                    </H>
                    <HR />
                    <Link to="/react-stylux/documentation/h"><H>
                        H11
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H12
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H13
                </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H14
                </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H15
                </H></Link>
                </Holder>
                <Holder direction="column">
                    <HR />
                    <H>
                        heading
                    </H>
                    <HR />
                    <Link to="/react-stylux/documentation/h"><H>
                        H21
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H22
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H23
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H24
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H25
                    </H></Link>
                </Holder>
                <Holder
                    direction="column">
                    <HR />
                    <H>
                        subheadings
                    </H>
                    <HR />
                    <Link to="/react-stylux/documentation/h"><H>
                        H31
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H32
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H33
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H box='4'
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H35
                    </H></Link>
                </Holder>
                <Holder
                    direction="column">
                    <HR />
                    <H>
                        secondary subheadings
                    </H>
                    <HR />
                    <Link to="/react-stylux/documentation/h"><H>
                        H41
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H42
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H43
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H44
                    </H></Link>
                    <Link to="/react-stylux/documentation/h"><H>
                        H45
                    </H></Link>
                </Holder>
                <HR />
           
            <StyluxFooter />
         </Wrapper>
    )
} 