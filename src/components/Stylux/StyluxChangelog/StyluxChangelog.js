import React from "react";
import StyluxHeader from "../StyluxHeader/StyluxHeader";
import StyluxFooter from "../StyluxFooter/StyluxFooter";

import {
    Wrapper,
    Holder,
    H,
    HR,
    Navbar,
    List,

} from "react-stylux";

export default function StyluxChangelog() {
    return (
        <Wrapper>
            <StyluxHeader />

            <H id="topofpage">Changelog</H>
            <Holder
                alignBlock1="flex-start"
                block1="0.25">
                <Holder
                    direction="column">
                    <H>Version Number</H>
                    <Navbar
                        direction="column">
                        <a href="/react-stylux/changelog#0.7.12" >0.7.12(Not Released)</a>
                        <a href="/react-stylux/changelog#0.7.11" >0.7.11</a>
                        <a href="/react-stylux/changelog#0.7.6" >0.7.6</a>
                        <a href="/react-stylux/changelog#0.6.7" >0.6.7</a>
                        <a href="/react-stylux/changelog#0.6.6" >0.6.6</a>
                        <a href="/react-stylux/changelog#0.6.3" >0.6.3</a>
                        <a href="/react-stylux/changelog#0.6.2" >0.6.2</a>
                        <a href="/react-stylux/changelog#0.6.1" >0.6.1</a>
                        <a href="/react-stylux/changelog#0.6.0" >0.6.0</a>
                        <a href="/react-stylux/changelog#0.5.4" >0.5.4</a>
                        <a href="/react-stylux/changelog#0.5.3" >0.5.3</a>
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
                    </Navbar>
                </Holder>
                <Holder
                    direction="column">
                    <Holder
                        direction="column">
                        <H id="0.7.12">0.7.12(Not Released)</H>
                        <List
                            width="900px">
                            {"review every blocks responsive behavior"}
                            {"review every block for className && Id"}
                            {"Documentation correctly portraying current props"}
                            {"Documentation finished"}
                            {"maxWidth and maxHeight verified on all blocks"}
                            {"Initial Form block started"}
                            {"Initial Input block started"}
                            {"Creating a better set of prop inheritance items to prep for themeing create a channel for every block to have variations from box # through vars='' testing with H and will soon be testing with button && hopefully Carousel"}
                            {"Popups that can be connected to a switch trigger"}
                            {"rebuilt of Wrapper and Holder, some block styles are not working correctly and need a massive look over for verification"}
                            {"rebuild of Navbar and more Navbar boxes"}
                            {"rebuild of Subnavbar and more Subnavbar boxes"}
                            {"rebuild of DropDownnav and more DropDownnav options"}
                            
                        </List>
                    </Holder>
                    <Holder
                        direction="column">
                        <H id="0.7.11">0.7.11</H>
                        <List
                            width="900px">
                            {"Fixed Modal Export"}
                            {"rebuilt Image, needs image responsive size work."}
                            {"rebuilt Button"}
                            {"rebuilt P"}
                            {"rebuilt PLQ"}
                            {"rebuilt Hero"}
                            {"rebuilt Brand"}
                            {"rebuilt Carousel"}
                            {"rebuilt List"}
                            {"rebuilt Table"}
                            {"rebuilt Modal"}
                            {"rebuilt Toggler"}
                            {"got rid of setting toggle text on props for modal and toggler, the first child now toggles the modal or toggler box 1 & 2. This should allow these two items to wrap other components."}
                            {"rebuilt H, needs mad amount of more work for font sizes and actual variations."}
                        </List>
                    </Holder>
                    <Holder
                        direction="column">
                        <H id="0.7.6">0.7.6</H>
                        <List
                            width="900px">
                            {"Massive breaking changes, massive library update/rebuild"}
                            {"I think the entire library was rebuilt into a new philosophy. Each block will feature one import and switched on box='#' with a few having a variation switch on vars='#'. This is to be inline with how I started to design this library, that being with the thought of legos. So you grab your different blocks from different boxes so that you can play with them."}
                            {"Removal of old buttons, images, cards, paragraphs, pull quotes, brands, lists"}
                            {"Renaming Container to Wrapper"}
                            {"Renaming type=' ' to box=' '"}
                            {"testing variations through the vars prop on H to see if its a good idea. The theory is that one main component can then spread into box type which has variations on it. This should allow for alot of customization through the future theme implementation"}
                            {"Button && Image box='explicitName' being changed to box='#' "}
                            {"List being reworked, documentation will reflect changes"}
                            {"Condense Heading Blocks to H"}
                            {"Condense Carousel Blocks to Carousel"}
                            {"Condense Table Blocks to Table"}
                            {"Condense Subnavbar Blocks to Subnavbar"}
                            {"Condense Navbar Blocks to Navbar"}
                            {"Condense Toggler Blocks to Toggler"}
                            {"Condense Modal Blocks to Modal"}
                            {"Condense Dropdownnav Blocks to Dropdownnav"}
                            {"Check Card box='3'"}
                            {"key now will remain consistant across renders and not break onChange for input handling"}
                        </List>

                        <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                    </Holder>
                    <Holder
                        direction="column">
                        <H id="0.6.7">0.6.7</H>
                        <List
                            width="900px">
                            {"Condense Hero Blocks to Hero"}
                            {"Condense Brand Blocks to Brand"}
                            {"Condense List Blocks to List"}
                            {"Condense Card Blocks to Card"}
                            {"Condense PLQ Blocks to PLQ"}
                            {"review every blocks responsive behavior, verified Hero, Brand, List, Card, PLQ"}
                            {"review every block for className && Id, verified Hero, Brand, List, Card, PLQ"}
                        </List>
                        <H id="0.6.6">0.6.6</H>
                        <List
                            width="900px">
                            {"updates to default responsive Image sizes, first draft, not set"}
                            {"fix post 0.6.3 Button export"}
                            {"update to Button block state"}
                            {"update to Button block custom ability, defaults to flat type"}
                            {"Condensed Paragraph blocks to P, is not accurately displaying"}
                            {"review every blocks responsive behavior, verified H, P, A, HR, Image"}
                            {"review every block for className && Id , verified H, P, A, HR, Image"}
                            {"fixed typo in index.js file for 0.6.4"}
                            {"fixed missing variable in buttonFunctions that broke Button in 0.6.5"}
                        </List>
                        <H id="0.6.3">0.6.3</H>
                        <List
                            width="900px">
                            {"current stable build, Do not use 0.6.0 - 0.6.2, they won't work."}
                            {"Fixed typo in componentWillRecieveProps in Image && Button"}
                        </List>
                        <H id="0.6.2">0.6.2</H>
                        <List
                            width="900px">
                            {"Not stable, typo in componentWillRecieveProps in Image && Button"}
                            {"Fixed Button import typo"}
                        </List>
                        <H id="0.6.1">0.6.1</H>
                        <List
                            width="900px">
                            {"Not stable, typo in Button imports"}
                            {"Fixed Brand blocks for Image updates"}
                        </List>
                        <H id="0.6.0">0.6.0</H>
                        <List
                            width="900px">
                            {"Not stable, Brand blocks broken"}
                            {"Changing all Buttons to a single component Button switched with 'type' prop"}
                            {"Old Buttons components still available due to issue with hover on buttons render work around not finalized"}
                            {"Changing all Images to a single component Image switched with 'type' prop"}
                            {"Old images removed from package, will break on update, version number increased to 0.6.0"}
                            {"Fixed media query name for Brands1-5"}
                            {"Removed unused variables from Holders && Wrappers"}
                            {"Removed duplicate key calls from Holders && Wrappers"}
                        </List>
                        <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                    </Holder>
                    <Holder
                        direction="column">
                        <H id="0.5.4">0.5.4</H>
                        <List
                            width="900px">
                            {"width prop default at 100% set on lists"}
                            {"Lists have responsive outlineish"}
                            {"Cards have responsive outlineish"}
                            {"Tables have responsive outlineish"}
                            {"smDis increased from 440px to 768px"}
                            {"mdDis increased from 441px and 760px to 769px and 1200px"}
                        </List>
                    </Holder>
                    <Holder
                        direction="column">
                        <H id="0.5.3">0.5.3</H>
                        <List width="900px">
                            {"Stable-ish"}
                            {"Fixed holderSwitch imports"}

                        </List>
                    </Holder>
                    <Holder
                        direction="column">
                        <H id="0.5.2">0.5.2</H>
                        <List width="900px">
                            {"Doesn't work"}
                            {"Updated readme to place documentation on website, not finished"}
                            {"Holders and Wrappers updated to hold 50 childs"}

                        </List>
                    </Holder>
                    <Holder
                        direction="column">
                        <H id="0.5.1">0.5.1</H>
                        <List width="900px">
                            {"updated version to 0.5.0 due to breaking name changes, see below"}
                            {"Fixed onClick prop for buttons"}
                            {"Removed default sans-serif for Headers && default width: inherit"}
                            {"H44 hovColor default set to lightgray"}
                            {"transform prop added to Header, Paragraphs, HR, A, Images, Buttons"}
                            {"Toggler3 fixed"}
                            {"Updated NavBar1 name to Navbar1"}
                            {"Updated SubNavBar1 to SubNavbar1"}
                            {"Updated SubNavBar1 to SubNavbar1"}
                        </List>
                        <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                    </Holder>
                    <Holder direction="column">
                        <H id="0.4.7" margin="20px">0.4.7</H>
                        <List width="900px">
                            {"Added font size to A tag"}
                            {"Added smDis && mdDis to A tag"}
                            {"Added className && id to holders && Wrappers"}
                            {"Added margin && padding to holders && Wrappers"}
                            {"Added width, maxWidth, maxHeight to holders && Wrappers"}
                            {"Added smDis && mdDis to Brands"}
                            {"Added smDis && mdDis to Heros"}
                            {"Added smDis && mdDis to buttons"}
                        </List>
                        <H id="0.4.5" margin="20px">0.4.5</H>
                        <List width="900px">
                            {"Added 'A' component for testing navigation stuff for personal project"}
                            {"Added a justifycontent prop to headers and paragraphs that may break alignment"}
                            {"id && className props added to all simple blocks, will add to complex blocks later, not verified for working"}
                        </List>
                        <H id="0.4.4" margin="20px">0.4.4</H>
                        <List width="900px">
                            {"Fixed typo in Holder for 12 children && Wrapper for 12 children"}
                            {"Added MaxHeight as MaxH, MaxWidth as MaxW to some blocks"}
                            {"FlexWrap && wordWrap added to headers && paragraphs"}
                            {"Adjusted Header && Paragraph Children to accept unlimmited children as flexDirection: row"}
                            {"Added a hack of a fix to some headers and pargraphs, alignment will be weird until another update"}
                            {"Card 1 && 2 updated for max height and initial style implementation"}
                        </List>
                        <H id="0.4.3" margin="20px">0.4.3</H>
                        <List width="900px">
                            {"Updated Wrappers and holders with new switch statement function calls. Might not help optimzie but makes it easier to manage for the time being"}
                            {"Wrappers and holders now have componentwillrecieveprops"}
                            {"took away default hover borders on images"}
                        </List>
                        <H id="0.4.2" margin="20px">0.4.2</H>
                        <List width="900px">
                            {"added height props to Wrapper && Holder"}
                            {"changed Holder from section to div"}
                            {"Wrapper is still a section"}
                            {"images now have boxShadow on hover"}
                            {"tables now have 5px margin"}
                            {"Card 2 and 3 in first draft status"}
                            {"Card have borderRadius prop through corners"}
                            {"Readme updated for changes"}
                        </List>
                        <H id="0.4.1" margin="20px">0.4.1</H>
                        <List width="900px">
                            {"added Navbar2, needs major positioning and customization options but it's neat"}
                            {"added Popup1, and Popup2 blocks"}
                            {"minor updates to readme, rethinking the readme organization to better match mono repo organization"}
                        </List>
                        <H id="0.4.0" margin="20px">0.4.0</H>
                        <List width="900px">
                            {"updated Modal naming, might break things, so updated from 0.3 => 0.4"}
                            {"added first draft of Modal 2 & 3"}
                            {"added first draft of Card 1 & 2 & 3, only can access Card1"}
                            {"will update readme in future update"}
                        </List>
                        <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                    </Holder>
                    <Holder direction="column">
                        <H id="0.3.14" margin="20px">0.3.14</H>
                        <List width="900px">
                            {"Added access to button updates"}
                            {"updated table 1 and table 2 with borders and basic implementation"}
                            {"will update color options for table in another update"}
                            {"future update will also have hover effect for tables"}
                        </List>
                        <H id="0.3.13" margin="20px">0.3.13</H>
                        <List width="900px">
                            {"figuring out best way to implement parallax"}
                            {"outline in progress for new navigation blocks, not currently available"}
                            {"added first draft on buttons"}
                            {"minor changes to togglers, will work on these more after tables & forms are in first draft"}
                            {"readme updated for changes"}
                        </List>
                        <H id="0.3.12" margin="20px">0.3.12</H>
                        <List width="900px">
                            {"HR divider should actually work now"}
                        </List>
                        <H id="0.3.10" margin="20px">0.3.10</H>
                        <List width="900px">
                            {"prepping for parallax updates"}
                            {"added dividers section, HR currently only one"}
                            {"updated readme for changes"}
                        </List>
                        <H id="0.3.9" margin="20px">0.3.9</H>
                        <List width="900px">
                            {"small change to images for testing"}
                            {"removed flex: 1 from certain holders that were cutting off blocks"}
                        </List>
                        <H id="0.3.7" margin="20px">0.3.7</H>
                        <List width="900px">
                            {"Updated Carousels 2-4"}
                            {"Updated All Images in an attempt to fix bug"}
                        </List>
                        <H id="0.3.6" margin="20px">0.3.6</H>
                        <List width="900px">
                            {"Don't use versions 0.3.0-0.3.4 - they don't work sadly"}
                            {"Added default holder & Wrapper condition to fix breaking with no children "}
                            {"Wrapper & Holder sm & md flexDirection updated"}
                            {"Adding React.Fragment to check it out on Headers, Paragraphs, Holders, and Wrappers  "}
                            {"Adjusted padding & margin on Paragraphs and Headers "}
                            {"Added flex: 1 as default to Paragraph and Headers to fill space completely"}
                            {"Added fontVariant as props.variant for Paragraphs and Headers  "}
                            {"Added position on navbar and subnavbar but sticky needs better implementation for use. Fixed works though with props.left || .right || .bottom || .top"}
                            {"Updated Readme for changes"}
                        </List>
                        <H id="0.3.0" margin="20px">0.3.0</H>
                        <List width="900px">
                            {"Removed Wrappers 1-5 for a dynamic Wrapper"}
                            {"Removed Holders 1-13 for a dynamic Holder"}
                            {"full implementation for Wrapper still not available, but the Holder is close to being done, it still needs optimization. Will Test current implemtation against other ways until best results are achieved."}
                            {"updated readme for changes"}
                        </List>
                        <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                    </Holder>
                    <Holder direction="column">
                        <H id="0.2.9" margin="20px">0.2.9</H>
                        <List width="900px">
                            {"added left prop to ham navbar1 to try and fix issue"}
                        </List>
                        <H id="0.2.8" margin="20px">0.2.8</H>
                        <List width="900px">
                            {"fixed ham navigation menu and added ham props"}
                            {"animation not currently working with ham menu on navbar1"}
                            {"added width and height props on button"}
                            {"readme updated with subnav, button, and hamnav"}
                        </List>
                        <H id="0.2.7" margin="20px">0.2.7</H>
                        <List width="900px">
                            {"Added animation file, selected animations from animation.css"}
                            {"Added animation placeholders to allow for easy animation"}
                            {"readme updated for notes on use"}
                            {"updated horizontal ticker to work with new animation library"}
                            {"cursor: pointer added to flat button"}
                            {"minor update to toggler 2"}
                            {"dropdown child intake now with lifecycle"}
                            {"minor animations added to dropdowns and carousel 1 & 5"}
                            {"iteration count will stop on mouse over of carousel1 and will not start back up"}
                        </List>
                        <H id="0.2.5" margin="20px">0.2.5</H>
                        <List width="900px">
                            {"Added FlatButton1 for intial button testing and integration"}
                            {"Added componentDidMount && componentWillRecieveProps to Holders and Wrappers"}
                            {"Slight hack on navbar1 to work for current personal project with DevMountain. Needs more work to function correctly."}
                            {"SubNavbar1 now in first stages of being responsive"}
                            {"Brand blocks are starting to get worked on, added size prop and outline for responsive behavior, but not responsive yet."}
                            {"Added return to Carousel blocks to see if it fixes unmounting error, will most likely need a lot more work."}
                            {"adjusted setting for toggler 2 to function better with absolute positioning. These changes are not currently usable through props and are hard coded, this will change soon."}
                            {"Started on Modul2, not implemented yet"}
                            {"improved table of contents"}
                            {"updated readme for changes"}
                        </List>
                        <H id="0.2.3" margin="20px">0.2.3</H>
                        <List width="900px">
                            {"Changed input so a backslash is not needed to seperate child elements, instead use {''} for anything not already wrapped in jsx or another component"}
                            {"updated pull quote 1 margin so the name is not cut off"}
                            {"updated pull quote 2 margin so it centers itself"}
                            {"updated heading 5's to be outlines, outline color is controlled through prop stroke='color'"}
                            {"dropdown nav 5 updated to have border rounding on outside borders and a shadow"}
                            {"responsive navbar1 now available - needs massive work, several issues are known and will hopefully be worked out in a few days"}
                            {"readme updated with table of contents linking to places"}
                            {"updated readme for changes"}
                        </List>
                        <H id="0.2.2" margin="20px">0.2.2</H>
                        <List width="900px">
                            {"added overflow hidden to holders and Wrappers"}
                            {"add border, borderleft, borderright, bordertop, and borderbottom to holders and Wrappers"}
                            {"changed default sm & md flexdirection values and added props to adjust"}
                            {"changed md max from 1200 to 760"}
                            {"Hover states added to headings and paragraphs"}
                            {"h3 default weight changed to 600"}
                            {"h4 default weight changed to 100"}
                            {"added pull quotes styles to superstylesheet"}
                            {"updated readme for changes"}
                        </List>
                        <H id="0.2.0" margin="20px">0.2.0</H>
                        <List width="900px">
                            {"added smdis && mddis to every Wrapper, holder, heading blocks, paragraph blocks, and image blocks"}
                            {"added media queries for max-width 481px and minwidth 482px max-wdith 1200px everything else should render above 1200px"}
                            {"adding in placeholder sizes until more responsive testing occurs"}
                            {"readme updated for changes"}
                            {"new animation and responsive design sections added to readme"}
                        </List>
                        <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                    </Holder>
                    <Holder direction="column">
                        <H id="0.1.6" margin="20px">0.1.6</H>
                        <List width="900px">
                            {"added lifecycle componentWillUnmount to carousels to stop interval"}
                            {"added lifecycle componentWillRecieveProps to most blocks to allow for render updates"}
                        </List>
                        <H id="0.1.5" margin="20px">0.1.5</H>
                        <List width="900px">
                            {"added Table1 and Table2"}
                            {"added animation path to blocks (feature not fully implemented)"}
                            {"added the outline for animation integration into basic blocks (feature not fully implemented)"}
                            {"moved most children to array into componentdidmount to set children on state"}
                            {"fixed navbar1 classname & id"}
                            {"lowered dropdownnav5 default text size"}
                            {"fixed horizontal ticker 1"}
                            {"readme updated for changes"}
                        </List>
                        <H id="0.1.4" margin="20px">0.1.4</H>
                        <List width="900px">
                            {"fixed dropdownnav1"}
                            {"added togglePlace onto toggler2, this uses flexDirection to change toggle place eg 'column-reverse' || 'row' etc..."}
                            {"changed toggler1 position to fixed from absolute, still changeable through props."}
                            {"added modul1, popup with an x close in the upper right corner"}
                            {"navigation font sizes adjusted (needs more work)"}
                            {"readme updated for changes"}
                        </List>
                        <H id="0.1.3" margin="20px">0.1.3</H>
                        <List width="900px">
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
                        </List>
                        <H id="0.1.0" margin="20px">0.1.0</H>
                        <List width="900px">
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
                        </List>
                        <H id="0.0.12" margin="20px">0.0.12</H>
                        <List width="900px">
                            {"readme was updated with minor documentation"}
                        </List>
                        <H id="0.0.10" margin="20px">0.0.10</H>
                        <List width="900px">
                            {"baselineish that things are mostly working"}
                        </List>
                        <a href="/react-stylux/changelog#topofpage">Back to top...</a>
                    </Holder>
                </Holder>
            </Holder>
            <HR />

            <StyluxFooter />
        </Wrapper>
    )
} 