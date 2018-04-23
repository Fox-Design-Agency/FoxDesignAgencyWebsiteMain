import React from "react";

import {
    Holder,
} from "react-stylux"

export default function ResponsiveNotes() {

    return (
        <Holder
            direction="column">
            ### Responsive Notes:
            There are two breakpoints on the follow elements:
            * containers
            * holders
            * headings
            * paragraphs
            * images
            
            #### Small Breakpoint:
            use this through props as: smdis
            the breakpoint for this is currently set at max-width: 440px (subject to change)
            
            #### Medium Breakpoint:
            use this through props as: mddis
            the breakpoint for this is currently set at min-width: 441px and max-width: 760px (subject to change)
            
            
            
        </Holder>
    )
}