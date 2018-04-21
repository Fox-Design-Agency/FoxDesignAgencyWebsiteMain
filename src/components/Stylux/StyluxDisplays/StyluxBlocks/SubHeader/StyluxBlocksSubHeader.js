import React from "react"
import { Link } from "react-router-dom"

import {
    SubNavBar1,
} from "react-stylux"

export default function BlocksSubHeader() {
    return (
            <SubNavBar1
                navbarWidth="70%">
                <Link to="/react-stylux/blocks/buttonviews">button</Link>
                <Link to="/react-stylux/blocks/headingviews">headings</Link>
                <Link to="/react-stylux/blocks/imageviews">images</Link>
                <Link to="/react-stylux/blocks/navbarviews">navbars</Link>
                <Link to="/react-stylux/blocks/paragraphviews">paragraphs</Link>
                <Link to="/react-stylux/blocks/carouselviews">carousels</Link>
                <Link to="/react-stylux/blocks/listviews">Lists</Link>
                <Link to="/react-stylux/blocks/formviews">Forms</Link>
                <Link to="/react-stylux/blocks/tableviews">Tables</Link>
                <Link to="/react-stylux/blocks/togglersviews">Togglers</Link>
                <Link to="/react-stylux/blocks/cardviews">Cards</Link>
            </SubNavBar1>
    )
}