import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function HolderDocumentation() {

    return (
        <Holder
        alignBlock1="flex-start"
        alignBlock2="flex-start">
        <Holder
            direction="column">
            <H>Available Props</H>
            <List width="300px">
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
                </List>
                </Holder>
                <Holder direction="column">
                    <H>Holder</H>
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