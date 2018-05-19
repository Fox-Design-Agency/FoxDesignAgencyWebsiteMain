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
                    H box="1"
                    </H>
                <HR />
                <Link to="/react-stylux/documentation/h"><H box="1" vars="1">
                    {"vars='1'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="1" vars="2">
                    {"vars='2'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="1" vars="3">
                    {"vars='3'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="1" vars="4">
                    {"vars='4'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="1" vars="5">
                    {"vars='5'"}
                </H></Link>
            </Holder>
            <Holder direction="column">
                <HR />
                <H>
                    H box="2"
                    </H>
                <HR />
                <Link to="/react-stylux/documentation/h"><H box="2" vars="1">
                    {"vars='1'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="2" vars="2">
                    {"vars='2'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="2" vars="3">
                    {"vars='3'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="2" vars="4">
                    {"vars='4'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="2" vars="5">
                    {"vars='5'"}
                </H></Link>
            </Holder>
            <Holder
                direction="column">
                <HR />
                <H>
                    H box="3"
                    </H>
                <HR />
                <Link to="/react-stylux/documentation/h"><H box="3" vars="1">
                    {"vars='1'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="3" vars="2">
                    {"vars='2'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="3" vars="3">
                    {"vars='3'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="3" vars="4">
                    {"vars='4'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="3" vars="5">
                    {"vars='5'"}
                </H></Link>
            </Holder>
            <Holder
                direction="column">
                <HR />
                <H>
                    H box="4"
                    </H>
                <HR />
                <Link to="/react-stylux/documentation/h"><H box="4" vars="1">
                    {"vars='1'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="4" vars="2">
                    {"vars='2'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="4" vars="3">
                    {"vars='3'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="4" vars="4">
                    {"vars='4'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="4" vars="5">
                    {"vars='5'"}
                </H></Link>
            </Holder>
            <Holder
                direction="column">
                <HR />
                <H>
                    H box="5"
                </H>
                <HR />
                <Link to="/react-stylux/documentation/h"><H box="5" vars="1">
                    {"vars='1'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="5" vars="2">
                    {"vars='2'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="5" vars="3">
                    {"vars='3'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="5" vars="4">
                    {"vars='4'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="5" vars="5">
                    {"vars='5'"}
                </H></Link>
            </Holder>
            <Holder
                direction="column">
                <HR />
                <H>
                    H box="6"
            </H>
                <HR />
                <Link to="/react-stylux/documentation/h"><H box="6" vars="1">
                    {"vars='1'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="6" vars="2">
                    {"vars='2'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="6" vars="3">
                    {"vars='3'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="6" vars="4">
                    {"vars='4'"}
                </H></Link>
                <Link to="/react-stylux/documentation/h"><H box="6" vars="5">
                    {"vars='5'"}
                </H></Link>
            </Holder>
            <HR />

            <StyluxFooter />
        </Wrapper>
    )
} 