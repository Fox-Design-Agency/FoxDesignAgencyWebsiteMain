import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    P3,
} from "react-stylux"

export default function P3View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"color"}
                    {"font = 'serif'"}
                    {"size = '1.6em'"}
                    {"smSize =  '1.5em'"}
                    {" mdSize = '1.6em'"}
                    {"lineHeight = '1.8em'"}
                    {"weight = '400'"}
                    {" variant"}
                    {"display = 'flex'"}
                    {"align = 'center'"}
                    {"textAlign = 'center'"}
                    {" padding = '5px'"}
                    {"margin = '1px'"}
                    {" width = 'inherit'"}
                    {"height"}
                    {" sShadow"}
                    {" bLeft"}
                    {" bRight"}
                    {" bTop"}
                    {" bBottom"}
                    {" border"}
                    {" id"}
                    {"className"}
                    {"aniCount"}
                    {"aniTime"}
                    {"aniName"}
                    {"aniDur"}
                    {"smdis = 'flex'"}
                    {" mddis = 'flex'"}
                    {"hoverColor"}
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <P3>This is paragraph 3</P3>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"This accepts and renders one child into a p"}
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