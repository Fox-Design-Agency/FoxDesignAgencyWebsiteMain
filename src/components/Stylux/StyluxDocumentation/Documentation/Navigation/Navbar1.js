import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function Navbar1() {

    return (
        <Holder
        alignBlock1="flex-start"
        alignBlock2="flex-start">
        <Holder
            direction="column">
            <H42>Available Props</H42>
            <BulletList1 width="300px">
            {"position"}
            {"top"}
            {"left"}
            {"right"}
            {"bottom"}
            {"font = 'serif'"}
            {"totalWidth = '100%'"}
            {"navbarWidth = '100%'"}
            {"height"}
            {"display = 'flex'"}
            {"direction = 'row'"}
            {"align = 'center'"}
            {"columnAlign = 'center'"}
            {"margin = '0'"}
            {"padding = '0'"}
            {"itemSpacing = '10px 0'"}
            {"mainBackground = 'inherit'"}
            {"itemBackground = 'inherit'"}
            {"color = 'black'"}
            {"fontSize = 1em"}
            {"fontWeight = '100'"}
            {"fontVariant = 'none'"}
            {"count = '0'"}
            {"smDis = 'flex' (if no count set, if count > 0 then 'none')"}
            {"mdDis = 'flex'"}
            {"hoverColor"}
            {"hamSmDis = 'flex' (if no count set, then 'none')"}
            {"hamMdDis = 'none'"}
            {"hamTop = '7%'"}
            {"hamSmDis = 'flex'"}
            {"hamMdDis = 'none'"}
            {"hamShadow = '1px 2px 2px black'"}
            {"hamBackground = 'white'"}
            {"hamPosition = 'absolute'"}
            {"navid"}
            {"itemsid"}
            {"navClassName"}
            {"itemsClassName"}
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