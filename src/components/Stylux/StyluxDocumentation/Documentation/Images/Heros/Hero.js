import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function Hero1View() {

    return (
        <Holder
        alignBlock1="flex-start"
        alignBlock2="flex-start">
        <Holder
            direction="column">
            <H>Available Props</H>
            <List width="300px">
            {"background"}
            {"image"}
            {"imageRepeat = 'no-repeat'"}
            {"backgroundPosition = 'center'"}
            {"imageSize = 'cover'"}
            {"width = '100%'"}
            {" height = 'inherit'"}
            {" id"}
            {" className"}
            {"  smdis = 'flex'"}
            {"  mddis = 'flex'"}
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