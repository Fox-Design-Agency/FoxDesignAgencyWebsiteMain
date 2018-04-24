import React from "react";

import {
    Holder,
} from "react-stylux"

export default function Table2() {

    return (
        <Holder
            direction="column">

            Table2
            columns="3"
            rows= "3"
            body
            tableId
            mainId
            mainClassName
            tableClassName
        
            dbordertop
            dborderRight
            dborderBottom
            dborderLeft
            dborder = '1px solid black'
            dwidth
            dheight
            dmargin
            dpadding = '5px'
        
            tbordertop
            tborderRight
            tborderBottom
            tborderLeft
            tborder = '1px solid black'
            tmargin ='5px'
            tpadding
            tableWidth
            tableHeight
            borderCollaspe = 'collaspe'
            
        ```
        This accepts unlimited? children and renders based on column and row values
        ```
        Table2
            {'head1'}
            {'body1'}
            {'body2'}
            {'head2'}
            {'body3'}
            {'body4'}
            {'head3'}
            {'body5'}
            {'body6'}
        Table2
            </Holder>
    )
}