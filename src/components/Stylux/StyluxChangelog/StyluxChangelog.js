import React from "react";
import { Link } from "react-router-dom"
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Container,
    Holder,
    H22,
    H42,
    HR,
    Navbar1,
    BulletList1,

} from "react-stylux";

export default function StyluxChangelog() {
    return (
        <section>
            <StyluxHeader />
            <Container>
                <H22 id="topofpage">Changelog</H22>
                <Holder
                    alignBlock1="flex-start"
                    block1="0.25">
                    <Holder
                        direction="column">
                        <H42>Version Number</H42>
                        <Navbar1
                            direction="column">
                            <a href="/react-stylux/changelog#0.5.2" >0.5.2</a>
                            <a href="/react-stylux/changelog#0.5.1" >0.5.1</a>
                            <a href="/react-stylux/changelog#0.4.7" >0.4.7</a>
                            <a href="/react-stylux/changelog#0.4.5" >0.4.5</a>
                            <a href="/react-stylux/changelog#0.4.4" >0.4.4</a>
                            <a href="/react-stylux/changelog#0.4.3" >0.4.3</a>
                            <a href="/react-stylux/changelog#0.4.2" >0.4.2</a>
                            <a href="/react-stylux/changelog#0.4.1" >0.4.1</a>
                            <a href="/react-stylux/changelog#0.4.0" >0.4.0</a>
                            <a href="/react-stylux/changelog#0.3.14" >0.3.14</a>
                            <a href="/react-stylux/changelog#0.3.13" >0.3.13</a>
                            <a href="/react-stylux/changelog#0.3.12" >0.3.12</a>
                            <a href="/react-stylux/changelog#0.3.10" >0.3.10</a>
                            <a href="/react-stylux/changelog#0.3.9" >0.3.9</a>
                            <a href="/react-stylux/changelog#0.3.7" >0.3.7</a>
                            <a href="/react-stylux/changelog#0.3.6" >0.3.6</a>
                            <a href="/react-stylux/changelog#0.3.0" >0.3.0</a>
                            <a href="/react-stylux/changelog#0.2.9" >0.2.9</a>
                            <a href="/react-stylux/changelog#0.2.8" >0.2.8</a>
                            <a href="/react-stylux/changelog#0.2.7" >0.2.7</a>
                            <a href="/react-stylux/changelog#0.2.5" >0.2.5</a>
                            <a href="/react-stylux/changelog#0.2.3" >0.2.3</a>
                            <a href="/react-stylux/changelog#0.2.2" >0.2.2</a>
                            <a href="/react-stylux/changelog#0.2.0" >0.2.0</a>
                            <a href="/react-stylux/changelog#0.1.6" >0.1.6</a>
                            <a href="/react-stylux/changelog#0.1.5" >0.1.5</a>
                            <a href="/react-stylux/changelog#0.1.4" >0.1.4</a>
                            <a href="/react-stylux/changelog#0.1.3" >0.1.3</a>
                            <a href="/react-stylux/changelog#0.1.0" >0.1.0</a>
                            <a href="/react-stylux/changelog#0.0.12" >0.0.12</a>
                            <a href="/react-stylux/changelog#0.0.10" >0.0.10</a>
                        </Navbar1>
                    </Holder>
                    <Holder
                        direction="column">
                        <Holder
                            direction="column">
                            <H42 id="0.5.2">0.5.3</H42>
                            <BulletList1>
                                {"Works"}
                                {"Fixed holderSwitch imports"}
                                
                            </BulletList1>
                        </Holder>
                        <Holder
                            direction="column">
                            <H42 id="0.5.2">0.5.2</H42>
                            <BulletList1>
                                {"Doesn't work"}
                                {"Updated readme to place documentation on website, not finished"}
                                {"Holders and Containers updated to hold 50 childs"}
                                
                            </BulletList1>
                        </Holder>
                        <Holder
                            direction="column">
                            <H42 id="0.5.1">0.5.1</H42>
                            <BulletList1>
                                {"updated version to 0.5.0 due to breaking name changes, see below"}
                                {"Fixed onClick prop for buttons"}
                                {"Removed default sans-serif for Headers && default width: inherit"}
                                {"H44 hovColor default set to lightgray"}
                                {"transform prop added to Header, Paragraphs, HR, A, Images, Buttons"}
                                {"Toggler3 fixed"}
                                {"Updated NavBar1 name to Navbar1"}
                                {"Updated SubNavBar1 to SubNavbar1"}
                                {"Updated SubNavBar1 to SubNavbar1"}
                            </BulletList1>
                            <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                        </Holder>
                        <Holder direction="column">
                            <H42 id="0.4.7" margin="20px">0.4.7</H42>
                            <BulletList1>
                                {"Added font size to A tag"}
                                {"Added smDis && mdDis to A tag"}
                                {"Added className && id to holders && containers"}
                                {"Added margin && padding to holders && containers"}
                                {"Added width, maxWidth, maxHeight to holders && containers"}
                                {"Added smDis && mdDis to Brands"}
                                {"Added smDis && mdDis to Heros"}
                                {"Added smDis && mdDis to buttons"}
                            </BulletList1>
                            <H42 id="0.4.5" margin="20px">0.4.5</H42>
                            <BulletList1>
                                {"Added 'A' component for testing navigation stuff for personal project"}
                                {"Added a justifycontent prop to headers and paragraphs that may break alignment"}
                                {"id && className props added to all simple blocks, will add to complex blocks later, not verified for working"}
                            </BulletList1>
                            <H42 id="0.4.4" margin="20px">0.4.4</H42>
                            <BulletList1>
                                {"Fixed typo in Holder for 12 children && Container for 12 children"}
                                {"Added MaxHeight as MaxH, MaxWidth as MaxW to some blocks"}
                                {"FlexWrap && wordWrap added to headers && paragraphs"}
                                {"Adjusted Header && Paragraph Children to accept unlimmited children as flexDirection: row"}
                                {"Added a hack of a fix to some headers and pargraphs, alignment will be weird until another update"}
                                {"Card 1 && 2 updated for max height and initial style implementation"}
                            </BulletList1>
                            <H42 id="0.4.3" margin="20px">0.4.3</H42>
                            <BulletList1>
                                {"Updated containers and holders with new switch statement function calls. Might not help optimzie but makes it easier to manage for the time being"}
                                {"containers and holders now have componentwillrecieveprops"}
                                {"took away default hover borders on images"}
                            </BulletList1>
                            <H42 id="0.4.2" margin="20px">0.4.2</H42>
                            <BulletList1>
                                {"added height props to container && Holder"}
                                {"changed Holder from section to div"}
                                {"container is still a section"}
                                {"images now have boxShadow on hover"}
                                {"tables now have 5px margin"}
                                {"Card 2 and 3 in first draft status"}
                                {"Card have borderRadius prop through corners"}
                                {"Readme updated for changes"}
                            </BulletList1>
                            <H42 id="0.4.1" margin="20px">0.4.1</H42>
                            <BulletList1>
                                {"added Navbar2, needs major positioning and customization options but it's neat"}
                                {"added Popup1, and Popup2 blocks"}
                                {"minor updates to readme, rethinking the readme organization to better match mono repo organization"}
                            </BulletList1>
                            <H42 id="0.4.0" margin="20px">0.4.0</H42>
                            <BulletList1>
                                {"updated Modal naming, might break things, so updated from 0.3 => 0.4"}
                                {"added first draft of Modal 2 & 3"}
                                {"added first draft of Card 1 & 2 & 3, only can access Card1"}
                                {"will update readme in future update"}
                            </BulletList1>
                            <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                        </Holder>
                        <Holder direction="column">
                            <H42 id="0.3.14" margin="20px">0.3.14</H42>
                            <BulletList1>
                                {"Added access to button updates"}
                                {"updated table 1 and table 2 with borders and basic implementation"}
                                {"will update color options for table in another update"}
                                {"future update will also have hover effect for tables"}
                            </BulletList1>
                            <H42 id="0.3.13" margin="20px">0.3.13</H42>
                            <BulletList1>
                                {"figuring out best way to implement parallax"}
                                {"outline in progress for new navigation blocks, not currently available"}
                                {"added first draft on buttons"}
                                {"minor changes to togglers, will work on these more after tables & forms are in first draft"}
                                {"readme updated for changes"}
                            </BulletList1>
                            <H42 id="0.3.12" margin="20px">0.3.12</H42>
                            <BulletList1>
                                {"HR divider should actually work now"}
                            </BulletList1>
                            <H42 id="0.3.10" margin="20px">0.3.10</H42>
                            <BulletList1>
                                {"prepping for parallax updates"}
                                {"added dividers section, HR currently only one"}
                                {"updated readme for changes"}
                            </BulletList1>
                            <H42 id="0.3.9" margin="20px">0.3.9</H42>
                            <BulletList1>
                                {"small change to images for testing"}
                                {"removed flex: 1 from certain holders that were cutting off blocks"}
                            </BulletList1>
                            <H42 id="0.3.7" margin="20px">0.3.7</H42>
                            <BulletList1>
                                {"Updated Carousels 2-4"}
                                {"Updated All Images in an attempt to fix bug"}
                            </BulletList1>
                            <H42 id="0.3.6" margin="20px">0.3.6</H42>
                            <BulletList1>
                                {"Don't use versions 0.3.0-0.3.4 - they don't work sadly"}
                                {"Added default holder & container condition to fix breaking with no children "}
                                {"Container & Holder sm & md flexDirection updated"}
                                {"Adding React.Fragment to check it out on Headers, Paragraphs, Holders, and Containers  "}
                                {"Adjusted padding & margin on Paragraphs and Headers "}
                                {"Added flex: 1 as default to Paragraph and Headers to fill space completely"}
                                {"Added fontVariant as props.variant for Paragraphs and Headers  "}
                                {"Added position on navbar and subnavbar but sticky needs better implementation for use. Fixed works though with props.left || .right || .bottom || .top"}
                                {"Updated Readme for changes"}
                            </BulletList1>
                            <H42 id="0.3.0" margin="20px">0.3.0</H42>
                            <BulletList1>
                                {"Removed Containers 1-5 for a dynamic Container"}
                                {"Removed Holders 1-13 for a dynamic Holder"}
                                {"full implementation for Container still not available, but the Holder is close to being done, it still needs optimization. Will Test current implemtation against other ways until best results are achieved."}
                                {"updated readme for changes"}
                            </BulletList1>
                            <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                        </Holder>
                        <Holder direction="column">
                            <H42 id="0.2.9" margin="20px">0.2.9</H42>
                            <BulletList1>
                                {"added left prop to ham navbar1 to try and fix issue"}
                            </BulletList1>
                            <H42 id="0.2.8" margin="20px">0.2.8</H42>
                            <BulletList1>
                                {"fixed ham navigation menu and added ham props"}
                                {"animation not currently working with ham menu on navbar1"}
                                {"added width and height props on button"}
                                {"readme updated with subnav, button, and hamnav"}
                            </BulletList1>
                            <H42 id="0.2.7" margin="20px">0.2.7</H42>
                            <BulletList1>
                                {"Added animation file, selected animations from animation.css"}
                                {"Added animation placeholders to allow for easy animation"}
                                {"readme updated for notes on use"}
                                {"updated horizontal ticker to work with new animation library"}
                                {"cursor: pointer added to flat button"}
                                {"minor update to toggler 2"}
                                {"dropdown child intake now with lifecycle"}
                                {"minor animations added to dropdowns and carousel 1 & 5"}
                                {"iteration count will stop on mouse over of carousel1 and will not start back up"}
                            </BulletList1>
                            <H42 id="0.2.5" margin="20px">0.2.5</H42>
                            <BulletList1>
                                {"Added FlatButton1 for intial button testing and integration"}
                                {"Added componentDidMount && componentWillRecieveProps to Holders and Containers"}
                                {"Slight hack on navbar1 to work for current personal project with DevMountain. Needs more work to function correctly."}
                                {"SubNavbar1 now in first stages of being responsive"}
                                {"Brand blocks are starting to get worked on, added size prop and outline for responsive behavior, but not responsive yet."}
                                {"Added return to Carousel blocks to see if it fixes unmounting error, will most likely need a lot more work."}
                                {"adjusted setting for toggler 2 to function better with absolute positioning. These changes are not currently usable through props and are hard coded, this will change soon."}
                                {"Started on Modul2, not implemented yet"}
                                {"improved table of contents"}
                                {"updated readme for changes"}
                            </BulletList1>
                            <H42 id="0.2.3" margin="20px">0.2.3</H42>
                            <BulletList1>
                                {"Changed input so a backslash is not needed to seperate child elements, instead use {''} for anything not already wrapped in jsx or another component"}
                                {"updated pull quote 1 margin so the name is not cut off"}
                                {"updated pull quote 2 margin so it centers itself"}
                                {"updated heading 5's to be outlines, outline color is controlled through prop stroke='color'"}
                                {"dropdown nav 5 updated to have border rounding on outside borders and a shadow"}
                                {"responsive navbar1 now available - needs massive work, several issues are known and will hopefully be worked out in a few days"}
                                {"readme updated with table of contents linking to places"}
                                {"updated readme for changes"}
                            </BulletList1>
                            <H42 id="0.2.2" margin="20px">0.2.2</H42>
                            <BulletList1>
                                {"added overflow hidden to holders and containers"}
                                {"add border, borderleft, borderright, bordertop, and borderbottom to holders and containers"}
                                {"changed default sm & md flexdirection values and added props to adjust"}
                                {"changed md max from 1200 to 760"}
                                {"Hover states added to headings and paragraphs"}
                                {"h3 default weight changed to 600"}
                                {"h4 default weight changed to 100"}
                                {"added pull quotes styles to superstylesheet"}
                                {"updated readme for changes"}
                            </BulletList1>
                            <H42 id="0.2.0" margin="20px">0.2.0</H42>
                            <BulletList1>
                                {"added smdis && mddis to every container, holder, heading blocks, paragraph blocks, and image blocks"}
                                {"added media queries for max-width 481px and minwidth 482px max-wdith 1200px everything else should render above 1200px"}
                                {"adding in placeholder sizes until more responsive testing occurs"}
                                {"readme updated for changes"}
                                {"new animation and responsive design sections added to readme"}
                            </BulletList1>
                            <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                        </Holder>
                        <Holder direction="column">
                            <H42 id="0.1.6" margin="20px">0.1.6</H42>
                            <BulletList1>
                                {"added lifecycle componentWillUnmount to carousels to stop interval"}
                                {"added lifecycle componentWillRecieveProps to most blocks to allow for render updates"}
                            </BulletList1>
                            <H42 id="0.1.5" margin="20px">0.1.5</H42>
                            <BulletList1>
                                {"added Table1 and Table2"}
                                {"added animation path to blocks (feature not fully implemented)"}
                                {"added the outline for animation integration into basic blocks (feature not fully implemented)"}
                                {"moved most children to array into componentdidmount to set children on state"}
                                {"fixed navbar1 classname & id"}
                                {"lowered dropdownnav5 default text size"}
                                {"fixed horizontal ticker 1"}
                                {"readme updated for changes"}
                            </BulletList1>
                            <H42 id="0.1.4" margin="20px">0.1.4</H42>
                            <BulletList1>
                                {"fixed dropdownnav1"}
                                {"added togglePlace onto toggler2, this uses flexDirection to change toggle place eg 'column-reverse' || 'row' etc..."}
                                {"changed toggler1 position to fixed from absolute, still changeable through props."}
                                {"added modul1, popup with an x close in the upper right corner"}
                                {"navigation font sizes adjusted (needs more work)"}
                                {"readme updated for changes"}
                            </BulletList1>
                            <H42 id="0.1.3" margin="20px">0.1.3</H42>
                            <BulletList1>
                                {"Fixed Holders 8-13 block 5 styles"}
                                {"got rid of a tags in Brands, will rework Brand Blocks"}
                                {"text-shadow added to headings and paragraphs"}
                                {"border, border-left, border-right, border-top, border-bottom added to headings, paragraphs, holders, and toggler 1 & 2"}
                                {"added box-shadow to dropdownnav1 and toggler1"}
                                {"border-radius, text-align, and color added to dropdownnav1"}
                                {"color also added to navbar, subnav 1 & 2"}
                                {"got rid of default yellow hover highlight will be allow for easier adjusting of this soon"}
                                {"toggler 1 now has z-index of 2000"}
                                {"color, border, weight, shadow, margin, padding, variant, and background added to the toggler 1 & 2 button"}
                                {"readme updated to reflect the changes"}
                            </BulletList1>
                            <H42 id="0.1.0" margin="20px">0.1.0</H42>
                            <BulletList1>
                                {"text align added to heading and paragraph blocks"}
                                {"Width and Height now available for heading and paragraph blocks"}
                                {"mainHeading name changed to H1 + num"}
                                {"Heading name changed to H2 + num"}
                                {"SubHeading name changed to H3 + num"}
                                {"SecondarySubHeading name changed to H4 + num"}
                                {"Paragraph name changed to P + num"}
                                {"PullQuote name changed to PLQ + num"}
                                {"z Index of 200 added to the SubNavBAr1, this fixes a stacking issue"}
                                {"css reset hooked up to every block"}
                                {"readme updated to reflect changes"}
                                {"fixed Holder4 block 3-5 styles"}
                            </BulletList1>
                            <H42 id="0.0.12" margin="20px">0.0.12</H42>
                            <BulletList1>
                                {"readme was updated with minor documentation"}
                            </BulletList1>
                            <H42 id="0.0.10" margin="20px">0.0.10</H42>
                            <BulletList1>
                                {"baselineish that things are mostly working"}
                            </BulletList1>
                            <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                        </Holder>
                    </Holder>
                </Holder>
                <HR />
            </Container>
            <StyluxFooter />
        </section>
    )
} 