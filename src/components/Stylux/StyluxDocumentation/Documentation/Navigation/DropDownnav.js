import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function DropDownnav1View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
                    {"background"}
                    {"boxShadow = '1px 2px 2px black'"}
                    {"borderRadius = '0 0 5px 5px'"}
                    {"offset"}
                    {"color = 'black'"}
                    {"textAlign = 'left'"}
                    {"margin"}
                    {"padding"}
                    {"width"}
                    {" mainid"}
                    {" titleid"}
                    {"itemsid"}
                    {"mainClassName"}
                    {"titleClassName"}
                    {"itemsClassName"}
                    {"smDis = 'flex'"}
                    {"mdDis = 'flex'"}
                </List>
            </Holder>
            <Holder direction="column">

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
