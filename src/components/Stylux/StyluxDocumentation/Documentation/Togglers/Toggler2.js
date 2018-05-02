import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function Toggler2() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"width = '400px'"}
                    {"height"}
                    {"togglePlace = 'column'"}
                    {"background = 'white'"}
                    {"buttonText = 'Toggler2'"}
                    {"bColor = 'black',"}
                    {" bBackground,"}
                    {"bFontSize = '1.333em'"}
                    {"bFontVariant,"}
                    {" bFontWeight,"}
                    {" bTextShadow,"}
                    {" bMargin,"}
                    {" bPadding,"}
                    {" bBorderLeft,"}
                    {" bBorderRight,"}
                    {" bBorderTop,"}
                    {" bBorderBottom,"}
                    {"bBorder,"}
                    {"border,"}
                    {"bLeft,"}
                    {"bRight,"}
                    {"bTop,"}
                    {"bRight,"}
                    {"bTop,"}
                    {"bBotton,"}
                    {"position"}
                    {"padding"}
                    {"offset (will auto add + '%')"}
                    {"boxShadow = '1px 2px 2px black'"}
                    {" mainid"}
                    {" toggleid"}
                    {" titleid"}
                    {"titleClassName"}
                    {" mainClassName"}
                    {"toggleClassName"}
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