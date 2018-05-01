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

import ataraxyClothing from "../../../assets/projects/web/AtaraxyClothingHomepage_LG.jpg";

export default function AtaraxyClothingView() {

    return (
        <section>
            <Header />
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        Ataraxy Clothing
                    </H31>
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
                                <H42 margin="0 0 50px 0">
                                    Ataraxy Clothing
                                    </H42>
                                <BulletList1>
                                    {"Won most technical award during personal project presentations"}
                                    {"Designed a component library (react-stylux) to build this project"}
                                    {"This is a full-stack application with complete stripe integration"}

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