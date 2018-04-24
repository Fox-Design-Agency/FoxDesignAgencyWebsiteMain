import React from "react";

import {
    Holder,
} from "react-stylux"

export default function SubNavbar1() {

    return (
        <Holder
            direction="column">
            SubNavbar1
            position = 'sticky'
            top = '-1px'
            left
            right
            bottom
            zIndex= '200'
            font = 'serif'
            totalWidth = '100%'
            navbarWidth = '100%'
            height
            display = 'flex'
            direction = 'row'
            align = 'center'
            columnAlign = 'center'
            margin = '0'
            padding = '0'
            itemSpacing = '10px 0'
            mainBackground = 'black'
            itemBackground = 'inherit'
            color = 'whitesmoke'
            fontSize = 0.9em
            fontWeight = '100'
            fontVariant = 'none'
            navid
            itemsid
            navClassName
            listClassName
            itemsClassName
            smDis = 'none'
            mdDis ='flex'
            
        ```
        This accepts unlimited? children and renders them.
        ```
        SubNavbar1
            navbarWidth='70%'>
            <a href=''>Item1</a>
            <a href=''>Item2</a>
            <a href=''>Item3</a>
            <a href=''>Item4</a>
        SubNavbar1
            </Holder>
    )
}
