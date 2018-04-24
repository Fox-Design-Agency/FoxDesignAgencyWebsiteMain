import React from "react";

import {
    Holder,
} from "react-stylux"

export default function Card1() {

    return (
        <Holder
            direction="column">
            Card1
            shadow = '1px 4px 8px 0 rgba(0,0,0,0.2)'
            hovShadow = '1px 8px 16px 0 rgba(0,0,0,0.2)'
            corners
        
        ```
         - accepts four children in this order: img, alt tag, h5, p
        ```
        Card1
            img
            {'img alt tag'}
            {'Some title that is not styled yet'}
            {'supporting text that is not styled yet'}
        Card1
        </Holder>

    )
}