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

export default (
    <Switch>
        <Route exact path="/react-stylux/documentation" component={HowTo} />
        <Route path="/react-stylux/documentation/introduction" component={Introduction} />
        <Route path="/react-stylux/documentation/getting-started" component={GettingStarted} />
        <Route path="/react-stylux/documentation/whats-included" component={WhatsIncluded} />
        <Route path="/react-stylux/documentation/step-by-step" component={StepbyStep} />
        <Route path="/react-stylux/documentation/animation-notes" component={AnimationNotes} />
        <Route path="/react-stylux/documentation/responsive-notes" component={ResponsiveNotes} />

        <Route path="/react-stylux/documentation/layout-container"component={Container} />
        <Route path="/react-stylux/documentation/layout-holder"component={Holder}/>
        <Route path="/react-stylux/documentation/layout-hr"component={HR} />
    </Switch>
)