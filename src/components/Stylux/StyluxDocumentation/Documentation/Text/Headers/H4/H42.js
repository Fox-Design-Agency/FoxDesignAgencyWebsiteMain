import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function H42View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"color"}
                    {"font = 'sans-serif'"}
                    {"size = '2.9025em'"}
                    {"smSize =  '2em'"}
                    {"mdSize = '2.5em'"}
                    {"weight = '100'"}
                    {"variant"}
                    {"display = 'flex'"}
                    {"align = 'center'"}
                    {"textAlign = 'center'"}
                    {"padding = '0 0 3px 0'"}
                    {"margin = '1px'"}
                    {"width = 'inherit'"}
                    {"height"}
                    {"shadow"}
                    {"bLeft"}
                    {" bRight"}
                    {"bTop"}
                    {" bBottom"}
                    {" border"}
                    {" id"}
                    {" className"}
                    {" aniCount"}
                    {"  aniTime"}
                    {" aniName"}
                    {"aniDur"}
                    {" smdis = 'flex'"}
                    {" mddis = 'flex'"}
                    {"  hoverColor"}
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H42>H42</H42>
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