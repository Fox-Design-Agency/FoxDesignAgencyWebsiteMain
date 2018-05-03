import React from "react";
import {Link} from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H34,
    H22,
    HR,
    Card,
} from "react-stylux";

export default function StyluxCardBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Card Blocks</H22>
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/card-1"><H34>
                        Card type="1"
                    </H34></Link>
                    <Card type="1">
                        {}
                        {'an alt tag is here'}
                        {'A Neat Name'}
                        {'What I do and stuff and some other stuff that is pretty long like even longer than this and more stuff to filll space and stuff and whateevr'}
                    </Card>
                    <HR />
                    <Link to="/react-stylux/documentation/card-1"><H34>
                        Card type="2"
                    </H34></Link>
                    <Card type="2">
                        {}
                        {'an alt tag is here'}
                        {'A Neat Name'}
                        {'What I do and stuff and some other stuff that is pretty long like even longer than this and more stuff to filll space and stuff and whateevr and someother stuff just to see if the max height actually works or not and stuff but then I had to write just a little bit mroe to be sure'}
                    </Card>

                    <HR />
                    <Link to="/react-stylux/documentation/card-1"><H34>
                        Card type="3"
                    </H34></Link>
                    <Card type="3">
                        {'Some Item'}
                        {'$00.00'}
                        {'Info'}
                        {'Info'}
                        {'Info'}
                        {'Info'}
                        {'Call to action'}
                    </Card>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 