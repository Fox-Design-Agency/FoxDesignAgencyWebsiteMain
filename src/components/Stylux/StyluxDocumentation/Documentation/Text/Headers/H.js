import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function H11View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
                    {"color = 'black'"}
                    {"font = 'inherit'"}
                    {"size = '7em'"}
                    {"smSize =  '3.939em'"}
                    {"mdSize = '5.25em'"}
                    {"weight = '900'"}
                    {"variant"}
                    {"display = 'flex'"}
                    {"align = 'center'"}
                    {"textAlign = 'center'"}
                    {"padding = '0 0 15px 0'"}
                    {"margin = '1px'"}
                    {"width = 'inherit'"}
                    {"height"}
                    {"shadow"}
                    {"bLeft"}
                    {"bRight"}
                    {"bTop"}
                    {"bBottom"}
                    {"border"}
                    {"id"}
                    {"className"}
                    {"aniCount"}
                    {"aniTime"}
                    {"aniName"}
                    {"aniDur"}
                    {"smdis = 'flex'"}
                    {"mddis = 'flex'"}
                    {"hoverColor"}
                </List>
            </Holder>
            <Holder direction="column">
                <H>H11</H>
                <HR />
                <H>Some Info</H>
                <List>
                    {"This accepts and renders one child into an h1"}
                </List>
                <HR />
                <H>Suggested Use</H>
                <List>
                    {"Use once on a page, don't spam h1 tags"}
                    {"describe a page, or call attention to an area"}
                </List>
                <HR />
                <H>Size Information</H>
                <List>
                    {"Large: 1.333 * 1.618ish"}
                    {"Medium: 1.333 * 1.618ish"}
                    {"Small: 1.333 * 1.618ish"}
                </List>
            </Holder>
        </Holder>

    )
}