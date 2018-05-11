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

import ataraxyClothing from "../../../assets/projects/web/AtaraxyClothingHomepage_LG.jpg";

export default function AtaraxyClothingView() {

    return (
        <section>
            <Header />
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        Ataraxy Clothing
                    </H>
                    <Holder
                        direction="column">
                        <Holder>
                            <Image
                                type="square"
                                size='lg'>
                                {ataraxyClothing}
                                {"The homepage for Ataraxy Clothing"}
                            </Image>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                    Ataraxy Clothing
                                    </H>
                                <List>
                                    {"Won most technical award during personal project presentations"}
                                    {"Designed a component library (react-stylux) to build this project"}
                                    {"This is a full-stack application with complete stripe integration"}

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