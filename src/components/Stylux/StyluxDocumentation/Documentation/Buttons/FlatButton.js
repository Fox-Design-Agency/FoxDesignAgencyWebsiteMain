import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    FlatButton1
} from "react-stylux"

export default function FlatButtonView() {

    return (
        <Holder
        alignBlock1="flex-start"
        alignBlock2="flex-start">
        <Holder
            direction="column">
            <H42>Available Props</H42>
            <BulletList1 width="300px">
            {"onClick"}
            {"id"}
            {"className"}
            {"width"}
            {" height"}
            {" fontSize = '20px'"}
            {" color = 'black'"}
            {" hoverColor = 'white'"}
            {"  hoverBackground = 'black'"}
            {"  background = 'white'"}
            {"  borderRadius = '28px'"}
            {"  border = 'solid #000000 2px'"}
            {"  padding = '10px 20px 10px 20px'"}
            {"   margin"}
            {"   aniCount,"}
            {"  aniTime,"}
            {"  aniName,"}
            {"  aniDur,"}
            {"  transformOrigin,"}
            {"  aniFillMode,"}
            {"  smDis = 'flex'"}
            {"mdDis = 'flex'"}
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