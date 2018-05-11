import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function List1View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
                    {"listAmount = '1'"}
                    {"color = 'black'"}
                    {"font = 'serif'"}
                    {"size = '1.333em'"}
                    {"lineHeight = '1.5em'"}
                    {"weight = '400'"}
                    {"paddingLeft"}
                    {" listStyleType"}
                    {" listStyleImage = 'none'"}
                    {" listStylePosition = 'inside'"}
                    {"  id"}
                    {"  className"}
                    {" smDis"}
                    {"mdDis"}
                    {"aniCount"}
                    {"aniTime"}
                    {"aniName"}
                    {"aniDur"}
                    {"transformOrigin"}
                    {"aniFillMode"}
                    {"width='100%'"}
                    {"type"}
                </List>
            </Holder>
            <Holder direction="column">
                <H>List</H>
                <HR />
                <H>Some Info</H>
                <List>
                    {"type='1' basic number"}
                    {"type='2' big number list, needs work"}
                    {"type='3' open"}
                    {"type='4' disc bullet"}
                    {"type='5' square bullet"}
                </List>
                <HR />
                <H>Suggested Use</H>
                <List>
                    {"Use to list things"}
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