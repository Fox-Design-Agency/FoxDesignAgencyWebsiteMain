import React from "react";

import {
    Holder,
    H,
    List,
    HR,
} from "react-stylux"

export default function WrapperDocumentation() {

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
                </List>
                </Holder>
                <Holder direction="column">
                    <H>Container</H>
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