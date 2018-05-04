import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    H34,
    List,
} from "react-stylux"

export default function List1View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
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
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H34>List</H34>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"type='1' basic number"}
                    {"type='2' big number list, needs work"}
                    {"type='3' open"}
                    {"type='4' disc bullet"}
                    {"type='5' square bullet"}
                </BulletList1>
                <HR />
                <H42>Suggested Use</H42>
                <BulletList1>
                    {"Use to list things"}
                </BulletList1>
                <HR />
                <H42>Size Information</H42>
                <BulletList1>
                    {"Large: ??"}
                    {"Medium: ??"}
                    {"Small: ??"}
                </BulletList1>

            </Holder>
        </Holder>
    )
}