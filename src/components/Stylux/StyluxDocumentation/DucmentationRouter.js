import React from "react";
import { Switch, Route } from "react-router-dom"

import HowTo from "./Documentation/HowTo/HowTo"
import Introduction from "./Documentation/HowTo/Introduction"
import GettingStarted from "./Documentation/HowTo/GettingStarted"
import WhatsIncluded from "./Documentation/HowTo/WhatsIncluded"
import StepbyStep from "./Documentation/HowTo/StepByStep";
import AnimationNotes from "./Documentation/HowTo/AnimationNotes";
import ResponsiveNotes from "./Documentation/HowTo/ResponsiveNotes";

import Wrapper from "./Documentation/Layout/WrappersDocumentation";
import Holder from "./Documentation/Layout/HoldersDocumentation";
import HR from "./Documentation/Layout/HRDocumentation";

import H from "./Documentation/Text/Headers/H";

import P from "./Documentation/Text/Paragraphs/P";

import PLQ from "./Documentation/Text/PullQuotes/PLQ";

import Button from "./Documentation/Buttons/Button";

import Image from "./Documentation/Images/Image";
import Figure from "./Documentation/Images/Figure";

import Card from "./Documentation/Cards/Card";

import Carousel from "./Documentation/Carousel/Carousel";

import Toggler from "./Documentation/Togglers/Toggler";
import Modal from "./Documentation/Togglers/Modals/Modal";
import Popup from "./Documentation/Togglers/Popups/Popup";

import List from "./Documentation/Lists/List";

import DropDownnav from "./Documentation/Navigation/DropDownnav";
import Navbar from "./Documentation/Navigation/Navbar";
import SubNavbar from "./Documentation/Navigation/SubNavbar";

import Table from "./Documentation/Table/Table"

import Form from "./Documentation/Forms/Form";

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

        <Route path="/react-stylux/documentation/layout-wrapper" component={Wrapper} />
        <Route path="/react-stylux/documentation/layout-holder" component={Holder} />
        <Route path="/react-stylux/documentation/layout-hr" component={HR} />

        <Route path="/react-stylux/documentation/h" component={H} />

        <Route path="/react-stylux/documentation/p" component={P} />

        <Route path="/react-stylux/documentation/plq" component={PLQ} />

        <Route path="/react-stylux/documentation/button" component={Button} />

        <Route path="/react-stylux/documentation/image" component={Image} />
        <Route path="/react-stylux/documentation/figure" component={Figure} />

        <Route path="/react-stylux/documentation/card" component={Card} />

        <Route path="/react-stylux/documentation/carousel" component={Carousel} />

        <Route path="/react-stylux/documentation/toggler" component={Toggler} />
        <Route path="/react-stylux/documentation/toggler-modal" component={Modal} />
        <Route path="/react-stylux/documentation/toggler-popup" component={Popup} />

        <Route path="/react-stylux/documentation/list" component={List} />

        <Route path="/react-stylux/documentation/dropdownnav" component={DropDownnav} />
        <Route path="/react-stylux/documentation/navbar" component={Navbar} />
        <Route path="/react-stylux/documentation/subnavbar" component={SubNavbar} />

        <Route path="/react-stylux/documentation/table" component={Table} />

        <Route path="/react-stylux/documentation/form" component={Form} />

        <Route path="/react-stylux/documentation/other-a" component={A} />
    </Switch>
)