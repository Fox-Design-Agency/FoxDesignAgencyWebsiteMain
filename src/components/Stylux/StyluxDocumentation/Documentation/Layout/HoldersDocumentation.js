import React from "react";

import {
    Holder,
    H43,
    P1,
    P2,
    BulletList1,
} from "react-stylux"

export default function HolderDocumentation() {

    return (
        <Holder
            direction="column">
            <H43>Holder</H43>
            <P1>Props:</P1>
            <P2>x = number of block, for example block1 = '2'</P2>
            <P2>This accepts up to twenty children and renders them. This is the current backbone for layout. Can be placed inside of itself to create very dynamic and responsive layouts.</P2>
            <BulletList1
                width='100px'>
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
            <P1>Examples</P1>
            <pre>{`
            <Holder>
                <Block2 />
                <Block2 />
            </Holder>
            `}</pre>


            
            <pre>{`
            <Holder>
                <Holder
                    direction='column'>
                    <Block2 />
                    <Holder>
                        <Block2 />
                        <Block2 />
                    </Holder>
                </Holder>
                <Block2 />
                <Holder
                    direction='column'>
                    <Block2 />
                    <Block2 />
                </Holder>
            </Holder>`}</pre>
            <H43>Suggested Use</H43>
            <P1>Use to divide space and create complex layouts.</P1>
        </Holder>
    )
}