import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function SubNavbar1() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
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
