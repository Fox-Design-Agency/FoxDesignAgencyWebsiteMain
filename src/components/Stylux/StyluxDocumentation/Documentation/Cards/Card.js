import React from "react";

import {
    Holder,
    H,
    List,
    HR,
    Card,
} from "react-stylux"

export default function CardView() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
                    {"shadow = '1px 4px 8px 0 rgba(0,0,0,0.2)'"}
                    {" hovShadow = '1px 8px 16px 0 rgba(0,0,0,0.2)'"}
                    {" corners"}
                    {"id"}
                    {"className"}
                    {"smDis"}
                    {"mdDis"}
                    {"type"}
                </List>
            </Holder>
            <Holder direction="column">
                <H>Card</H>
                <Card></Card>
                <HR />
                <H>Some Info</H>
                <List>
                    {"type='1' Img, alt tag, Header, Paragraph"}
                    {"type='2' Img, alt tag, Header, Paragraph, Button Text"}
                    {"type='3' 7 Slots"}
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