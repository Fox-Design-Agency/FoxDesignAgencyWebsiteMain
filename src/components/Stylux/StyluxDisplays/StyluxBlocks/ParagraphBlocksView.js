import React from "react";
import { Link } from "react-router-dom";
import StyluxHeader from "../../StyluxHeader/StyluxHeader";
import StyluxFooter from "../../StyluxFooter/StyluxFooter";
import BlocksSubNavBar from "./SubHeader/StyluxBlocksSubHeader";
import {
    Container,
    Holder,
    H21,
    H22,
    H34,
    HR,
    P1,
    P2,
    P3,
    P4,
    P5,
    H42,
    PLQ,
    BulletList1,
} from "react-stylux";

export default function StyluxParagraphBlocksViews() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <BlocksSubNavBar />
                <Holder direction="column">
                    <H22>Paragraph Blocks</H22>
                    <H34> Sizes</H34>
                    <Holder>
                        <Holder direction="column">
                            <H42>large size:</H42>
                            <BulletList1 width="400px">
                                {"1: Base Version - 1.333"}
                                {"2: Smaller Version - 0.9"}
                                {"3: Larger Version - 1.6"}
                                {"4: Light Gray larger Version -  1.6"}
                                {"5: Open (Possible dropcap version) - 1.333"}
                            </BulletList1>
                        </Holder>
                        <Holder direction="column">
                            <H42>medium size (Not set):</H42>
                            <BulletList1 width="400px">
                                {"1: Base Version - 1.333"}
                                {"2: Smaller Version - 0.9"}
                                {"3: Larger Version - 1.6"}
                                {"4: Light Gray larger Version -  1.6"}
                                {"5: Open (Possible dropcap version) - 1.333"}
                            </BulletList1>
                        </Holder>
                        <Holder direction="column">
                            <H42>small size (Not set):</H42>
                            <BulletList1 width="400px">
                                {"1: Base Version - 1.333"}
                                {"2: Smaller Version - 0.9"}
                                {"3: Larger Version - 1.6"}
                                {"4: Light Gray larger Version -  1.6"}
                                {"5: Open (Possible dropcap version) - 1.333"}
                            </BulletList1>
                        </Holder>
                    </Holder>
                    <Link to="/react-stylux/documentation/p"><H34>
                        P1
                    </H34></Link>
                    <P1>
                        Pabst vice flannel semiotics, typewriter ethical cliche echo park cred. Mlkshk single-origin coffee man bun whatever. Chillwave unicorn pickled normcore kickstarter migas heirloom. Cloud bread synth plaid kogi vegan tilde disrupt salvia bespoke brunch. Live-edge prism post-ironic letterpress, put a bird on it palo santo direct trade flannel kitsch 90's.
                    </P1>
                    <HR />
                    <Link to="/react-stylux/documentation/p"><H34>
                        P2
                    </H34></Link>
                    <P2>
                        Vinyl gochujang irony, microdosing synth VHS mlkshk keytar mumblecore kale chips roof party meggings cliche. Shoreditch unicorn artisan single-origin coffee. Tattooed asymmetrical umami vegan. Mixtape kombucha bicycle rights vice mustache pop-up photo booth af woke pour-over raw denim fashion axe. Readymade green juice bespoke, migas shabby chic hexagon fingerstache. Iceland stumptown activated charcoal YOLO schlitz keffiyeh jean shorts butcher mumblecore. Retro stumptown seitan mustache.
                    </P2>
                    <HR />
                    <Link to="/react-stylux/documentation/p"><H34>
                        P3
                    </H34></Link>
                    <P3>
                        Humblebrag whatever vinyl umami, flexitarian glossier seitan meditation celiac sriracha enamel pin. Echo park XOXO seitan, fixie before they sold out bushwick edison bulb listicle 3 wolf moon irony hot chicken typewriter dreamcatcher. Fixie shaman truffaut marfa, listicle four loko iceland snackwave banjo lomo glossier stumptown. Jean shorts jianbing mlkshk, prism asymmetrical godard fashion axe.
                    </P3>
                    <HR />
                    <Link to="/react-stylux/documentation/p"><H34>
                        P4
                    </H34></Link>
                    <P4>
                        Retro blue bottle succulents, shoreditch subway tile blog skateboard cray butcher flannel meditation marfa jianbing hashtag. Activated charcoal readymade iceland, tousled health goth green juice lumbersexual live-edge hexagon helvetica church-key edison bulb listicle ugh subway tile. Gluten-free wolf blue bottle, kale chips salvia bushwick selfies vaporware pour-over farm-to-table art party jean shorts af twee tote bag. Pickled waistcoat offal fingerstache butcher selvage. Snackwave vinyl mustache chicharrones tacos shabby chic activated charcoal tousled tumblr. Organic occupy lomo fanny pack cardigan twee tousled. Food truck fingerstache cold-pressed blog la croix church-key.
                    </P4>
                    <HR />
                    <Link to="/react-stylux/documentation/p"><H34>
                        P5
                    </H34></Link>
                    <P5>
                        Banjo photo booth deep v bespoke typewriter twee iPhone lyft vegan meditation mumblecore copper mug blog whatever. Beard typewriter blog etsy austin kogi twee farm-to-table umami retro tattooed butcher shoreditch snackwave. Jean shorts godard beard thundercats, bushwick irony drinking vinegar listicle snackwave artisan. Chambray craft beer venmo, roof party chillwave health goth air plant freegan. Distillery craft beer wolf, kogi church-key next level scenester squid kale chips ramps twee man bun chartreuse fam heirloom. Four loko tumeric messenger bag hashtag etsy, master cleanse woke chicharrones squid viral coloring book tacos direct trade.
                    </P5>
                </Holder>
                <Holder direction="column">
                    <HR />
                    <H21>
                        Pull Quotes
                    </H21>
                    <HR />
                    <Link to="/react-stylux/documentation/plq"><H34>
                        PLQ type="1"
                    </H34></Link>
                    <PLQ type="1">
                        {"Banjo photo booth deep v bespoke typewriter twee iPhone lyft vegan meditation mumblecore copper mug blog whatever."}
                        {"Neat Name"}</PLQ>

                    <HR />
                    <Link to="/react-stylux/documentation/plq"><H34>
                        PLQ type="2"
                    </H34></Link>
                    <PLQ type="2">
                        {"Echo park XOXO seitan, fixie before they sold out bushwick edison bulb listicle 3 wolf moon irony hot chicken typewriter dreamcatcher."}
                        {"Neat Name"}</PLQ>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 