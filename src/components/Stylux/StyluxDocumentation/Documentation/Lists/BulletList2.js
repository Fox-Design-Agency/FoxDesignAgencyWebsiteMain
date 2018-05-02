import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function BulletList2View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"color = 'black'"}
                    {"font = 'serif'"}
                    {"size = '1.333em'"}
                    {"lineHeight = '1.5em'"}
                    {"weight = '400'"}
                    {"paddingLeft"}
                    {"listStyleType = 'square'"}
                    {"listStyleImage = 'none'"}
                    {"listStylePosition = 'inside'"}
                    {"itemPadding"}
                    {"itemBGImage"}
                    {"itemBGSize"}
                    {"id"}
                    {"className"}
                </BulletList1>
            </Holder>
            <Holder direction="column">

                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {""}
                </BulletList1>
                <HR />
                <H42>Suggested Use</H42>
                <BulletList1>
                    {""}
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