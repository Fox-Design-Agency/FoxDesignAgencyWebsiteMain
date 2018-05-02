import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function Hero2View() {

    return (
        <Holder
        alignBlock1="flex-start"
        alignBlock2="flex-start">
        <Holder
            direction="column">
            <H42>Available Props</H42>
            <BulletList1 width="300px">
            {"background"}
            {" image"}
            {" imageRepeat = 'no-repeat'"}
            {" backgroundPosition = 'center'"}
            {" imageSize = 'contain 80%'"}
            {" width = '100%'"}
            {" height = 'inherit'"}
            {"  bottomBoxWidth = '100%'"}
            {"  bottomBoxHeight = '25%'"}
            {"  bottomBoxPadding"}
            {"   bottomBoxBackgroundColor = 'rgba(0, 0, 0, 0.5)'"}
            {"   heroid"}
            {"   bottomid"}
            {"  heroClassName"}
            {"   bottomClassName"}
            {"   smdis = 'flex'"}
            {"   mddis = 'flex'"}
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