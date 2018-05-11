import React from "react"
import { Link } from "react-router-dom"

import {
    SubNavbar,
} from "react-stylux"

export default function BlocksSubHeader() {
    return (
        <SubNavbar
            navbarWidth="70%">
            <Link to="/react-stylux/blocks/headingviews">headings</Link>
            <Link to="/react-stylux/blocks/paragraphviews">paragraphs</Link>
            <Link to="/react-stylux/blocks/buttonviews">button</Link>
            <Link to="/react-stylux/blocks/imageviews">images</Link>
            <Link to="/react-stylux/blocks/listviews">lists</Link>
            <Link to="/react-stylux/blocks/cardviews">cards</Link>
            <Link to="/react-stylux/blocks/navbarviews">navbars</Link>
            <Link to="/react-stylux/blocks/carouselviews">carousels</Link>
            <Link to="/react-stylux/blocks/togglersviews">togglers</Link>
            <Link to="/react-stylux/blocks/tableviews">tables</Link>
            <Link to="/react-stylux/blocks/formviews">forms</Link>
        </SubNavbar>
    )
}