import React from "react";

import {
    Holder,
    H,
    P,
    List,
    HR,
} from "react-stylux"

export default function PView() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
                    {" color"}
                    {"shadow"}
                    {"font"}
                    {"size = '1.333em'"}
                    {"smSize =  '1.3em'"}
                    {" mdSize = '1.3em'"}
                    {" lineHeight = '1.5em'"}
                    {" weight = '400'"}
                    {"variant"}
                    {" display = 'flex'"}
                    {" align = 'center'"}
                    {" textAlign = 'center'"}
                    {" padding = '5px'"}
                    {"margin = '1px'"}
                    {"width"}
                    {" height"}
                    {"maxW"}
                    {"maxH"}
                    {" bLeft"}
                    {"bRight"}
                    {" bTop"}
                    {"bBottom"}
                    {" border"}
                    {"id"}
                    {"className"}
                    {" aniCount"}
                    {" aniTime"}
                    {" aniName"}
                    {" aniDur"}
                    {"transform"}
                    {"transformOrigin"}
                    {"aniFillMode"}
                    {" smdis = 'flex'"}
                    {"  mddis = 'flex'"}
                    {"  hovColor"}
                    {"wordWrap"}
                    {"type"}
                </List>
            </Holder>
            <Holder direction="column">
                <H>P</H>
                <P type="1">This is paragraph or more just a sentence.</P>
                <HR />
                <H>Some Info</H>
                <List>
                    {"This accepts and renders multiple children all rendered into a p tag"}
                    {"type='1' = P1"}
                    {"type='2' = P2"}
                    {"type='3' = P3"}
                    {"type='4' = P4"}
                    {"type='5' = P5"}
                </List>
                <HR />
                <H>Suggested Use</H>
                <List>
                    {"Use as a hParagraph and stuff related to text."}
                </List>
                <HR />
                <H>Size Information</H>

                <List>
                    {" "}
                </List>

            </Holder>
        </Holder>

    )
}