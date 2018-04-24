import React from "react";

import {
    Holder,
} from "react-stylux"

export default function DropDownnav1() {

    return (
        <Holder
            direction="column">
            DropDownNav1
            background
            boxShadow = '1px 2px 2px black'
            borderRadius = '0 0 5px 5px'
            offset
            color = 'black'
            textAlign = 'left'
            margin
            padding
            width
            mainid
            titleid
            itemsid
            mainClassName
            titleClassName
            itemsClassName
            smDis = 'flex'
            mdDis = 'flex'
            
        ```
        This accepts unlimited? children and renders them, the first child is the title. A downward pointing arrow is rendered after title
        ```
        DropDownNav1
            <a href="">store</a>
            <a href="">product1</a>
            <a href="">product2</a>
            <a href="">product3</a>
        DropDownNav1
            </Holder>
    )
}
