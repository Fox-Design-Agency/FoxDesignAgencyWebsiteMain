import React from "react";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H22,
    HR,
    FlatButton1,
    RaisedButton1,
    FloatingButton1,
    BlockButton1,
    TextButton1,
} from "react-stylux";

export default function StyluxButtonBlocksViews() {

    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Button Blocks</H22>

                <Holder direction="column">
                    <FlatButton1 onClick={() => window.alert("It was clicked")}>
                        Flat Button 1
                    </FlatButton1>
                    <HR />
                    <RaisedButton1 onClick={() => window.alert("It was clicked")}>
                        Raised Button 1
                    </RaisedButton1>
                    <HR />
                    <FloatingButton1 onClick={() => window.alert("It was clicked")}>
                        Floating Button 1
                    </FloatingButton1>

                    <HR />
                    <BlockButton1 onClick={() => window.alert("It was clicked")}>
                        Block Button 1
                    </BlockButton1>
                    <HR />

                    <TextButton1 onClick={() => window.alert("It was clicked")}>
                        Text Button 1
                    </TextButton1>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 