import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    H44,
} from "react-stylux"

export default function H44View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"color = 'lightgray'"}
                    {"font = 'sans-serif'"}
                    {"size = '3.489em'"}
                    {"smSize =  '2.5em'"}
                    {"mdSize = '3em'"}
                    {" weight = '100'"}
                    {"variant"}
                    {" display = 'flex'"}
                    {"align = 'center'"}
                    {"textAlign = 'center'"}
                    {"padding = '0 0 3px 0'"}
                    {"margin = '1px'"}
                    {" width = 'inherit'"}
                    {" height"}
                    {" shadow"}
                    {" bLeft"}
                    {" bRight"}
                    {" bTop"}
                    {"bBottom"}
                    {"border"}
                    {" id"}
                    {" className"}
                    {" aniCount"}
                    {" aniTime"}
                    {" aniName"}
                    {" aniDur"}
                    {" smdis = 'flex'"}
                    {" mddis = 'flex'"}
                    {"hoverColor  = 'lightgray'"}
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H44>H44</H44>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"This accepts and renders one child into an h4"}
                </BulletList1>
                <HR />
                <H42>Suggested Use</H42>
                <BulletList1>
                    {"Use as a heading to an area."}
                    {"describe an area, page, or call attention to a location"}
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