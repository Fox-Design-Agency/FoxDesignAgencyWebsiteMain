import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    Holder,
    HR,
    Hero,
    Image,
    H,
    List,
} from "react-stylux";


export default function StyluxImageBlocksViews() {
    return (
        <Wrapper>
            <Wrapper>
                <StyluxHeader />

                <BlocksSubNavBar />
                <Link to="/react-stylux/documentation/image"><H>Image Blocks</H></Link>
                <H> Sizes</H>
                <Holder>
                    <Holder direction="column">
                        <H>large size:</H>
                        <H>Non-Rectangle Sizes:</H>
                        <List width="350px">
                            {"tn - 50px X 50px"}
                            {"exsm - 90px X 90px"}
                            {"sm - 150px X 150px"}
                            {"md - 300px X 300px"}
                            {"lg - 500px X 500px"}
                            {"exlg - 700px X 700px"}
                        </List>
                        <H>Rectangle Sizes:</H>
                        <List width="350px">
                            {"tn - 81px X 50px"}
                            {"exsm - 81px X 50px"}
                            {"sm - 243px X 150px"}
                            {"md - 485px X 300px"}
                            {"lg - 809px X 500px"}
                            {"exlg - 1137px X 700px"}
                        </List>
                        <H>Tall Rectangle Sizes:</H>
                        <List width="350px">
                            {"tn - 50px X 81px"}
                            {"exsm - 50px X 81px"}
                            {"sm - 150px X 243px"}
                            {"md - 300px X 485px"}
                            {"lg - 500px X 809px"}
                            {"exlg - 700px X 1137px"}
                        </List>
                    </Holder>
                    <Holder direction="column">
                        <H>medium size:</H>
                        <H>Non-Rectangle Sizes:</H>
                        <List width="350px">
                            {"tn - 50px X 50px"}
                            {"exsm - 50px X 50px"}
                            {"sm - 90px X 90px"}
                            {"md - 150px X 150px"}
                            {"lg - 300px X 300px"}
                            {"exlg - 500px X 500px"}
                        </List>
                        <H>Rectangle Sizes:</H>
                        <List width="350px">
                            {"tn - 81px X 50px "}
                            {"exsm - 81px X 50px"}
                            {"sm - 145.8px X 90px"}
                            {"md - 202.5px X 150px"}
                            {"lg - 485.4px X 300px"}
                            {"exlg - 812px X 500px"}
                        </List>
                        <H>Tall Rectangle Sizes:</H>
                        <List width="350px">
                            {"tn - 50px X 81px"}
                            {"exsm - 50px X 81px"}
                            {"sm - 90px X 145.8px"}
                            {"md - 150px X 202.5px"}
                            {"lg - 300px X 485.4px"}
                            {"exlg - 500px X 812px"}
                        </List>
                    </Holder>
                    <Holder direction="column">
                        <H>small size:</H>
                        <H>Non-Rectangle Sizes:</H>
                        <List width="350px">
                            {"tn - 50px X 50px"}
                            {"exsm - 90px X 90px"}
                            {"sm - 150px X 150px"}
                            {"md - 300px X 300px"}
                            {" lg - 500px X 500px"}
                            {" exlg - 700px X 700px"}
                        </List>
                        <H>Rectangle Sizes:</H>
                        <List width="350px">
                            {" tn - 81px X 50px"}
                            {"exsm - 81px X 50px"}
                            {"sm - 81px X 50px"}
                            {"md - 121.5px X 90px"}
                            {"lg - 242.7px X 150px"}
                            {"exlg - 487px X 300px"}
                        </List>
                        <H>Tall Rectangle Sizes:</H>
                        <List width="350px">
                            {"tn - 50px X 81px"}
                            {" exsm - 50px X 81px"}
                            {" sm - 50px X 81px"}
                            {" md - 90px X 121.5px"}
                            {"  lg - 150px X 242.7px"}
                            {"  exlg - 300px X 487px"}
                        </List>
                    </Holder>
                </Holder>
                <Holder direction="column">
                    <H>
                        Image box="1" size="tn"
                    </H>
                    <Image box="1" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Image box="1" size="exsm"
                    </H>
                    <Image box="1" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Image box="1" size="sm"
                    </H>
                    <Image box="1" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Image box="1" size="md"
                    </H>
                    <Image box="1" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Image box="1" size="lg"
                    </H>
                    <Image box="1" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Image box="1" size="exlg"
                    </H>
                    <Image box="1" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                </Holder>
                <Holder
                    direction="column">
                    <H>
                        Oval Image tn
                    </H>
                    <Image box="2" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Oval Image exsm
                    </H>
                    <Image box="2" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Oval Image sm
                    </H>
                    <Image box="2" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Oval Image md
                    </H>
                    <Image box="2" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Oval Image lg
                    </H>
                    <Image box="2" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Oval Image exlg
                    </H>
                    <Image box="2" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                </Holder>

                <Holder
                    direction="column">
                    <H>
                        Rounded Image tn
                    </H>
                    <Image box="rounded" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Rounded Image exsm
                    </H>
                    <Image box="rounded" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Rounded Image sm
                    </H>
                    <Image box="rounded" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Rounded Image md
                    </H>
                    <Image box="rounded" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Rounded Image lg
                    </H>
                    <Image box="rounded" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                    <HR />
                    <H>
                        Rounded Image exlg
                    </H>
                    <Image box="rounded" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Wrapper>
            <Wrapper>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Square Image tn
                    </H>
                    <Image box="square" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Square Image exsm
                    </H>
                    <Image box="square" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Square Image sm
                    </H>
                    <Image box="square" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <Holder
                    direction="column">
                    <H>
                        Square Image md
                    </H>
                    <Image box="square" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Square Image lg
                    </H>
                    <Image box="square" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Square Image exlg
                    </H>
                    <Image box="square" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Wrapper>
            <Wrapper>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rounded Rectangle Image tn
                    </H>
                    <Image box="roundedRectangle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rounded Rectangle Image exsm
                    </H>
                    <Image box="roundedRectangle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rounded Rectangle Image sm
                    </H>
                    <Image box="roundedRectangle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rounded Rectangle Image md
                    </H>
                    <Image box="roundedRectangle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rounded Rectangle Image lg
                    </H>
                    <Image box="roundedRectangle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rounded Rectangle Image exlg
                    </H>
                    <Image box="roundedRectangle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Wrapper>
            <Wrapper>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rectangle Image tn
                    </H>
                    <Image box="rectangle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rectangle Image exsm
                    </H>
                    <Image box="rectangle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rectangle Image sm
                    </H>
                    <Image box="rectangle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rectangle Image md
                    </H>
                    <Image box="rectangle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rectangle Image lg
                    </H>
                    <Image box="rectangle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Rectangle Image exlg
                    </H>
                    <Image box="rectangle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Wrapper>
            <Wrapper>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rounded Rectangle Image tn
                    </H>
                    <Image box="tallRoundedRectangle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rounded Rectangle Image exsm
                    </H>
                    <Image box="tallRoundedRectangle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rounded Rectangle Image sm
                    </H>
                    <Image box="tallRoundedRectangle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rounded Rectangle Image md
                    </H>
                    <Image box="tallRoundedRectangle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rounded Rectangle Image lg
                    </H>
                    <Image box="tallRoundedRectangle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rounded Rectangle Image exlg
                    </H>
                    <Image box="tallRoundedRectangle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Wrapper>
            <Wrapper>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rectangle Image tn
                    </H>
                    <Image box="tallRectangle" size="tn">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rectangle Image exsm
                    </H>
                    <Image box="tallRectangle" size="exsm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rectangle Image sm
                    </H>
                    <Image box="tallRectangle" size="sm">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rectangle Image md
                    </H>
                    <Image box="tallRectangle" size="md">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rectangle Image lg
                    </H>
                    <Image box="tallRectangle" size="lg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <H>
                        Tall Rectangle Image exlg
                    </H>
                    <Image box="tallRectangle" size="exlg">
                        {}
                        Chris Hanging out
                    </Image>
                </Holder>
            </Wrapper>
        
                <StyluxFooter />
        </Wrapper>
    )
} 