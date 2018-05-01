import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Container,
    Holder,
    H22,
    H34,
    HR,
} from "react-stylux";

export default function StyluxBlocksView() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <Holder
                    direction="column">
                    <H22>
                        Blocks
                    </H22>
                    <HR />
                    <H34>
                        <Link to="/react-stylux/blocks/headingviews">Heading Blocks</Link>
                    </H34>
                    <H34>
                        <Link to="/react-stylux/blocks/paragraphviews">Paragraph Blocks</Link>
                    </H34>
                    <H34>
                        <Link to="/react-stylux/blocks/buttonviews">Button Blocks</Link>
                    </H34>
                    <H34>
                        <Link to="/react-stylux/blocks/imageviews">Image Blocks</Link>
                    </H34> 
                    <H34>
                        <Link to="/react-stylux/blocks/listviews">List Blocks</Link>
                    </H34>
                    <H34>
                        <Link to="/react-stylux/blocks/cardviews">Card Blocks</Link>
                    </H34>
                    <H34>
                        <Link to="/react-stylux/blocks/navbarviews">Navbar Blocks</Link>
                    </H34>
                    <H34>
                        <Link to="/react-stylux/blocks/carouselviews">Carousel Blocks</Link>
                    </H34>
                    <H34>
                        <Link to="/react-stylux/blocks/togglersviews">Toggler Blocks</Link>
                    </H34> 
                    <H34>
                        <Link to="/react-stylux/blocks/tableviews">Table Blocks</Link>
                    </H34>
                     <H34>
                        <Link to="/react-stylux/blocks/formviews">Form Blocks</Link>
                    </H34>
                    <HR />
                </Holder>
            </Container>
            <StyluxFooter />
        </section>
    )
} 