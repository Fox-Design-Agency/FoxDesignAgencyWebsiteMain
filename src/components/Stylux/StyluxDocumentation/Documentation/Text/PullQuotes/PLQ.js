import React from "react";

import {
    Holder,
    H,
    BulletList1,
    HR,
    PLQ,
    H34,
} from "react-stylux"

export default function PLQView() {

    return (
        <Holder
        alignBlock1="flex-start"
        alignBlock2="flex-start">
        <Holder
            direction="column">

            <H>Available Props</H>
            <BulletList1 width="300px">
                {"aniCount"}
                {"aniTime"}
                {"aniName"}
                {"aniDur"}
                {"transform"}
                {"transformOrigin"}
                {"aniFillMode"}
                {"smDis"}
                {"mdDis"}
                {"type"}
            </BulletList1>
            </Holder>
            <Holder direction="column">   
            <H34>PLQ</H34>
                <PLQ>{"Some Text"}{"Someone"}</PLQ>
                <HR />
                <H>Some Info</H>
                <BulletList1>
                    {"type='1' horizontal pull quote"}
                    {"type='2' vertical pull quote"}
                </BulletList1>
                <HR />
                <H>Suggested Use</H>
                <BulletList1>
                    {"Use to break up text and highlight stuff"}
                </BulletList1>
                <HR />
                <H>Size Information</H>
                <BulletList1>
                    {"Nothing to see here just yet..."}
                </BulletList1>

            </Holder>
        </Holder>

    )
}