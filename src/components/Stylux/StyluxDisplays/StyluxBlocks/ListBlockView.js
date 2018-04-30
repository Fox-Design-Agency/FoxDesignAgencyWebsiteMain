import React from "react";
import {Link} from "react-router-dom";
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
                    <Link to="/react-stylux/documentation/numberlist-1"><H34>
                        Number List 1
                    </H34></Link>
                    <NumberList1 width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </NumberList1>
                    <Link to="/react-stylux/documentation/numberlist-2"><H34>
                        Number List 2
                    </H34></Link>
                    <NumberList2 width="500px" listAmount='3'>
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
                    <Link to="/react-stylux/documentation/numberlist-3"><H34>
                        Number List 3
                    </H34></Link>
                    <NumberList3 width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </NumberList3>
                    <Link to="/react-stylux/documentation/bulletlist-1"><H34>
                        Bullet List 1
                    </H34></Link>
                    <BulletList1 width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </BulletList1>
                    <Link to="/react-stylux/documentation/bulletlist-2"><H34>
                        Bullet List 2
                    </H34></Link>
                    <BulletList2 width="500px">
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