import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
    Container,
    H23,
    Brand3,
    NavBar1,
    P4,
    HR
} from "react-stylux";

import foxtail from "../../assets/logo/foxtail2-1.svg";

export default function LandingPage() {
    return (
        <Container>
            <Header />
            <HR />
            <H23>Coming Soon...</H23>
            <Brand3
                size="lg">
                {foxtail}
            </Brand3>
            <HR />
            <Footer />
        </Container>
    );
}
