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
    Card1,
    Card2,
    Card3,
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
                        Card 1
                    </H34></Link>
                    <Card1>
                        {}
                        {'an alt tag is here'}
                        {'A Neat Name'}
                        {'What I do and stuff and some other stuff that is pretty long like even longer than this and more stuff to filll space and stuff and whateevr'}
                    </Card1>
                    <HR />
                    <Link to="/react-stylux/documentation/card-1"><H34>
                        Card 2
                    </H34></Link>
                    <Card2>
                        {}
                        {'an alt tag is here'}
                        {'A Neat Name'}
                        {'What I do and stuff and some other stuff that is pretty long like even longer than this and more stuff to filll space and stuff and whateevr and someother stuff just to see if the max height actually works or not and stuff but then I had to write just a little bit mroe to be sure'}
                    </Card2>

                    <HR />
                    <Link to="/react-stylux/documentation/card-1"><H34>
                        Card 3
                    </H34></Link>
                    <Card3>
                        {'Some Item'}
                        {'$00.00'}
                        {'Info'}
                        {'Info'}
                        {'Info'}
                        {'Info'}
                        {'Call to action'}
                    </Card3>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 