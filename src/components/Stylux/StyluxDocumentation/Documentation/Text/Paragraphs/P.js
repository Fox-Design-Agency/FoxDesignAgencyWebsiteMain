import React from "react";

import {
    Holder,
    H42,
    P,
    BulletList1,
    HR,
    H34,
} from "react-stylux"

export default function PView() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
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
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H34>P</H34>
                <P type="1">This is paragraph or more just a sentence.</P>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"This accepts and renders multiple children all rendered into a p tag"}
                    {"type='1' = P1"}
                    {"type='2' = P2"}
                    {"type='3' = P3"}
                    {"type='4' = P4"}
                    {"type='5' = P5"}
                </BulletList1>
                <HR />
                <H42>Suggested Use</H42>
                <BulletList1>
                    {"Use as a hParagraph and stuff related to text."}
                </BulletList1>
                <HR />
                <H42>Size Information</H42>

                <BulletList1>
                    {" "}
                </BulletList1>

            </Holder>
        </Holder>

    )
}