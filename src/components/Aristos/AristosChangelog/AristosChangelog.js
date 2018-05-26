import React from "react";
import {
    Wrapper,
    Holder,
    HR,
    Brand,
    H,
    List,
    Navbar
} from "react-stylux";
import AristosHeader from "../AristosHeader/AristosHeader"
import AristosFooter from "../AristosFooter/AristosFooter";

import foxtail from "../../../assets/logo/foxtail2-1.svg";

export default function AristosChangelog() {
    return (
        <Wrapper>
            <AristosHeader />
            <H id="topofpage">Changelog</H>
            <Holder
                alignBlock1="flex-start"
                block1="0.25">
                <Holder
                    direction="column">
                    <H>Version Number</H>
                    <Navbar
                        direction="column">
                        <a href="/aristos/changelog#0.0.1" >0.0.1</a>
                    </Navbar>
                </Holder>
                <Holder
                    direction="column">
                        <H id="0.0.1" margin="20px">0.0.1</H>
                        <List width="900px">
                            {"Starting to work and stuff"}
                        </List>
                        <a href="/aristos/changelog#topofpage">Back to top...</a>
                    </Holder>
                </Holder>
            <HR />
            <AristosFooter />
        </Wrapper>
    )
}