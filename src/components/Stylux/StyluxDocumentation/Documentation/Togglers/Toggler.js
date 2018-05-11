import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function Toggler1() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
                    {"position = 'fixed'"}
                    {"width = '100px'"}
                    {"height = '100vh'"}
                    {"top = '0'"}
                    {" boxShadow = '1px 2px 2px black'"}
                    {"background = 'white'"}
                    {"buttonText = 'Toggler1'"}
                    {"bColor = 'black',"}
                    {"bBackground,"}
                    {" bFontSize = '1.333em'"}
                    {"bFontVariant,"}
                    {" bFontWeight,"}
                    {" bTextShadow,"}
                    {"bMargin,"}
                    {" bPadding,"}
                    {" bBorderLeft,"}
                    {" bBorderRight,"}
                    {"bBorderTop,"}
                    {" bBorderBottom,"}
                    {" bBorder,"}
                    {" border,"}
                    {"bLeft,"}
                    {" bRight,"}
                    {" bTop,"}
                    {" bRight,"}
                    {"bTop,"}
                    {"bBotton,"}
                    {"left"}
                    {"right"}
                    {"mainid"}
                    {"toggleid"}
                    {" titleid"}
                    {"titleClassName"}
                    {"mainClassName"}
                    {"toggleClassName"}
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