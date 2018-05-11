import React from "react";
import {Link} from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    Holder,
    H,
    HR,
    Table,
} from "react-stylux";

export default function StyluxTableBlocksViews() {
    return (
          <Wrapper>
            <StyluxHeader />
          
                <BlocksSubNavBar />
                <H>Table Blocks</H>

                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/table"><H>
                        Table 1 - default && box="1"
                    </H></Link>
                    <Table
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
                    </Table>
                  
                </Holder>
                <HR />
           
            <StyluxFooter />
        </Wrapper>
    )
} 