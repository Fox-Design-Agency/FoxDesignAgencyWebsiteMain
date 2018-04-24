import React from "react";

import {
    Holder,
} from "react-stylux"

export default function Navbar1() {

    return (
        <Holder
            direction="column">
            "Navbar1
            position
            top
            left
            right
            bottom
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
            mainBackground = 'inherit'
            itemBackground = 'inherit'
            color = 'black'
            fontSize = 1em
            fontWeight = '100'
            fontVariant = 'none'
            count = '0'
            smDis = 'flex' (if no count set, if count > 0 then 'none')
            mdDis = 'flex'
            hoverColor
            hamSmDis = 'flex' (if no count set, then 'none')
            hamMdDis = 'none'
            hamTop = '7%'
            hamSmDis = 'flex'
            hamMdDis = 'none'
            hamShadow = '1px 2px 2px black'
            hamBackground = 'white'
            hamPosition = 'absolute'
            navid
            itemsid
            navClassName
            itemsClassName
            
        ```
        This accepts unlimited? children and renders them.
        Will render anything beyond count into the ham menu.
        ```
        Navbar1
            count ='3'
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        navbar1"
        </Holder>

    )
}