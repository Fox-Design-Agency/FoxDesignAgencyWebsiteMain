import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function Modal1() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
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
                </List>
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