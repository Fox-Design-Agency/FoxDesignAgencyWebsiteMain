import React from "react";

import {
    Holder,
} from "react-stylux"

export default function Toggler4() {

    return (
        <Holder
            direction="column">
            Toggler4
            width = '400px'
            height
            background = 'white'
            buttonText = 'Toggler2'
            position
            textVertical = 'center'
            textHorizontal = 'center'
            textHeight = '200px'
            textWidth = '300px'
            mainid
            toggleid
            panelClassName
            mainClassName
            toggleClassName
            
        ```
        This accepts multiple children split by \, odd children are rendered as panel names, and even children are rendered as the content of the panel.
        ```
        Toggler4
            {'title'}
            {'some text'}
            {'another title'}
            {'moar text'}
            {'last title'}
            {'last text'}
            {'not last'}
            {'most last text'}
        Toggler4
        </Holder>

    )
}