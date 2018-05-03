import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H22,
    H34,
    P2,
    HR,
    Hero1,
    Hero2,
    Hero3,
    Hero4,
    Hero5,
    Image,
    Figure,

    H42,
    BulletList1,
} from "react-stylux";


export default function StyluxImageBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <Link to="/react-stylux/documentation/image"><H22>Image Blocks</H22></Link>
                <H34> Sizes</H34>
                <Holder>
                    <Holder direction="column">
                        <H42>large size:</H42>
                        <H42>Non-Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {"tn - 50px X 50px"}
                            {"exsm - 90px X 90px"}
                            {"sm - 150px X 150px"}
                            {"md - 300px X 300px"}
                            {"lg - 500px X 500px"}
                            {"exlg - 700px X 700px"}
                        </BulletList1>
                        <H42>Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {"tn - 81px X 50px"}
                            {"exsm - 81px X 50px"}
                            {"sm - 243px X 150px"}
                            {"md - 485px X 300px"}
                            {"lg - 809px X 500px"}
                            {"exlg - 1137px X 700px"}
                        </BulletList1>
                        <H42>Tall Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {"tn - 50px X 81px"}
                            {"exsm - 50px X 81px"}
                            {"sm - 150px X 243px"}
                            {"md - 300px X 485px"}
                            {"lg - 500px X 809px"}
                            {"exlg - 700px X 1137px"}
                        </BulletList1>
                    </Holder>
                    <Holder direction="column">
                        <H42>medium size:</H42>
                        <H42>Non-Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {"tn - 50px X 50px"}
                            {"exsm - 50px X 50px"}
                            {"sm - 90px X 90px"}
                            {"md - 150px X 150px"}
                            {"lg - 300px X 300px"}
                            {"exlg - 500px X 500px"}
                        </BulletList1>
                        <H42>Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {"tn - 81px X 50px "}
                            {"exsm - 81px X 50px"}
                            {"sm - 145.8px X 90px"}
                            {"md - 202.5px X 150px"}
                            {"lg - 485.4px X 300px"}
                            {"exlg - 812px X 500px"}
                        </BulletList1>
                        <H42>Tall Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {"tn - 50px X 81px"}
                            {"exsm - 50px X 81px"}
                            {"sm - 90px X 145.8px"}
                            {"md - 150px X 202.5px"}
                            {"lg - 300px X 485.4px"}
                            {"exlg - 500px X 812px"}
                        </BulletList1>
                    </Holder>
                    <Holder direction="column">
                        <H42>small size:</H42>
                        <H42>Non-Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {"tn - 50px X 50px"}
                            {"exsm - 90px X 90px"}
                            {"sm - 150px X 150px"}
                            {"md - 300px X 300px"}
                            {" lg - 500px X 500px"}
                            {" exlg - 700px X 700px"}
                        </BulletList1>
                        <H42>Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {" tn - 81px X 50px"}
                            {"exsm - 81px X 50px"}
                            {"sm - 81px X 50px"}
                            {"md - 121.5px X 90px"}
                            {"lg - 242.7px X 150px"}
                            {"exlg - 487px X 300px"}
                        </BulletList1>
                        <H42>Tall Rectangle Sizes:</H42>
                        <BulletList1 width="350px">
                            {"tn - 50px X 81px"}
                            {" exsm - 50px X 81px"}
                            {" sm - 50px X 81px"}
                            {" md - 90px X 121.5px"}
                            {"  lg - 150px X 242.7px"}
                            {"  exlg - 300px X 487px"}
                        </BulletList1>
                    </Holder>
                </Holder>
                <Holder direction="column">
                    <H34>
                        Image type="circle" size="tn"
                    </H34>
                    <Image type="circle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                    Image type="circle" size="exsm"
                    </H34>
                    <Image type="circle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                    Image type="circle" size="sm"
                    </H34>
                    <Image type="circle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                    Image type="circle" size="md"
                    </H34>
                    <Image type="circle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                    Image type="circle" size="lg"
                    </H34>
                    <Image type="circle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                    Image type="circle" size="exlg"
                    </H34>
                    <Image type="circle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                </Holder>
                <Holder
                    direction="column">
                    <H34>
                        Oval Image tn
                    </H34>
                    <Image type="oval" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Oval Image exsm
                    </H34>
                    <Image type="oval" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Oval Image sm
                    </H34>
                    <Image type="oval" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Oval Image md
                    </H34>
                    <Image type="oval" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Oval Image lg
                    </H34>
                    <Image type="oval" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Oval Image exlg
                    </H34>
                    <Image type="oval" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                </Holder>

                <Holder
                    direction="column">
                    <H34>
                        Rounded Image tn
                    </H34>
                    <Image type="rounded" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Rounded Image exsm
                    </H34>
                    <Image type="rounded" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Rounded Image sm
                    </H34>
                    <Image type="rounded" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Rounded Image md
                    </H34>
                    <Image type="rounded" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Rounded Image lg
                    </H34>
                    <Image type="rounded" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H34>
                        Rounded Image exlg
                    </H34>
                    <Image type="rounded" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image tn
                    </H34>
                    <Image type="square" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image exsm
                    </H34>
                    <Image type="square" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image sm
                    </H34>
                    <Image type="square" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <Holder
                    direction="column">
                    <H34>
                        Square Image md
                    </H34>
                    <Image type="square" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image lg
                    </H34>
                    <Image type="square" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image exlg
                    </H34>
                    <Image type="square" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image tn
                    </H34>
                    <Image type="roundedRectangle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image exsm
                    </H34>
                    <Image type="roundedRectangle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image sm
                    </H34>
                    <Image type="roundedRectangle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image md
                    </H34>
                    <Image type="roundedRectangle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image lg
                    </H34>
                    <Image type="roundedRectangle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image exlg
                    </H34>
                    <Image type="roundedRectangle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image tn
                    </H34>
                    <Image type="rectangle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image exsm
                    </H34>
                    <Image type="rectangle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image sm
                    </H34>
                    <Image type="rectangle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image md
                    </H34>
                    <Image type="rectangle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image lg
                    </H34>
                    <Image type="rectangle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image exlg
                    </H34>
                    <Image type="rectangle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image tn
                    </H34>
                    <Image type="tallRoundedRectangle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image exsm
                    </H34>
                    <Image type="tallRoundedRectangle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image sm
                    </H34>
                    <Image type="tallRoundedRectangle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image md
                    </H34>
                    <Image type="tallRoundedRectangle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image lg
                    </H34>
                    <Image type="tallRoundedRectangle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image exlg
                    </H34>
                    <Image type="tallRoundedRectangle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image tn
                    </H34>
                    <Image type="tallRectangle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image exsm
                    </H34>
                    <Image type="tallRectangle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image sm
                    </H34>
                    <Image type="tallRectangle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image md
                    </H34>
                    <Image type="tallRectangle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image lg
                    </H34>
                    <Image type="tallRectangle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image exlg
                    </H34>
                    <Image type="tallRectangle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Figure
                    </H34>
                    <Figure>
                        <Image size="tn">
                            {}
                            Chris Hanging out
                    </Image>
                        Just Chris Hanging Out
                    </Figure>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 