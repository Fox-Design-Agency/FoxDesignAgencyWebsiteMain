import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function Navbar1() {

    return (
        <Holder
        alignBlock1="flex-start"
        alignBlock2="flex-start">
        <Holder
            direction="column">
            <H>Available Props</H>
            <List width="300px">
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