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
    Button,
} from "react-stylux";

export default function StyluxButtonBlocksViews() {

    return (
        <Wrapper>
            <StyluxHeader />
            <BlocksSubNavBar />
            <Link to="/react-stylux/documentation/button"><H>Button Blocks</H></Link>
            <HR />
            <Holder direction="column">
                <Button onClick={() => window.alert("It was clicked")} type="flat">flat default box="1"</Button>
                <HR />
                <Button box="2" onClick={() => window.alert("It was clicked")} type="raised">raised box="2"</Button>
                <HR />
                <Button box="3" onClick={() => window.alert("It was clicked")} type="floating">floating box="3"</Button>
                <HR />
                <Button box="4" onClick={() => window.alert("It was clicked")} type="block">block box="4"</Button>
                <HR />
                <Button box="5" onClick={() => window.alert("It was clicked")} type="text">text box="5"</Button>
            </Holder>
            <HR />
            <StyluxFooter />
        </Wrapper>
    )
} 