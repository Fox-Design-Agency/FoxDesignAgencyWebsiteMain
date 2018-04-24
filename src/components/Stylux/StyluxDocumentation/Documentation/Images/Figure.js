import React from "react";

import {
    Holder,
} from "react-stylux"

export default function Figure() {

    return (
        <Holder
            direction="column">
            Figure
            figid
            figCapid
            figClassName
            figCapClassName
            smdis = 'flex'
            mddis = 'flex'
            margin = '5px'
            padding
            shadow 
            hovShadow
            
        ```
        This accepts and renders two children: first child and a caption child
        ```
        Figure
            SquareImage size="md"
                image
                a neat alt tag
            SquareImage
            This is a neat caption
        Figure
        </Holder>

    )
}