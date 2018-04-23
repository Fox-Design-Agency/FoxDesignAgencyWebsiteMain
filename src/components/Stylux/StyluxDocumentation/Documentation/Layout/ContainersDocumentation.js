import React from "react";

import {
    Holder,
    H43,
    P1,
    P2,
    BulletList1
} from "react-stylux"

export default function ContainerDocumentation() {

    return (
        <Holder
            direction="column">
            <H43>Container</H43>
            <P1>Props:</P1>
            <P2>x = number of block, for example block1 = '2'</P2>
            <P2>This accepts up to twenty children and renders then. This is still currently a useless item, but can be used for visual clarity when creating. Future use will implement a Provider to deliver themes.</P2>
            <BulletList1
                width='100px'>
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
            <P1>Example</P1>
            <pre>{`
            <Container >
                < Holder1 >
                </ Holder1>
            </ Container>`}</pre>
            <H43>Suggested Use</H43>
            <P1>Use to wrap major items, use on the outer msot layer, use Holders to divide the inner space.</P1>
        </Holder >
    )
}