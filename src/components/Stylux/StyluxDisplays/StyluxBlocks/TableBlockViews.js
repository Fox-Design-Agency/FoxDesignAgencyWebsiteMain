import React from "react";
import {Link} from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H22,
    H34,
    HR,
    Table1,
    Table2,
    Table3,
} from "react-stylux";

export default function StyluxTableBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Table Blocks</H22>

                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/table-1"><H34>
                        Table 1
                    </H34></Link>
                    <Table1
                        columns="5"
                        rows="4"
                        tableClassName="oddRowHighlights">
                        {'Head1'}
                        {'Head2'}
                        {'Head3'}
                        {'body1'}
                        {'body2'}
                        {'body3'}
                        {'body4'}
                        {'body5'}
                        {'body6'}
                        {'body7'}
                    </Table1>
                    <Link to="/react-stylux/documentation/table-2"><H34>
                        Table 2
                    </H34></Link>
                    <Table2
                        tableClassName="oddRowHighlights">
                        {'Head'}
                        {'Body1'}
                        {'Body2'}
                        {'Head2'}
                        {'Body3'}
                        {'Body4'}
                    </Table2>
                    <H34>
                        Table 3
                    </H34>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 