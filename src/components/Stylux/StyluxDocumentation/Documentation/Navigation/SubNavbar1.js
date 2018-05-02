import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function SubNavbar1() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"position = 'sticky'"}
                    {"top = '-1px'"}
                    {"left"}
                    {"right"}
                    {"bottom"}
                    {"zIndex= '200'"}
                    {"font = 'serif'"}
                    {"totalWidth = '100%'"}
                    {" navbarWidth = '100%'"}
                    {" height"}
                    {" display = 'flex'"}
                    {" direction = 'row'"}
                    {" align = 'center'"}
                    {" columnAlign = 'center'"}
                    {" margin = '0'"}
                    {" padding = '0'"}
                    {" itemSpacing = '10px 0'"}
                    {" mainBackground = 'black'"}
                    {" itemBackground = 'inherit'"}
                    {" color = 'whitesmoke'"}
                    {"fontSize = 0.9em"}
                    {"fontWeight = '100'"}
                    {"fontVariant = 'none'"}
                    {"navid"}
                    {"itemsid"}
                    {"navClassName"}
                    {"listClassName"}
                    {"itemsClassName"}
                    {"smDis = 'none'"}
                    {"mdDis ='flex'"}
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
