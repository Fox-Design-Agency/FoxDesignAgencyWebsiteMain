import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
    Wrapper,
    H,
    Brand,
    HR
} from "react-stylux";

import foxtail from "../../assets/logo/foxtail2-1.svg";

export default function LandingPage() {
    return (
        <Wrapper>
            <Header />
            <HR />
            <H>Coming Soon...</H>
            <Brand box="3"
                size="lg">
                {foxtail}
            </Brand>
            <HR />
            <Footer />
        </Wrapper>
    );
}
