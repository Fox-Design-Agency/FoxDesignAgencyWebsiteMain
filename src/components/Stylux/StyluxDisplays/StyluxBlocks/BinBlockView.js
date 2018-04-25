import React from "react";
import { Link } from "react-router-dom"
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H22,
    HR,
    P2,
    H34,
    Toggler1,
    Toggler2,
    Toggler3,
    Toggler4,
    Navbar1,
    Modal1,
    Modal2,
    Modal3,
    Popup1,
    Popup2,
} from "react-stylux";

export default function StyluxBinBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <H22>Bin Blocks</H22>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-1"><H34>
                        Toggler 1
                    </H34></Link>

                    <Toggler1
                        width='200px'
                        right="0">
                        <Holder
                            direction="column">
                            <Navbar1
                                direction="column">
                                <Link to="">item1</Link>
                                <Link to="">item2</Link>
                                <Link to="">item3</Link>
                                <Link to="">item4</Link>
                            </Navbar1>
                        </Holder>
                    </Toggler1>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-2"><H34>
                        Toggler 2
                    </H34></Link>
                    <Toggler2>
                        <P2>
                            Artisan man bun kombucha palo santo DIY godard af distillery offal. IPhone tote bag cardigan tumeric keytar health goth skateboard tbh succulents taxidermy poke sustainable fingerstache celiac. Etsy taxidermy four dollar toast hexagon tbh unicorn, hashtag pinterest. Vape pok pok hexagon sartorial fam tumblr, palo santo literally kitsch woke wolf DIY. Tote bag glossier bushwick gluten-free butcher pug, mumblecore leggings. Cred kale chips microdosing chicharrones taiyaki, synth typewriter neutra chartreuse jianbing pinterest lyft. Stumptown taxidermy pork belly, photo booth blog +1 glossier iceland.
                        </P2>
                    </Toggler2>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-3"><H34>
                        Toggler 3
                    </H34></Link>

                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-4"><H34>
                        Toggler 4
                    </H34></Link>
                    <Toggler4>
                        {'title'}
                        {'some text'}
                        {'another title'}
                        {'moar text'}
                        {'last title'}
                        {'last text'}
                        {'not last'}
                        {'most last text'}
                    </Toggler4>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-modal-1"><H34>
                        Modal 1
                    </H34></Link>
                    <Modal1>
                        Hello!
                    </Modal1>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-modal-2"><H34>
                        Modal 2
                    </H34></Link>
                    <Modal2>
                    </Modal2>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-modal-3"><H34>
                        Modal 3
                    </H34></Link>
                    <Modal3>
                        {'Header'}
                        {'some sort of body'}
                        {'footer'}
                    </Modal3>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-popup-1"><H34>
                        Popup 1
                    </H34></Link>
                    <Popup1>
                        {"it's some text or something"}
                        {"Click me for magical stuff to happen"}
                    </Popup1>
                </Holder>
                <HR />
                <Holder
                    direction="column">
                    <Link to="/react-stylux/documentation/toggler-popup-1"><H34
                        margin="10px 0 0 50px">
                        Popup 2
                    </H34></Link>
                    <Popup2>
                        {"it's some text or something"}
                        {"Click me for magical stuff to happen"}
                    </Popup2>
                    <HR />
                </Holder>
            </Container>
            <StyluxFooter />
        </section>
    )
} 