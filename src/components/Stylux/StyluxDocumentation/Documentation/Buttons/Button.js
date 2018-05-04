import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    Button,
    H34,
} from "react-stylux"

export default function ButtonView() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
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
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H34>Button</H34>
                <Button>Hover Me</Button>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"type='flat' flat button"}
                    {"type='raised' raised button"}
                    {"type='floating' floating button"}
                    {"type='block' block button"}
                    {"type='text' text button"}
                </BulletList1>
                <HR />
                <H42>Suggested Use</H42>
                <BulletList1>
                    {"Use as a call to action, place a function to do stuff on click"}
                    
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