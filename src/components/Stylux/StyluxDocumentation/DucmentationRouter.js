import React from "react";
import { Switch, Route } from "react-router-dom"

import HowTo from "./Documentation/HowTo/HowTo"
import Introduction from "./Documentation/HowTo/Introduction"
import GettingStarted from "./Documentation/HowTo/GettingStarted"
import WhatsIncluded from "./Documentation/HowTo/WhatsIncluded"
import StepbyStep from "./Documentation/HowTo/StepByStep";
import AnimationNotes from "./Documentation/HowTo/AnimationNotes";
import ResponsiveNotes from "./Documentation/HowTo/ResponsiveNotes";

import Container from "./Documentation/Layout/ContainersDocumentation";
import Holder from "./Documentation/Layout/HoldersDocumentation";
import HR from "./Documentation/Layout/HRDocumentation";

import H11 from "./Documentation/Text/Headers/H1/H11";
import H12 from "./Documentation/Text/Headers/H1/H12";
import H13 from "./Documentation/Text/Headers/H1/H13";
import H14 from "./Documentation/Text/Headers/H1/H14";
import H15 from "./Documentation/Text/Headers/H1/H15";
import H21 from "./Documentation/Text/Headers/H2/H21";
import H22 from "./Documentation/Text/Headers/H2/H22";
import H23 from "./Documentation/Text/Headers/H2/H23";
import H24 from "./Documentation/Text/Headers/H2/H24";
import H25 from "./Documentation/Text/Headers/H2/H25";
import H31 from "./Documentation/Text/Headers/H3/H31";
import H32 from "./Documentation/Text/Headers/H3/H32";
import H33 from "./Documentation/Text/Headers/H3/H33";
import H34 from "./Documentation/Text/Headers/H3/H34";
import H35 from "./Documentation/Text/Headers/H3/H35";
import H41 from "./Documentation/Text/Headers/H4/H41";
import H42 from "./Documentation/Text/Headers/H4/H42";
import H43 from "./Documentation/Text/Headers/H4/H43";
import H44 from "./Documentation/Text/Headers/H4/H44";
import H45 from "./Documentation/Text/Headers/H4/H45";

import P1 from "./Documentation/Text/Paragraphs/P1";
import P2 from "./Documentation/Text/Paragraphs/P2";
import P3 from "./Documentation/Text/Paragraphs/P3";
import P4 from "./Documentation/Text/Paragraphs/P4";
import P5 from "./Documentation/Text/Paragraphs/P5";

import PLQ1 from "./Documentation/Text/PullQuotes/PLQ1";
import PLQ2 from "./Documentation/Text/PullQuotes/PLQ2";

import BlockButton from "./Documentation/Buttons/BlockButton";
import FlatButton from "./Documentation/Buttons/FlatButton";
import FloatingButton from "./Documentation/Buttons/FloatingButton";
import RaisedButton from "./Documentation/Buttons/RaisedButton";
import TextButton from "./Documentation/Buttons/TextButton";

import CircleImage from "./Documentation/Images/CircleImage";
import Figure from "./Documentation/Images/Figure";
import OvalImage from "./Documentation/Images/OvalImage";
import RectangleImage from "./Documentation/Images/RectangleImage";
import RoundedImage from "./Documentation/Images/RoundedImage";
import RoundedRectangleImage from "./Documentation/Images/RoundedRectangleImage";
import SquareImage from "./Documentation/Images/SquareImage";
import TallRectangleImage from "./Documentation/Images/TallRectangleImage";
import TallRoundedRectangleImage from "./Documentation/Images/TallRoundedRectangleImage";

import Card1 from "./Documentation/Cards/Card1";
import Card2 from "./Documentation/Cards/Card2";
import Card3 from "./Documentation/Cards/Card3";

import Carousel1 from "./Documentation/Carousel/Carousel1";
import Carousel2 from "./Documentation/Carousel/Carousel2";
import Carousel3 from "./Documentation/Carousel/Carousel3";
import Carousel4 from "./Documentation/Carousel/Carousel4";
import Carousel5 from "./Documentation/Carousel/Carousel5";

import Toggler1 from "./Documentation/Togglers/Toggler1";
import Toggler2 from "./Documentation/Togglers/Toggler2";
import Toggler3 from "./Documentation/Togglers/Toggler3";
import Toggler4 from "./Documentation/Togglers/Toggler4";
import Modal1 from "./Documentation/Togglers/Modals/Modal1";
import Modal2 from "./Documentation/Togglers/Modals/Modal2";
import Modal3 from "./Documentation/Togglers/Modals/Modal3";
import Popup1 from "./Documentation/Togglers/Popups/Popup1";
import Popup2 from "./Documentation/Togglers/Popups/Popup2";

import Form1 from "./Documentation/Forms/Form1";

import A from "./Documentation/Other/A"

