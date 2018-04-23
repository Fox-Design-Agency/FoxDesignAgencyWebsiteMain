import React from "react";

import {
    Holder,
} from "react-stylux"

export default function HRDocumentation() {

    return (
        <Holder
            direction="column">
            ```
            HR
                width= '100%'
                height= '5px'
                background= 'black'
                padding
                margin= '5px 0px 5px 0px'
                bLeft
                bRight
                bTop
                bBottom
                border
                id
                
            ```
            - this accepts no children and is used as a dividing element for layout
            ```
            HR 
            ```
        </Holder>
    )
}