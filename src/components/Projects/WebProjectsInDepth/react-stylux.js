import React from "react"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import {
    Container,
    Holder,
    HR,
    H31,
    P1,
    A,
    Image,
    H42,
    BulletList1,
} from "react-stylux"

import reactStylux from "../../../assets/projects/web/reactStyluxTOC_LG.jpg";

export default function reactStyluxView() {

    return (
        <section>
            <Header />
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        react-stylux
                    </H31>
                    <Holder
                        direction="column">
                        <Holder>
                            <Image
                                type="square"
                                size='lg'>
                                {reactStylux}
                                {"The old table of contents for react-stylux"}
                            </Image>
                            <Holder
                                direction="column">
                                <H42 margin="0 0 50px 0">
                                react-stylux
                                    </H42>
                                <BulletList1>
                                {"Still under development"}
                                {"Component library with layout mechanic"}
                                {"Uses style object to style components through props"}
                                {"This web page was built with react-stylux to test capability"}

                                </BulletList1>
                            </Holder>
                        </Holder>
                        <HR />
                    </Holder>

                    <Link to="/projects/web"><P1>Back to Web Projects...</P1></Link>
                </Holder>
                <HR height="300px" />
            </Container>
            <Footer />
        </section>
    )
}