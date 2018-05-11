import React from "react";

import {
    Holder,
    List,
    HR,
    H,
} from "react-stylux"

export default function Form() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">

                </List>
            </Holder>
            <Holder direction="column">
                <H>Form</H>
                <HR />
                <H>Some Info</H>
                <List>
                    {"Not currently a thing on the live package"}
                </List>
                <HR />
                <H>Suggested Use</H>
                <List>
                    {""}
                </List>
                <HR />
                <H>Size Information</H>
                <List>
                    {"Large: ??"}
                    {"Medium: ??"}
                    {"Small: ??"}
                </List>

            </Holder>
        </Holder>

    )
}