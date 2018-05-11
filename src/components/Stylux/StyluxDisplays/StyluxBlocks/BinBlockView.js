import React from "react";
import { Link } from "react-router-dom"
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Wrapper,
    Holder,
    HR,
    P,
    H,
    Toggler,
    Navbar,
    Modal,
    Popup,
} from "react-stylux";

export default function StyluxBinBlocksViews() {
    return (
        <Wrapper>
            <StyluxHeader />
                <BlocksSubNavBar />
                <H>Bin Blocks</H>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler"><H>
                        Toggler 1
                    </H></Link>

                    <Toggler
                        width='200px'
                        right="0">
                        <Holder
                            direction="column">
                            <Navbar
                                direction="column">
                                <Link to="">item1</Link>
                                <Link to="">item2</Link>
                                <Link to="">item3</Link>
                                <Link to="">item4</Link>
                            </Navbar>
                        </Holder>
                    </Toggler>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler"><H>
                        Toggler 2
                    </H></Link>
                    <Toggler>
                        <P>
                            Artisan man bun kombucha palo santo DIY godard af distillery offal. IPhone tote bag cardigan tumeric keytar health goth skateboard tbh succulents taxidermy poke sustainable fingerstache celiac. Etsy taxidermy four dollar toast hexagon tbh unicorn, hashtag pinterest. Vape pok pok hexagon sartorial fam tumblr, palo santo literally kitsch woke wolf DIY. Tote bag glossier bushwick gluten-free butcher pug, mumblecore leggings. Cred kale chips microdosing chicharrones taiyaki, synth typewriter neutra chartreuse jianbing pinterest lyft. Stumptown taxidermy pork belly, photo booth blog +1 glossier iceland.
                        </P>
                    </Toggler>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler"><H>
                        Toggler 3
                    </H></Link>
                    <Toggler>
                        {'title'}
                        {'some text'}
                        {'another title'}
                        {'moar text'}
                        {'last title'}
                        {'last text'}
                        {'not last'}
                        {'most last text'}
                    </Toggler>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler"><H>
                        Toggler 4
                    </H></Link>
                    <Toggler>
                        {'title'}
                        {'some text'}
                        {'another title'}
                        {'moar text'}
                        {'last title'}
                        {'last text'}
                        {'not last'}
                        {'most last text'}
                    </Toggler>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-modal"><H>
                        Modal 1
                    </H></Link>
                    <Modal>
                        Hello!
                    </Modal>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-modal"><H>
                        Modal 2
                    </H></Link>
                    <Modal>
                    </Modal>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-modal"><H>
                        Modal 3
                    </H></Link>
                    <Modal>
                        {'Header'}
                        {'some sort of body'}
                        {'footer'}
                    </Modal>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-popup"><H>
                        Popup 1
                    </H></Link>
                    <Popup>
                        {"it's some text or something"}
                        {"Click me for magical stuff to happen"}
                    </Popup>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-popup"><H
                        margin="10px 0 0 50px">
                        Popup 2
                    </H></Link>
                    <Popup>
                        {"it's some text or something"}
                        {"Click me for magical stuff to happen"}
                    </Popup>
                    <HR />
                </Holder>
           
            <StyluxFooter />
        </Wrapper>
    )
} 