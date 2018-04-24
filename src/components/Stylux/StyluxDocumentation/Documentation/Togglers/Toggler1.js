import React from "react";

import {
    Holder,
} from "react-stylux"

export default function Toggler1() {

    return (
        <Holder
            direction="column">
            Toggler1
            position = 'fixed'
            width = '100px'
            height = '100vh'
            top = '0'
            boxShadow = '1px 2px 2px black'
            background = 'white'
            buttonText = 'Toggler1'
            bColor = 'black',
            bBackground,
            bFontSize = '1.333em'
            bFontVariant,
            bFontWeight,
            bTextShadow,
            bMargin,
            bPadding,
            bBorderLeft,
            bBorderRight,
            bBorderTop,
            bBorderBottom,
            bBorder,
            border,
            bLeft,
            bRight,
            bTop,
            bRight,
            bTop,
            bBotton,
            left
            right
            mainid
            toggleid
            titleid
            titleClassName
            mainClassName
            toggleClassName
            
        ```
        This accepts multiple children, a holder can be placed to divide up the space
        ```
        Toggler1
            buttonText = "Click Me!!"
            Holder5
                Navbar1
                    <a href="">Item1</a>
                    <a href="">Item2</a>
                    <a href="">Item3</a>
                    <a href="">Item4</a>
                Navbar1
                P1
                    some neat sentence
                P1
            Holder5
        Toggler1
        </Holder>

    )
}