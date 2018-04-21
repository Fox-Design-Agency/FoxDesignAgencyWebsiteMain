import React from "react";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H22,
    H34,
    HR,
    BulletList1,
    BulletList2,
    NumberList1,
    NumberList2,
    NumberList3,
} from "react-stylux";

export default function StyluxListBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>List Blocks</H22>
                <Holder direction="column">
                    <H34>
                        Number List 1
                    </H34>
                    <NumberList1>
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </NumberList1>
                    <H34>
                        Number List 2
                    </H34>
                    <NumberList2 listAmount='3'>
                        <p>listItem1</p>
                        <p>nestedlistItem1</p>
                        <p>nestedlistItem2</p>
                        <p>listItem2</p>
                        <p>nestedlistItem1</p>
                        <p>nestedlistItem2</p>
                        <p>listItem3</p>
                        <p>nestedlistItem1</p>
                        <p>nestedlistItem2</p>
                        <p>listItem4</p>
                        <p>nestedlistItem1</p>
                        <p>nestedlistItem2</p>
                        <p>listItem5</p>
                        <p>nestedlistItem1</p>
                        <p>nestedlistItem2</p>
                    </NumberList2>
                    <H34>
                        Number List 3
                    </H34>
                    <NumberList3>
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </NumberList3>
                    <H34>
                        Bullet List 1
                    </H34>
                    <BulletList1>
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </BulletList1>
                    <H34>
                        Bullet List 2
                    </H34>
                    <BulletList2>
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </BulletList2>

                </Holder>

                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 