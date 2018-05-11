import React from "react";

import {
    Holder,
    H,
    List,
    HR,
    Carousel
} from "react-stylux"

export default function Carousel1View() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
                    {"arrowColor = 'white'"}
                    {"background = 'black'"}
                    {"padding"}
                    {" height: '450px'"}
                    {"sliderTimer = '5000'"}
                    {"mainid"}
                    {" leftArrowid"}
                    {" rightArrowid"}
                    {" sliderid"}
                    {" mainClassName"}
                    {" leftArrowClassName"}
                    {" rightArrowClassName"}
                    {" sliderClassName"}

                </List>
            </Holder>
            <Holder direction="column">

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