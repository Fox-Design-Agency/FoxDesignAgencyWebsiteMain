import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function Table1() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
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
                </List>"}
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