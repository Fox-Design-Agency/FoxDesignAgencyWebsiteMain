import React from "react";

import {
    Holder,
} from "react-stylux"

export default function Table1() {

    return (
        <Holder
            direction="column">
            Table1
            columns="3"
            rows= "3"
            head
            body
            tableId
            mainId
            mainClassName
            tableClassName
        
            hbordertop
            hborderRight
            hborderBottom
            hborderLeft
            hborder = '1px solid black'
            hvertical = 'center'
            headWidth
            headHeight
            headMargin
            headPadding = '5px'
        
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
        Table1
            {'head1'}
            {'head2'}
            {'head3'}
            {'body1'}
            {'body2'}
            {'body3'}
            {'body4'}
            {'body5'}
            {'body6'}
        Table1
           
            </Holder>
    )
}