import React from "react";

import {
    Holder,
} from "react-stylux"

export default function DropDownnav5() {

    return (
        <Holder
            direction="column">
            DropDownNav5
            background
            boxShadow = '1px 2px 2px black'
            borderRadius = '0 5px 5px 0'
            offset
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
        This accepts unlimited? children and renders them, the first child is the title. A sideways pointing arrow is rendered after title
        ```
        DropDownNav5
            <a href="">store</a>
            <a href="">product1</a>
            <a href="">product2</a>
            <a href="">product3</a>
        DropDownNav5
            </Holder>
    )
}
