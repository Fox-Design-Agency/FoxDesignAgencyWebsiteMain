import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    H34,
} from "react-stylux"

export default function HolderDocumentation() {

    return (
        <Holder
        alignBlock1="flex-start"
        alignBlock2="flex-start">
        <Holder
            direction="column">
            <H42>Available Props</H42>
            <BulletList1 width="300px">
                {"display = 'flex'"}
                {"direction = 'row'"}
                {"height"}
                {" borderLeft"}
                {"borderRight"}
                {"borderTop"}
                {" borderBottom"}
                {" border"}
                {" block{x}direction = 'row'"}
                {" alignBlock{x} = 'center'"}
                {" block{x} = '1'"}
                {" block{x}BorderLeft"}
                {"block{x}BorderRight"}
                {" block{x}BorderTop"}
                {" block{x}BorderBottom"}
                {" block{x}Border"}
                {" justifyBlock{x} = 'center'"}
                {"block{x}smdis = 'flex'"}
                {"block{x}mddis = 'flex'"}
                {"alignBlock{x} = 'center'"}
                {"background"}
                {"padding = '0'"}
                {"margin = '10px 0'"}
                {"smdis = 'flex'"}
                {"mddis = 'flex'"}
                {"smflexDir"}
                {"mdflexDir"}
                </BulletList1>
                </Holder>
                <Holder direction="column">
                    <H34>Holder</H34>
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