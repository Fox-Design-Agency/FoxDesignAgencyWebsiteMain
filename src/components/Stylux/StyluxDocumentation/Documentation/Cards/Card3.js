import React from "react";

import {
    Holder,
} from "react-stylux"

export default function Card3() {

    return (
        <Holder
            direction="column">
            Card3
            shadow = '1px 4px 8px 0 rgba(0,0,0,0.2)'
            hovShadow = '1px 8px 16px 0 rgba(0,0,0,0.2)'
            corners
            height = '398px'
            width = '250px'
        
        ```
        - accepts 7 children
        ```
        Card3
            {'Some Item'}
            {'$00.00'}
            {'Info'}
            {'Info'}
            {'Info'}
            {'Info'}
            {'Call to action'}
        Card3
        </Holder>

    )
}