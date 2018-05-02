import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function Table1() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"columns='3'"}
                    {"rows= '3'"}
                    {"head"}
                    {"body"}
                    {" tableId"}
                    {"mainId"}
                    {"mainClassName"}
                    {"tableClassName"}

                    {"hbordertop"}
                    {"hborderRight"}
                    {"hborderBottom"}
                    {"hborderLeft"}
                    {" hborder = '1px solid black'"}
                    {" hvertical = 'center'"}
                    {" headWidth"}
                    {"headHeight"}
                    {" headMargin"}
                    {" headPadding = '5px'"}

                    {" dbordertop"}
                    {"dborderRight"}
                    {"dborderBottom"}
                    {"dborderLeft"}
                    {"dborder = '1px solid black'"}
                    {" dwidth"}
                    {"dheight"}
                    {"dmargin"}
                    {"dpadding = '5px'"}

                    {"tbordertop"}
                    {"tborderRight"}
                    {"tborderBottom"}
                    {" tborderLeft"}
                    {"tborder = '1px solid black'"}
                    {"tmargin ='5px'"}
                    {"tpadding"}
                    {"tableWidth"}
                    {"tableHeight"}
                    {"borderCollaspe = 'collaspe'"}
                </BulletList1>"}
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