import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Wrapper,
    Holder,
    H,
    HR,
} from "react-stylux";

export default function StyluxBlocksView() {
    return (
        <Wrapper>
            <StyluxHeader />
            <Holder
                direction="column">
                <H>
                    Blocks
                    </H>
                <HR />
                <H>
                    <Link to="/react-stylux/blocks/headingviews">Heading Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/paragraphviews">Paragraph Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/buttonviews">Button Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/imageviews">Image Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/listviews">List Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/cardviews">Card Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/navbarviews">Navbar Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/carouselviews">Carousel Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/togglersviews">Toggler Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/tableviews">Table Blocks</Link>
                </H>
                <H>
                    <Link to="/react-stylux/blocks/formviews">Form Blocks</Link>
                </H>
                <HR />
            </Holder>
            <StyluxFooter />
        </Wrapper>
    )
} 