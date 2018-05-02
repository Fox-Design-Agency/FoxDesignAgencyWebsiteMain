import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    H14,
} from "react-stylux"

export default function H14View() {

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
                    {"size = '7em'"}
                    {"smSize =  '3.939em'"}
                    {"mdSize = '5.25em'"}
                    {"weight = '900'"}
                    {"variant"}
                    {"display = 'flex'"}
                    {"align = 'center'"}
                    {"textAlign = 'center'"}
                    {"padding = '0 0 15px 0'"}
                    {"margin = '0'"}
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
                    {"hoverColor  = 'lightgray'"}
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H14>H14</H14>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"This accepts and renders one child into an h1"}
                </BulletList1>
                <HR />
                <H42>Suggested Use</H42>
                <BulletList1>
                    {"Use once on a page, don't spam h1 tags"}
                    {"describe a page, or call attention to an area"}
                </BulletList1>
                <HR />
                <H42>Size Information</H42>
                <BulletList1>
                    {"Large: 1.333 * 1.618ish"}
                    {"Medium: 1.333 * 1.618ish"}
                    {"Small: 1.333 * 1.618ish"}
                </BulletList1>

            </Holder>
        </Holder>

    )
}