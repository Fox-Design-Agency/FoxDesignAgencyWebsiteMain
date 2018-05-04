import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    Card,
    H34,
} from "react-stylux"

export default function CardView() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"shadow = '1px 4px 8px 0 rgba(0,0,0,0.2)'"}
                    {" hovShadow = '1px 8px 16px 0 rgba(0,0,0,0.2)'"}
                    {" corners"}
                    {"id"}
                    {"className"}
                    {"smDis"}
                    {"mdDis"}
                    {"type"}
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H34>Card</H34>
                <Card></Card>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"type='1' Img, alt tag, Header, Paragraph"}
                    {"type='2' Img, alt tag, Header, Paragraph, Button Text"}
                    {"type='3' 7 Slots"}
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