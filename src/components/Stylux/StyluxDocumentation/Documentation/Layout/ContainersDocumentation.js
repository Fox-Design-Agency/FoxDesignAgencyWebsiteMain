import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
} from "react-stylux"

export default function ContainerDocumentation() {

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
                {"borderLeft"}
                {" borderRight"}
                {" borderTop"}
                {" borderBottom"}
                {" border"}
                {" alignBlock1 = 'center'"}
                {" block{x} = '1'"}
                {" justifyBlock{x} = 'center'"}
                {"  block{x}smdis = 'flex'"}
                {" block{x}mddis = 'flex'"}
                {" background"}
                {" padding = '0'"}
                {" margin = '0'"}
                {" smdis = 'flex'"}
                {" mddis = 'flex'"}
                {" smflexDir = 'column'"}
                {" mdflexDir = 'column'"}
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