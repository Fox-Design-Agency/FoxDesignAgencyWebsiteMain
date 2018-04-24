import React from "react";
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
    CircleImage,
    SquareImage,
    TallRectangleImage,
    TallRoundedRectangleImage,
    Figure,
    RoundedImage,
    RectangleImage,
    RoundedRectangleImage,
    OvalImage,
    H42,
    BulletList1,
} from "react-stylux";

export default function StyluxImageBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Image Blocks</H22>
                <Holder direction="column">
                    <H34> Sizes</H34>
                    <H42>large size:</H42>
                    <H42>Non-Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px
                        exsm - 90px X 90px
                         sm - 150px X 150px
                        md - 300px X 300px
                         lg - 500px X 500px
                         exlg - 700px X 700px
                    </BulletList1>
                    <H42>Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px (Not finished)
                        exsm - 81px X 50px
                             sm - 243px X 150px
                        md - 485px X 300px
                        lg - 809px X 500px
                            exlg - 1137px X 700px
                    </BulletList1>
                    <H42>Tall Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px (Not finished)
                        exsm - 50px X 81px
                        sm - 150px X 243px
                        md - 300px X 485px
                        lg - 500px X 809px
                        exlg - 700px X 1137px
                    </BulletList1>
                </Holder>
                <Holder direction="column">
                    <H42>medium size:</H42>
                    <H42>Non-Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px
                         exsm - 90px X 90px
                        sm - 150px X 150px
                         md - 300px X 300px
                         lg - 500px X 500px
                         exlg - 700px X 700px
                    </BulletList1>
                    <H42>Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px (Not finished)
                       exsm - 81px X 50px
                        sm - 243px X 150px
                        md - 485px X 300px
                        lg - 809px X 500px
                        exlg - 1137px X 700px
                    </BulletList1>
                    <H42>Tall Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px (Not finished)
                        exsm - 50px X 81px
                        sm - 150px X 243px
                        md - 300px X 485px
                        lg - 500px X 809px
                        exlg - 700px X 1137px
                    </BulletList1>
                </Holder>
                <Holder direction="column">
                    <H42>small size:</H42>
                    <H42>Non-Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px
                    exsm - 90px X 90px
                        sm - 150px X 150px
                        md - 300px X 300px
                        lg - 500px X 500px
                       exlg - 700px X 700px
                    </BulletList1>
                    <H42>Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px (Not finished)
    exsm - 81px X 50px
    sm - 243px X 150px
   md - 485px X 300px
    lg - 809px X 500px
    exlg - 1137px X 700px
                    </BulletList1>
                    <H42>Tall Rectangle Sizes:</H42>
                    <BulletList1>
                        tn - 50px X 50px (Not finished)
                        exsm - 50px X 81px
                        sm - 150px X 243px
                        md - 300px X 485px
                        lg - 500px X 809px
                        exlg - 700px X 1137px
                    </BulletList1>
                </Holder>
                <Holder direction="column">
                    <H34>
                        Circle Image tn
                    </H34>
                    <CircleImage
                        size="tn">
                        {}
                        Chris Hanging out
                    </CircleImage>
                    <HR />
                    <H34>
                        Circle Image exsm
                    </H34>
                    <CircleImage
                        size="exsm">
                        {}
                        Chris Hanging out
                    </CircleImage>
                    <HR />
                    <H34>
                        Circle Image sm
                    </H34>
                    <CircleImage
                        size="sm">
                        {}
                        Chris Hanging out
                    </CircleImage>
                    <HR />
                    <H34>
                        Circle Image md
                    </H34>
                    <CircleImage
                        size="md">
                        {}
                        Chris Hanging out
                    </CircleImage>
                    <HR />
                    <H34>
                        Circle Image lg
                    </H34>
                    <CircleImage
                        size="lg">
                        {}
                        Chris Hanging out
                    </CircleImage>
                    <HR />
                    <H34>
                        Circle Image exlg
                    </H34>
                    <CircleImage
                        size="exlg">
                        {}
                        Chris Hanging out
                    </CircleImage>
                    <HR />
                </Holder>
                <Holder
                    direction="column">
                    <H34>
                        Oval Image tn
                    </H34>
                    <OvalImage
                        size="tn">
                        {}
                        Chris Hanging out
                    </OvalImage>
                    <HR />
                    <H34>
                        Oval Image exsm
                    </H34>
                    <OvalImage
                        size="exsm">
                        {}
                        Chris Hanging out
                    </OvalImage>
                    <HR />
                    <H34>
                        Oval Image sm
                    </H34>
                    <OvalImage
                        size="sm">
                        {}
                        Chris Hanging out
                    </OvalImage>
                    <HR />
                    <H34>
                        Oval Image md
                    </H34>
                    <OvalImage
                        size="md">
                        {}
                        Chris Hanging out
                    </OvalImage>
                    <HR />
                    <H34>
                        Oval Image lg
                    </H34>
                    <OvalImage
                        size="lg">
                        {}
                        Chris Hanging out
                    </OvalImage>
                    <HR />
                    <H34>
                        Oval Image exlg
                    </H34>
                    <OvalImage
                        size="exlg">
                        {}
                        Chris Hanging out
                    </OvalImage>
                    <HR />
                </Holder>

                <Holder
                    direction="column">
                    <H34>
                        Rounded Image tn
                    </H34>
                    <RoundedImage
                        size="tn">
                        {}
                        Chris Hanging out
                    </RoundedImage>
                    <HR />
                    <H34>
                        Rounded Image exsm
                    </H34>
                    <RoundedImage
                        size="exsm">
                        {}
                        Chris Hanging out
                    </RoundedImage>
                    <HR />
                    <H34>
                        Rounded Image sm
                    </H34>
                    <RoundedImage
                        size="sm">
                        {}
                        Chris Hanging out
                    </RoundedImage>
                    <HR />
                    <H34>
                        Rounded Image md
                    </H34>
                    <RoundedImage
                        size="md">
                        {}
                        Chris Hanging out
                    </RoundedImage>
                    <HR />
                    <H34>
                        Rounded Image lg
                    </H34>
                    <RoundedImage
                        size="lg">
                        {}
                        Chris Hanging out
                    </RoundedImage>
                    <HR />
                    <H34>
                        Rounded Image exlg
                    </H34>
                    <RoundedImage
                        size="exlg">
                        {}
                        Chris Hanging out
                    </RoundedImage>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image tn
                    </H34>
                    <SquareImage
                        size="tn">
                        {}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image exsm
                    </H34>
                    <SquareImage
                        size="exsm">
                        {}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image sm
                    </H34>
                    <SquareImage
                        size="sm">
                        {}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <Holder
                    direction="column">
                    <H34>
                        Square Image md
                    </H34>
                    <SquareImage
                        size="md">
                        {}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image lg
                    </H34>
                    <SquareImage
                        size="lg">
                        {}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Square Image exlg
                    </H34>
                    <SquareImage
                        size="exlg">
                        {}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image tn
                    </H34>
                    <RoundedRectangleImage
                        size="tn">
                        {}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image exsm
                    </H34>
                    <RoundedRectangleImage
                        size="exsm">
                        {}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image sm
                    </H34>
                    <RoundedRectangleImage
                        size="sm">
                        {}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image md
                    </H34>
                    <RoundedRectangleImage
                        size="md">
                        {}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image lg
                    </H34>
                    <RoundedRectangleImage
                        size="lg">
                        {}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image exlg
                    </H34>
                    <RoundedRectangleImage
                        size="exlg">
                        {}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image tn
                    </H34>
                    <RectangleImage
                        size="tn">
                        {}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image exsm
                    </H34>
                    <RectangleImage
                        size="exsm">
                        {}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image sm
                    </H34>
                    <RectangleImage
                        size="sm">
                        {}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image md
                    </H34>
                    <RectangleImage
                        size="md">
                        {}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image lg
                    </H34>
                    <RectangleImage
                        size="lg">
                        {}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image exlg
                    </H34>
                    <RectangleImage
                        size="exlg">
                        {}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image tn
                    </H34>
                    <TallRoundedRectangleImage
                        size="tn">
                        {}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image exsm
                    </H34>
                    <TallRoundedRectangleImage
                        size="exsm">
                        {}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image sm
                    </H34>
                    <TallRoundedRectangleImage
                        size="sm">
                        {}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image md
                    </H34>
                    <TallRoundedRectangleImage
                        size="md">
                        {}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image lg
                    </H34>
                    <TallRoundedRectangleImage
                        size="lg">
                        {}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image exlg
                    </H34>
                    <TallRoundedRectangleImage
                        size="exlg">
                        {}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
            </Container>
            <Container>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image tn
                    </H34>
                    <TallRectangleImage
                        size="tn">
                        {}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image exsm
                    </H34>
                    <TallRectangleImage
                        size="exsm">
                        {}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image sm
                    </H34>
                    <TallRectangleImage
                        size="sm">
                        {}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image md
                    </H34>
                    <TallRectangleImage
                        size="md">
                        {}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image lg
                    </H34>
                    <TallRectangleImage
                        size="lg">
                        {}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image exlg
                    </H34>
                    <TallRectangleImage
                        size="exlg">
                        {}
                        Chris Hanging out
                    </TallRectangleImage>
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
                        <CircleImage
                            size="md">
                            {}
                            Chris Hanging out
                        </CircleImage>
                        Just Chris Hanging Out
                    </Figure>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 