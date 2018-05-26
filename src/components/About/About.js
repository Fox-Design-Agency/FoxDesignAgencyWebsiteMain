import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
    Wrapper,
    Holder,
    Card,
    HR
} from "react-stylux";

export default function About() {
    return (
        <Wrapper>
            <Header />
            <HR />
            <Holder>
                <Card>
                </Card>
                <Card>
                </Card>
            </Holder>
            <HR />
            <Footer />
        </Wrapper>
    );
}
