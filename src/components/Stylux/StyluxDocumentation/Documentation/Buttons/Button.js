import React from "react";

import {
    Holder,
    H,
    List,
    HR,
    Button,
} from "react-stylux"

export default function ButtonView() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
                    {"onClick"}
                    {"type"}
                    {"id"}
                    {"className"}
                    {"width"}
                    {"height"}
                    {"fontSize = '20px'"}
                    {"color"}
                    {'hover'}
                    {'hoverBackground'}
                    {'background'}
                    {'borderRadius'}
                    {'border'}
                    {'padding'}
                    {'margin'}
                    {'aniCount'}
                    {'aniTime'}
                    {'aniName'}
                    {'aniDur'}
                    {'transform'}
                    {'boxShadow'}
                    {'transformOrigin'}
                    {'aniFillMode'}
                    {"smDis"}
                    {"mdDis"}
                </List>
            </Holder>
            <Holder direction="column">
                <H>Button</H>
                <Button>Hover Me</Button>
                <HR />
                <H>Some Info</H>
                <List>
                    {"type='flat' flat button"}
                    {"type='raised' raised button"}
                    {"type='floating' floating button"}
                    {"type='block' block button"}
                    {"type='text' text button"}
                </List>
                <HR />
                <H>Suggested Use</H>
                <List>
                    {"Use as a call to action, place a function to do stuff on click"}
                    
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