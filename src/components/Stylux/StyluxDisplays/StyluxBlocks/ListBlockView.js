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
    HR,
    List,
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
                        List type="1"
                    </H34></Link>
                    <List type="1" width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </List>
                    <Link to="/react-stylux/documentation/numberlist-2"><H34>
                        List type="2"
                    </H34></Link>
                    <List type="2" width="500px" listAmount='3'>
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
                    </List>
                    <Link to="/react-stylux/documentation/numberlist-3"><H34>
                        List type="3"
                    </H34></Link>
                    <List type="3" width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </List>
                    <Link to="/react-stylux/documentation/bulletlist-1"><H34>
                        List type="4"
                    </H34></Link>
                    <List type="4" width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </List>
                    <Link to="/react-stylux/documentation/bulletlist-2"><H34>
                        List type="5"
                    </H34></Link>
                    <List type="5" width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </List>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 