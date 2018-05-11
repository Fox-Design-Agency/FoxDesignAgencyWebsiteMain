import React from "react";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    H,
    HR,
} from "react-stylux";

export default function StyluxFormBlocksViews() {
    return (
      <Wrapper>
            <StyluxHeader />
           
                <BlocksSubNavBar />
                <H>Form Blocks</H>

                <HR />
           
            <StyluxFooter />
         </Wrapper>
    )
} 