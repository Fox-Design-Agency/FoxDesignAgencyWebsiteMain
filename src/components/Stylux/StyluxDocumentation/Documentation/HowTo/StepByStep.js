import React from "react";

import {
    Holder,
} from "react-stylux"

export default function StepByStep() {

    return (
        <Holder
            direction="column">
            Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container, Holder, and Navbar1:

            <pre>{`
            import {
                Container,
                Holder,
                NavBar1,
     } from 'react-stylux';
            `}</pre>

            Now you can use these components like any other component!

            <pre>{`
            <Container>
                <Holder>
                    <NavBar1>
                        <a href="">Item1</a>
                        <a href="">Item2</a>
                        <a href="">Item3</a>
                    </NavBar1>
                    <NavBar1>
                        <a href="facebook.com"></a>
                        <a href="twitter.com"></a>
                        <a href="instagram.com"></a>
                    </NavBar1>
                </Holder>
            </Container>
            `}</pre>
            Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

            props can be passed into every item to further create a custom expierence:
            <pre>{`
            <Container>
                <Holder
                    block1="2">
                    <NavBar1>
                        <a href="">Item1</a>
                        <a href="">Item2</a>
                        <a href="">Item3</a>
                    </NavBar1>
                    <NavBar1
                        align="flex-end"
                        navbarWidth="60%">
                        <a href="facebook.com"></a>
                        <a href="twitter.com"></a>
                        <a href="instagram.com"></a>
                    </NavBar1>
                </Holder>
            </Container>
            `}</pre>
        </Holder>
    )
}