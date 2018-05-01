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



export default function FoxChrisRealtheView() {

    return (
        <section>
            <Header />
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        FoxChrisRealThe
                    </H31>
                    <Holder
                        direction="column">
                        <Holder>
                            <Image
                                type="square"
                                size='lg'>
                                {""}
                                {"The homepage for foxchrisrealthe"}
                            </Image>
                            <Holder
                                direction="column">
                                <H42 margin="0 0 50px 0">
                                    FoxChrisRealThe
                                    </H42>
                                <BulletList1>
                                    {""}
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