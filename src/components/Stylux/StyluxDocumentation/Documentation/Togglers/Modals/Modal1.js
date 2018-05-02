import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function Modal1() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"boxTop = '40%'"}
                    {"boxRight = '45%'"}
                    {"boxLeft"}
                    {"boxBottom"}
                    {"boxPosition = 'fixed'"}
                    {"boxBackground = 'white'"}
                    {"boxHeight = '200px'"}
                    {"boxWidth = '200px'"}
                    {"boxAlign = 'center'"}
                    {" boxJustify = 'center'"}
                    {"buttonText = 'Modul 1'"}
                    {" boxShadow = '1px 2px 2px black'"}
                    {" btnBackground = 'white'"}
                    {" bColor = 'black'"}
                    {" bBackground"}
                    {" bFontSize"}
                    {" bFontVariant"}
                    {" bFontWeight"}
                    {" bTextShadow"}
                    {" bMargin"}
                    {" bPadding"}
                    {"bBorderLeft"}
                    {" bBorderRight"}
                    {"bBorderTop"}
                    {" bBorderBottom"}
                    {" boxId"}
                    {" titleId"}
                    {" backId"}
                    {" titleClassName"}
                    {"boxClassName"}
                    {"backClassName"}
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