import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function FigureView() {

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
        <H>Figure</H>
            <HR />
            <H>Some Info</H>
            <List>
                {""}
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