export default (
    <Switch>
        <Route exact path="/react-stylux/documentation" component={HowTo} />
        <Route path="/react-stylux/documentation/introduction" component={Introduction} />
        <Route path="/react-stylux/documentation/getting-started" component={GettingStarted} />
        <Route path="/react-stylux/documentation/whats-included" component={WhatsIncluded} />
        <Route path="/react-stylux/documentation/step-by-step" component={StepbyStep} />
        <Route path="/react-stylux/documentation/animation-notes" component={AnimationNotes} />
        <Route path="/react-stylux/documentation/responsive-notes" component={ResponsiveNotes} />

        <Route path="/react-stylux/documentation/layout-container" component={Container} />
        <Route path="/react-stylux/documentation/layout-holder" component={Holder} />
        <Route path="/react-stylux/documentation/layout-hr" component={HR} />

        <Route path="/react-stylux/documentation/h-1-1" component={H11} />
        <Route path="/react-stylux/documentation/h-1-2" component={H12} />
        <Route path="/react-stylux/documentation/h-1-3" component={H13} />
        <Route path="/react-stylux/documentation/h-1-4" component={H14} />
        <Route path="/react-stylux/documentation/h-1-5" component={H15} />
        <Route path="/react-stylux/documentation/h-2-1" component={H21} />
        <Route path="/react-stylux/documentation/h-2-2" component={H22} />
        <Route path="/react-stylux/documentation/h-2-3" component={H23} />
        <Route path="/react-stylux/documentation/h-2-4" component={H24} />
        <Route path="/react-stylux/documentation/h-2-5" component={H25} />
        <Route path="/react-stylux/documentation/h-3-1" component={H31} />
        <Route path="/react-stylux/documentation/h-3-2" component={H32} />
        <Route path="/react-stylux/documentation/h-3-3" component={H33} />
        <Route path="/react-stylux/documentation/h-3-4" component={H34} />
        <Route path="/react-stylux/documentation/h-3-5" component={H35} />
        <Route path="/react-stylux/documentation/h-4-1" component={H41} />
        <Route path="/react-stylux/documentation/h-4-2" component={H42} />
        <Route path="/react-stylux/documentation/h-4-3" component={H43} />
        <Route path="/react-stylux/documentation/h-4-4" component={H44} />
        <Route path="/react-stylux/documentation/h-4-5" component={H45} />

        <Route path="/react-stylux/documentation/p-1" component={P1} />
        <Route path="/react-stylux/documentation/p-2" component={P2} />
        <Route path="/react-stylux/documentation/p-3" component={P3} />
        <Route path="/react-stylux/documentation/p-4" component={P4} />
        <Route path="/react-stylux/documentation/p-5" component={P5} />

        <Route path="/react-stylux/documentation/plq-1" component={PLQ1} />
        <Route path="/react-stylux/documentation/plq-2" component={PLQ2} />

        <Route path="/react-stylux/documentation/flat-button" component={FlatButton} />
        <Route path="/react-stylux/documentation/raised-button" component={RaisedButton} />
        <Route path="/react-stylux/documentation/floating-button" component={FloatingButton} />
        <Route path="/react-stylux/documentation/block-button" component={BlockButton} />
        <Route path="/react-stylux/documentation/text-button" component={TextButton} />

        <Route path="/react-stylux/documentation/circle-image" component={CircleImage} />
        <Route path="/react-stylux/documentation/oval-image" component={OvalImage} />
        <Route path="/react-stylux/documentation/figure" component={Figure} />
        <Route path="/react-stylux/documentation/rectangle-image" component={RectangleImage} />
        <Route path="/react-stylux/documentation/rounded-image" component={RoundedImage} />
        <Route path="/react-stylux/documentation/rounded-rectangle-image" component={RoundedRectangleImage} />
        <Route path="/react-stylux/documentation/square-image" component={SquareImage} />
        <Route path="/react-stylux/documentation/tall-rectangle-image" component={TallRectangleImage} />
        <Route path="/react-stylux/documentation/tall-rounded-rectangle-image" component={TallRoundedRectangleImage} />

        <Route path="/react-stylux/documentation/card-1" component={Card1} />
        <Route path="/react-stylux/documentation/card-2" component={Card2} />
        <Route path="/react-stylux/documentation/card-3" component={Card3} />

        <Route path="/react-stylux/documentation/carousel-1" component={Carousel1} />
        <Route path="/react-stylux/documentation/carousel-2" component={Carousel2} />
        <Route path="/react-stylux/documentation/carousel-3" component={Carousel3} />
        <Route path="/react-stylux/documentation/carousel-4" component={Carousel4} />
        <Route path="/react-stylux/documentation/carousel-5" component={Carousel5} />

        <Route path="/react-stylux/documentation/toggler-1" component={Toggler1} />
        <Route path="/react-stylux/documentation/toggler-2" component={Toggler2} />
        <Route path="/react-stylux/documentation/toggler-3" component={Toggler3} />
        <Route path="/react-stylux/documentation/toggler-4" component={Toggler4} />
        <Route path="/react-stylux/documentation/toggler-modal-1" component={Modal1} />
        <Route path="/react-stylux/documentation/toggler-modal-2" component={Modal2} />
        <Route path="/react-stylux/documentation/toggler-modal-3" component={Modal3} />
        <Route path="/react-stylux/documentation/toggler-popup-1" component={Popup1} />
        <Route path="/react-stylux/documentation/toggler-popup-2" component={Popup2} />

        <Route path="/react-stylux/documentation/form-1" component={Form1} />

        <Route path="/react-stylux/documentation/other-a" component={A} />
    </Switch>
)