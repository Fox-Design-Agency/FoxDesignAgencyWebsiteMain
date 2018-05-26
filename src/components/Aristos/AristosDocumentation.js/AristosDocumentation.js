import React from "react";
import {
    Wrapper,
    Holder,
    HR,
    Brand,
    H
} from "react-stylux";
import AristosHeader from "../AristosHeader/AristosHeader"
import AristosFooter from "../AristosFooter/AristosFooter";

import foxtail from "../../../assets/logo/foxtail2-1.svg";

export default function AristosDocumentation() {
    return (
        <Wrapper>
            <AristosHeader />
            <H>Documentation Coming Soon...</H>
            <Brand box="3"
                size="lg">
                {foxtail}
            </Brand>
            <HR />
            <AristosFooter />
        </Wrapper>
    )
}