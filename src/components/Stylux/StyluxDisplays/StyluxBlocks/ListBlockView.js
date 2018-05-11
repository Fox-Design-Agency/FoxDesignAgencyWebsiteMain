import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    Holder,
    H,
    HR,
    List,
} from "react-stylux";

export default function StyluxListBlocksViews() {
    return (
     <Wrapper>
            <StyluxHeader />
            
                <BlocksSubNavBar />
                <H>List Blocks</H>
                <Holder direction="column">
                    <Link to="/react-stylux/documentation/list"><H>
                        List box="1"
                    </H></Link>
                    <List box="1" width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </List>
                    <Link to="/react-stylux/documentation/list"><H>
                        List box="2"
                    </H></Link>
                    <List box="2" width="500px" listAmount='3'>
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
                    <Link to="/react-stylux/documentation/list"><H>
                        List default && box="3"
                    </H></Link>
                    <List box="3" width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </List>
                    <Link to="/react-stylux/documentation/list"><H>
                        List box="4"
                    </H></Link>
                    <List box="4" width="500px">
                        {'listItem1'}
                        {'listItem2'}
                        {'listItem3'}
                        {'listItem4'}
                    </List>
                </Holder>
                <HR />
            
            <StyluxFooter />
       </Wrapper>
    )
} 