import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import main pages that are not store or blog
import LandingPage from "./components/Home/LandingPage";


//project imports
import Projects from "./components/Projects/Projects";
import WebProjects from "./components/Projects/WebProjectsMain";
import PrintProjects from "./components/Projects/PrintProjectsMain";

import Aristos from "./components/Projects/WebProjectsInDepth/Aristos";
import AtaraxyClothing from "./components/Projects/WebProjectsInDepth/AtaraxyClothing";
import AtaraxyLife from "./components/Projects/WebProjectsInDepth/AtaraxyLife";
import BreakpoinPublishing from "./components/Projects/WebProjectsInDepth/BreakpointPublishing";
import FoxChrisRealThe from "./components/Projects/WebProjectsInDepth/FoxChrisRealThe";
import reactStylux from "./components/Projects/WebProjectsInDepth/react-stylux";

import nightmarePoster from "./components/Projects/PrintProjectsInDepth/nightmaresPoster";

//stylux imports
import StyluxHome from "./components/Stylux/StyluxHome/StyluxHome";
import StyluxDocumentation from "./components/Stylux/StyluxDocumentation/StyluxDocumentation";
import StyluxChangelog from "./components/Stylux/StyluxChangelog/StyluxChangelog";

import StyluxLayoutView from "./components/Stylux/StyluxDisplays/StyluxLayoutView";
import StyluxBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocksViews";
import StyluxBinBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/BinBlockView";
import StyluxButtonBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/ButtonBlocksView";
import StyluxCardBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/CardBlocksView";
import StyluxCarouselBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/CarouselsTickerBlocksView";
import StyluxFormBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/FormBlocksView";
import StyluxHeadingBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/HeadingBlocksView";
import StyluxImageBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/ImageBlocksView";
import StyluxListBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/ListBlockView";
import StyluxNavbarBlocksview from "./components/Stylux/StyluxDisplays/StyluxBlocks/NavBarBlocksView";
import StyluxParagraphBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/ParagraphBlocksView";
import StyluxTableBlockView from "./components/Stylux/StyluxDisplays/StyluxBlocks/TableBlockViews";

//start router
export default (
    <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/web" component={WebProjects} />
        <Route exact path="/projects/print" component={PrintProjects} />

        <Route path="/projects/web/aristos" component={Aristos} />
        <Route path="/projects/web/ataraxy-clothing" component={AtaraxyClothing} />
        <Route path="/projects/web/ataraxy-life" component={AtaraxyLife} />
        <Route path="/projects/web/breakpoint-publishing" component={BreakpoinPublishing} />
        <Route path="/projects/web/foxchrisrealthe" component={FoxChrisRealThe} />
        <Route path="/projects/web/react-stylux" component={reactStylux} />

        <Route path="/projects/print/nightmare-poster" component={nightmarePoster} />


        <Route exact path="/react-stylux" component={StyluxHome} />
        <Route path="/react-stylux/documentation" component={StyluxDocumentation} />
        <Route path="/react-stylux/changelog" component={StyluxChangelog} />

        <Route path="/react-stylux/layout" component={StyluxLayoutView} />
        <Route exact path="/react-stylux/blocks" component={StyluxBlocksView} />
        <Route path="/react-stylux/blocks/togglersviews" component={StyluxBinBlocksView}></Route>
        <Route path="/react-stylux/blocks/buttonviews" component={StyluxButtonBlocksView}></Route>
        <Route path="/react-stylux/blocks/cardviews" component={StyluxCardBlocksView}></Route>
        <Route path="/react-stylux/blocks/carouselviews" component={StyluxCarouselBlocksView}></Route>
        <Route path="/react-stylux/blocks/formviews" component={StyluxFormBlocksView}></Route>
        <Route path="/react-stylux/blocks/headingviews" component={StyluxHeadingBlocksView}></Route>
        <Route path="/react-stylux/blocks/imageviews" component={StyluxImageBlocksView}></Route>
        <Route path="/react-stylux/blocks/listviews" component={StyluxListBlocksView}></Route>
        <Route path="/react-stylux/blocks/navbarviews" component={StyluxNavbarBlocksview}></Route>
        <Route path="/react-stylux/blocks/paragraphviews" component={StyluxParagraphBlocksView}></Route>
        <Route path="/react-stylux/blocks/tableviews" component={StyluxTableBlockView}></Route>
    </Switch>
)