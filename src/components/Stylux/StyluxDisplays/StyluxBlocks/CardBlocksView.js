import React from "react";
import {Link} from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    Holder,
    H,
    HR,
    Card,
} from "react-stylux";

export default function StyluxCardBlocksViews() {
    return (
        <Wrapper>
            <StyluxHeader />
            
                <BlocksSubNavBar />
                <H>Card Blocks</H>
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/card"><H>
                        Card default && box="1"
                    </H></Link>
                    <Card box="1">
                        {}
                        {'an alt tag is here'}
                        {'A Neat Name'}
                        {'What I do and stuff and some other stuff that is pretty long like even longer than this and more stuff to filll space and stuff and whateevr'}
                    </Card>
                    <HR />
                    <Link to="/react-stylux/documentation/card"><H>
                        Card box="2"
                    </H></Link>
                    <Card box="2">
                        {}
                        {'an alt tag is here'}
                        {'A Neat Name'}
                        {'What I do and stuff and some other stuff that is pretty long like even longer than this and more stuff to filll space and stuff and whateevr and someother stuff just to see if the max height actually works or not and stuff but then I had to write just a little bit mroe to be sure'}
                    </Card>

                    <HR />
                    <Link to="/react-stylux/documentation/card"><H>
                        Card box="3"
                    </H></Link>
                    <Card box="3">
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
           
            <StyluxFooter />
         </Wrapper>
    )
} 