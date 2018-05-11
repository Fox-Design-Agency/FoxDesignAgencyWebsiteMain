import React from "react"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import {
    Wrapper,
    Holder,
    HR,
    H,
    P,
    A,
    Image,
    List,
} from "react-stylux"



export default function FoxChrisRealtheView() {

    return (
        <section>
            <Header />
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        FoxChrisRealThe
                    </H>
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
                                <H margin="0 0 50px 0">
                                    FoxChrisRealThe
                                    </H>
                                <List>
                                    {""}
                                </List>
                            </Holder>
                        </Holder>
                        <HR />
                    </Holder>

                    <Link to="/projects/web"><P>Back to Web Projects...</P></Link>
                </Holder>
                <HR height="300px" />
            </Wrapper>
            <Footer />
        </section>
    )
}