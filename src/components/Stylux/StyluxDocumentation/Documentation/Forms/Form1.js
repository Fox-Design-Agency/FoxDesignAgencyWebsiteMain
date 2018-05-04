import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    H34,
} from "react-stylux"

export default function Form1() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">

                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H34>Form</H34>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"Not currently a thing on the live package"}
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